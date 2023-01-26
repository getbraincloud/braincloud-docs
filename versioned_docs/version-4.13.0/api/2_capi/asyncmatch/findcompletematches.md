# FindCompleteMatches
## Overview
Returns all matches that are in a COMPLETE state for which the player is involved.

<PartialServop service_name="asyncMatch" operation_name="FIND_MATCHES_COMPLETED" / >

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

<%= data.branding.codePrefix %>.AsyncMatchService.FindCompleteMatches(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getAsyncMatchService()->findCompleteMatches(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> asyncMatchService] findCompleteMatches:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAsyncMatchService().findCompleteMatches(this);

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

<%= data.branding.codePrefix %>.asyncMatch.findCompleteMatches(result =>
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
var asyncMatchProxy = bridge.getAsyncMatchServiceProxy();

var postResult = asyncMatchProxy.findCompleteMatches();
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
	"service": "asyncMatch",
	"operation": "FIND_MATCHES_COMPLETED"
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
        "results": [
            {
                "gameId": "109999",
                "ownerId": "9ad4f990-5466-4d00-a334-de834e1ac4ec",
                "matchId": "877dd25d-ea21-4857-ba2a-2134d0f5ace2",
                "version": 2,
                "players": [
                    {
                        "playerId": "9ad4f990-5466-4d00-a334-de834e1ac4ec",
                        "playerName": "",
                        "pictureUrl": null,
                        "summaryFriendData": null
                    },
                    {
                        "playerId": "963a2079-6e7a-48de-a4f2-8ab16c811975",
                        "playerName": "",
                        "pictureUrl": null,
                        "summaryFriendData": null
                    }
                ],
                "status": {
                    "status": "COMPLETE",
                    "currentPlayer": "963a2079-6e7a-48de-a4f2-8ab16c811975"
                },
                "summary": null,
                "createdAt": 1442586358023,
                "updatedAt": 1442586374787
            }
        ]
    }
}
```
</details>

