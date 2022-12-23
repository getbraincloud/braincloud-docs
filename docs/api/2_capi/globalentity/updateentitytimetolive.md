# UpdateEntityTimeToLive
## Overview
Method updates an existing entity's time to live on the server.

This method is affected by versioning. See the [versioning documentation](/api/appendix/version) for more information.

<PartialServop service_name="globalEntity" operation_name="UPDATE_TIME_TO_LIVE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityId = "a-entity-id";
int version = 2;
int timeToLive = 120000;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalEntityService.UpdateEntityTimeToLive(entityId, version, timeToLive, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityId = "a-entity-id";
int version = 2;
int timeToLive = 120000;

<%= data.branding.codePrefix %>->getGlobalEntityService()->updateEntityTimeToLive(entityId, version, timeToLive, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityId = @"a-entity-id";
int version = 2;
int timeToLive = 120000;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalEntityService] updateEntityTimeToLive:entityId
                    version:version
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
String entityId = "a-entity-id";
int version = 2;
int timeToLive = 120000;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalEntityService().updateEntityTimeToLive(entityId, version, timeToLive, this);

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
var version = 2;
var timeToLive = 120000;

<%= data.branding.codePrefix %>.globalEntity.updateEntityTimeToLive(entityId, version, timeToLive, result =>
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
var version = 2;
var timeToLive = 120000;
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.updateEntityTimeToLive(entityId, version, timeToLive);
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
	"service": "globalEntity",
	"operation": "UPDATE_TIME_TO_LIVE",
	"data": {
		"entityId": "the-entity-id",
		"version": 2,
		"timeToLive": 120000
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
        "gameId": "123456",
        "entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",
        "ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",
        "entityType": "test",
        "entityIndexedId" : "indexTest",
        "version": 1,
        "data": {
            "testData": 1234
        },
        "acl": {
            "other": 1
        },
        "expiresAt": 1449861422588,
        "timeToLive": 2342342,
        "createdAt": 1449861388021,
        "updatedAt": 1449861388021
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityId | The id of the entity to update
version | The version of the entity to update. Use -1 to indicate the newest version
timeToLive | Sets expiry time for entity in milliseconds if > 0
#### Status Codes
Code | Name | Description
---- | ---- | -----------
40344 | ENTITY_VERSION_MISMATCH | The version passed in does not match the version of the entity on the server


