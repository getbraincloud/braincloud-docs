# CreateGroup
## Overview
Create a group.

The group ACL contains two elements defining access to the groups data for non-members (other) and members. Access is defined as:

- None = 0,
- ReadOnly = 1
- ReadWrite = 2

<PartialServop service_name="group" operation_name="CREATE_GROUP" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string name = "myGroupName";
string groupType = "myGroupType";
bool isOpenGroup = false;
GroupACL.Access memberAccess = GroupACL.Access.ReadWrite;
GroupACL.Access otherAccess = GroupACL.Access.None;
GroupACL acl = new GroupACL(otherAccess, memberAccess);
string jsonData = "{}";
string ownerAttributes = "{}";
string defaultMemberAttributes = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.CreateGroup(name, groupType, isOpenGroup, acl, jsonData, ownerAttributes, defaultMemberAttributes, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *name = "myGroupName";
const char *groupType = "myGroupType";
bool isOpenGroup = false;
const char *acl = "{\"member\":2,\"other\":0}";
const char *jsonData = "{}";
const char *ownerAttributes = "{}";
const char *defaultMemberAttributes = "{}";

<%= data.branding.codePrefix %>->getGroup()->createGroup(name, groupType, isOpenGroup, acl, jsonData, ownerAttributes, defaultMemberAttributes, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *name = @"myGroupName";
NSString *groupType = @"myGroupType";
bool isOpenGroup = false;
NSString *acl = @"{\"member\":2,\"other\":0}";
NSString *jsonData = @"{}";
NSString *ownerAttributes = @"{}";
NSString *defaultMemberAttributes = @"{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] createGroup:name
                  groupType:groupType
                isOpenGroup:isOpenGroup
                        acl:acl
                   jsonData:jsonData
            ownerAttributes:ownerAttributes
    defaultMemberAttributes:defaultMemberAttributes
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String name = "myGroupName";
String groupType = "myGroupType";
boolean isOpenGroup = false;
GroupACL acl = new GroupACL(GroupACL.Access.None, GroupACL.Access.ReadWrite);
String jsonData = "{}";
String ownerAttributes = "{}";
String defaultMemberAttributes = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().createGroup(name, groupType, isOpenGroup, acl, jsonData, ownerAttributes, defaultMemberAttributes, this);

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
var name = "myGroupName";
var groupType = "myGroupType";
var isOpenGroup = false;
var acl = {
    "member": 2,
    "other": 0
};
var jsonData = {};
var ownerAttributes = {};
var defaultMemberAttributes = {};

<%= data.branding.codePrefix %>.group.createGroup(name, groupType, isOpenGroup, acl, jsonData, ownerAttributes, defaultMemberAttributes, result =>
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
var name = "myGroupName";
var groupType = "myGroupType";
var isOpenGroup = false;
var acl = {
    "member": 2,
    "other": 0
};
var jsonData = {};
var ownerAttributes = {};
var defaultMemberAttributes = {};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.createGroup(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, jsonData);
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
	"operation": "CREATE_GROUP",
	"data": {
		"name": "myGroupName",
		"groupType": "myGroupType",
		"isOpenGroup": true,
		"acl": {
			"member": 2,
			"other": 0
		},
		"ownerAttributes": {},
		"defaultMemberAttributes": {},
		"data": {},
		"summaryData": {}
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
        "gameId": "20595",
        "groupId": "211559ef-234a-4aef-a643-48a90a6036c2",
        "ownerId": "ee8cad26-16f2-4ef8-9045-3aab84ce6362",
        "name": "my-group-name",
        "groupType": "TestGroup",
        "createdAt": 1461613090251,
        "updatedAt": 1461613090251,
        "members": {
            "ee8cad26-16f2-4ef8-9045-3aab84ce6362": {
                "role": "OWNER",
                "attributes": {}
            }
        },
        "pendingMembers": {},
        "version": 1,
        "data": {},
        "isOpenGroup": false,
        "defaultMemberAttributes": {},
        "memberCount": 1,
        "invitedPendingMemberCount": 0,
        "requestingPendingMemberCount": 0,
        "acl": {
            "member": 2,
            "other": 1
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
name | Name of the group
groupType | Name of the type of group
isOpenGroup | true if group is open; false if closed
acl | The group's access control list. A null ACL implies default
jsonOwnerAttributes | Attributes for the group owner (current user)
jsonDefaultMemberAttributes | Default attributes for group members
jsonData | Custom application data


