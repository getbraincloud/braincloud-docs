# SysAddCatalogItem
## Overview
Create a new catalog item on the server.

<PartialServop service_name="itemCatalog" operation_name="SYS_ADD_CATALOG_ITEM" / >

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
var itemDefData = {
  "name": {
    "en": "Crimson Sword"
  },
  "desc": {
    "en": "A sword whose blade was forged in Cherry Kool-aid!"
  },
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
  "stackable": false,
  "consumable": false,
  "uses": 1,
  "coolDownSecs": 0,
  "recoverySecs": 0,
  "activatable": false,
  "statusName": null,
  "activeSecs": 0,
  "tradable": false,
  "blockchain": false,
  "blockchainDefId": null
};
var itemCatalogProxy = bridge.getItemCatalogServiceProxy();

var postResult = itemCatalogProxy.sysAddCatalogItem(defId, itemDefData);
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
	"operation": "SYS_ADD_CATALOG_ITEM",
	"data": {
		"defId": "sword001",
		"itemDefData": {
			"name": {
				"en": "Crimson Sword"
			},
			"desc": {
				"en": "A sword whose blade was forged in Cherry Kool-aid!"
			},
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
			"stackable": false,
			"consumable": false,
			"uses": 1,
			"coolDownSecs": 0,
			"recoverySecs": 0,
			"activatable": false,
			"statusName": null,
			"activeSecs": 0,
			"tradable": false,
			"blockchain": false,
			"blockchainDefId": null
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
    "defId": "sword001",
    "name": {
      "en": "Crimson Sword"
    },
    "desc": {
      "en": "A sword whose blade was forged in Cherry Kool-aid!"
    },
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
    "pState": "DRAFT",
    "publishedAt": 0,
    "createdAt": 1567192113061,
    "updatedAt": 1567192113061,
    "version": 1,
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
defId | Unique ID for new catalog item. Required. 
itemDefData | The data defining the catalog item. 


