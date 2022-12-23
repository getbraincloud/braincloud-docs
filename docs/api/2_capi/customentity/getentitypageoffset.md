# GetEntityPageOffset
## Overview
Gets the page of custom entities from the server based on the encoded context and specified page offset.

<PartialServop service_name="customEntity" operation_name="GET_ENTITY_PAGE_OFFSET" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
string context = "\"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0\"";
int pageOffset = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.GetEntityPageOffset(entityType, context, pageOffset, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
const char *context = "\"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0\"";
int pageOffset = 1;
<%= data.branding.codePrefix %>->getCustomEntityService()->getEntityPageOffset(entityType, context, pageOffset, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
NSString *context = "\"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0\"";
int pageOffset = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] getEntityPageOffset:entityType
                    context:context
                 pageOffset:pageOffset
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
String context = "\"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0\"";
int pageOffset = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().getPageOffset(entityType, context, pageOffset, this);

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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;

<%= data.branding.codePrefix %>.customEntity.getEntityPageOffset(entityType, context, pageOffset, result =>
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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.getEntityPageOffset(entityType, context, pageOffset);
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
	"operation": "GET_ENTITY_PAGE_OFFSET",
	"data": {
		"entityType": "athletes",
		"context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0",
		"pageOffset": 1
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
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6e30sInNvcnRDcml0ZXJpYSI6eyJjcmVhdGVkQXQiOjF9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjoyMCwicGFnZU51bWJlciI6MSwiZG9DbXXXXXXXmFsc2V9LCJvcHRpb25zIjpudWxsfQ",
    "results": {
      "page": 2,
      "items": [
        {
          "entityId": "781a5f97-1fa8-41e5-xxxx-7f648af19414",
          "version": 1,
          "acl": {
            "other": 1
          },
          "ownerId": "b7e7116e-749d-444f-xxxx-13f1101512a3",
          "expiresAt": null,
          "timeToLive": null,
          "createdAt": 1573534287525,
          "updatedAt": 1573534287525,
          "data": {
            "level1": "complete",
            "level2": "incomplete"
          }
        }
      ]
    }
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being retrieved. 
context | The context string returned from the server from a previous call to GetPage or GetPageOffset. 
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point. 


