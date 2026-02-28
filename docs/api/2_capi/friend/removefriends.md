# RemoveFriends

Unlinks the current user and the specified users as <%= data.branding.productName %> friends.

<PartialServop service_name="friend" operation_name="REMOVE_FRIENDS" />

## Method Parameters
Parameter | Description
--------- | -----------
profileIds | Collection of profile IDs.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] profileIds = { "profileId1", "profileId2" };
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FriendService.RemoveFriends(profileIds, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> profileIds;
profileIds.push_back("profileId1");
profileIds.push_back("profileId2");
<%= data.branding.codePrefix %>->getFriendService()->removeFriends(profileIds, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *profileIds = @[ @"profileId1", @"profileId2" ];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] removeFriends:profileIds
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String[] profileIds = { "profileId1", "profileId2" };
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriendService().removeFriends(profileIds, this);

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
var profileIds = [ "profileId1", "profileId2" ];

<%= data.branding.codePrefix %>.friend.removeFriends(profileIds, result =>
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
var  profileIds = [ "profileId1", "profileId2" ];

ServerResponse result = await <%= data.branding.codePrefix %>.friendService.removeFriends(profileIds:profileIds);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local profileIds = { "profileId1", "profileId2" }

local callback = function(result)
	if result.statusCode == 200 then
		print("Success")
	else
		print("Failed | " .. tostring(result.status))
	end
end

<%= data.branding.codePrefix %>:getFriendService():removeFriends(profileIds, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var profileIds = [ "profileId1", "profileId2" ];
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.removeFriends(profileIds);
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
	"operation": "REMOVE_FRIENDS",
	"data": {
		"profileIds": [
			"profileId1",
			"profileId2"
		]
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
    "data": null,
    "status": 200
}
```
</details>

