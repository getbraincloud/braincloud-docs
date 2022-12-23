# CreateGroupEntity
## Overview
Create an entity in the group. Optional parameters: entityType, acl and jsonData

<PartialServop service_name="group" operation_name="CREATE_GROUP_ENTITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "a-group-id";
string entityType = "myEntityType";
bool isOwnedByGroupMember = false;
GroupACL.Access memberAccess = GroupACL.Access.ReadWrite;
GroupACL.Access otherAccess = GroupACL.Access.None;
GroupACL acl = new GroupACL(otherAccess, memberAccess);
string jsonData = "{\"aKey\":\"aValue\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.CreateGroupEntity(groupId, entityType, isOwnedByGroupMember, acl, jsonData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";
const char *entityType = "myEntityType";
bool isOwnedByGroupMember = false;
const char *acl = "{\"member\":2,\"other\":1}";
const char *jsonData = "{\"aKey\":\"aValue\"}";

<%= data.branding.codePrefix %>->getGroup()->createGroupEntity(groupId, entityType, isOwnedByGroupMember, acl, jsonData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
NSString *entityType = @"myEntityType";
bool isOwnedByGroupMember = false;
NSString *acl = @"{\"member\":2,\"other\":1}";
NSString *jsonData = @"{\"aKey\":\"aValue\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] createGroupEntity:groupId
                 entityType:entityType
       isOwnedByGroupMember:isOwnedByGroupMember
                        acl:acl
                   jsonData:jsonData
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
String entityType = "myEntityType";
boolean isOwnedByGroupMember = false;
GroupACL acl = new GroupACL(GroupACL.Access.None, GroupACL.Access.ReadWrite);
String jsonData = "{\"aKey\":\"aValue\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().createGroupEntity(groupId, entityType, isOwnedByGroupMember, acl, jsonData, this);

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
var entityType = "myEntityType";
var isOwnedByGroupMember = false;
var acl = {
    "member": 2,
    "other": 1
};
var jsonData = {
    "aKey": "aValue"
};

<%= data.branding.codePrefix %>.group.createGroupEntity(groupId, entityType, isOwnedByGroupMember, acl, jsonData, result =>
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
var isOwnedByGroupMember = false;
var entityType = "myEntityType";
var acl = {
    "member": 2,
    "other": 1
};
var jsonData = {
    "aKey": "aValue"
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.createGroupEntity(groupId, isOwnedByGroupMember, entityType, acl, jsonData);
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
	"operation": "CREATE_GROUP_ENTITY",
	"data": {
		"groupId": "a-group-id",
		"entityType": "myEntityType",
		"isOwnedByGroupMember": false,
		"acl": {
			"member": 2,
			"other": 1
		},
		"data": {
			"aKey": "aValue"
		}
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
        "groupId": "fee55a37-5e86-43e8-942e-06bcbe1b701e",
        "entityId": "91cfece7-debb-4698-ba6b-cd2cb432458d",
        "ownerId": null,
        "entityType": "BLUE",
        "createdAt": 1462812680359,
        "updatedAt": 1462812680359,
        "version": 1,
        "data": {},
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
groupId | ID of the group
entityType | Type of the group entity
isOwnedByGroupMember | true if entity is owned by a member; false if owned by the entire group
acl | Access control list for the group entity
jsonData | Custom application data


