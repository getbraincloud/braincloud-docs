# RejectGroupJoinRequest

Reject a request to join the group.

<PartialServop service_name="group" operation_name="REJECT_GROUP_JOIN_REQUEST" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group
profileId | Profile ID of the user being rejected

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "a-group-id";
string profileId = "a-profile-id";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.RejectGroupJoinRequest(groupId, profileId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";
const char *profileId = "a-profile-id";

<%= data.branding.codePrefix %>->getGroup()->rejectGroupJoinRequest(groupId, profileId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
NSString *profileId = @"a-profile-id";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] rejectGroupJoinRequest:groupId
                  profileId:profileId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String groupId = "a-group-id";
String profileId = "a-profile-id";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().rejectGroupJoinRequest(groupId, profileId, this);

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
var groupId = "a-group-id";
var profileId = "a-profile-id";

<%= data.branding.codePrefix %>.group.rejectGroupJoinRequest(groupId, profileId, result =>
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
var  groupId = "a-group-id";
var  profileId = "a-profile-id";

ServerResponse result = await <%= data.branding.codePrefix %>.groupService.rejectGroupJoinRequest(groupId:groupId, profileId:profileId);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "a-group-id";
var profileId = "a-profile-id";
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.rejectGroupJoinRequest(groupId, profileId);
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
	"service": "group",
	"operation": "REJECT_GROUP_JOIN_REQUEST",
	"data": {
		"groupId": "a-group-id",
		"profileId": "the-profile-id"
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
    "data": null
}
```
</details>

