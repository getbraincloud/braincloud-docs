# GetRandomEntitiesMatching
## Overview
Gets a list of up to randomCount randomly selected entities from the server based on the where condition and specified maximum return count.

<PartialServop service_name="globalEntity" operation_name="GET_RANDOM_ENTITIES_MATCHING" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string where = "{\"entityType\": \"address\"}";
int maxReturn = 10;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalEntityService.GetRandomEntitiesMatching(where, maxReturn, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *where = "{\"entityType\": \"address\"}";
int maxReturn = 10;

<%= data.branding.codePrefix %>->getGlobalEntityService()->getRandomEntitiesMatching(where, maxReturn, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *where = @"{\"entityType\": \"address\"}";
int maxReturn = 10;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalEntityService] getRandomEntitiesMatching:where
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
String where = "{\"entityType\": \"address\"}";
int maxReturn = 10;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalEntityService().getRandomEntitiesMatching(where, maxReturn, this);

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
    "entityType": "address"
};
var maxReturn = 10;

<%= data.branding.codePrefix %>.globalEntity.getRandomEntitiesMatching(where, maxReturn, result =>
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
    "entityType": "address"
};
var maxReturn = 10;
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.getRandomEntitiesMatching(where, maxReturn);
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
	"operation": "GET_RANDOM_ENTITIES_MATCHING",
	"data": {
		"where": {
			"entityType": "address"
		},
		"maxReturn": 10
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
    "gameId": "22459",
    "entityId": "007ce17c-7bc0-4c4e-b08a-0f267517778a",
    "ownerId": "ef26173d-a736-478c-aa00-5a5cea9962d1",
    "entityType": "address",
    "entityIndexedId": null,
    "version": 1,
    "data": {
     "street": "1309 Carling"
    },
    "acl": {
     "other": 1
    },
    "expiresAt": 9223372036854776000,
    "timeToLive": null,
    "createdAt": 1507580373566,
    "updatedAt": 1507580373566
   },
   {
    "gameId": "22459",
    "entityId": "9bc36964-08e5-453c-ac71-142a3b66ca22",
    "ownerId": "ef26173d-a736-478c-aa00-5a5cea9962d1",
    "entityType": "address",
    "entityIndexedId": null,
    "version": 1,
    "data": {
     "street": "1309 Carling"
    },
    "acl": {
     "other": 1
    },
    "expiresAt": 9223372036854776000,
    "timeToLive": null,
    "createdAt": 1507580372711,
    "updatedAt": 1507580372711
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
where | Mongo style query string.
maxReturn | The maximum number of entities to return.


