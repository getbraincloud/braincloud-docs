# UpdateGroupMember
## Overview
Update a member of the group.

<PartialServop service_name="group" operation_name="UPDATE_MEMBER_OF_GROUP" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "a-group-id";
string profileId = "a-profile-id";
Role role = Role.MEMBER;
string jsonAttributes = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.UpdateGroupMember(groupId, profileId, role, jsonAttributes, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";
const char *profileId = "a-profile-id";
eGroupMember role = eGroupMember::MEMBER;
const char *jsonAttributes = "{}";

<%= data.branding.codePrefix %>->getGroup()->updateGroupMember(groupId, profileId, role, jsonAttributes, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
NSString *profileId = @"a-profile-id";
GroupMemberRole role = MEMBER;
NSString *jsonAttributes = @"{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] updateGroupMember:groupId
                  profileId:profileId
                       role:role
                 jsonAttributes:jsonAttributes
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
Role role = Role.MEMBER;
String jsonAttributes = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().updateGroupMember(groupId, profileId, role, jsonAttributes, this);

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
var role = "MEMBER";
var jsonAttributes = {};

<%= data.branding.codePrefix %>.group.updateGroupMember(groupId, profileId, role, jsonAttributes, result =>
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
var groupId = "a-group-id";
var profileId = "a-profile-id";
var role = "MEMBER";
var jsonAttributes = {};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.updateGroupMember(groupId, profileId, role, jsonAttributes);
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
  "groupId": "a-group-id",
  "profileId": "a-profile-id",
  "role": "MEMBER",
  "attributes": {}
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

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group
profileId | Profile ID of the member being updated
role | Role of the member being updated
jsonAttributes | Attributes of the member being updated


