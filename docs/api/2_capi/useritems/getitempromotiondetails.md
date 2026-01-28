# GetItemPromotionDetails
Returns list of promotional details for the specified item definition, for promotions available to the current user.

<PartialServop service_name="userItems" operation_name="GET_ITEM_PROMOTION_DETAILS" />

## Method Parameters
Parameter | Description
--------- | -----------
defId | The unique id of the item definition to check.
shopId | The id identifying the store the item is from, if applicable.
includeDef | If true, the associated item definition will be included in the response.
includePromotionDetails | If true, the promotion details will be included in the response.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string defId = "sword001";
string shopId = "None";
bool includeDef = True;
bool includePromotionDetails = True;

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UseritemsService.GetItemPromotionDetails(defId, shopId, includeDef, includePromotionDetails, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *defId = "sword001";
const char *shopId = "None";
bool includeDef = True;
bool includePromotionDetails = True;
<%= data.branding.codePrefix %>.getUseritemsService().getItemPromotionDetails(defId, shopId, includeDef, includePromotionDetails, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *defId = @"sword001";
NSString *shopId = @"None";
BOOL includeDef = True;
BOOL includePromotionDetails = True;
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> userItemsService] getItemPromotionDetails:
                        defId:defId
                       shopId:shopId
                   includeDef:includeDef
      includePromotionDetails:includePromotionDetails
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String defId = "sword001";
String shopId = "None";
bool includeDef = True;
bool includePromotionDetails = True;
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getUseritemsService.getItemPromotionDetails(defId, shopId, includeDef, includePromotionDetails, this);

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
var defId = "sword001";
var shopId = "None";
var includeDef = True;
var includePromotionDetails = True;
<%= data.branding.codePrefix %>.userItems.getItemPromotionDetails(defId, shopId, includeDef, includePromotionDetails, result =>
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
var defId = "sword001";
var shopId = "None";
var includeDef = True;
var includePromotionDetails = True;
ServerResponse result = await <%= data.branding.codePrefix %>.userItemsService.getItemPromotionDetails(defId:defId, shopId:shopId, includeDef:includeDef, includePromotionDetails:includePromotionDetails);

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
var defId = "sword001";
var shopId = "None";
var includeDef = True;
var includePromotionDetails = True;
var userItemsProxy = bridge.getUseritemsServiceProxy();

var postResult = userItemsProxy.getItemPromotionDetails(defId, shopId, includeDef, includePromotionDetails);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"userItems",
    "operation":"GET_ITEM_PROMOTION_DETAILS",
    "data":{
        "defId":"sword001",
        "shopId":null,
        "includeDef":true,
        "includePromotionDetails":true
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
    "itemDef": {
      "defId": "s001",
      "name": "Sword",
      "desc": "weapon",
      "type": "ITEM",
      "category": "weapon",
      "tags": null,
      "buyPriceDisabled": false,
      "buyPrice": {
        "cus_bar": 88
      },
      "sellPrice": {},
      "image": null,
      "resourceGroup": null,
      "resourceTag": null,
      "meta": null,
      "pState": "PUBLISHED",
      "publishedAt": 1713324249793,
      "stackable": true,
      "maxStackable": 1,
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
    },
    "promotions": [
      {
        "gameId": "23782",
        "promotionId": 1,
        "type": "AUTOMATED",
        "name": "test",
        "message": "test",
        "enabled": true,
        "segments": [
          1
        ],
        "prices": [
          {
            "itemId": "comearmarkcpeappunlimited",
            "priceId": 0
          }
        ],
        "notifications": [],
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
        "createdAt": 1612991666850,
        "updatedAt": 1764000936099,
        "version": 8,
        "items": {
          "s001": {
            "defId": "s001",
            "buyPrice": {
              "cus_bar": 44
            }
          }
        },
        "triggeredForUserAt": 1764000265580,
        "expiresForUserAt": 1764036265580
      }
    ]
  },
  "status": 200
}
```

</details>
