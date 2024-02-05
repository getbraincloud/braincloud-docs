---
title: "External Authentication"
date: "2015-05-06"
---

brainCloud provides support for authenticating users via an external directory. This is done by implementing a custom script that acts as the integration _glue_ between brainCloud and the external directory.

#### Creating the Script

The first thing to do is write the script. This is done via the Cloud Code/Edit Scripts tab of the portal. The script must not be client callable. The parameter names for script data input are "externalId" and "authenticationToken". These parameters will be passed to the script by the client API authentication method. The script must return a boolean true or false to indicate success or failure.

Here's an example:
```js
// Grab the input parameters

apiToken = data.authenticationToken;
externalId = data.externalId;

// Create a proxy to the service
httpProxy = bridge.getHttpClientServiceProxy();

// Create an empty query object
query = {};
// Setup the header
headers = {};
headers.ExternAPIToken = apiToken;

// make the web call
result = httpProxy.getResponseJson("externServiceName","v1/Users/Me", query, headers);

// Evaluate the result and return
var retval = false;
var bcstatus = result.status;
if (bcstatus === 200)
{
    bcdata = result.data;
    restStatus = bcdata.status;
    if (restStatus == 200)
    {
        jsondata = bcdata.json;
        username = jsondata.UserName;
        retval = (username === externalId);
    }
}
retval;
```
#### Portal Configuration

The script to run for a particular external authentication type must be configured via Authentication/External tab in the portal. You must use this area to associate an external authentication name with a script.  The previously created script name should appear in the drop-down on this page when you add an entry.

You must also configure the url you want to access in the script via the Cloud Code/Web Services tab in the portal.

#### Client Call

Now you can make an authentication call from a client app or via the Cloud Code/API Explorer tab in the portal. You need to set the `authenticationType` parameter to "External" and the `externalAuthName` parameter to the value you used to identify the script in the Authentication/External tab in the portal.

#### Advanced

Beginning with Release 4.2, External Authentication scripts have been enhanced to support returning of a JSON object with additional options:

- `valid`: boolean - indicates whether authentication was successful
- `externalIdOverride`: "string" (optional) - tells the system to store the override string provided instead of the contents of the `externalId` field passed into the Authenticate call. This is useful for cases where the externalId passed in can change (like an email used for logging in) - so that the system stores a non-changeable id (like an account number)
- `useProfileId`: "string" (optional) - tells the system to use the specified `profileId` to look up the user's account. If specified, the external identity will not be persisted against the user's account
- `authPayload`: JSON map - allows the auth script to return additional information to the client for _successful_ logins
- `extraErrorJson`: JSON map - allows the auth script to return additional error context to the client for _unsuccessful_ logins
