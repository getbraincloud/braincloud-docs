# SysPublishCatalogItem
## Overview
Publish the specified catalog item on the server.

<PartialServop service_name="itemCatalog" operation_name="SYS_PUBLISH_CATALOG_ITEM" / >

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

var postResult = itemCatalogProxy.sysPublishCatalogItem(defId, version, force);
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
	"operation": "SYS_PUBLISH_CATALOG_ITEM",
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
    "pState": "PUBLISHED",
    "publishedAt": 1567192243524,
    "createdAt": 1567192113061,
    "updatedAt": 1567192243524,
    "version": 4,
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
force | Specify true to publish items that have previously been retired or revoked, otherwise false. 


