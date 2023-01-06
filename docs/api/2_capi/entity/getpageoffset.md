# GetPageOffset
## Overview
Method to retrieve previous or next pages after having called the GetPage method.

<PartialServop service_name="entity" operation_name="GET_PAGE_BY_OFFSET" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
int pageOffset = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.GetPageOffset(context, pageOffset, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
int pageOffset = 1;
<%= data.branding.codePrefix %>->getEntityService()->getPageOffset(context, pageOffset, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *context = @"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
int pageOffset = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] getPageOffset:context
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
String context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
int pageOffset = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().getPageOffset(context, pageOffset, this);

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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;

<%= data.branding.codePrefix %>.entity.getPageOffset(context, pageOffset, result =>
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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.getPageOffset(context, pageOffset);
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
	"operation": "GET_PAGE_BY_OFFSET",
	"data": {
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
		"results": {
			"moreBefore": false,
			"count": 200,
			"items": [{
				"entityId": "00edfd8e-5028-45d5-95d4-b1869cf2afaa",
				"entityType": "testEntity",
				"version": 1,
				"data": {
					"testName": "Test Name 01"
				},
				"acl": {
					"other": 2
				},
				"createdAt": 1437505537168,
				"updatedAt": 1437505537168
			}],
			"page": 2,
			"moreAfter": false
        },
		"context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjoiYnVpbGRpbmciLCJnYW
		1lSWQiOiIxMDI4NyIsIiRvciI6W3sib3duZXJJZCI6Ijk5MjM4ZmFiLTkxYTItNDdiYy1
		iMDExLWJjMThhN2IyOWY3NiJ9LHsiYWNsLm90aGVyIjp7IiRuZSI6MH19XX0sInNvcnRD
		cml0ZXJpYSI6eyJjcmVhdGVkQXQiOjEsInVwZGF0ZWRBdCI6LTF9LCJwYWdpbmF0aW9uI
		jp7InJvd3NQZXJQYWdlIjo1MCwicGFnZU51bWJlciI6NH0sIm9wdGlvbnMiOm51bGx9"
	}
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40383 | DECODE_CONTEXT | Unable to decode context

</details>


## Method Parameters
Parameter | Description
--------- | -----------
context | The context string returned from the server from a previous call to GetPage or GetPageOffset
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.
#
