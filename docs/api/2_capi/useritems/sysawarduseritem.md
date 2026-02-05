# SysAwardUserItem
Client cloud code only call to allow item(s) to be awarded to the session user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.

<PartialServop service_name="userItems" operation_name="SYS_AWARD_USER_ITEM" />

## Method Parameters
Parameter | Description
--------- | -----------
defId | The unique id of the item definition to award.
quantity | The quantity of the item to award.
includeDef | If true, the associated item definition will be included in the response.
optionsJson | Optional support for specifying 'blockIfExceedItemMaxStackable' indicating how to process the award if the defId is for a stackable item with a max stackable quantity and the specified quantity to award is too high. If true and the quantity is too high, the call is blocked and an error is returned. If false (default) and quantity is too high, the quantity is adjusted to the allowed maximum and the quantity not awarded is reported in response key 'itemsNotAwarded' - unless the adjusted quantity would be 0, in which case the call is blocked and an error is returned.

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var defId = "sword001";
var quantity = 1;
var includeDef = True;
var optionsJson = {
    "blockIfExceedItemMaxStackable": false
};
var userItemsProxy = bridge.getUseritemsServiceProxy();

var postResult = userItemsProxy.sysAwardUserItem(defId, quantity, includeDef, optionsJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"userItems",
    "operation":"SYS_AWARD_USER_ITEM",
    "data":{
        "defId":"sword001",
        "quantity":1,
        "includeDef":true,
        "optionsJson":{
            "blockIfExceedItemMaxStackable":false
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
        "quantity": 1,
        "items": {
            "5e3d9c33-174c-4826-9b52-d911d56c7671": {
                "itemId": "5e3d9c33-174c-4826-9b52-d911d56c7671",
                "defId": "aa",
                "type": "ITEM",
                "quantity": 1,
                "itemData": {},
                "giftedTo": null,
                "giftedFrom": null,
                "createdAt": 1764001974250,
                "updatedAt": 1764001974250,
                "version": 1,
                "usesLeft": null,
                "coolDownStart": -1,
                "recoveryStart": -1,
                "maxUses": null,
                "coolDownUntil": -1,
                "recoveryUntil": -1,
                "itemDef": {
                    "defId": "aa",
                    "name": "apple",
                    "desc": null,
                    "type": "ITEM",
                    "category": "fruit",
                    "tags": null,
                    "buyPriceDisabled": false,
                    "buyPrice": {},
                    "sellPrice": {},
                    "image": "https://api.braincloudservers.com/files/portal/g/23782/metadata/itemDefinitions/aa.png",
                    "resourceGroup": null,
                    "resourceTag": null,
                    "meta": {},
                    "pState": "PUBLISHED",
                    "publishedAt": 1603486352114,
                    "stackable": false,
                    "maxStackable": null,
                    "tradable": false,
                    "blockchain": false,
                    "consumable": false,
                    "uses": null,
                    "coolDownSecs": 0,
                    "recoverySecs": 0,
                    "activatable": false,
                    "statusName": null,
                    "activeSecs": null,
                    "maxActiveSecs": null,
                    "statusBehaviour": null
                }
            }
        }
    },
    "status": 200
}
```

</details>
