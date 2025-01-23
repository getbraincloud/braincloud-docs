---
title: "External Authentication"
date: "2015-05-06"
---

brainCloud provides support for authenticating users via an external directory. This is done by implementing a custom script that acts as the integration _glue_ between brainCloud and the external directory.

#### Creating the Script

The first thing to do is write the script. This is done via the Cloud Code/Edit Scripts tab of the portal. The script must not be client callable. The parameter names for script data input are "externalId" and "authenticationToken". These parameters will be passed to the script by the client API authentication method. The script must return a boolean true or false to indicate success or failure.

Here's an example:

```js
"use strict";

var friendProxy = bridge.getFriendServiceProxy();

var EXTERNALAUTHTYPE = "ssoSaml";
var PREREGISTRATION_SUPPORT = true;

function findPreregisteredUserByEmail(email) {
    var foundPlayerId = null;
    var emailLookupResult = friendProxy.getProfileInfoForCredential(
        email,
        "Email"
    );

    // Check to see if a user with this email has been precreated
    // Note this searches by email authentication type, not contact email...
    if (emailLookupResult.status == 200) {
        //bridge.logInfoJson("getProfileInfoForCredential (" + email + ")", emailLookupResult.data );

        // Note that they MUST NOT have an External identity
        // We would try to exclude only EXTERNALAUTHTYPE identities, but that isn't directly supported...
        var emailSession = bridge.getSessionForProfile(
            emailLookupResult.data.playerId
        );
        var identitiesProxy = bridge.getIdentityServiceProxy(emailSession);
        var identitiesLookupResult = identitiesProxy.getIdentities();
        //bridge.logInfoJson("getIdentities (" + email + ")", identitiesLookupResult.data );

        if (identitiesLookupResult.status == 200) {
            foundPlayerId = emailLookupResult.data.playerId;
        }
    } else {
        //bridge.logInfo("Could not find user with " + email + " email identity", null );
    }

    return foundPlayerId;
}

/** @module Environment_Scripts */
/**
 * Used for authenticating with SAML as an external authentication.
 * @class samlAuth
 * @classdesc Used for authenticating with SAML as an external authentication.
 * @author Steve Jones
 * @copyright bitHeads 2025
 * @param {String} externalId The ID of the user - "test",
 * @param {String} authenticationToken The authentication Token - "eyJraWQiOiJTZkVFZE5yNUNuVkQxWVJ2aHEtWUxYRFBwRTdONENBNmxkbXVVMnU4ckNvIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUxaTlpdjZsbkZUNHhPWjM1NyIsIm5hbWUiOiJKb25hdGhhbiBNY0NhZmZyZXkiLCJsb2NhbGUiOiJlbi1VUyIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9kZXYtNDY5OTIwLm9rdGEuY29tIiwiYXVkIjoiMG9hMWsyMXUwMHFCYlR3YXozNTciLCJpYXQiOjE1NzE5MzY5MjEsImV4cCI6MTU3MTk0MDUyMSwianRpIjoiSUQucjl4cWwxTnRqMDlUUExMUVJydXRlTHFGRFd0bVZGcUVGTEZmbDFMTzVfZyIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBvMWNhejRuMkZTMDEwNjUzNTciLCJub25jZSI6IjUyNmMyYjc0OGFlMDQ4ZDU4ZjBiNjZkYzhmMDI2YjY5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiam9uYXRoYW5tQGJpdGhlYWRzLmNvbSIsImdpdmVuX25hbWUiOiJKb25hdGhhbiIsImZhbWlseV9uYW1lIjoiTWNDYWZmcmV5Iiwiem9uZWluZm8iOiJBbWVyaWNhL0xvc19BbmdlbGVzIiwidXBkYXRlZF9hdCI6MTU3MDcyNTc3OCwiYXV0aF90aW1lIjoxNTcxOTM0MzA5fQ.R2QR3rzvVMjvJXAzrMPNHce3B-VeW_z1x0-TEOy2yO6BwaiQWOatAyC9P-_fdDtwT0PwfXrZbqaaOUHT37EuOPpHBHHn3WR4CuODG2OsAuInTWRdFKj0gNldcsjSalfcmbGH2JZ3CWwVj7vN8i0gKZouC08IJwUznc3UeFDLWa5Xr09BDWsmpw9DRuPa4sQreepK3dOyw6JCS8Aa9cHb9_CvJDOIYVymJttL8OvhfggYIQsIz6_28cNOC4UEUqhtgQR-bHA3QWdU8G5X74Plo4AcoxKFyaEMWDXpq9lY2IsgZAg1DBC0_mcQeIMKtOSYxKgVe9UDexCPnZkmiUs0KA&state=9b031c155008448eacf645a8b7ddf3f2"
 * @return {Object} {}
 * @todo Fill in return values
 */
function main() {
    //bridge.logInfoJson("Script inputs", data);

    var response = {};
    // Initially set to false
    response.valid = false;

    // load SAML service proxy
    var proxy = bridge.getSamlServiceProxy();

    // retrieve response attributes, based on the passed in auth token
    var attributesResp = proxy.sysGetResponseAttributes(
        data.authenticationToken
    );

    // Its successful
    if (attributesResp.status == 200) {
        var attributes = attributesResp.data.responseAttributes;

        // get email list, these attributes need to be made available by the SAML provider.
        // changes can be made, but for this example we will assume email is passed in and that we are looking for those
        // email associated profiles to merge / match against
        var emailList =
            attributes.Email !== undefined && attributes.Email !== null
                ? attributes.Email
                : attributes.email;
        var employeeId = !(
            attributes.EmployeeID === undefined ||
            attributes.EmployeeID === null
        )
            ? attributes.EmployeeID[0]
            : null; // match on this and not the email
        // email is first item in list
        var email = emailList[0];

        // let's verify that the email, is also associated with what was passed in
        // there was no additional hack intercepting this call
        if (email == data.externalId) {
            var saml = {};
            saml.token = data.authenticationToken;
            saml.email = email;

            //
            var authPayload = getAuthPayload();

            // we accept this call, and attach the additional information
            response.valid = true;
            response.authPayload = authPayload;

            // Use the employeeId (instead of email) as the externalId.
            // Preserves the account even if the user's email changes
            response.externalIdOverride = employeeId;

            // an external ID via email, may be associated with a previous user in the system
            // lets look for them
            if (PREREGISTRATION_SUPPORT) {
                var preRegistered = findPreregisteredUserByEmail(saml.email);

                // if there is a preregistered user, tell them to use this
                if (preRegistered != null) {
                    // Tell the system to use, NOT merge to this user profile
                    response.useProfileId = preRegistered;
                }
            }
        } else {
            // attach an extra customizable json to match client needs
            response.extraErrorJson = {
                errorType: "AC_FAIL",
                techMessage:
                    "Customer's email does not match the email associated.",
                userMessage:
                    "Please try again, or contact your System Administrator for more assistance.",
            };
        }
        return response;
    }

    return response;
}

function getAuthPayload() {
    // load service proxy
    var proxy = bridge.getSamlServiceProxy();

    // retrieve response attributes

    var logoutResp = proxy.sysGetLogoutRequestUrl(data.authenticationToken);
    if (logoutResp.status == 200) {
        var logoutRequestUrl = logoutResp.data.logoutRequestUrl;

        // additional information if the SAML providor needs the logout url
        var authPayload = {};
        authPayload.logoutRequestUrl = logoutRequestUrl;
        return authPayload;
    }

    return null;
}

main();
```

