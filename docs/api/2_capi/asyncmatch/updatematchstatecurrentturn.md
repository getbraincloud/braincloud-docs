# UpdateMatchStateCurrentTurn

Allows the current player to overwrite the matchState and the statistics, without completing the turn for the given match (does not add to match history).

<PartialServop service_name="asyncMatch" operation_name="UPDATE_MATCH_STATE_CURRENT_TURN" />

## Method Parameters
Parameter | Description
--------- | -----------
ownerId | The match owner id.
matchId | The match id.
version | Game state version being updated, to ensure data integrity.
matchState | JSON object provided by the caller. Overwrites the 'matchState'.
statistics | Optional JSON object provided by the caller. Overwrites the 'statistics'.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string ownerId = "the-owner-id";
string matchId = "the-match-id";
int version = 1;
string matchState = "{\"map\": \"level1\"}";
string statistics = "{\"statsName\": \"statValue\"}";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AsyncmatchService.UpdateMatchStateCurrentTurn(ownerId, matchId, version, matchState, statistics, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *ownerId = "the-owner-id";
const char *matchId = "the-match-id";
int version = 1;
const char *matchState = "{\"map\": \"level1\"}";
const char *statistics = "{\"statsName\": \"statValue\"}";
<%= data.branding.codePrefix %>.getAsyncmatchService().updateMatchStateCurrentTurn(ownerId, matchId, version, matchState, statistics, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *ownerId = @"the-owner-id";
NSString *matchId = @"the-match-id";
int version = 1;
NSString *matchState = @"{\"map\": \"level1\"}";
NSString *statistics = @"{\"statsName\": \"statValue\"}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> asyncMatchService] updateMatchStateCurrentTurn:
                      ownerId:ownerId
                      matchId:matchId
                      version:version
                   matchState:matchState
                   statistics:statistics
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String ownerId = "the-owner-id";
String matchId = "the-match-id";
int version = 1;
String matchState = "{\"map\": \"level1\"}";
String statistics = "{\"statsName\": \"statValue\"}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getAsyncmatchService.updateMatchStateCurrentTurn(ownerId, matchId, version, matchState, statistics, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}

```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var ownerId = "the-owner-id";
var matchId = "the-match-id";
var version = 1;
var matchState = {
    "map": "level1"
};
var statistics = {
    "statsName": "statValue"
};
<%= data.branding.codePrefix %>.asyncMatch.updateMatchStateCurrentTurn(ownerId, matchId, version, matchState, statistics, result =>
{
  var status = result.status;
  console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  ownerId = "the-owner-id";
var  matchId = "the-match-id";
var  version = 1;
var  matchState = {
    "map": "level1"
};
var  statistics = {
    "statsName": "statValue"
};

ServerResponse result = await <%= data.branding.codePrefix %>.asyncMatchService.updateMatchStateCurrentTurn(ownerId:ownerId, matchId:matchId, version:version, matchState:matchState, statistics:statistics);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local ownerId = "the-owner-id"
local matchId = "the-match-id"
local version = 1
local matchState = {
    map = "level1"
}
local statistics = {
    statsName = "statValue"
}

local callback = function(result)
	if result.statusCode == 200 then
		print("Success")
	else
		print("Failed | " .. tostring(result.status))
	end
end

<%= data.branding.codePrefix %>:getAsyncMatchService():updateMatchStateCurrentTurn(ownerId, matchId, version, matchState, statistics, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var ownerId = "the-owner-id";
var matchId = "the-match-id";
var version = 1;
var matchState = {
    "map": "level1"
};
var statistics = {
    "statsName": "statValue"
};
var asyncMatchProxy = bridge.getAsyncmatchServiceProxy();

var postResult = asyncMatchProxy.updateMatchStateCurrentTurn(ownerId, matchId, version, matchState, statistics);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"asyncMatch",
    "operation":"UPDATE_MATCH_STATE_CURRENT_TURN",
    "data":{
        "ownerId":"the-owner-id",
        "matchId":"the-match-id",
        "version":1,
        "matchState":{
            "map":"level1"
        },
        "statistics":{
            "statsName":"statValue"
        }
    }
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
<details>
<summary>JSON Response</summary>

```json
{
    "data": {
        "gameId": "23782",
        "ownerId": "37627832-0b5d-4e6f-9a8c-a91a6455a109",
        "matchId": "8e03f28c-06d0-4f9f-83c8-089965e9501b",
        "version": 2,
        "status": {
            "status": "PENDING",
            "currentPlayer": "c5ecdbda-5f91-41a9-96aa-174f412f7657"
        },
        "summary": {
            "Address": "South Africa"
        },
        "createdAt": 1709832525081,
        "updatedAt": 1709833092604
    },
    "status": 200
}
```

</details>

