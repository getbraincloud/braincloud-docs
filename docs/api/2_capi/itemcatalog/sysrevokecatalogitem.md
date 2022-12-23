# SysRevokeCatalogItem
## Overview
Revoke the specified catalog item on the server.

<PartialServop service_name="itemCatalog" operation_name="SYS_REVOKE_CATALOG_ITEM" / >

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
var version = 1;
var itemCatalogProxy = bridge.getItemCatalogServiceProxy();

var postResult = itemCatalogProxy.sysRevokeCatalogItem(defId, version);
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
	"operation": "SYS_REVOKE_CATALOG_ITEM",
	"data": {
		"defId": "sword001",
		"version": 1
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
    "defId": "sword001",
    "name": "Cherry Sword",
    "desc": "A crimson sword whose blade was forged in Cherry Kool-aid!",
    "type": "ITEM",
    "category": "sword",
    "tags": [
      "weapon",
      "pointy",
      "crimson",
      "cherry"
    ],
    "buyPrice": {
      "coins": 250
    },
    "sellPrice": {
      "coins": 180
    },
    "image": "//cherrySword.jpg",
    "resourceGroup": "equipment.asset",
    "resourceTag": "sword001",
    "meta": {
      "speed": 80,
      "damage": 10,
      "accuracy": 85,
      "range": 7
    },
    "initData": {
      "condition": 100,
      "bonus": 0
    },
    "pState": "REVOKED",
    "publishedAt": 1567192243524,
    "createdAt": 1567192113061,
    "updatedAt": 1567192290585,
    "version": 6,
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


