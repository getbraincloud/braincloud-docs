# SellUserItem
## Overview
Allows a quantity of a specified user item to be sold. If any quantity of the user item remains, it will be returned, potentially with the associated itemDef (with language fields limited to the current or default language), along with the currency refunded and currency balances.

<PartialServop service_name="userItems" operation_name="SELL_USER_ITEM" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string itemId = "aaa-bbb-ccc-ddd";
int version = 1;
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

<%= data.branding.codePrefix %>.UserItemsService.SellUserItem(itemId, version, quantity, shopId, includeDef, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *itemId = "aaa-bbb-ccc-ddd";
int version = 1;
int quantity = 1;
const char *shopId = "";
bool includeDef = true;
<%= data.branding.codePrefix %>->getUserItemsService()->sellUserItem(itemId, version, quantity, shopId, includeDef, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *itemId = @"aaa-bbb-ccc-ddd";
int version = 1;
int quantity = 1;
NSString *shopId = @"";
bool includeDef = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> userItemsService] sellUserItem:itemId
                    version:version
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
String itemId = "aaa-bbb-ccc-ddd";
int version = 1;
int quantity = 1;
String shopId = "";
boolean includeDef = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getUserItemsService().sellUserItem(itemId, version, quantity, shopId, includeDef, this);

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
var itemId = "aaa-bbb-ccc-ddd";
var version = 1;
var quantity = 1;
var shopId = null;
var includeDef = true;

<%= data.branding.codePrefix %>.userItems.sellUserItem(itemId, version, quantity, shopId, includeDef, result =>
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
var itemId = "aaa-bbb-ccc-ddd";
var version = 1;
var quantity = 1;
var shopId = null;
var includeDef = true;
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.sellUserItem(itemId, version, quantity, shopId, includeDef);
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
	"operation": "SELL_USER_ITEM",
	"data": {
		"itemId": "aaa-bbb-ccc-ddd",
		"version": 1,
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
    "item": {},
    "currencyRefunded": {
      "coins": 400
    },
    "currencyBalances": {
      "createdAt": 1566850026783,
      "currencyMap": {
        "coins": {
          "consumed": 200,
          "balance": 3000200,
          "purchased": 0,
          "awarded": 3000400
        }
      },
      "playerId": "55ffc16e-f92b-44f3-98b0-68a7a4f24106",
      "updatedAt": 1566850242013
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
itemId | The unique id of the user item. 
version | The version of the user item being sold. 
quantity | The quantity of the user item to sell. 
shopId | The id identifying the store the item is being purchased from (not yet supported). Use null or empty string to specify the default shop price.
includeDef | If true and any quantity of the user item remains, the associated item definition will be included in the response. 


