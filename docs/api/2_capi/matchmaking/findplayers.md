# FindPlayers
## Overview
Finds matchmaking enabled players.

<PartialServop service_name="matchMaking" operation_name="FIND_PLAYERS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
int rangeDelta = 10;
int numMatches = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MatchMakingService.FindPlayers(rangeDelta, numMatches, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int rangeDelta = 10;
int numMatches = 1;
<%= data.branding.codePrefix %>->getMatchMakingService()->findPlayers(rangeDelta, numMatches, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int rangeDelta = 10;
int numMatches = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> matchMakingService] findPlayers:rangeDelta
                 numMatches:numMatches
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
int rangeDelta = 10;
int numMatches = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMatchMakingService().findPlayers(rangeDelta, numMatches, this);

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
var rangeDelta = 10;
var numMatches = 1;

<%= data.branding.codePrefix %>.matchMaking.findPlayers(rangeDelta, numMatches, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var rangeDelta = 10;
var numMatches = 1;
var matchMakingProxy = bridge.getMatchMakingServiceProxy();

var postResult = matchMakingProxy.findPlayers(rangeDelta, numMatches);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
  "rangeDelta": 10,
  "numMatches": 1
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
    "status": 200,
    "data": {
        "matchesFound": [
            {
                "pictureUrl": null,
                "playerName": "UserC-1239941736",
                "playerId": "c2b88d3f-2s32-43a6-9a71-0f0157e46505",
                "playerRating": 0,
                "summaryFriendData": null
            },
            {
                "pictureUrl": null,
                "playerName": "UserA-914307852",
                "playerId": "96afefc7-02b2-4148-8d36-c62855d917b6",
                "playerRating": 0,
                "summaryFriendData": null
            }
        ]
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
rangeDelta | How close an opponents rating must be to yours
numMatches | The maximum number of matches to return


