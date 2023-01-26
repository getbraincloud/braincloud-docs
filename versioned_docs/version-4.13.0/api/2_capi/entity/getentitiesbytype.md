# GetEntitiesByType
## Overview
Method returns all user entities that match the given type.

<PartialServop service_name="entity" operation_name="READ_BY_TYPE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "someEntityType";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.GetEntitiesByType(entityType, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "someEntityType";
<%= data.branding.codePrefix %>->getEntityService()->getEntitiesByType(entityType, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"someEntityType";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] getEntitiesByType:entityType
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String entityType = "someEntityType";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().getEntitiesByType(entityType, this);

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
var entityType = "someEntityType";

<%= data.branding.codePrefix %>.entity.getEntitiesByType(entityType, result =>
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
var entityType = "someEntityType";
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.getEntitiesByType(entityType);
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
	"operation": "READ_BY_TYPE",
	"data": {
		"entityType": "someEntityType"
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
        "entities": [
            {
                "entityId": "96f77c80-4257-45ee-aed7-f1c6dd1ac44c",
                "entityType": "address",
                "version": 1,
                "data": {
                    "street": "1309 Carling"
                },
                "acl": {
                    "other": 0
                },
                "createdAt": 1453926510649,
                "updatedAt": 1453926510649
            }
        ],
        "_serverTime": 1637946319239
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The entity type to search for


