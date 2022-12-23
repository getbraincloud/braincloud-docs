# GetEntity
## Overview
Method to get a specific entity.

<PartialServop service_name="entity" operation_name="READ" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityId = "someEntityId";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.GetEntity(entityId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityId = "someEntityId";
<%= data.branding.codePrefix %>->getEntityService()->getEntity(entityId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityId = @"someEntityId";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] getEntity:entityId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String entityId = "someEntityId";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().getEntity(entityId, this);

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
var entityId = "someEntityId";

<%= data.branding.codePrefix %>.entity.getEntity(entityId, result =>
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
var entityId = "someEntityId";
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.getEntity(entityId);
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
	"operation": "READ",
	"data": {
		"entityId": "someEntityId"
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
		"entityId": "113db68a-48ad-4fc9-9f44-5fd36fc6445f",
		"entityType": "person",
		"version": 1,
		"data": {
			"name": "john",
			"age": 30
		},
		"acl": {
			"other": 0
		},
		"createdAt": 1395943044322,
		"updatedAt": 1395943044322,
		"_serverTime": 1637946319239
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityId | The id of the entity


