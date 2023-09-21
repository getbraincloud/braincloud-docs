# UpdateEntity
## Overview
Replaces the specified custom entity's data, and optionally updates the acl and expiry, on the server.

<PartialServop service_name="customEntity" operation_name="UPDATE_ENTITY" / >

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
string dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"defense\",\"goals\":3,\"assists\":5}";
string acl = "{\"other\":0}";
int timeToLive = null;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.UpdateEntity(entityType, entityId, version, dataJson, acl, timeToLive, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
const char *entityId = "aaaa-bbbb-cccc-dddd";
int version = 1;
const char *dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"defense\",\"goals\":3,\"assists\":5}";
const char *acl = "{\"other\":0}";
int timeToLive = null;
<%= data.branding.codePrefix %>->getCustomEntityService()->updateEntity(entityType, entityId, version, dataJson, acl, timeToLive, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
NSString *entityId = @"aaaa-bbbb-cccc-dddd";
int version = 1;
NSString *dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"defense\",\"goals\":3,\"assists\":5}";
NSString *acl = "{\"other\":0}";
int timeToLive = null;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] updateEntity:entityType
                   entityId:entityId
                    version:version
                   dataJson:dataJson
                        acl:acl
                 timeToLive:timeToLive
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
String dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"defense\",\"goals\":3,\"assists\":5}";
String acl = "{\"other\":0}";
int timeToLive = null;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().updateEntity(entityType, entityId, version, dataJson, acl, timeToLive, this);

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
var dataJson = {
  "firstName": "Super",
  "surName": "Star",
  "position": "defense",
  "goals": 3,
  "assists": 5
};
var acl = {
  "other": 0
};
var timeToLive = null;

<%= data.branding.codePrefix %>.customEntity.updateEntity(entityType, entityId, version, dataJson, acl, timeToLive, result =>
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
var dataJson = {
  "firstName": "Super",
  "surName": "Star",
  "position": "defense",
  "goals": 3,
  "assists": 5
};
var acl = {
  "other": 0
};
var timeToLive = null;
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.updateEntity(entityType, entityId, version, dataJson, acl, timeToLive);
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
	"operation": "UPDATE_ENTITY",
	"data": {
		"entityType": "athletes",
		"entityId": "aaaa-bbbb-cccc-dddd",
		"version": 1,
		"dataJson": {
			"firstName": "Super",
			"surName": "Star",
			"position": "defense",
			"goals": 3,
			"assists": 5
		},
		"acl": {},
		"timeToLive": null
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
    "entityId": "1497cc7e-66cb-4682-9eac-c755523369a8",
    "version": 2,
    "acl": {
      "other": 1
    },
    "ownerId": null,
    "expiresAt": null,
    "timeToLive": null,
    "createdAt": 1573540122600,
    "updatedAt": 1573540142928
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being updated. 
entityId | The id of custom entity being updated. 
version | Version of the custom entity being updated. 
dataJson | New custom data, as JSON, to replace existing custom data. 
acl | New access control list settings to replace existing acl. Optional, ignored if null. 
timeToLive | The duration of time, in milliseconds, the custom entity should live from now before being expired. Null indicates never expires. To indicate no change, use -1. 


