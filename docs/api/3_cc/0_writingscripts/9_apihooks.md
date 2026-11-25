# API Hooks

<%= data.branding.productName %> allows you to modify the default behaviour of most API methods by configuring a Cloud Code script to run immediately before (*pre*) or after (*post*) the built-in API code.

<%= data.branding.productName %> commons refers to these as *Pre-Hooks* and *Post-Hooks*.

<%= data.branding.productName %> also allows you to specify a "Post-Fail-Hook" that gets called in the event of an API processing exception. These are very similar to "Post-Hooks" except that is passes
the "errorData" to the script rather than "message".


## Configuring API Hooks

API Hooks are configured in the Design Portal, from the **App `>` Design `>` Cloud Code `>` API Hooks** screen.

When configuring an API Hook you need to specify:

* The *Service* and *Operation* to hook into
* The *Script* to invoke
* Whether it is a *Pre* (before), *Post* (after) or *PostFail* (after failure) scripts
* Any additional *Parameters* that you'd like to send into the script at runtime (allows you to potentially configure the same script for use in different situations)

## Pre-Hook Scripts

Pre-hook scripts are called *prior* to executing the specified API method. Pre-Hook scripts can:

* Do some pre-processing prior to the API call
* Modify the parameters being passed to the API
* Abort the call if required

The `data` object sent to a pre-hook script contains the following standard elements:

Data Element | Description
-------------- | -----------
service | the name of the <%= data.branding.productName %> service
operation | the name of the <%= data.branding.productName %> operation being invokes (related to, but not necessarily the same as, the method name)
message | the arguments sent to the API call that is being modified
parms | the static parameters defined as part of the hook configuration

Pre-hook scripts must return results in a specific format so that <%= data.branding.productName %> can decide how/if to modify the behaviour of the API call.

The JSON map returned by the script may contain the following members:

Data Element | Description
-------------- | -----------
status | Return 200 to continue processing, anything else to abort and return that status to the client
reasonCode | Additional error info (numeric) returned if status != 200
errorMessage | Textual error info returned if status != 200
messageOverride | To override the parameters sent to the API call, return a messageOverride element with the replacement set of parameters

> **CreateContactPreHook** - intercepts the creation of **contacts**

```cfscript

// Declare the result object
var result = {};
result.status = 200;

// Check to see if we're creating a contact
if (data.message.entityType == "contact")
{
    // Clone the message passed in
    result.messageOverride = JSON.parse(JSON.stringify(data.message));

    // Modify the last name of the contact to be created
    result.messageOverride.data.lastName = data.message.data.lastName + data.parms.suffix;

}

// Return the result;
result;
```


> **CreateContactPreHook** - Test parameters for script editor

```json
{
    "service": "entity",
    "operation": "CREATE",
    "message": {
        "entityType": "contact",
        "acl": {
            "other": 0
        },
        "data": {
            "firstName": "Bruce",
            "lastName": "Wayne"
        }
    },
    "parms": {
        "suffix": "o"
    }
}
```


> **CreateContactPreHook** - parameters for API Hook Configuration

```json
{
  "suffix": "o"
}
```

## Post-Hook Scripts



Post-hook scripts are called after executing a particular API call. Post-hook scripts can do some post-processing of the API results, optionally modifying the data that is returned to the client.

The `data` object sent to a post-hook script contains the following standard elements:

Data Element | Description
-------------- | -----------
service | the name of the <%= data.branding.productName %> service
operation | the name of the <%= data.branding.productName %> operation being invokes (related to, but not necessarily the same as, the method name)
callingMessage | the original parameters sent into the API call
message | the data results from the api call
parms | the static parameters defined as part of the hook configuration

The script can return `null` to have no effect on the original return value. If not `null`, the returned object may include the following parameters:

Data Element | Description
-------------- | -----------
status | Return 200 for ok, other for not
reasonCode | Additional error info (numeric) returned if status != 200
errorMessage | Textual error info returned if status != 200
data | Replacement results of the call


> **ReadContactPostHook** - adds a fullName field when returning contacts

```cfscript
var result = {};

// If the entity being returned is a contact
if (data.message.entityType == "contact") {

    // Clone the data being returned
    result.data = JSON.parse(JSON.stringify(data.message));

    // Add a fullName field
    result.data.data.fullName = result.data.data.firstName + " " + result.data.data.lastName;

    // Set the status to success
    result.status = 200;

}

result;
```

> ReadContactPostHook - Example Test Parameters for script editor

```json
{
    "service": "entity",
    "operation": "READ",
    "callingMessage": {
        "service": "entity",
        "operation": "READ",
        "data": {
            "entityId": "a186da71-18b5-410d-9afa-779d6610bddd"
        }
    },
    "message": {
        "entityId": "a186da71-18b5-410d-9afa-779d6610bddd",
        "entityType": "contact",
        "version": 1,
        "data": {
            "lastName": "Wayneo",
            "firstName": "Bruce"
        },
        "acl": {
            "other": 0
        },
        "createdAt": 1467259136127,
        "updatedAt": 1467259136127
    },
    "parms": {}
}
```



## Post-Fail-Hook Scripts


Post-fail-hook scripts are called after executing a particular API call and encountering a processing exception.
Post-fail-hook scripts can do some post-processing of the API failure, optionally overriding the failure in the return to the client.

