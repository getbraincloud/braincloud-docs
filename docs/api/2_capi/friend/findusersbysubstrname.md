# FindUsersBySubstrName
## Overview
Retrieves profile information for an exact text match, then it retrieves partial matches of the specified text.

If there are more results than the maximum requested, then maximum requested results are returned.

Does not require the calling user to be a friend of the retrieved users.

In event that the call takes too long, this call has a timelimit enforcement on retrieving partial matches. When a timeout occurs, it will return no partial matches. The user will need to narrow down their search criteria.

<PartialServop service_name="friend" operation_name="FIND_USERS_BY_SUBSTR_NAME" / >

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

<%= data.branding.codePrefix %>.FriendService.FindUsersBySubstrName(searchText, maxResults, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *searchText = "someText";
int maxResults = 5;
<%= data.branding.codePrefix %>->getFriendService()->findUsersBySubstrName(searchText, maxResults, this);
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

[[<%= data.branding.codePrefix %> friendService] findUsersBySubstrName:searchText
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

<%= data.branding.codePrefix %>.getFriendService().findUsersBySubstrName(searchText, maxResults, this);

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

<%= data.branding.codePrefix %>.friend.findUsersBySubstrName(searchText, maxResults, result =>
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

var postResult = friendProxy.findUsersBySubstrName(searchText, maxResults);
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
	"operation": "FIND_USERS_BY_SUBSTR_NAME",
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
    "status": 200,
    "data": {
        "matches": [
            {
                "profileId": "4f2edc69-b3c3-458b-8b4b-6bbd7259b55f",
                "profileName": "Test2",
                "playerSummaryData": null,
                "pictureUrl": "http://somesite.com/test/picture.jpg"
            },
            {
                "profileId": "0da5ad24-2341-42f8-acb5-57aa2dd4ae94",
                "profileName": "Test1",
                "playerSummaryData": null,
                "pictureUrl": "http://somesite.com/test/picture.jpg"
            }
        ],
        "matchedCount": 2
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
searchText | The substring to search for. Minimum length of 3 characters.
maxResults | Maximum number of results to return.


