# DeleteSingleton
## Overview
Method deletes the given singleton on the server.

Singletons are defined by their **entity type**, so no two singletons of the same type can exist at once.

This method is affected by versioning. See the [versioning documentation](/api/appendix/version) for more information.

<PartialServop service_name="entity" operation_name="DELETE_SINGLETON" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "settings";
int version = -1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.DeleteSingleton(entityType, version, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "settings";
int version = -1;
<%= data.branding.codePrefix %>->getEntityService()->deleteSingleton(entityType, version, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"settings";
int version = -1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] deleteSingleton:entityType
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
String entityType = "settings";
int version = -1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().deleteSingleton(entityType, version, this);

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
var entityType = "settings";
var version = -1;

<%= data.branding.codePrefix %>.entity.deleteSingleton(entityType, version, result =>
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
var entityType = "settings";
var version = -1;
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.deleteSingleton(entityType, version);
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
	"operation": "DELETE_SINGLETON",
	"data": {
		"entityType": "settings",
		"version": -1
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
    "status":200,
    "data":null
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40344 | ENTITY_VERSION_MISMATCH | The version parameter does not match the current version on the server

</details>


## Method Parameters
Parameter | Description
--------- | -----------
entityType | The entity type as defined by the user
version | The version of the entity to delete. Use -1 to indicate the newest version
#
