# GetItemsOnPromotion
Returns all catalog items for which the current user has an eligible promotion, with optional support to filter on a specific 'category'. For each item, the most recently started promotion is considered the 'winning' promotion, if more than one promotion is active at the same time with a promotional price for same item. Optionally include the catalog item definition for each item and the promotion details for all 'winning' promotions.

<PartialServop service_name="userItems" operation_name="GET_ITEMS_ON_PROMOTION" />

## Method Parameters
Parameter | Description
--------- | -----------
shopId | The id identifying the store the item is from, if applicable.
includeDef | If true, the associated item definition info of the promotional items will be included in the response.
includePromotionDetails | If true, the promotion details of the eligible promotions will be included in the response.
optionsJson | Optional support for specifying additional options. Currently supporting option 'category' to include only catalog items configured with the specified category, if desired.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string shopId = "None";
bool includeDef = True;
bool includePromotionDetails = True;
string optionsJson = "{\"category\": \"Equipment\"}";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UseritemsService.GetItemsOnPromotion(shopId, includeDef, includePromotionDetails, optionsJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *shopId = "None";
bool includeDef = True;
bool includePromotionDetails = True;
const char *optionsJson = "{\"category\": \"Equipment\"}";
<%= data.branding.codePrefix %>.getUseritemsService().getItemsOnPromotion(shopId, includeDef, includePromotionDetails, optionsJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *shopId = @"None";
BOOL includeDef = True;
BOOL includePromotionDetails = True;
NSString *optionsJson = @"{\"category\": \"Equipment\"}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> userItemsService] getItemsOnPromotion:
                       shopId:shopId
                   includeDef:includeDef
      includePromotionDetails:includePromotionDetails
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
String shopId = "None";
bool includeDef = True;
bool includePromotionDetails = True;
String optionsJson = "{\"category\": \"Equipment\"}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getUseritemsService.getItemsOnPromotion(shopId, includeDef, includePromotionDetails, optionsJson, this);

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
var shopId = "None";
var includeDef = True;
var includePromotionDetails = True;
var optionsJson = {
    "category": "Equipment"
};
<%= data.branding.codePrefix %>.userItems.getItemsOnPromotion(shopId, includeDef, includePromotionDetails, optionsJson, result =>
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
var shopId = "None";
var includeDef = True;
var includePromotionDetails = True;
var optionsJson = {
    "category": "Equipment"
};
ServerResponse result = await <%= data.branding.codePrefix %>.userItemsService.getItemsOnPromotion(shopId:shopId, includeDef:includeDef, includePromotionDetails:includePromotionDetails, optionsJson:optionsJson);

if (result.statusCode == 200) {
    print("Success");    
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var shopId = "None";
var includeDef = True;
var includePromotionDetails = True;
var optionsJson = {
    "category": "Equipment"
};
var userItemsProxy = bridge.getUseritemsServiceProxy();

var postResult = userItemsProxy.getItemsOnPromotion(shopId, includeDef, includePromotionDetails, optionsJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"userItems",
    "operation":"GET_ITEMS_ON_PROMOTION",
    "data":{
        "shopId":null,
        "includeDef":true,
        "includePromotionDetails":true,
        "optionsJson":{
            "category":"Equipment"
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
    "items": [
      {
        "defId": "s001",
        "itemDef": {
          "resourceGroup": null,
          "sellPrice": {},
          "type": "ITEM",
          "coolDownSecs": 0,
          "recoverySecs": 0,
          "statusName": null,
          "buyPrice": {
            "cus_bar": 88
          },
          "image": null,
          "stackable": true,
          "publishedAt": 1713324249793,
          "pState": "PUBLISHED",
          "activatable": false,
          "tags": null,
          "defId": "s001",
          "maxStackable": 1,
          "blockchain": false,
          "meta": null,
          "consumable": false,
          "name": {
            "en": "Sword"
          },
          "tradable": false,
          "resourceTag": null,
          "uses": null,
          "_id": {
            "timestamp": 1711508420,
            "date": 1711508420000
          },
          "activeSecs": null,
          "category": "weapon",
          "desc": {
            "en": "weapon"
          }
        },
        "winningPromotionId": 1,
        "promotionPrices": [
          {
            "promotionPrice": {
              "cus_bar": 44
            },
            "name": "test",
            "type": "AUTOMATED",
            "promotionId": 1
          }
        ]
      }
    ],
    "promotionDetails": [
      {
        "promotionId": 1,
        "type": "AUTOMATED",
        "name": "test",
        "duration": 10,
        "customJson": {
          "priority": 100,
          "itemIds": {
            "barBundle1Imp": {
              "currency": {
                "bars": 12
              },
              "extra": {
                "specialItemReward": "bonusItemA"
              }
            },
            "gemcollection": {
              "currency": {
                "gems": 7
              },
              "extra": {
                "specialItemReward": "bonusItemA"
              }
            }
          }
        },
        "isRetriggerable": true,
        "maxRetriggers": null,
        "maxPurchases": null,
        "triggeredForUserAt": 1764353888374,
        "expiresForUserAt": 1764389888374
      }
    ]
  },
  "status": 200
}
```

</details>
