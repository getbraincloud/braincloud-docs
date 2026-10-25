# WebHooks

<%= data.branding.productName %> also allows S2S-style Cloud Code scripts to be called via WebHooks.

WebHooks are defined and linked to Cloud Code scripts from the **Design | Cloud Code | WebHooks** page of the portal.

WebHook scripts receive a `data` object with the following elements:

Data Element | Description
-------------- | -----------
headers | An object representing the HTTP headers in the WebHook call
stringBody | The body of the WebHook call if it is a non-json string
jsonBody | An object representing the body of the WebHook call
pathBalance | The balance of the path in the WebHook call, exclusive of the required url as specified in the portal config
parameters | An object representing the parameters passed in the WebHook call
queryString | An string representation of the parameter component of the request URL
requestUrl | The full request url

The script return object can be populated with optional fields that can modify the results sent to the caller:

Data Element | Description
-------------- | -----------
jsonResponse | An object which the WebHook handler will stringify and return as a body. Setting this field will default the response content type to "application/json".
stringResponse | A string which will be returned as a body if a non-json body is required
statusOverride | A numeric value to override the normal 200 OK return of the WebHook handler
contentType | A string which will override the content-type of the response
responseHeaders | A json map that overrides the http response headers.

:::tip
When the WebHook has been configured to require a secret <strong>header</strong>, a header named "x-bc-secret" must be included in the HTTP call from the caller site.
:::

> **WebHookPassThru** - Handy script to log any webhook requests sent to it. Useful for confirming the format of the parameters being sent from an external system. [*Click on* ***Cloud Code*** *(above) to view.*]

```cfscript
// This script logs and returns whatever is sent to it
// Useful for initially testing what is being sent to your webhook

// Some services (like Facebook!) send parameters with periods in them.
// MongoDB doesn't like those - so we need to substitute "_" for the periods
// before logging them to the global entity.
function safeMap(aMap)
{
    var newMap = {};
    var newKey = "";

    for (var key in aMap) {
        newKey = key.replace(/\./g,"_");
        newMap[newKey] = aMap[key];
    }

    return newMap;

}

// Main script...

var response = {};

// Profile id of the "system user" account - can be any user
var SYSTEM_USER = "df329257-56e3-46fe-b6fb-9baba75acc22";

// A pre-allocated Global Entity to use for logging the request
// (Create manually via the API Explorer - give it a type
// of "WEBHOOK_REQUEST" so that you can find it easily)
var WEBHOOK_REQUEST = "8c1b36d3-3cf8-4977-a0a9-edee0afa83db";

// Clone the request parameters
var webHookParms = JSON.parse(JSON.stringify(data));

// Make the arguments and parameters mongoDB-safe
webHookParms.headers = safeMap(data.headers);
webHookParms.parameters = safeMap(data.parameters);

// Get a user session
var userSession = bridge.getSessionForProfile(SYSTEM_USER);

// Use it to access the Client API
var globalEntityService = bridge.getGlobalEntityServiceProxy(userSession);

// Log the request to the global entity
var updateResult = globalEntityService.updateEntity(
    WEBHOOK_REQUEST,   // We've pre-allocated the entity
    -1,                // Skip the version check
    webHookParms);

// Construct a response
response.jsonResponse = {};

if (updateResult.status != 200)
{
    response.jsonResponse.message = "Error writing request to global entity (" + WEBHOOK_REQUEST + ")";
    response.jsonResponse.updateResult = updateResult;
    response.jsonResponse.webHookParms = data;
}
else
{
    response.jsonResponse.message = "Webhook received and recorded to global entity (" + WEBHOOK_REQUEST + ")";
    response.jsonResponse.webHookParms = data;
}

response;
```

> **WebHookPassThru** - Test parameters for the script editor

```json
{
    "headers": {
        "header1": "hello"
    },
    "stringBody": "value2",
    "jsonBody": {
        "aKey": "aValue"
    },
    "pathBalance": "aPath",
    "parameters": {
        "parm1": 1
    },
    "requestUrl": "url"
}
```
