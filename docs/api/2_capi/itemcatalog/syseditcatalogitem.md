# SysEditCatalogItem
Update a catalog item on the server. Note: Default for buyPriceDisabled is false. If set to true, the item cannot be purchased except through a promotion.

<PartialServop service_name="itemCatalog" operation_name="SYS_EDIT_CATALOG_ITEM" />

## Method Parameters
Parameter | Description
--------- | -----------
defId | Unique ID identifying catalog item to be updated.
version | Version of catalog item being edited.
itemDefData | The data to update on the catalog item. Supported types are ITEM and BUNDLE.

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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// ITEM type
var defId = "sword001";
var version = 1;
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
    "buyPriceDisabled": false,
    "buyPrice": {
        "coins": 200
    },
    "sellPrice": {
        "coins": 150
    },
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
    "maxStackable": null,
    "consumable": false,
    "uses": 1,
    "coolDownSecs": 0,
    "recoverySecs": 0,
    "activatable": false,
    "statusName": null,
    "activeSecs": null,
    "maxActiveSecs": null,
    "statusBehaviour": null,
    "tradable": false,
    "blockchain": false
};

// BUNDLE type
// var defId = "HOLIDAYBUNDLE2025";
// var version = 1;
// var itemDefData = {
//     "type": "BUNDLE",
//     "name": {
//         "en": "Holiday Bundle 2025"
//     },
//     "desc": {
//         "en": "A fun bundle of items and currency for the holidays!"
//     },
//     "category": "HolidayBundles",
//     "tags": [
//         "holiday",
//         "2025"
//     ],
//     "buyPriceDisabled": false,
//     "buyPrice": {
//         "coins": 200
//     },
//     "sellPrice": {
//         "coins": 50
//     },
//     "resourceGroup": "",
//     "resourceTag": "",
//     "image": null,
//     "meta": {
//         "special": true
//     },
//     "initData": {
//         "bonus": 0
//     },
//     "stackable": false,
//     "maxStackable": null,
//     "tradable": false,
//     "blockchain": false,
//     "items": {
//         "holidaygift2025": {
//             "defId": "holidaygift2025",
//             "quantity": 1
//         },
//         "trinket002": {
//             "defId": "trinket002",
//             "quantity": 2
//         }
//     },
//     "currency": {
//         "gumdrops": 25
//     }
// };

var itemCatalogProxy = bridge.getItemcatalogServiceProxy();

var postResult = itemCatalogProxy.sysEditCatalogItem(defId, version, itemDefData);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// ITEM type
{
    "service":"itemCatalog",
    "operation":"SYS_EDIT_CATALOG_ITEM",
    "data":{
        "defId":"sword001",
        "version":1,
        "itemDefData":{
            "name":{
                "en":"Crimson Sword"
            },
            "desc":{
                "en":"A sword whose blade was forged in Cherry Kool-aid!"
            },
            "category":"sword",
            "tags":[
                "weapon",
                "pointy"
            ],
            "buyPriceDisabled":false,
            "buyPrice":{
                "coins":200
            },
            "sellPrice":{
                "coins":150
            },
            "resourceGroup":"equipment.asset",
            "resourceTag":"sword001",
            "meta":{
                "speed":85,
                "damage":12,
                "accuracy":80,
                "range":5
            },
            "initData":{
                "condition":100,
                "bonus":0
            },
            "stackable":false,
            "maxStackable":null,
            "consumable":false,
            "uses":1,
            "coolDownSecs":0,
            "recoverySecs":0,
            "activatable":false,
            "statusName":null,
            "activeSecs":null,
            "maxActiveSecs":null,
            "statusBehaviour":null,
            "tradable":false,
            "blockchain":false
        }
    }
}

// BUNDLE type
{
    "service":"itemCatalog",
    "operation":"SYS_EDIT_CATALOG_ITEM",
    "data":{
        "defId":"HOLIDAYBUNDLE2025",
        "version":1,
        "itemDefData":{
            "type":"BUNDLE",
            "name":{
                "en":"Holiday Bundle 2025"
            },
            "desc":{
                "en":"A fun bundle of items and currency for the holidays!"
            },
            "category":"HolidayBundles",
            "tags":[
                "holiday",
                "2025"
            ],
            "buyPriceDisabled":false,
            "buyPrice":{
                "coins":200
            },
            "sellPrice":{
                "coins":50
            },
            "resourceGroup":"",
            "resourceTag":"",
            "image":null,
            "meta":{
                "special":true
            },
            "initData":{
                "bonus":0
            },
            "stackable":false,
            "maxStackable":null,
            "tradable":false,
            "blockchain":false,
            "items":{
                "holidaygift2025":{
                    "defId":"holidaygift2025",
                    "quantity":1
                },
                "trinket002":{
                    "defId":"trinket002",
                    "quantity":2
                }
            },
            "currency":{
                "gumdrops":25
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
        "updatedAt": 1567192188475,
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
