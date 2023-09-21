# AutoJoinGroup
## Overview
Automatically join an open group (isOpenGroup) that matches the search criteria and has space available.

- **isOpenGroup** - the isOpenGroup flag is set on group creation, or via the [SetGroupOpen](/api/capi/group/setgroupopen) method.

AutoJoinStrategy is defined by enum or constant in most of the client libraries.  For those that take a string, these are the valid values:

- **JoinFirstGroup** - Joins the first group found that matches the specified criteria.
- **JoinRandomGroup** - Finds all groups that matches the specified criteria and then randomly chooses one to join.

<PartialServop service_name="group" operation_name="AUTO_JOIN_GROUP" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupType = "a-group-type-name";
AutoJoinStrategy autoJoinStrategy = AutoJoinStrategy.JoinRandomGroup;
string dataQueryJson = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.AutoJoinGroup(groupType, autoJoinStrategy, dataQueryJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupType = "a-group-type-name";
eAutoJoinStrategy autoJoinStrategy = eAutoJoinStrategy::JoinFirstGroup;
const char *dataQueryJson = "{}";

<%= data.branding.codePrefix %>->getGroup()->autoJoinGroup(groupType, autoJoinStrategy, dataQueryJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupType = @"a-group-type-name";
AutoJoinStrategy autoJoinStrategy = JoinFirstGroup;
NSString *dataQueryJson = @"{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService]
            autoJoinGroup:groupType
         autoJoinStrategy:autoJoinStrategy
          completionBlock:successBlock
     errorCompletionBlock:failureBlock
		             cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String groupType = "a-group-type-name";
AutoJoinStrategy autoJoinStrategy = AutoJoinStrategy.JoinRandomGroup;
String dataQueryJson = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().autoJoinGroup(groupType, autoJoinStrategy, dataQueryJson, this);

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
var groupType = "a-group-type-name";
var autoJoinStrategy = "JoinRandomGroup";
var dataQueryJson = {};

<%= data.branding.codePrefix %>.group.autoJoinGroup(groupType, autoJoinStrategy, dataQueryJson, result =>
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
var groupType = "a-group-type-name";
var autoJoinStrategy = "JoinRandomGroup";
var dataQueryJson = {};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.autoJoinGroup(groupType, autoJoinStrategy, dataQueryJson);
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
	"operation": "AUTO_JOIN_GROUP",
	"data": {
		"groupType": "a-group-type-name",
		"autoJoinStrategy": "JoinRandomGroup",
		"where": {}
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
        "ownerId": "ee8cad26-16f2-4ef8-9045-3aab84ce6362",
        "name": "group-1",
        "groupType": "test2",
        "createdAt": 1462223553243,
        "updatedAt": 1462223553243,
        "members": {
            "ee8cad26-16f2-4ef8-9045-3aab84ce6362": {
                "role": "OWNER",
                "attributes": {}
            },
            "295c510f-507f-4bcf-80e1-ebc73708ec3c": {
                "role": "MEMBER",
                "attributes": {}
            }
        },
        "pendingMembers": {},
        "version": 1,
        "data": {},
        "isOpenGroup": false,
        "defaultMemberAttributes": {},
        "memberCount": 2,
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
groupTypeName | Name of the associated group type
autoJoinStrategy | Selection strategy to employ when there are multiple matches
dataQueryJson | Query parameters (optional)