The `data` object sent to a post-fail-hook script contains the following standard elements:

Data Element | Description
-------------- | -----------
service | the name of the <%= data.branding.productName %> service
operation | the name of the <%= data.branding.productName %> operation being invokes (related to, but not necessarily the same as, the method name)
callingMessage | the original parameters sent into the API call
errorData | the reasonCode and errorMessage of the processing exception
parms | the static parameters defined as part of the hook configuration

The script can return `null` or any empty object to proceeed with the failure as is. If not `null`, the returned object should include the following parameters:

Data Element | Description
-------------- | -----------
status | Return 200 for error override to success, other for replacement error
reasonCode | Replacement error info (numeric) returned if status != 200
errorMessage | Replacement error info returned if status != 200
data | Replacement results of the call if returning 200

> **UpdateCreatePostFailHook** - creates a record if the update fails due non-existing record

```cfscript
var result = {};

// If the error is missing record
if (data.errorData.reasonCode == 40332) {

    // create the record
    var entityProxy = bridge.getEntityServiceProxy();
    var createResult = entityProxy.create(data.callingMessage.entityType, data.callingMessage.data, data.callingMessage.acl);

    // provide the result of the create
    result['status'] = createResult.status;
    result['data'] = createResult.data;

}

result;
```

## Special Hooks

A few hook entries aren't tied to a single API operation. They're configured on the same **API Hooks** screen, but they're invoked at different points and receive different data than standard hooks.

### Dispatcher Hooks

The **Dispatcher** and **S2SDispatcher** hooks run a Pre-Hook script before *every* API call that is dispatched, which makes them useful for app-wide access control (for example, see the [RestrictClientCalls script](/learn/cloud-code-central/handy-cloud-code-scripts/restrictclientcalls-script)).

Service | Operation | Runs before
------- | --------- | -----------
Dispatcher (`dispatcher`) | ProcessMessage (`PROCESS_MESSAGE`) | Every client API call made with an authenticated session. Calls made before authentication (such as the authenticate calls themselves) don't trigger it.
S2SDispatcher (`s2sdispatcher`) | ProcessMessage (`PROCESS_MESSAGE`) | Every S2S API call made with an S2S session.

Only *Pre* scripts are supported. The dispatcher hook runs before any operation-specific Pre-Hook configured for the call.

The `data` object sent to a dispatcher hook script contains:

Data Element | Description
-------------- | -----------
service | the name of the <%= data.branding.productName %> service being called
operation | the name of the <%= data.branding.productName %> operation being called
message | the arguments sent to the API call
parms | the static parameters defined as part of the hook configuration
clientRequest | (Dispatcher only) information about the client request, when available

Unlike standard Pre-Hooks, a dispatcher hook script can't modify the message. It returns a boolean:

Return value | Result
------------ | ------
`true` (or nothing) | The API call proceeds normally
`false` | The API call is rejected with reason code `40639` (`API_CALL_REJECTED`)

If the script throws an error or returns a non-boolean value, the API call fails with reason code `40357` (`API_HOOK_SCRIPT_ERROR`).

> **BlockGlobalEntityWrites** - rejects global entity writes from clients

```cfscript
var blocked = {
    "CREATE": true,
    "UPDATE": true,
    "DELETE": true
};

!(data.service == "globalEntity" && blocked[data.operation]);
```

### Email Authentication Hooks

The **EmailAuth** hooks run when a user completes one of the hosted email self-service pages, which <%= data.branding.productName %> serves from the links in verification and password reset emails.

Service | Operation | Triggered when
------- | --------- | --------------
EmailAuth (`emailAuth`) | ConfirmEmail (`CONFIRM_EMAIL`) | The user confirms their email address from the verification link
EmailAuth (`emailAuth`) | ResetPassword (`RESET_PASSWORD`) | The user resets their password from the password reset link

Only *Post* and *PostFail* scripts are supported:

* **Post** runs after the email is confirmed or the password is reset. For ResetPassword, it runs only for email identities.
* **PostFail** runs when the request is rejected, for example because the link is invalid or has expired.

These hooks don't run as part of an API call, so their `data` object differs from that of standard Post-Hooks:

Data Element | Description
-------------- | -----------
appId | the app id
appName | the app name
profileId | the profile id of the user (may be `null` in a PostFail script if no matching user was found)
emailAddress | the user's email address
parms | the static parameters defined as part of the hook configuration

The script runs with a session for the user, so it can call other <%= data.branding.productName %> APIs on their behalf. Whatever the script returns is passed to the self-service page as `hookResponse`. It doesn't change the outcome of the request.

> **ConfirmEmailPostHook** - awards currency once a user verifies their email

```cfscript
var currencyProxy = bridge.getVirtualCurrencyServiceProxy();
var result = currencyProxy.awardCurrency("gems", data.parms.reward);

result;
```

> **ConfirmEmailPostHook** - Test parameters for script editor

```json
{
    "appId": "12345",
    "appName": "MyApp",
    "profileId": "a186da71-18b5-410d-9afa-779d6610bddd",
    "emailAddress": "bruce@wayneent.com",
    "parms": {
        "reward": 10
    }
}
```
