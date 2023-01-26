# GetSummaryDataForProfileId
## Overview
Retrieves the summary information for the specified user profile ID.

Does not require the calling user to be a friend of the other user.

<PartialServop service_name="friend" operation_name="GET_SUMMARY_DATA_FOR_PROFILE_ID" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string profileId = "profileId";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FriendService.GetSummaryDataForProfileId(profileId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *profileId = "profileId";
<%= data.branding.codePrefix %>->getFriendService()->getSummaryDataForProfileId(profileId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *profileId = @"profileId";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] getSummaryDataForProfileId:profileId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String profileId = "profileId";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriendService().getSummaryDataForProfileId(profileId, this);

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
var profileId = "profileId";

<%= data.branding.codePrefix %>.friend.getSummaryDataForProfileId(profileId, result =>
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
var profileId = "profileId";
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.getSummaryDataForProfileId(profileId);
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
	"operation": "GET_SUMMARY_DATA_FOR_PROFILE_ID",
	"data": {
		"profileId": "profileId"
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
        "pictureUrl": "https://scontent.xx.fbcdn.net/hprofile-frc1/v/t1.0-1/p50x50/1066&oe=57812708",
        "email": null,
        "profileId": "2d77sf92-2583-4ad2-ba2c-3db942a34dee",
        "playerSummaryData": {
            "LEVEL": 0
        },
        "profileName": "Test User"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | Profile (user) ID.


