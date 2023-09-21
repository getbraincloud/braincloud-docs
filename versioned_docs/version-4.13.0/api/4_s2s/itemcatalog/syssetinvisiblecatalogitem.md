# SysSetInvisibleCatalogItem
## Overview
Set the specified catalog item to invisible on the server.

<PartialServop service_name="itemCatalog" operation_name="SYS_SET_INVISIBLE_CATALOG_ITEM" / >

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
var defId = "sword001";
var version = 1;
var force = false;
var itemCatalogProxy = bridge.getItemCatalogServiceProxy();

var postResult = itemCatalogProxy.sysSetInvisibleCatalogItem(defId, version, force);
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
	"operation": "SYS_SET_INVISIBLE_CATALOG_ITEM",
	"data": {
		"defId": "sword001",
		"version": 1,
		"force": false
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
    "defId": "sword001a",
    "name": "Crimson Sword - Alt",
    "desc": "A sword whose blade was forged in Cherry Kool-aid!",
    "type": "ITEM",
    "category": "sword",
    "tags": [
      "weapon",
      "pointy"
    ],
    "buyPrice": {
      "coins": 200
    },
    "sellPrice": {
      "coins": 150
    },
    "image": "//xxx.jpg",
    "resourceGroup": "equipment.asset",
    "resourceTag": "sword001",
    "meta": {
      "speed": 85,
      "damage": 12,
      "accuracy": 80,
      "range": 5
    },
    "initData": {
      "condition": 100,
      "bonus": 0
    },
    "pState": "INVISIBLE",
    "publishedAt": 0,
    "createdAt": 1567192159250,
    "updatedAt": 1567192312406,
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
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
defId | Unique ID identifying catalog item. 
version | Version of catalog item being edited. 
force | Specify true to set invisible even if the item has previously been retired or revoked, otherwise false. 


