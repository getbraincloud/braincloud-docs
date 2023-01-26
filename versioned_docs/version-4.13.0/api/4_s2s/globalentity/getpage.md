# GetPage
## Overview
```json-doc
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

Method uses a paging system to iterate through user entities.

After retrieving a page of entities with this method use <code>[getPageOffset](/api/s2s/globalentity/getpageoffset)</code> to retrieve previous or next pages.

See the [Generic Paged Queries](/api/appendix/genericpagedqueries) documentation for creating the context object.

<PartialServop service_name="globalEntity" operation_name="GET_PAGE" / >

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
var context = {
  "pagination": {
    "rowsPerPage": 50,
    "pageNumber": 1
  },
  "searchCriteria": {
    "entityType": "address"
  },
  "sortCriteria": {
    "createdAt": 1,
    "updatedAt": -1
  }
};
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.getPage(context);
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
	"operation": "GET_PAGE",
	"data": {
		"context": {
			"pagination": {
				"rowsPerPage": 50,
				"pageNumber": 1
			},
			"searchCriteria": {
				"entityType": "address"
			},
			"sortCriteria": {
				"createdAt": 1,
				"updatedAt": -1
			}
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
			"page": 1,
			"moreAfter": true
		},
		"context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjoiYnVpbGRpbmciLCJnY"
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The json context for the page request. 


