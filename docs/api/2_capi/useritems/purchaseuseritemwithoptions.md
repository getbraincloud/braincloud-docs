# PurchaseUserItemWithOptions
Purchases a quantity of an item from the specified store, if the user has enough funds and purchasing for listed buy price is not disabled (and no eligible promotion) for associated catalog item definition. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language. Additional 'optionsJson' to provide directives for processing, especially relevant for purchases involving stackable catalog items having a maxStackable (purchasing the catalog item directly or purchasing a BUNDLE type containing any such category items).

<PartialServop service_name="userItems" operation_name="PURCHASE_USER_ITEM" />

## Method Parameters
Parameter | Description
--------- | -----------
defId | The unique id of the item definition to purchase.
quantity | The quantity of the item to purchase.
shopId | The id identifying the store the item is being purchased from, if applicable.
includeDef | If true, the associated item definition will be included in the response.
optionsJson | Optional support for specifying additional options, especially for purchases involving stackable items having a maxStackable limit. Option 'blockIfExceedItemMaxStackable' indicating how to process the purchase if the defId is for a stackable item with a max stackable quantity and the specified quantity being purchased is too high - If true and the quantity is too high, the call is blocked and an error is returned. If false (default) and quantity is too high, the quantity is adjusted to the allowed maximum and the quantity not purchased is reported in response key 'itemsNotPurchased' - unless the adjusted quantity would be 0, in which case the call is blocked and an error is returned. Option 'blockIfExceedContainedItemMaxStackable' (BUNDLE type only) - If true, fail the purchase if quantity of bundle content item would be in excess of its maxStackable IF the bundle were to be opened immediately (based on its currenct quantity). If false, just report the excess quantity for any item if the bundle were opened immediately.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// ITEM type
string defId = "StackableHealthPotion";
string optionsJson = "{\"blockIfExceedItemMaxStackable\": True}";

// BUNDLE type
// string defId = "BUNDLE001";
// string optionsJson = "{\"blockIfExceedItemMaxStackable\": True, \"blockIfExceedContainedItemMaxStackable\": False}";

