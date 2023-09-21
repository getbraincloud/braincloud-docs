# IncrementUserEntityData
## Overview
Partial increment of entity data field items. Partial set of items incremented as specified.

<PartialServop service_name="entity" operation_name="INCREMENT_USER_ENTITY_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityId = "a-entity-id";
string jsonData = "{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.IncrementUserEntityData(entityId, jsonData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityId = "a-entity-id";
const char *jsonData = "{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";
<%= data.branding.codePrefix %>->getEntityService()->incrementUserEntityData(entityId, jsonData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityId = @"a-entity-id";
NSString *jsonData = @"{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] incrementUserEntityData:entityId
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
String entityId = "a-entity-id";
String jsonData = "{\"field1\":-1.5,\"field2\":{\"field2-1\":6,\"field2-new\":63.6},\"field3-new\":3}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().incrementUserEntityData(entityId, jsonData, this);

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
var entityId = "a-entity-id";
var jsonData = {
    "field1": -1.5,
    "field2": {
        "field2-1": 6,
        "field2-new": 63.6
    },
    "field3-new": 3
};

<%= data.branding.codePrefix %>.entity.incrementUserEntityData(entityId, jsonData, result =>
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
var entityId = "a-entity-id";
var jsonData = {
    "field1": -1.5,
    "field2": {
        "field2-1": 6,
        "field2-new": 63.6
    },
    "field3-new": 3
};
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.incrementUserEntityData(entityId, jsonData);
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
	"service": "entity",
	"operation": "INCREMENT_USER_ENTITY_DATA",
	"data": {
		"entityId": "the-entity-id",
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
    "data": {
        "acl": {
            "other": 0
        },
        "createdAt": 1467014334065,
        "data": {
            "test": 2466
        },
        "entityId": "ffa29930-4a33-420e-9beb-fdfdd0190750",
        "entityType": "Test",
        "gameId": "20001",
        "playerId": "6a63c968-c102-4a5a-8336-68b2150f369f",
        "updatedAt": 1467014334065,
        "version": 2
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityId | The id of the entity to update
jsonData | The entity's data object


