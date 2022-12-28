# FindMatches
## Overview
Returns all matches that are NOT in a COMPLETE state for which the player is involved.

<PartialServop service_name="asyncMatch" operation_name="FIND_MATCHES" / >

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

<%= data.branding.codePrefix %>.AsyncMatchService.FindMatches(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getAsyncMatchService()->findMatches(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> asyncMatchService] findMatches:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAsyncMatchService().findMatches(this);

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

<%= data.branding.codePrefix %>.asyncMatch.findMatches(result =>
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

var postResult = asyncMatchProxy.findMatches();
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
	"operation": "FIND_MATCHES"
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
                "gameId": "123456",
                "ownerId": "7630f98e-1236-4ead-88ee-27ce63b2db2c",
                "matchId": "97c8d087-40d8-45c2-aa2b-6d0d83424ec5",
                "version": 1,
                "players": [
                    {
                        "playerId": "7630f98e-13b6-4ead-88ee-27ce63b2db2c",
                        "playerName": "UserA-122217922",
                        "pictureUrl": null,
                        "summaryFriendData": null
                    },
                    {
                        "playerId": "b28ff14a-364a-40b3-ac4e-d2b23983519c",
                        "playerName": "UserC-338593317",
                        "pictureUrl": null,
                        "summaryFriendData": null
                    }
                ],
                "status": {
                    "status": "PENDING",
                    "currentPlayer": "efab2d0b-90a1-48cf-8678-ae81d7aaed89"
                },
                "summary": null,
                "createdAt": 1442586020180,
                "updatedAt": 1442586020188
            }
        ]
    }
}
```
</details>