int quantity = 1;
string shopId = "None";
bool includeDef = True;

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UseritemsService.PurchaseUserItemWithOptions(defId, quantity, shopId, includeDef, optionsJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// ITEM type
const char *defId = "StackableHealthPotion";
const char *optionsJson = "{\"blockIfExceedItemMaxStackable\": True}";

// BUNDLE type
// const char *defId = "BUNDLE001";
// const char *optionsJson = "{\"blockIfExceedItemMaxStackable\": True, \"blockIfExceedContainedItemMaxStackable\": False}";

int quantity = 1;
const char *shopId = "None";
bool includeDef = True;
<%= data.branding.codePrefix %>.getUseritemsService().purchaseUserItemWithOptions(defId, quantity, shopId, includeDef, optionsJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// ITEM type
NSString *defId = @"StackableHealthPotion";
NSString *optionsJson = @"{\"blockIfExceedItemMaxStackable\": True}";

// BUNDLE type
// NSString *defId = @"BUNDLE001";
// NSString *optionsJson = @"{\"blockIfExceedItemMaxStackable\": True, \"blockIfExceedContainedItemMaxStackable\": False}";

int quantity = 1;
NSString *shopId = @"None";
BOOL includeDef = True;
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> userItemsService] purchaseUserItemWithOptions:
                        defId:defId
                     quantity:quantity
                       shopId:shopId
                   includeDef:includeDef
                  optionsJson:optionsJson
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// ITEM type
String defId = "StackableHealthPotion";
String optionsJson = "{\"blockIfExceedItemMaxStackable\": True}";

// BUNDLE type
// String defId = "BUNDLE001";
// String optionsJson = "{\"blockIfExceedItemMaxStackable\": True, \"blockIfExceedContainedItemMaxStackable\": False}";

int quantity = 1;
String shopId = "None";
bool includeDef = True;
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getUseritemsService.purchaseUserItemWithOptions(defId, quantity, shopId, includeDef, optionsJson, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// ITEM type
var defId = "StackableHealthPotion";
var optionsJson = {
    "blockIfExceedItemMaxStackable": true
};

// BUNDLE type
// var defId = "BUNDLE001";
// var optionsJson = {
//     "blockIfExceedItemMaxStackable": true,
//     "blockIfExceedContainedItemMaxStackable": false
// };

var quantity = 1;
var shopId = "None";
var includeDef = True;
<%= data.branding.codePrefix %>.userItems.purchaseUserItemWithOptions(defId, quantity, shopId, includeDef, optionsJson, result =>
{
  var status = result.status;
  console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// ITEM type
var defId = "StackableHealthPotion";
var optionsJson = {
    "blockIfExceedItemMaxStackable": true
};

// BUNDLE type
// var defId = "BUNDLE001";
// var optionsJson = {
//     "blockIfExceedItemMaxStackable": true,
//     "blockIfExceedContainedItemMaxStackable": false
// };

var quantity = 1;
var shopId = "None";
var includeDef = True;
ServerResponse result = await <%= data.branding.codePrefix %>.userItemsService.purchaseUserItemWithOptions(defId:defId, quantity:quantity, shopId:shopId, includeDef:includeDef, optionsJson:optionsJson);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
-- ITEM type
local defId = "StackableHealthPotion"
local optionsJson = {
    blockIfExceedItemMaxStackable = true
}

-- BUNDLE type
-- local defId = "BUNDLE001"
-- local optionsJson = {
--     blockIfExceedItemMaxStackable = true,
--     blockIfExceedContainedItemMaxStackable = false
-- }

local quantity = 1
local shopId = "None"
local includeDef = true

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getUserItemsService():purchaseUserItemWithOptions(defId, quantity, shopId, includeDef, optionsJson, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// ITEM type
var defId = "StackableHealthPotion";
var optionsJson = {
    "blockIfExceedItemMaxStackable": true
};

// BUNDLE type
// var defId = "BUNDLE001";
// var optionsJson = {
//     "blockIfExceedItemMaxStackable": true,
//     "blockIfExceedContainedItemMaxStackable": false
// };

var quantity = 1;
var shopId = "None";
var includeDef = True;
var userItemsProxy = bridge.getUseritemsServiceProxy();

var postResult = userItemsProxy.purchaseUserItemWithOptions(defId, quantity, shopId, includeDef, optionsJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// ITEM type
{
    "service":"userItems",
    "operation":"PURCHASE_USER_ITEM",
    "data":{
        "defId":"StackableHealthPotion",
        "quantity":1,
        "shopId":null,
        "includeDef":true,
        "optionsJson":{
            "blockIfExceedItemMaxStackable":true
        }
    }
}

// BUNDLE type
{
    "service":"userItems",
    "operation":"PURCHASE_USER_ITEM",
    "data":{
        "defId":"BUNDLE001",
        "quantity":1,
        "shopId":null,
        "includeDef":true,
        "optionsJson":{
            "blockIfExceedItemMaxStackable":true,
            "blockIfExceedContainedItemMaxStackable":false
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
        "quantity": -7,
        "itemsNotAwarded": {
            "sword001": 8
        },
        "items": {
            "3f980b72-e9b0-421c-a23b-09f4a297432f": {
                "itemId": "3f980b72-e9b0-421c-a23b-09f4a297432f",
                "defId": "sword001",
                "type": "ITEM",
                "quantity": 2,
                "itemData": {},
                "giftedTo": null,
                "giftedFrom": null,
                "createdAt": 1763999328116,
                "updatedAt": 1764001716414,
                "version": 10,
                "usesLeft": null,
                "coolDownStart": -1,
                "recoveryStart": -1,
                "maxUses": null,
                "coolDownUntil": -1,
                "recoveryUntil": -1,
                "itemDef": {
                    "defId": "sword001",
                    "name": "crimson sword",
                    "desc": "a sword whose blade is forged in...",
                    "type": "ITEM",
                    "category": "sword",
                    "tags": [
                        "sword",
                        "crimson",
                        "pointy"
                    ],
                    "buyPriceDisabled": false,
                    "buyPrice": {
                        "coins": 200
                    },
                    "sellPrice": {
                        "coins": 200
                    },
                    "image": null,
                    "resourceGroup": "equipment.asset",
                    "resourceTag": "sword001",
                    "meta": null,
                    "pState": "PUBLISHED",
                    "publishedAt": 1763999316395,
                    "stackable": true,
                    "maxStackable": 2,
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
        },
        "currencies": {},
        "currencySpent": {
            "coins": -1400
        },
        "currencyBalances": {
            "createdAt": 1761045719074,
            "currencyMap": {
                "bar": {
                    "consumed": 0,
                    "balance": 220,
                    "purchased": 0,
                    "awarded": 0,
                    "revoked": 0
                },
                "bucks": {
                    "consumed": 0,
                    "balance": 0,
                    "purchased": 0,
                    "awarded": 0,
                    "revoked": 0
                },
                "gems": {
                    "consumed": 0,
                    "balance": 0,
                    "purchased": 0,
                    "awarded": 0,
                    "revoked": 0
                },
                "coins": {
                    "consumed": 0,
                    "balance": 1400,
                    "purchased": 0,
                    "awarded": 0,
                    "revoked": 0
                }
            },
            "playerId": "bbe26c21-02ab-4eb8-a7f0-13d09434cd1b",
            "updatedAt": 1764001716408
        }
    },
    "status": 200
}
```

</details>
