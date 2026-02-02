# FindUserByUniversalId

Retrieves user information for partially matched universal IDs. Optional parameter: maxResults.

:::caution
This API is deprecated and will be removed in the future. Please use the [FindUserByExactUniversalId](finduserbyexactuniversalid.md) API instead.
:::

<PartialServop service_name="friend" operation_name="FIND_PLAYER_BY_UNIVERSAL_ID" />

## Method Parameters

| Parameter  | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| searchText | The substring to search for. Minimum length of 3 characters.        |
| maxResults | Maximum number of results to return. If there are more the message. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string searchText = "someText";
int maxResults = 5;

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FriendService.FindUserByUniversalId(searchText, maxResults, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *searchText = "someText";
int maxResults = 5;
<%= data.branding.codePrefix %>.getFriendService().findUserByUniversalId(searchText, maxResults, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *searchText = @"someText";
int maxResults = 5;
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> friendService] FindUserByUniversalId:
                   searchText:searchText
                   maxResults:maxResults
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String searchText = "someText";
int maxResults = 5;
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getFriendService.FindUserByUniversalId(searchText, maxResults, this);

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
var searchText = "someText";
var maxResults = 5;
<%= data.branding.codePrefix %>.friend.FindUserByUniversalId(searchText, maxResults, result =>
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
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var searchText = "someText";
var maxResults = 5;
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.FindUserByUniversalId(searchText, maxResults);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"friend",
    "operation":"FIND_PLAYER_BY_UNIVERSAL_ID",
    "data":{
        "searchText":"someText",
        "maxResults":5
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
        "matchedCount": 1,
        "matches": [
            {
                "profileId": "111-222-333",
                "profileName": "UserA",
                "summaryFriendData": null,
                "pictureUrl": null
            }
        ]
    },
    "status": 200
}
```

</details>
