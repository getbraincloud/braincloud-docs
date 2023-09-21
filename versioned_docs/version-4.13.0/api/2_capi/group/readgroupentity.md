# ReadGroupEntity
## Overview
Read an entity in the group.

<PartialServop service_name="group" operation_name="READ_GROUP_ENTITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "a-group-id";
string entityId = "a-group-entity-id";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.ReadGroupEntity(groupId, entityId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";
const char *entityId = "a-group-entity-id";

<%= data.branding.codePrefix %>->getGroup()->readGroupEntity(groupId, entityId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
NSString *entityId = @"a-group-entity-id";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] readGroupEntity:groupId
                   entityId:entityId
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
String entityId = "a-group-entity-id";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().readGroupEntity(groupId, entityId, this);

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
var entityId = "a-group-entity-id";

<%= data.branding.codePrefix %>.group.readGroupEntity(groupId, entityId, result =>
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
var entityId = "a-group-entity-id";
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.readGroupEntity(groupId, entityId);
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
	"operation": "READ_GROUP_ENTITY",
	"data": {
		"groupId": "a-group-id",
		"entityId": "a-group-entity-id"
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
        },
        "_serverTime": 1637946319239
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group
entityId | ID of the entity


