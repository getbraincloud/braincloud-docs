# IncrementGroupEntityData
## Overview
Increment elements for a group entity's data field.

<PartialServop service_name="group" operation_name="INCREMENT_GROUP_ENTITY_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "a-group-id";
string entityId = "a-group-entity-id";
string jsonData = "{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.IncrementGroupEntityData(groupId, entityId, jsonData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";
const char *entityId = "a-group-entity-id";
const char *jsonData = "{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";

<%= data.branding.codePrefix %>->getGroup()->incrementGroupEntityData(groupId, entityId, jsonData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
NSString *entityId = @"a-group-entity-id";
NSString *jsonData = @"{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] incrementGroupEntityData:groupId
                   entityId:entityId
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
String jsonData = "{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().incrementGroupEntityData(groupId, entityId, jsonData, this);

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
var jsonData = {
    "field1": -1.5,
    "field2": {
        "field2-1": 6,
        "field2-new": 63.6
    },
    "field3-new": 3
};

<%= data.branding.codePrefix %>.group.incrementGroupEntityData(groupId, entityId, jsonData, result =>
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
var jsonData = {
    "field1": -1.5,
    "field2": {
        "field2-1": 6,
        "field2-new": 63.6
    },
    "field3-new": 3
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.incrementGroupEntityData(groupId, entityId, jsonData);
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
	"operation": "INCREMENT_GROUP_ENTITY_DATA",
	"data": {
		"groupId": "a-group-id",
		"entityId": "a-group-entity-id",
		"data": {
			"field1": -1.5,
			"field2": {
				"field2-1": 6,
				"field2-new": 63.6
			},
			"field3-new": 3
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
    "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group
entityId | ID of the entity.
jsonData | Partial data map with incremental values.


