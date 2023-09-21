# IncrementData
## Overview
:::tip
This method is not sharding safe - and thus is not recommended for custom entities that you may want to shard for greater performance and scalability in the future. 
Consider using <strong>IncrementDataSharded()</strong> version of this method instead.
:::

Increments the specified fields by the specified amount within custom entity data on the server, enforcing ownership/ACL permissions.

<PartialServop service_name="customEntity" operation_name="INCREMENT_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
string entityId = "aaaa-bbbb-cccc-dddd";
string fieldsJson = "{ \"goals\": 3,  \"assists\": 5 }";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.IncrementData(entityType, entityId, fieldsJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
const char *entityId = "aaaa-bbbb-cccc-dddd";
const char *fieldsJson = "{ \"goals\": 3,  \"assists\": 5 }";
<%= data.branding.codePrefix %>->getCustomEntityService()->incrementData(entityType, entityId, fieldsJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
NSString *entityId = @"aaaa-bbbb-cccc-dddd";
NSString *fieldsJson = "{ \"goals\": 3,  \"assists\": 5 }";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] incrementData:entityType
                   entityId:entityId
                 fieldsJson:fieldsJson
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
string fieldsJson = "{ \"goals\": 3,  \"assists\": 5 }";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().incrementData(entityType, entityId, fieldsJson, this);

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
var fieldsJson = { 
    "goals": 3, 
    "assists": 5 
};

<%= data.branding.codePrefix %>.customEntity.incrementData(entityType, entityId, fieldsJson, result =>
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
var fieldsJson = { 
    "goals": 3, 
    "assists": 5 
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.incrementData(entityType, entityId, fieldsJson);
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
	"operation": "INCREMENT_DATA",
	"data": {
		"entityType": "athletes",
		"entityId": "aaaa-bbbb-cccc-dddd",
		"fieldsJson": { 
            "goals": 3, 
            "assists": 5 
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
  "data": {
    "entityId": "aaaa-bbbb-cccc-dddd",
    "version": 2,
    "acl": {
      "other": 2
    },
    "ownerId": null,
    "expiresAt": null,
    "timeToLive": null,
    "createdAt": 1586047449214,
    "updatedAt": 1591290232477,
    "data": {
        "goals": 3, 
        "assists": 5 
    },
    "entityType": "athletes"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being updated. 
entityId | The id of custom entity being updated. 
fieldsJson | Specific fields, as JSON, within entity's custom data, with respective increment amount.


