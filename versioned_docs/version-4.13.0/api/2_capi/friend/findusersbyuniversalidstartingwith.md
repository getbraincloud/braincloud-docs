# FindUsersByUniversalIdStartingWith
## Overview
Retrieves profile information for users whose universal ID starts with search text. Optional parameter: maxResults

<PartialServop service_name="friend" operation_name="FIND_USERS_BY_UNIVERSAL_ID_STARTING_WITH" / >

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

<%= data.branding.codePrefix %>.FriendService.FindUsersByUniversalIdStartingWith(searchText, maxResults, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *searchText = "someText";
int maxResults = 5;
<%= data.branding.codePrefix %>->getFriendService()->findUsersByUniversalIdStartingWith(searchText, maxResults, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *searchText = @"someText";
int maxResults = 5;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] findUsersByUniversalIdStartingWith:searchText
                 maxResults:maxResults
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String searchText = "someText";
int maxResults = 5;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriendService().findUsersByUniversalIdStartingWith(searchText, maxResults, this);

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

<%= data.branding.codePrefix %>.friend.findUsersByUniversalIdStartingWith(searchText, maxResults, result =>
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
var searchText = "someText";
var maxResults = 5;
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.findUsersByUniversalIdStartingWith(searchText, maxResults);
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
	"service": "friend",
	"operation": "FIND_USERS_BY_UNIVERSAL_ID_STARTING_WITH",
	"data": {
		"searchText": "someText",
		"maxResults": 5
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
   "status":200,
   "data":{
      "matchedCount":2,
      "message":"Result count exceeds maximum.",
      "matches":[
         {
            "profileId":"111-222-333",
            "profileName":"UserA",
            "summaryFriendData":null,
            "pictureUrl":null
         },
         {
            "profileId":"aaa-bbb-ccc",
            "profileName":"UserB",
            "summaryFriendData":null,
            "pictureUrl":null
         }
      ]
   }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
searchText | The substring to search for. Minimum length of 3 characters.
maxResults | Maximum number of results to return. If there are more the message.


