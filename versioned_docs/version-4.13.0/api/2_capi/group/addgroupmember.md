# AddGroupMember
## Overview
Add a member to the group. Optional parameters: jsonAttributes.

<PartialServop service_name="group" operation_name="ADD_MEMBER_TO_GROUP" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = <%= data.example.groupId %>;
string profileId = <%= data.example.profileId %>;
BrainCloudGroup.Role role = BrainCloudGroup.Role.MEMBER;
string jsonAttributes = <%= data.example.jsonAttributes %>;

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("[AddGroupMember Success] {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupService.AddGroupMember(
    groupId,
    profileId,
    role,
    jsonAttributes,
    successCallback,
    failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* groupId = <%= data.example.groupId %>;
const char* profileId = <%= data.example.profileId %>;
eGroupMember::Role role = eGroupMember::MEMBER;
std::string jsonAttributes = <%= data.example.jsonAttributes %>;

<%= data.branding.codeClient %>->getGroupService()->addGroupMember(groupId, profileId, role, jsonAttributes, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * groupId = @<%= data.example.groupId %>;
NSString * profileId = @<%= data.example.profileId %>;
GroupMemberRole role = MEMBER;
NSString * jsonAttributes = @<%= data.example.jsonAttributes %>;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService]
         addGroupMember:groupId
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
String groupId = <%= data.example.groupId %>;
String profileId = <%= data.example.profileId %>;
GroupService.Role role = GroupService.Role.MEMBER;
String jsonAttributes = <%= data.example.jsonAttributes %>;
<%= data.example.implementCallback %>

<%= data.branding.codePrefix %>.getGroupService().addGroupMember(groupId, profileId, role, jsonAttributes, this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var groupId = <%= data.example.groupId %>;
var profileId = <%= data.example.profileId %>;
var role = "MEMBER";
var jsonAttributes = <%= data.example.jsonAttributes_js %>;

<%= data.branding.codePrefix %>.group.addGroupMember(groupId, profileId, role, attributes, result =>
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
var groupId = <%= data.example.groupId %>;
var profileId = <%= data.example.profileId %>;
var role = "MEMBER";
var jsonAttributes = <%= data.example.jsonAttributes_js %>;

var groupProxy = bridge.getGroupServiceProxy();
var retVal = groupProxy.addGroupMember(groupId, profileId, role, jsonAttributes);
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
profileId | Profile ID of the member being added
role | Role of the member being added
jsonAttributes | Attributes of the member being added