#### Portal Configuration

The script to run for a particular external authentication type must be configured via Authentication/External tab in the portal. You must use this area to associate an external authentication name with a script.  The previously created script name should appear in the drop-down on this page when you add an entry.

You must also configure the url you want to access in the script via the Cloud Code/Web Services tab in the portal.

#### Client Call

Now you can make an authentication call from a client app or via the Cloud Code/API Explorer tab in the portal. You need to set the `authenticationType` parameter to "External" and the `externalAuthName` parameter to the value you used to identify the script in the Authentication/External tab in the portal.

#### Advanced

Beginning with Release 4.2, External Authentication scripts have been enhanced to support returning of a JSON object with additional options:

-   `valid`: boolean - indicates whether authentication was successful
-   `externalIdOverride`: "string" (optional) - tells the system to store the override string provided instead of the contents of the `externalId` field passed into the Authenticate call. This is useful for cases where the externalId passed in can change (like an email used for logging in) - so that the system stores a non-changeable id (like an account number)
-   `useProfileId`: "string" (optional) - tells the system to use the specified `profileId` to look up the user's account. If specified, the external identity will not be persisted against the user's account
-   `authPayload`: JSON map - allows the auth script to return additional information to the client for _successful_ logins
-   `extraErrorJson`: JSON map - allows the auth script to return additional error context to the client for _unsuccessful_ logins
