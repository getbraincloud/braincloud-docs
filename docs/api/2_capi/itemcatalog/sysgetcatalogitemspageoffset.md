# SysGetCatalogItemsPageOffset
## Overview
Gets the page of catalog items from the server based on the encoded context and specified page offset, with full language fields mappings.

<PartialServop service_name="itemCatalog" operation_name="SYS_GET_CATALOG_ITEMS_PAGE_OFFSET" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;
var itemCatalogProxy = bridge.getItemCatalogServiceProxy();

var postResult = itemCatalogProxy.sysGetCatalogItemsPageOffset(context, pageOffset);
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
  "service": "itemCatalog",
  "operation": "SYS_GET_CATALOG_ITEMS_PAGE_OFFSET",
  "data":
  {
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
  "data": {
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzQwMyJ9LCJzb3J0Q3JpdGVyaWEiOnsiY3JlYXRlZEF0IjoxLCJ1cGRhdGVkQXQiOi0xfSwicGFnaW5hdGlvbiI6eyJyb3dzUGVyUGFnZSI6MSwicGFnZU51bWJlciI6MiwiZG9Db3VudCI6dHJ1ZX0sIm9wdGlvbnMiOm51bGx9",
    "results": {
      "count": 7,
      "page": 2,
      "items": [
        {
          "gameId": "23403",
          "defId": "medal_bronze_2",
          "name": {
            "en": "Medium Bronze Medal"
          },
          "desc": {
            "en": ""
          },
          "type": "ITEM",
          "category": "collectable",
          "tags": [
            "medal"
          ],
          "buyPrice": {},
          "sellPrice": {},
          "image": null,
          "resourceGroup": null,
          "resourceTag": null,
          "meta": {},
          "initData": {},
          "pState": "PUBLISHED",
          "publishedAt": 1566585957049,
          "createdAt": 1566585954652,
          "updatedAt": 1566585957049,
          "version": 2,
          "stackable": false,
          "consumable": false,
          "uses": null,
          "coolDownSecs": 0,
          "recoverySecs": 0,
          "activatable": false,
          "statusName": null,
          "activeSecs": null,
          "tradable": false,
          "blockchain": false,
          "blockchainDefId": null
        }
      ],
      "moreAfter": true,
      "moreBefore": true
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The context string returned from the server from a previous call to SysGetCatalogItemsPage or SysGetCatalogItemsPageOffset.
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.


