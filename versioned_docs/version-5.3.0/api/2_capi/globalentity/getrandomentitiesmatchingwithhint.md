# GetRandomEntitiesMatchingWithHint
Gets a list of up to randomCount randomly selected entities from the server based on the where condition and specified maximum return count, using index hint provided.

<PartialServop service_name="globalEntity" operation_name="GET_RANDOM_ENTITIES_MATCHING_WITH_HINT" />

## Method Parameters
Parameter | Description
--------- | -----------
where | A mongo style query string.
maxReturn | The maximum number of entities to return.
hintJson | The field index keys to be hinted, as JSON object.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string where = "{\"data.team\": \"Red\", \"data.position\": \"Forward\"}";
int maxReturn = 10;
string hintJson = "{\"data.team\": 1, \"data.position\": 1}";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalentityService.GetRandomEntitiesMatchingWithHint(where, maxReturn, hintJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *where = "{\"data.team\": \"Red\", \"data.position\": \"Forward\"}";
int maxReturn = 10;
const char *hintJson = "{\"data.team\": 1, \"data.position\": 1}";
<%= data.branding.codePrefix %>.getGlobalentityService().getRandomEntitiesMatchingWithHint(where, maxReturn, hintJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *where = @"{\"data.team\": \"Red\", \"data.position\": \"Forward\"}";
int maxReturn = 10;
NSString *hintJson = @"{\"data.team\": 1, \"data.position\": 1}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> globalEntityService] GetRandomEntitiesMatchingWithHint:
                        where:where
                    maxReturn:maxReturn
                     hintJson:hintJson
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String where = "{\"data.team\": \"Red\", \"data.position\": \"Forward\"}";
int maxReturn = 10;
String hintJson = "{\"data.team\": 1, \"data.position\": 1}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getGlobalentityService.GetRandomEntitiesMatchingWithHint(where, maxReturn, hintJson, this);

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
var where = {
    "data.team": "Red",
    "data.position": "Forward"
};
var maxReturn = 10;
var hintJson = {
    "data.team": 1,
    "data.position": 1
};
<%= data.branding.codePrefix %>.globalEntity.GetRandomEntitiesMatchingWithHint(where, maxReturn, hintJson, result =>
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
var where = {
    "data.team": "Red",
    "data.position": "Forward"
};
var maxReturn = 10;
var hintJson = {
    "data.team": 1,
    "data.position": 1
};
var globalEntityProxy = bridge.getGlobalentityServiceProxy();

var postResult = globalEntityProxy.GetRandomEntitiesMatchingWithHint(where, maxReturn, hintJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"globalEntity",
    "operation":"GET_RANDOM_ENTITIES_MATCHING_WITH_HINT",
    "data":{
        "where":{
            "data.team":"Red",
            "data.position":"Forward"
        },
        "maxReturn":10,
        "hintJson":{
            "data.team":1,
            "data.position":1
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
    "status": 200,
    "data": {
        "entityList": [
            {
                "gameId": "123456",
                "entityId": "e919ffc2-c3f7-4cc0-a0f1-b3eb857c4ed0",
                "ownerId": "7f416676-9e9d-422f-85b2-740185ac3139",
                "entityType": "testGlobalEntity",
                "entityIndexedId": null,
                "version": 1,
                "data": {
                    "globalTestName": "Test Name 01"
                },
                "acl": {
                    "other": 0
                },
                "expiresAt": 9223372036854775800,
                "timeToLive": 0,
                "createdAt": 1471010732135,
                "updatedAt": 1471010732135
            }
        ],
        "_serverTime": 1637946319239,
        "entityListCount": 1
    }
}
```

</details>

