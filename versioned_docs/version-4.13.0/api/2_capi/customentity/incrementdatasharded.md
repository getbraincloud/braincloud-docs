# IncrementDataSharded
## Overview
Increments the specified fields by the specified amount within custom entity data on the server, enforcing ownership/ACL permissions.

<PartialServop service_name="customEntity" operation_name="INCREMENT_DATA_SHARDED" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
string entityId = "aaaa-bbbb-cccc-dddd";
string fieldsJson = "{ \"goals\": 3, \"assists\": 5 }";
string shardKeyJson = "{ \"ownerId\": \"profileIdOfEntityOwner\" }";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.IncrementDataSharded(entityType, entityId, fieldsJson, shardKeyJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
const char *entityId = "aaaa-bbbb-cccc-dddd";
const char *fieldsJson = "{ \"goals\": 3, \"assists\": 5 }";
const char *shardKeyJson = "{ \"ownerId\": \"profileIdOfEntityOwner\" }";

<%= data.branding.codePrefix %>->getCustomEntityService()->incrementDataSharded(entityType, entityId, fieldsJson, shardKeyJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
NSString *entityId = @"aaaa-bbbb-cccc-dddd";
NSString *fieldsJson = "{ \"goals\": 3, \"assists\": 5 }";
NSString *shardKeyJson = "{ \"ownerId\": \"profileIdOfEntityOwner\" }";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] incrementDataSharded:
                    entityType:entityType
                      entityId:entityId
                    fieldsJson:fieldsJson
                  shardKeyJson:shardKeyJson
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
String fieldsJson = "{ \"goals\": 3, \"assists\": 5 }";
String shardKeyJson = "{ \"ownerId\": \"profileIdOfEntityOwner\" }";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().incrementDataSharded(entityType, entityId, fieldsJson, shardKeyJson, this);

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
var shardKeyJson = {
  "ownerId": "profileIdOfEntityOwner"
};

<%= data.branding.codePrefix %>.customEntity.incrementDataSharded(entityType, entityId, fieldsJson, shardKeyJson, result =>
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
var shardKeyJson = {
  "ownerId": "profileIdOfEntityOwner"
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.incrementDataSharded(entityType, entityId, fieldsJson, shardKeyJson);
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
  "operation": "INCREMENT_DATA_SHARDED",
  "data":
  {
    "entityType": "athletes",
    "entityId": "aaaa-bbbb-cccc-dddd",
    "fieldsJson": {
      "goals": 3,
      "assists": 5
    },
    "shardKeyJson": {
      "ownerId": "profileIdOfEntityOwner"
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
    "timeToLive": null,
    "createdAt": 1659108750204,
    "data": {
      "goals": 6,
      "assists": 10
    },
    "entityType": "athletes3",
    "entityId": "d40569f4-c3b6-4d9e-89b2-ad5dbe4ba580",
    "acl": {
      "other": 2
    },
    "ownerId": "b015eabb-b0e2-42fb-9ad2-76aa2d7492f8",
    "version": 2,
    "expiresAt": null,
    "updatedAt": 1659986804804
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
shardKeyJson | The shard key field(s) and value(s), as JSON, applicable to the entity being updated. If entity is owned, ownerId must be specified in the shardKeyJson info; otherwise, shardKeyJson must indicate values for all fields in the applicable shard key index.


