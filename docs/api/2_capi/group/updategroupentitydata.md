# UpdateGroupEntityData
## Overview
Update the data for a group entity . Optional parameters: jsonData (will clear data if not provided)

This method is affected by versioning. See the [versioning documentation](/api/appendix/version) for more information.

<PartialServop service_name="group" operation_name="UPDATE_GROUP_ENTITY_DATA" / >

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
string jsonData = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.UpdateGroupEntityData(groupId, entityId, version, jsonData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";
const char *entityId = "a-group-entity-id";
int version = 3;
const char *jsonData = "{}";

<%= data.branding.codePrefix %>->getGroup()->updateGroupEntityData(groupId, entityId, version, jsonData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
NSString *entityId = @"a-group-entity-id";
int version = 3;
NSString *jsonData = @"{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] updateGroupEntityData:groupId
                   entityId:entityId
                    version:version
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
String entityId = "a-group-entity-id";
int version = 3;
String jsonData = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().updateGroupEntityData(groupId, entityId, version, jsonData, this);

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
var jsonData = {};

<%= data.branding.codePrefix %>.group.updateGroupEntityData(groupId, entityId, version, jsonData, result =>
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
var jsonData = {};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.updateGroupEntityData(groupId, entityId, version, jsonData);
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
	"operation": "UPDATE_GROUP_ENTITY_DATA",
	"data": {
		"groupId": "a-group-id",
		"entityId": "a-group-entity-id",
		"version": 3,
		"data": {}
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
entityId | The id of the entity to update
version | Version to verify
jsonData | Data to apply


