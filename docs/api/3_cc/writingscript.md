# Writing Scripts
## Overview



<%= data.branding.productName %> allows developers to write custom code (in JavaScript) that resides
on <%= data.branding.productName %>'s servers. These scripts can be triggered by:

* Apps - via the [Client API](/api/cc/writingscript#invoking-via-client-api-invokeclientapi)
* Other Scripts - via [Cloud Code](/api/cc/writingscript#calling-other-scripts-otherscripts)
* Special Features - like [Matchmaking](/api/cc/writingscript#matchmaking-filters)
* Private Servers - via the [S2S API](/api/cc/writingscript#s2s-scripts)
* Public Services - via [WebHooks](/api/cc/writingscript#webhooks)
* Other API calls - via the [API Hook](/api/cc/writingscript#api-hooks) mechanism
* Time-based - via <%= data.branding.productName %>'s [Scheduling Service](/api/cc/writingscript#scheduled-scripts)

Cloud Code scripts can be created, edited, and tested from the [Edit Scripts page](https://portal.braincloudservers.com/admin/dashboard#/development/serverscripts-edit)
of the <%= data.branding.productName %> portal.

:::tip
Pro-tip: Be sure to click on the Cloud Code tab (top-right) to view the examples in this section.
:::

:::info
After reviewing these sections, be sure to check out our [<b>bridge</b>](/api/cc/bridge) for step-by-step instructions on how to create your own scripts!
:::

## Runtime Architecture

<%= data.branding.productName %>'s Cloud Code service is implemented using an embedded [Mozilla Rhino](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino) Javascript engine.

Communications with the <%= data.branding.productName %> APIs is facilitated by a [<b>bridge</b>](/api/cc/bridge) object that is available from all scripts. The `bridge` allows you to retrieve references to *service proxies* that allow you to make API calls into <%= data.branding.productName %>. These *service proxies* are organized in alignment with <%= data.branding.productName %>'s API Modules.

The documentation and signatures of the available Cloud Code Callable APIs are found in this API Reference under the **Cloud Code** language tab.

## Basic Structure

> CalculateArea - A simple cloud code script

```cfscript
// First get our parameters
var width = data.width;
var height = data.height;

// Calculate the area
var result = width * height;

// Return the result
result;
```

The simplest scripts are composed of the following elements:

* Parameters - arguments passed to the scripts
* Inline code
* Returned results


### Parameters (Arguments)

For most types of scripts, arguments are passed to a <%= data.branding.productName %> script via a `data` json object accessible from within the script.

*For example:*
```
var width = data.width;
var height = data.height;
```

> CalculateArea - example parameters

```json
{
    "width": 5,
    "height": 6
}
```

### Inline Code

Since it is inherently a *script*, your Cloud Code method doesn't need to have much structure.

Simply enter the statements to execute, one after another. No need for functions (unless you want them), a main() routine, etc.

### Results

> CalculateArea - expected results

```json
{
    "status": 200,
    "data": {
        "response": 30,
        "success": true
    }
}
```

Speaking of *"not much structure"*, Cloud Code scripts return results by simply "stating" the object to be returned by the Rhino engine.

So while you are undoubtably used to `return`-ing values, and you will in Javascript functions *within* the script, for the final exit of your script, you simply state the resulting object.

Note how the `CalculateArea` script is returning its result.

### Try it!

As a test, try entering and running the `CalculateArea` script:

* Log into the *Design Portal*
* Create or select an *App* to test with
* Go to **Design | Cloud Code | Scripts**, and click the **[Create Folder]** option from the **[Action]** dropdown menu to create a folder (skip this step if you want to put new script in root or an existing folder)
* Click the folder you just created to get into it (or stay in root folder), then click the **[Create Script]** option from the **[Action]** dropdown menu to create a script
* Give the script a name (i.e. "CalculateArea")
* Set the test parameters similar to those in the example parameters shown
* Go to the **Editor** page, and copy and paste the script code
* Click **[Save]**, then go to the **Run** page
* Click **[Quick Authenticate]** to authenticate a user, and then **[Run]** to run your script

*Congratulations! You've written your first Cloud Code Script!*

:::success
For further detail of creating a script be sure to check out our knowledge base article [<b>bridge</b>](/api/cc/bridge)
:::

## Functions

Functions are as you would expect in Javascript, with the added limitation that they should be defined *before* the inline portion of your script begins.

*[This is because if the functions were below your inline code, the last object in your code would be your last function, and the Rhino engine doesn't know how to evaluate that in terms of returned results.]*

You can see how the `PostScores` script calls the `postScore()` function that is defined at the top.

## Calling APIs

> PostScores - Post to multiple leaderboards

```cfscript
// Note assumes that 3 leaderboards ("board1", "board2" and "board3")
// have already been created. Go to Design | Leaderboards in the
// Design Portal to set up.

function postScore( service, leaderboardId, score )
{
    // Call the API to post the score to the specified leaderboard
    var result = service.postScoreToLeaderboard( leaderboardId, score, null );

    if (result.status == 200){
        return 1;
    } else {
        return 0;
    }
}

// Script begins ===========

var numPosted = 0;
var score1 = data.score1;
var score2 = data.score2;
var score3 = data.score3;

// Retrieve the service proxy
var leaderboardService = bridge.getLeaderboardServiceProxy();

// Post the scores to the 3 leaderboards
numPosted += postScore( leaderboardService, "board1", score1);
numPosted += postScore( leaderboardService, "board2", score2);
numPosted += postScore( leaderboardService, "board3", score3);

// Return the total posted
numPosted;
```

To call a <%= data.branding.productName %> API from within a script, you must retrieve the appropriate service proxy from the `bridge`. You then call the desired method on the proxy.

*The code below retrieves the number of times a user has logged into the app:*
```
var playerStateService = bridge.getPlayerStateServiceProxy();
var numLogins = playerStateService.readUserState().data.loginCount;
```

> PostScores - example parameters

```json
{
    "score1": 100,
    "score2": 200,
    "score3": 300
}
```

The larger example on the right shows how you can easily create a script to perform multiple operations on the server.

:::tip
Pro-tip: Invoking a cloud code script costs 1 API count - but its first 3 API calls are free, and every call after that is just 1/2 API count.
:::

:::success
Since the PostScores script only makes 3 calls (to post to the leaderboard), its total cost is 1.5 API. That's a big savings compared to making these 3 calls from the client directly -- and it performs better too!.
:::

> PostScores - expected results

```json
{
    "status": 200,
    "data": {
        "response": 3,
        "success": true
    }
}
```

## Including Shared Scripts [ccsharedscripts]

<%= data.branding.productName %> supports shared scripts, which means you can include another script 
within a script using the new `bridge.include()` operation:
```
bridge.include(“path/to/scriptname.ccjs”) 
```

> Script 1- *EntityTemplate* script (the data storage script)

```cfscript
var entityTemplate_01 = (function() {
  var goals = 0;
  var assists = 0;
  function addGloas(val) {
    goals += val;
    return goals;
  }
  function addAssists(val) {
    assists += val;
    return assists;
  }
  
  return {
    entityType: function() {
      return "athletes";
    },

    dataJson: function(goals, assists) {
      return {
        "firstName": "Super",
        "surName": "Star",
        "position": "forward",
        "goals": addGloas(goals),
        "assists": addAssists(assists)
      };
    }
  };
})();
...
```

> Script 2- *CreateCustomEntity* script (Executing entity create operation)

```cfscript
"use strict";
bridge.include("path/to/EntityTemplate.ccjs");

function main() {

	var response = {};
    
    //get the entityType from *EntityTemplate* script
	bridge.logDebug("check entityType value", entityTemplate_01.entityType());
    
    //get the dataJson from *EntityTemplate* script
    bridge.logDebugJson("check dataJson value", entityTemplate_01.dataJson(3,6));
    
    var entityType = entityTemplate_01.entityType();
    var dataJson = entityTemplate_01.dataJson(3,6);
    var acl = {
    "other": 1
    };
    var timeToLive = null;
    var isOwned = false;
    var customEntityProxy = bridge.getCustomEntityServiceProxy();

    var postResult = customEntityProxy.createEntity(entityType, dataJson, acl, timeToLive, isOwned);
    if (postResult.status == 200) {
        // Success!
    }
	return response;
}

main();
```

*Note:* 

* A script can import multiple scripts.
* The scripts must all be present within the app… (i.e. no including scripts from other apps)
* *bridge.include()* calls must come first in a script. The only lines allowed to be before *bridge.include()* are blank lines, //comments, and/or the *”use strict”;* directive
* The extension is ignored by the call - but we recommend you append .ccjs anyway ← this may be helpful in the future (we have plans!) 



## Calling Other Scripts [otherscripts]

To invoke a script from within another script, simply call the `bridge.callScript()` method, specifying the name and parameters for the script to call.

```
var parameters = { "arg1": 5, "arg2": 10 };
var scriptResults = bridge.callScript( "anotherScript", parameters );
if (scriptResults.status == 200 && scriptResults.data.success === true) {
    // process scriptResults.data.response appropriately
    // ...
}
```

For more advanced scenarios (i.e. scheduled scripts, etc.), call the appropriate [<code>`Script` service</code>](/api/capi/script/runscript) method, as you would any other API call.


## Script paths

<%= data.branding.productName %> now supports script folders, allowing developers to better organize their cloud code scripts.

:::success
Pro-tip: Script paths provided to the <em>bridge.include()</em> and <em>bridge.callScript()</em> should be relative to the location of the calling script. This is <em>different</em> than the ScriptService APIs - where script paths are <em>relative to the root folder</em>.
:::




## Invoking via Client API [invokeclientapi]

You use the [Script](/api/capi/script) service to invoke a Cloud Code script from a client application.

For more information (and language-specific examples), refer to the [<code>RunScript</code>](/api/capi/script/runscript) and [<code>RunParentScript</code>](/api/capi/script/runparentscript) API methods.


## API Hooks


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
    "service": "Entity",
    "operation": "CreateEntity",
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

<%= data.branding.productName %> allows you to modify the default behaviour of most API methods by configuring a Cloud Code script to run immediately before (*pre*) or after (*post*) the built-in API code.

<%= data.branding.productName %> commons refers to these as *Pre-Hooks* and *Post-Hooks*.

<%= data.branding.productName %> also allows you to specify a "Post-Fail-Hook" that gets called in the event of an API processing exception. These are very similar to "Post-Hooks" except that is passes
the "errorData" to the script rather than "message".


### Configuring API Hooks

API Hooks are configured in the Design Portal, from the **Design | Cloud Code | API Hooks** screen.

When configuring an API Hook you need to specify:

* The *Service* and *Operation* to hook into
* The *Script* to invoke
* Whether it is a *Pre* (before), *Post* (after) or *PostFail* (after failure) scripts
* Any additional *Parameters* that you'd like to send into the script at runtime (allows you to potentially configure the same script for use in different situations)

### Pre-Hook Scripts

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


### Post-Hook Scripts

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


### Post-Fail-Hook Scripts

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



## Matchmaking Filters


> Example matchmaking filter parameters.
> The system identifies a potential match and passes in the candidate info.
> ExtraParms are sent as a parameter to the `FindPlayersUsingFilter()` method.


```json
{
    "matchCandidate": {
        "playerId": "aProfileId",
        "playerName": "John Smith",
        "playerRating": 100,
        "pictureUrl": null,
        "summaryFriendData": {
        }
    },
    "extraParms": {
        "excludedPlayerIds": ["xxx", "yyy"]
    }
}
```


> Example matchmaking script - filters out cheaters.

```cfscript

var thePlayer = data.matchCandidate.playerId;
var cheaters = data.extraParms.excludedPlayerIds;
var result = true;

for (var i = 0; i < cheaters.length; i++)
{
    if (cheaters[i] == thePlayer) {
        result = false;
        break;
    }
}

result;

```


<%= data.branding.productName %> allows you to use Cloud Code scripts to filter matchmaking candidates.

The `data` object passed to matchmaking scripts contain the following elements:

Data Element | Description
-------------- | -----------
matchCandidate | Candidate object for the player being considered
extraParms | The jsonExtraParms parameter sent to FindPlayersUsingFilter()

The matchCandidate object contains the following:

Data Element | Description
-------------- | -----------
playerId | Profile id of the player being considered
playerName | Name of the player being considered
playerRating | The rating of this player, as assigned by the game
pictureUrl | A profile picture of the player, if available
summaryFriendData | The custom summary data assigned to the player by the game

The script should return `true` if the candidate is acceptable, `false` otherwise

### Configuring the filter

The filter is configured via the **Design | Multiplayer | Matchmaking** page of the portal.







## S2S Scripts

> **CreateTournamentS2S** - Creates a tournament entity

```cfscript
var SYSTEM_USER = "3e1de451-3743-462b-8478-be4da44855cb";

// Create a user session for the system user
var userSession = bridge.getSessionForProfile(SYSTEM_USER);

// Use that session to gain access to the Client API
var globalEntityService = bridge.getGlobalEntityServiceProxy(userSession);


// Create the tournament object
globalEntityService.createEntity(
    "tournament",
    0,
    { "other": 1}, // Anyone can read it
    data);

// Return success!
true;
```

> **CreateTournamentS2S** - test parameters

```JSON
{
    "name": "Christmas Chaos",
    "startDate": "2016-12-20",
    "durationDays": 5,
    "firstPrize": 1000,
    "secondPrize": 500,
    "thirdPrize": 100
}
```

Server-to-Server (S2S) Scripts are invoked not from the Client API, but rather from our Server-to-Server Interface. These scripts are intended to be called from custom (private) servers - and may be utilized for managing global datafill, content management, triggering engagement events, etc.

The biggest difference between an S2S Script and a regular Cloud Code script is the **absense of a User Session** at runtime.

Normally Cloud Code scripts are always run within the context of a user (client) session - and thus these scripts have full access to the **Client API**.

S2S Scripts are invoked without authenticating an individual end-user, thus do not have a user session associated with them, and **do not have access to the Client API methods** -- by default.

This would seem a significant limitation - and it is - but luckily there is an easy work-around. S2S scripts are able to **create** a temporary **user session** for a specified profile id.  This profile id may be part of the parameters passed into the script, or may be a known **system user profileId** that has been created for the app.

:::caution
Describing how to call the S2S interface is outside-the-scope of this section, but will be coming soon.
:::


## Scheduled Scripts

<%= data.branding.productName %> includes a scheduling system that allows you to defer running a script until a later time. You can schedule scripts via the [<code>ScheduleRunScriptUTC()</code>](/api/capi/script/schedulerunscriptutc) and [<code>ScheduleRunScriptMinutes()</code>](/api/capi/script/schedulerunscriptminutes) API calls.

Scheduling a script adds a *job* to the <%= data.branding.productName %> *job queue*. You can view the list of current jobs in the queue via the **Monitoring | Global Monitoring | Job Queue** page of the portal.

:::caution
Like S2S scripts, scheduled scripts do not have a user session associated with them. Use the same techniques described above to create one if necessary.
:::




## WebHooks

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

<DocCardList />