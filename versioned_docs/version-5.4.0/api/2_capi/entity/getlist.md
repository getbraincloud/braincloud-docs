# GetList

Method gets list of entities from the server base on type and/or where clause.

Fields available for use in the 'where' clause are:

 - entityType
 - createdAt
 - updatedAt

 Along with all custom data (using `data.`).  For more information on the query syntax see [here](/api/appendix/mongodbwherequeries).

<PartialServop service_name="entity" operation_name="GET_LIST" />

## Method Parameters
Parameter | Description
--------- | -----------
whereJson | Mongo style query string
orderByJson | Specifies the order in which the query returns matching documents. The sort parameter consists of a field followed by an ascending(1)/descending flag(-1). eg. `{ "name" : 1}` sorts by name in ascending order
maxReturn | The maximum number of entities to return

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string whereJson = "{\"entityType\":\"address\",\"data.street\":\"1309 Carling\"}";
string orderByJson = "{\"data.street\":1}";
int maxReturn = 50;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.GetList(whereJson, orderByJson, maxReturn, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *whereJson = "{\"entityType\":\"address\",\"data.street\":\"1309 Carling\"}";
const char *orderByJson = "{\"data.street\":1}";
int maxReturn = 50;
<%= data.branding.codePrefix %>->getEntityService()->getList(whereJson, orderByJson, maxReturn, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *whereJson = @"{\"entityType\":\"address\",\"data.street\":\"1309 Carling\"}";
NSString *orderByJson = @"{\"data.street\":1}";
int maxReturn = 50;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] getList:whereJson
                orderByJson:orderByJson
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
String whereJson = "{\"entityType\":\"address\",\"data.street\":\"1309 Carling\"}";
String orderByJson = "{\"data.street\":1}";
int maxReturn = 50;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().getList(whereJson, orderByJson, maxReturn, this);

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
var whereJson = {
    "entityType": "address",
    "data.street": "1309 Carling"
};
var orderByJson = {
    "data.street": 1
};
var maxReturn = 50;

<%= data.branding.codePrefix %>.entity.getList(whereJson, orderByJson, maxReturn, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  whereJson = {
    "entityType": "address",
    "data.street": "1309 Carling"
};
var  orderByJson = {
    "data.street": 1
};
var  maxReturn = 50;

ServerResponse result = await <%= data.branding.codePrefix %>.entityService.getList(whereJson:whereJson, orderByJson:orderByJson, maxReturn:maxReturn);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var whereJson = {
    "entityType": "address",
    "data.street": "1309 Carling"
};
var orderByJson = {
    "data.street": 1
};
var maxReturn = 50;
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.getList(whereJson, orderByJson, maxReturn);
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
	"operation": "GET_LIST",
	"data": {
		"where": {
			"entityType": "address",
			"data.street": "1309 Carling"
		},
		"orderBy": {
			"data.street": 1
		},
		"maxReturn": 50
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
		"_serverTime": 1637946319239,
		"entityListCount": 1,
		"entityList": [{
			"gameId": "123455",
			"entityId": "a3def0eb-3993-4a95-8fef-27f50a6d0f69",
			"ownerId": "11c9dd4d-9ed1-416d-bd04-5228c1efafac",
			"entityType": "address",
			"version": 1,
			"data": {
				"street": "123 Ave"
			},
			"acl": {
				"other": 1
			},
			"createdAt": 1449870753354,
			"updatedAt": 1449870753354
		}]
	}
}
```
</details>

