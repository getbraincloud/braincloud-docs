# GetListByIndexedId
## Overview
Method gets list of entities from the server base on indexed ID.

<PartialServop service_name="globalEntity" operation_name="GET_LIST_BY_INDEXED_ID" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityIndexedId = "a-indexed-id";
int maxReturn = 50;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalEntityService.GetListByIndexedId(entityIndexedId, maxReturn, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityIndexedId = "a-indexed-id";
int maxReturn = 50;

<%= data.branding.codePrefix %>->getGlobalEntityService()->getListByIndexedId(entityIndexedId, maxReturn, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityIndexedId = @"a-indexed-id";
int maxReturn = 50;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalEntityService] getListByIndexedId:entityIndexedId
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
String entityIndexedId = "a-indexed-id";
int maxReturn = 50;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalEntityService().getListByIndexedId(entityIndexedId, maxReturn, this);

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
var entityIndexedId = "a-indexed-id";
var maxReturn = 50;

<%= data.branding.codePrefix %>.globalEntity.getListByIndexedId(entityIndexedId, maxReturn, result =>
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
var entityIndexedId = "a-indexed-id";
var maxReturn = 50;
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.getListByIndexedId(entityIndexedId, maxReturn);
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
	"operation": "GET_LIST_BY_INDEXED_ID",
	"data": {
		"entityIndexedId": "a-indexed-id",
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
        "entityList": [
            {
                "gameId": "123456",
                "entityId": "e919ffc2-c3f7-4cc0-a0f1-b3eb857c4ed0",
                "ownerId": "7f416676-9e9d-422f-85b2-740185ac3139",
                "entityType": "testGlobalEntity",
                "entityIndexedId": "testIndexedId",
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

## Method Parameters
Parameter | Description
--------- | -----------
entityIndexedId | The entity indexed Id
maxReturn | The maximum number of entities to return


