# AddFriendsFromPlatform
## Overview
Links the profiles for the specified externalIds for the given friend platform as internal friends.

<PartialServop service_name="friend" operation_name="ADD_FRIENDS_FROM_PLATFORM" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string friendPlatform = "Facebook";
string mode = "ADD";
string[] externalIds = { "profileId1", "profileId2" };
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FriendService.AddFriendsFromPlatform(friendPlatform, mode, externalIds, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *friendPlatform = "Facebook";
const char *mode = "ADD";
std::vector<std::string> externalIds;
externalIds.push_back("profileId1");
externalIds.push_back("profileId2");
<%= data.branding.codePrefix %>->getFriendService()->addFriendsFromPlatform(friendPlatform, mode, externalIds, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *friendPlatform = @"Facebook";
NSString *mode = @"ADD";
NSArray *externalIds = @[ @"profileId1", @"profileId2" ];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] addFriendsFromPlatform:friendPlatform
                       mode:mode
                externalIds:externalIds
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String friendPlatform = "Facebook";
String mode = "ADD";
String[] externalIds = { "profileId1", "profileId2" };
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriendService().addFriendsFromPlatform(friendPlatform, mode, externalIds, this);

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
var friendPlatform = "Facebook";
var mode = "ADD";
var externalIds = [ "profileId1", "profileId2" ];

<%= data.branding.codePrefix %>.friend.addFriendsFromPlatform(friendPlatform, mode, externalIds, result =>
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
var mode = "ADD";
var externalIds = [ "profileId1", "profileId2" ];
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.addFriendsFromPlatform(friendPlatform, mode, externalIds);
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
	"operation": "ADD_FRIENDS_FROM_PLATFORM",
	"data": {
        "friendPlatform": "Facebook",
        "mode": "ADD",
        "externalIds": ["111234914143270", "106296724679297"]
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
    "server_time": 1623090934620,
    "rejected": [],
    "numRejected": 0,
    "numNewAdded": 2,
    "numDeleted": 0,
    "numExisting": 0
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
friendPlatform | Friend platform to query. Valid values are "Facebook", "Steam", and "PlaystationNetwork"
mode | "ADD" to add friends only, "SYNC" to delete any previously saved friends that are not in the externalIds list
externalIds | The list of platform-specific external IDs of the friends to add


