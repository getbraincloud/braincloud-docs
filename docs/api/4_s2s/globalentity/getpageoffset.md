# GetPageOffset
## Overview
Method to retrieve previous or next pages after having called the GetPage method.

<PartialServop service_name="globalEntity" operation_name="GET_PAGE_BY_OFFSET" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.getPageOffset(context, pageOffset);
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
				"gameId": "123456",
				"entityId": "14281c38-abf6-4ca2-8436-b2bdwas8d5a9a",
				"ownerId": "784cc6c6-4569-4d75-bd10-62dwa8ae0218",
				"entityType": "test",
				"entityIndexedId": "indexTest",
				"version": 1,
				"data": {
					"testData": 1234
				},
				"acl": {
					"other": 1
				},
				"expiresAt": 1449861422588,
				"timeToLive": 0,
				"createdAt": 1449861388021,
				"updatedAt": 1449861388021
			}],
			"page": 2,
			"moreAfter": false
		},
		"context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjoiYnVpbGRpbmciLCJnY"
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The context string returned from the server from a previous call to GetPage or GetPageOffset. 
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point. 


