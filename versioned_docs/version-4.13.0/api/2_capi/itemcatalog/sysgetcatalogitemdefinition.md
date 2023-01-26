# SysGetCatalogItemDefinition
## Overview
Reads an existing item definition from the server, with full language fields mappings.

<PartialServop service_name="itemCatalog" operation_name="SYS_GET_CATALOG_ITEM_DEFINITION" / >

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
var defId = "sword001";
var itemCatalogProxy = bridge.getItemCatalogServiceProxy();

var postResult = itemCatalogProxy.sysGetCatalogItemDefinition(defId);
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
  "operation": "SYS_GET_CATALOG_ITEM_DEFINITION",
  "data":
  {
    "defId": "sword001"
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
    "defId": "boost_rapidfire",
    "name": "Rapid Fire",
    "desc": "Rapid fire for the next match.",
    "type": "ITEM",
    "category": "boost",
    "tags": null,
    "buyPrice": {
      "coins": 200
    },
    "sellPrice": {
      "coins": 400
    },
    "image": null,
    "resourceGroup": null,
    "resourceTag": null,
    "meta": {},
    "initData": {},
    "pState": "PUBLISHED",
    "publishedAt": 1566850042148,
    "createdAt": 1566849704195,
    "updatedAt": 1566850232538,
    "version": 4,
    "stackable": false,
    "consumable": false,
    "uses": null,
    "coolDownSecs": 0,
    "recoverySecs": 0,
    "activatable": true,
    "statusName": "boosted",
    "activeSecs": 900000,
    "tradable": true,
    "blockchain": false,
    "blockchainDefId": null
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
defId | The unique id of the item definition.


