# UpdateEntityFieldsSharded
## Overview
For sharded custom collection entities. Sets the specified fields within custom entity data on the server, enforcing ownership/ACL permissions.

<PartialServop service_name="customEntity" operation_name="UPDATE_ENTITY_FIELDS_SHARDED" / >

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
string fieldsJson = "{ \"stats.gamesPlayedTotal\": 2, \"stats.goalsTotal\": 2, \"games.played\": [ { \"date\": \"2022-01-21\", \"goals\": 1, \"assists\": 1, \"penalties\": 0 }, { \"date\": \"2022-01-10\", \"goals\": 1, \"assists\": 0, \"penalties\": 1 } ] }";
string shardKeyJson = "{ \"ownerId\": \"profileIdOfEntityOwner\" }";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.UpdateEntityFieldsSharded(entityType, entityId, version, fieldsJson, shardKeyJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const chat *entityType = "athletes";
const chat *entityId = "aaaa-bbbb-cccc-dddd";
int version = 1;
const chat *fieldsJson = "{ \"stats.gamesPlayedTotal\": 2, \"stats.goalsTotal\": 2, \"games.played\": [ { \"date\": \"2022-01-21\", \"goals\": 1, \"assists\": 1, \"penalties\": 0 }, { \"date\": \"2022-01-10\", \"goals\": 1, \"assists\": 0, \"penalties\": 1 } ] }";
const chat *shardKeyJson = "{ \"ownerId\": \"profileIdOfEntityOwner\" }";

<%= data.branding.codePrefix %>->getCustomEntityService()->updateEntityFieldsSharded(entityType, entityId, version, fieldsJson, shardKeyJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
NSString *entityId = @"aaaa-bbbb-cccc-dddd";
int version = 1;
NSString *fieldsJson = "{ \"stats.gamesPlayedTotal\": 2, \"stats.goalsTotal\": 2, \"games.played\": [ { \"date\": \"2022-01-21\", \"goals\": 1, \"assists\": 1, \"penalties\": 0 }, { \"date\": \"2022-01-10\", \"goals\": 1, \"assists\": 0, \"penalties\": 1 } ] }";
NSString *shardKeyJson = "{ \"ownerId\": \"profileIdOfEntityOwner\" }";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] updateEntityFieldsSharded:entityType
                      entityId:entityId
                       version:version
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
int version = 1;
String fieldsJson = "{ \"stats.gamesPlayedTotal\": 2, \"stats.goalsTotal\": 2, \"games.played\": [ { \"date\": \"2022-01-21\", \"goals\": 1, \"assists\": 1, \"penalties\": 0 }, { \"date\": \"2022-01-10\", \"goals\": 1, \"assists\": 0, \"penalties\": 1 } ] }";
String shardKeyJson = "{ \"ownerId\": \"profileIdOfEntityOwner\" }";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().updateEntityFieldsSharded(entityType, entityId, version, fieldsJson, shardKeyJson, this);

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
var fieldsJson = {
  "stats.gamesPlayedTotal": 2,
  "stats.goalsTotal": 2,
  "games.played": [
    {
      "date": "2022-01-21",
      "goals": 1,
      "assists": 1,
      "penalties": 0
    },
    {
      "date": "2022-01-10",
      "goals": 1,
      "assists": 0,
      "penalties": 1
    }
  ]
};
var shardKeyJson = {
  "ownerId": "profileIdOfEntityOwner"
};

<%= data.branding.codePrefix %>.customEntity.updateEntityFieldsSharded(entityType, entityId, version, fieldsJson, shardKeyJson, result =>
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
var fieldsJson = {
  "stats.gamesPlayedTotal": 2,
  "stats.goalsTotal": 2,
  "games.played": [
    {
      "date": "2022-01-21",
      "goals": 1,
      "assists": 1,
      "penalties": 0
    },
    {
      "date": "2022-01-10",
      "goals": 1,
      "assists": 0,
      "penalties": 1
    }
  ]
};
var shardKeyJson = {
  "ownerId": "profileIdOfEntityOwner"
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.updateEntityFieldsSharded(entityType, entityId, version, fieldsJson, shardKeyJson);
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
  "operation": "UPDATE_ENTITY_FIELDS_SHARDED",
  "data":
  {
    "entityType": "athletes",
    "entityId": "aaaa-bbbb-cccc-dddd",
    "version": 1,
    "fieldsJson": {
      "stats.gamesPlayedTotal": 2,
      "stats.goalsTotal": 2,
      "games.played": [
        {
          "date": "2022-01-21",
          "goals": 1,
          "assists": 1,
          "penalties": 0
        },
        {
          "date": "2022-01-10",
          "goals": 1,
          "assists": 0,
          "penalties": 1
        }
      ]
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
    "createdAt": 1643144091464,
    "entityType": "athletes",
    "entityId": "bc7ea530-c6bd-4a27-bb5d-ced287991c87",
    "acl": {
      "other": 2
    },
    "ownerId": "b85f195e-b65f-4220-b84f-260e42b01c5b",
    "version": 4,
    "expiresAt": null,
    "updatedAt": 1643213839419
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
version | Version of the custom entity being updated.
fieldsJson | Specific fields, as JSON, to set within entity's custom data.
shardKeyJson | The shard key field(s) and value(s), as JSON, applicable to the entity being updated.


