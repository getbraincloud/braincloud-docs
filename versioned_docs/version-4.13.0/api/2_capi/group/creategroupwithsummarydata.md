# CreateGroupWithSummaryData
## Overview
Create a group. Optional parameters: all except name and groupType.

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
bool isOpenGroup = true;
string acl = "{\"member\":2,\"other\":0}";
string ownerAttributes = "{}";
string defaultMemberAttributes = "{}";
string data = "{}";
string summaryData = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.groupService.CreateGroupWithSummaryData(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, data, summaryData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *name = "myGroupName";
const char *groupType = "myGroupType";
bool isOpenGroup = true;
const char *acl = "{\"member\":2,\"other\":0}";
const char *ownerAttributes = "{}";
const char *defaultMemberAttributes = "{}";
const char *data = "{}";
const char *summaryData = "{}";
<%= data.branding.codePrefix %>->getGroupService()->createGroupWithSummaryData(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, data, summaryData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *name = @"myGroupName";
NSString *groupType = @"myGroupType";
bool isOpenGroup = true;
NSString *acl = "{\"member\":2,\"other\":0}";
NSString *ownerAttributes = "{}";
NSString *defaultMemberAttributes = "{}";
NSString *data = "{}";
NSString *summaryData = "{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] createGroupWithSummaryData:name
                  groupType:groupType
                isOpenGroup:isOpenGroup
                        acl:acl
            ownerAttributes:ownerAttributes
    defaultMemberAttributes:defaultMemberAttributes
                       data:data
                summaryData:summaryData
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
boolean isOpenGroup = true;
String acl = "{\"member\":2,\"other\":0}";
String ownerAttributes = "{}";
String defaultMemberAttributes = "{}";
String data = "{}";
String summaryData = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupService().createGroupWithSummaryData(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, data, summaryData, this);

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
var isOpenGroup = true;
var acl = {
  "member": 2,
  "other": 0
};
var ownerAttributes = {};
var defaultMemberAttributes = {};
var data = {};
var summaryData = {};

<%= data.branding.codePrefix %>.groupService.createGroupWithSummaryData(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, data, summaryData, result =>
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
var isOpenGroup = true;
var acl = {
  "member": 2,
  "other": 0
};
var ownerAttributes = {};
var defaultMemberAttributes = {};
var data = {};
var summaryData = {};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.createGroup(name, groupType, isOpenGroup, acl, ownerAttributes, defaultMemberAttributes, data, summaryData);
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
  "data": {
    "gameId": "12345",
    "groupId": "b7b590e0-0e27-47ef-8bf5-03a3b4e34475",
    "ownerId": "77ce8889-20b7-4d01-b248-e0beb747f1b4",
    "name": "myGroupName",
    "groupType": "myGroupType",
    "createdAt": 1561472696504,
    "updatedAt": 1561472696504,
    "members": {
      "77ce8889-20b7-4d01-b248-e0beb747f1b4": {
        "role": "OWNER",
        "attributes": {}
      }
    },
    "pendingMembers": {},
    "version": 1,
    "summaryData": {},
    "isOpenGroup": true,
    "defaultMemberAttributes": {},
    "memberCount": 1,
    "invitedPendingMemberCount": 0,
    "requestingPendingMemberCount": 0,
    "acl": {
      "member": 2,
      "other": 0
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
name | A name for the group. 
groupType | The type of group. 
isOpenGroup | true if group is open; false if closed. 
acl | The group's access control list. A null ACL implies default. 
ownerAttributes | Attributes for the group owner (current user.) 
defaultMemberAttributes | Default attributes for group members. 
data | Custom application data. 
summaryData | Public summary data for the group that is viewable even by non-members. 


