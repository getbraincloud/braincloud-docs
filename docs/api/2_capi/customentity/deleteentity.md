# DeleteEntity
## Overview
Deletes the specified custom entity on the server.

<PartialServop service_name="customEntity" operation_name="DELETE_ENTITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
string entityId = "aaaa-bbbb-cccc-dddd";
int version = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.DeleteEntity(entityType, entityId, version, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
const char *entityId = "aaaa-bbbb-cccc-dddd";
int version = 1;
<%= data.branding.codePrefix %>->getCustomEntityService()->deleteEntity(entityType, entityId, version, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
NSString *entityId = @"aaaa-bbbb-cccc-dddd";
int version = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] deleteEntity:entityType
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
String entityType = "athletes";
String entityId = "aaaa-bbbb-cccc-dddd";
int version = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().deleteEntity(entityType, entityId, version, this);

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
var entityType = "athletes";
var entityId = "aaaa-bbbb-cccc-dddd";
var version = 1;

<%= data.branding.codePrefix %>.customEntity.deleteEntity(entityType, entityId, version, result =>
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
var entityType = "athletes";
var entityId = "aaaa-bbbb-cccc-dddd";
var version = 1;
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.deleteEntity(entityType, entityId, version);
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
	"service": "customEntity",
	"operation": "DELETE_ENTITY",
	"data": {
		"entityType": "athletes",
		"entityId": "aaaa-bbbb-cccc-dddd",
		"version": 1
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
entityType | The type of custom entity being deleted. 
entityId | The id of custom entity being deleted. 
version | Version of the custom entity being deleted. 


