# GetRandomEntitiesMatching
## Overview
Gets a list of up to maxReturn randomly selected custom entities from the server based on the entity type and where condition.

<PartialServop service_name="customEntity" operation_name="GET_RANDOM_ENTITIES_MATCHING" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
string whereJson = "{\"data.position\":\"forward\"}";
int maxReturn = 2;

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.GetRandomEntitiesMatching(entityType, whereJson, maxReturn, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
const char *whereJson = "{\"data.position\":\"forward\"}";
int maxReturn = 2;
<%= data.branding.codePrefix %>->getCustomEntityService()->getRandomEntitiesMatching(entityType, whereJson, maxReturn, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
NSString *whereJson = @"{\"data.position\":\"forward\"}";
int maxReturn = 2;

BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] getEntityPage:entityType
                  whereJson:whereJson
                  maxReturn:maxReturn
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
string entityType = "athletes";
string whereJson = "{\"data.position\":\"forward\"}";
int maxReturn = 2;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().getRandomEntitiesMatching(entityType, whereJson, maxReturn, this);

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
var whereJson = {
  "data.position": "forward"
};
var maxReturn = 2;

<%= data.branding.codePrefix %>.customEntity.getRandomEntitiesMatching(entityType, whereJson, maxReturn, result =>
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
var whereJson = {
  "data.position": "forward"
};
var maxReturn = 2;
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.getRandomEntitiesMatching(entityType, whereJson, maxReturn);
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
	"operation": "GET_RANDOM_ENTITIES_MATCHING",
	"data": {
    "entityType": "athletes",
    "whereJson": {
      "data.position": "forward"
    },
    "maxReturn": 2
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
    "entityList": [
      {
        "entityId": "8b34a18b-5846-45d4-a7b8-e65775ca1973",
        "version": 1,
        "acl": {
          "other": 2
        },
        "ownerId": null,
        "expiresAt": null,
        "timeToLive": null,
        "createdAt": 1602700646415,
        "updatedAt": 1602700646415,
        "entityType": "athletes",
        "data": {
          "firstName": "Super",
          "surName": "Star",
          "position": "forward",
          "goals": 2,
          "assists": 4
        }
      },
      {
        "entityId": "e3ea0e05-032f-4b46-86cf-0423f5a9da24",
        "version": 1,
        "acl": {
          "other": 2
        },
        "ownerId": null,
        "expiresAt": null,
        "timeToLive": null,
        "createdAt": 1602700650242,
        "updatedAt": 1602700650242,
        "entityType": "athletes",
        "data": {
          "firstName": "Super",
          "surName": "Star",
          "position": "forward",
          "goals": 2,
          "assists": 4
        }
      }
    ],
    "_serverTime": 1637946319239,
    "entityListCount": 2
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being retrieved. 
whereJson | The where clause, as JSON object.
maxReturn | The maximum number of entities to return.


