# ListAllLeaderboards
## Overview
Method returns list of all the leaderboards from the server based on gameId of the user.

<PartialServop service_name="leaderboard" operation_name="LIST_ALL_LEADERBOARDS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LeaderboardService.ListAllLeaderboards(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getLeaderboardService()->listAllLeaderboards(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> leaderboardService] listAllLeaderboards:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLeaderboardService().listAllLeaderboards(this);

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

<%= data.branding.codePrefix %>.leaderboard.listAllLeaderboards(result =>
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
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.listAllLeaderboards();
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
	"service": "leaderboard",
	"operation": "LIST_ALL_LEADERBOARDS",
	"data": {}
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
        "leaderboardListCount": 3,
        "leaderboardList": [
            {
                "leaderboardId": "default",
                "leaderboardType": "HIGH_VALUE",
                "resetAt": 1473793200000,
                "rotationType": "WEEKLY",
                "currentVersionId": 1,
                "maxRetainedCount": 5,
                "retainedVersionsCount": 1,
                "data": {}
            },
            {
                "leaderboardId": "default1",
                "leaderboardType": "HIGH_VALUE",
                "resetAt": 1517428800000,
                "rotationType": "WEEKLY",
                "currentVersionId": 1,
                "maxRetainedCount": 2,
                "retainedVersionsCount": 1,
                "data": {
                    "retainedCount": 7
                }
            }
        ]
    }
}
```
</details>

