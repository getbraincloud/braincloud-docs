# PurchaseUserItem
## Overview
Purchases a quantity of an item from the specified store, if the user has enough funds. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.

<PartialServop service_name="userItems" operation_name="PURCHASE_USER_ITEM" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string defId = "sword001";
int quantity = 1;
string shopId = "";
bool includeDef = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UserItemsService.PurchaseUserItem(defId, quantity, shopId, includeDef, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *defId = "sword001";
int quantity = 1;
const char *shopId = "";
bool includeDef = true;
<%= data.branding.codePrefix %>->getUserItemsService()->purchaseUserItem(defId, quantity, shopId, includeDef, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *defId = @"sword001";
int quantity = 1;
NSString *shopId = @"";
bool includeDef = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> userItemsService] purchaseUserItem:defId
                   quantity:quantity
                     shopId:shopId
                 includeDef:includeDef
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String defId = "sword001";
int quantity = 1;
String shopId = "";
boolean includeDef = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getUserItemsService().purchaseUserItem(defId, quantity, shopId, includeDef, this);

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
var quantity = 1;
var shopId = null;
var includeDef = true;

<%= data.branding.codePrefix %>.userItems.purchaseUserItem(defId, quantity, shopId, includeDef, result =>
{
    var status = result.status;
    console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var defId = "sword001";
var quantity = 1;
var shopId = null;
var includeDef = true;
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.purchaseUserItem(defId, quantity, shopId, includeDef);
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
	"service": "userItems",
	"operation": "PURCHASE_USER_ITEM",
	"data": {
		"defId": "sword001",
		"quantity": 1,
		"shopId": null,
		"includeDef": true
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
    "items": {
      "8e12e907-3f54-4971-b84a-b685ce50b684": {
        "itemId": "8e12e907-3f54-4971-b84a-b685ce50b684",
        "defId": "boost_rapidfire",
        "quantity": 1,
        "usesLeft": null,
        "coolDownStart": -1,
        "recoveryStart": -1,
        "itemData": {},
        "giftedTo": null,
        "giftedFrom": null,
        "blockId": null,
        "createdAt": 1566850132554,
        "updatedAt": 1566850132554,
        "version": 1,
        "maxUses": null,
        "coolDownUntil": -1,
        "recoveryUntil": -1,
        "itemDef": {
          "defId": "boost_rapidfire",
          "name": "Rapid Fire",
          "desc": "Rapid fire for the next match.",
          "type": "ITEM",
          "category": "boost",
          "tags": null,
          "buyPrice": {
            "coins": 200
          },
          "sellPrice": {},
          "image": null,
          "resourceGroup": null,
          "resourceTag": null,
          "meta": {},
          "pState": "PUBLISHED",
          "publishedAt": 1566850042148,
          "stackable": false,
          "consumable": false,
          "uses": null,
          "coolDownSecs": 0,
          "recoverySecs": 0,
          "activatable": true,
          "statusName": "boosted",
          "activeSecs": 900000,
          "tradable": false,
          "blockchain": false,
          "blockchainDefId": null
        }
      }
    },
    "currencySpent": {
      "coins": 200
    },
    "currencyBalances": {
      "createdAt": 1566850026783,
      "currencyMap": {
        "coins": {
          "consumed": 200,
          "balance": 2999800,
          "purchased": 0,
          "awarded": 3000000
        }
      },
      "playerId": "55ffc16e-f92b-44f3-98b0-68a7a4f24106",
      "updatedAt": 1566850132552
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
defId | The unique id of the item definition to purchase. 
quantity | The quantity of the item to purchase. 
shopId | The id identifying the store the item is being purchased from (not yet supported). Use null or empty string to specify the default shop price.
includeDef | If true, the associated item definition will be included in the response. 


