# DeleteGroupEntity
## Overview
Delete an entity in the group.

<PartialServop service_name="group" operation_name="DELETE_GROUP_ENTITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "a-group-id";
string entityId = "a-group-entity-id";
int version = 3;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.DeleteGroupEntity(groupId, entityId, version, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";
const char *entityId = "a-group-entity-id";
int version = 3;

<%= data.branding.codePrefix %>->getGroup()->deleteGroupEntity(groupId, entityId, version, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
NSString *entityId = @"a-group-entity-id";
int version = 3;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] deleteGroupEntity:groupId
                   entityId:entityId
                    version:version
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
int version = 3;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().deleteGroupEntity(groupId, entityId, version, this);

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
var version = 3;

<%= data.branding.codePrefix %>.group.deleteGroupEntity(groupId, entityId, version, result =>
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
var version = 3;
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.deleteGroupEntity(groupId, entityId, version);
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
	"operation": "DELETE_GROUP_ENTITY",
	"data": {
		"groupId": "a-group-id",
		"entityId": "a-group-entity-id",
		"version": 3
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

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group
entityId | ID of the entity.
version | The current version of the group entity (for concurrency checking).


