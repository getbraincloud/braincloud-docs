# GetMySocialInfo
## Overview
Retrieves the social information associated with the logged in user. Includes summary data if includeSummaryData is true.

<PartialServop service_name="friend" operation_name="GET_MY_SOCIAL_INFO" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
FriendPlatform friendPlatform = FriendPlatform.Facebook;
bool includeSummaryData = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Friend.GetMySocialInfo(friendPlatform, includeSummaryData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
FriendPlatform friendPlatform = FriendPlatform::Facebook;
bool includeSummaryData = true;

<%= data.branding.codePrefix %>->getFriend()->getMySocialInfo(friendPlatform, includeSummaryData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
FriendPlatformObjc friendPlatform = [FriendPlatformObjc Facebook];
bool includeSummaryData = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] getMySocialInfo:friendPlatform
         includeSummaryData:includeSummaryData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
FriendPlatform friendPlatform = FriendPlatform.Facebook;
boolean includeSummaryData = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriend().getMySocialInfo(friendPlatform, includeSummaryData, this);

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
var friendPlatform = <%= data.branding.codePrefix %>.friend.friendPlatform.Facebook;
var includeSummaryData = true;

<%= data.branding.codePrefix %>.friend.getMySocialInfo(friendPlatform, includeSummaryData, result =>
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
var friendPlatform = "Facebook";
var includeSummaryData = true;
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.getMySocialInfo(friendPlatform, includeSummaryData);
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
	"operation": "GET_MY_SOCIAL_INFO",
	"data": {
		"friendPlatform": "Facebook",
		"includeSummaryData": true
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
    "playerId": "caa0362c-03a8-4c92-8ef6-a19919a97e0a",
    "name": "q2a4d5ba811-CAen",
    "pictureUrl": "https://graph.facebook.com/v3.2/111234914143270/picture?",
    "summaryFriendData": null,
    "externalData": {
      "Facebook": {
        "pictureUrl": "https://graph.facebook.com/v3.2/111234914143270/picture?",
        "name": "Tester Tester",
        "externalId": "111234914143270"
      }
    },
    "server_time": 1615573285941
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
friendPlatform | Friend platform to query. Valid values are "Facebook", "<%= data.branding.productName %>" and "All".
includeSummaryData | True if including summary data; false otherwise.


