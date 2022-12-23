# ReadGroup
## Overview
Retrieve information about the group.

<PartialServop service_name="group" operation_name="READ_GROUP" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "a-group-id";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.ReadGroup(groupId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";

<%= data.branding.codePrefix %>->getGroup()->readGroup(groupId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] readGroup:groupId
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
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().readGroup(groupId, this);

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

<%= data.branding.codePrefix %>.group.readGroup(groupId, result =>
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
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.readGroup(groupId);
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
	"operation": "READ_GROUP",
	"data": {
		"groupId": "a-group-id"
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
        "gameId": "123456",
        "groupId": "69191b48-0cb1-4538-9758-e2f5ef4c524b",
        "ownerId": "b67b2d73-1e8c-42e9-9be5-9c1879a48555",
        "name": "test22",
        "groupType": "test",
        "createdAt": 1462462308991,
        "updatedAt": 1462462308991,
        "members": {
            "b67b2d73-1e8c-42e9-9be5-9c1879a48555": {
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
            "other": 1,
            "member": 1
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group


