# SysGetCatalogItemsPage
## Overview
Retrieves page of catalog items from the server, with full language fields mappings.

<PartialServop service_name="itemCatalog" operation_name="SYS_GET_CATALOG_ITEMS_PAGE" / >

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
var context = {
  "pagination": {
    "rowsPerPage": 50,
    "pageNumber": 1
  },
  "searchCriteria": {
    "category": "sword"
  },
  "sortCriteria": {
    "createdAt": 1,
    "updatedAt": -1
  }
};
var itemCatalogProxy = bridge.getItemCatalogServiceProxy();

var postResult = itemCatalogProxy.sysGetCatalogItemsPage(context);
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
  "operation": "SYS_GET_CATALOG_ITEMS_PAGE",
  "data":
  {
    "context": {
      "pagination": {
        "rowsPerPage": 50,
        "pageNumber": 1
      },
      "searchCriteria": {
        "category": "sword"
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
  "data": {
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzQwMyJ9LCJzb3J0Q3JpdGVyaWEiOnsiY3JlYXRlZEF0IjoxLCJ1cGRhdGVkQXQiOi0xfSwicGFnaW5hdGlvbiI6eyJyb3dzUGVyUGFnZSI6MSwicGFnZU51bWJlciI6MSwiZG9Db3VudCI6dHJ1ZX0sIm9wdGlvbnMiOm51bGx9",
    "results": {
      "count": 7,
      "page": 1,
      "items": [
        {
          "defId": "medal_bronze_1",
          "name": "Small Bronze Medal",
          "desc": "",
          "type": "ITEM",
          "category": "collectable",
          "tags": [
            "medal"
          ],
          "buyPrice": {
            "coins": 2000
          },
          "sellPrice": {
            "coins": 200
          },
          "image": "https://api.braincloudservers.com/files/portal/g/23403/metadata/itemDefinitions/medal_bronze_1.png",
          "resourceGroup": null,
          "resourceTag": null,
          "meta": {
            "level": "bronze"
          },
          "initData": {
            "exp": 0
          },
          "pState": "PUBLISHED",
          "publishedAt": 1566584361752,
          "createdAt": 1566584032523,
          "updatedAt": 1566584437921,
          "version": 4,
          "stackable": true,
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
      "moreBefore": false
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The json context for the page request.


