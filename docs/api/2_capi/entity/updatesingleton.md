# UpdateSingleton
## Overview
Method updates a singleton entity on the server. This operation results in the entity data being completely replaced by the passed in JSON string. If the entity doesn't exist it is created.

Singletons are defined by their **entity type**, so no two singletons of the same type can exist at once.

This method is affected by versioning. See the [versioning documentation](/api/appendix/version) for more information.

<PartialServop service_name="entity" operation_name="UPDATE_SINGLETON" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "settings";
string jsonEntityData = "{\"difficulty\":\"normal\"}";
string jsonEntityAcl = "{\"other\":0}";
int version = -1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.UpdateSingleton(entityType, jsonEntityData, jsonEntityAcl, version, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "settings";
const char *jsonEntityData = "{\"difficulty\":\"normal\"}";
const char *jsonEntityAcl = "{\"other\":0}";
int version = -1;
<%= data.branding.codePrefix %>->getEntityService()->updateSingleton(entityType, jsonEntityData, jsonEntityAcl, version, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"settings";
NSString *jsonEntityData = @"{\"difficulty\":\"normal\"}";
NSString *jsonEntityAcl = @"{\"other\":0}";
int version = -1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] updateSingleton:entityType
             jsonEntityData:jsonEntityData
              jsonEntityAcl:jsonEntityAcl
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
String jsonEntityData = "{\"difficulty\":\"normal\"}";
String jsonEntityAcl = "{\"other\":0}";
int version = -1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().updateSingleton(entityType, jsonEntityData, jsonEntityAcl, version, this);

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
var jsonEntityData = {
    "difficulty": "normal"
};
var jsonEntityAcl = {
    "other": 0
};
var version = -1;

<%= data.branding.codePrefix %>.entity.updateSingleton(entityType, jsonEntityData, jsonEntityAcl, version, result =>
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
var jsonEntityData = {
    "difficulty": "normal"
};
var jsonEntityAcl = {
    "other": 0
};
var version = -1;
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.updateSingleton(entityType, jsonEntityData, jsonEntityAcl, version);
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
	"operation": "UPDATE_SINGLETON",
	"data": {
		"entityType": "settings",
		"data": {
			"difficulty": "normal"
		},
		"acl": {
			"other": 0
		},
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
    "status": 200,
    "data": {
        "entityType": "test",
        "version": 1  // Note - `version` will only be returned if not null or -1 in the update call
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The entity type as defined by the user
data | The entity's data object
acl | The entity's [Access Control List](/api/appendix/acl) as object. A null ACL implies default permissions which make the entity readable/writeable by only the user.
version | The version of the entity to update. Use -1 to indicate the newest version


