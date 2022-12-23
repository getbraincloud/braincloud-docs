# SysDeleteProductPrice
## Overview
Deletes a price for the given product item. If the priceId being deleted is the currently active price, the defaultPriceId will be set to -1 (not-for-sale).

<PartialServop service_name="productManagement" operation_name="SYS_DELETE_PRODUCT_PRICE" / >

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
var itemId = "gold_bars_10";
var version = 3;
var priceId = 2;
var productManagementProxy = bridge.getProductManagementServiceProxy();

var postResult = productManagementProxy.sysDeleteProductPrice(itemId, version, priceId);
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
	"service": "productManagement",
	"operation": "SYS_DELETE_PRODUCT_PRICE",
	"data": {
    "itemId": "gold_bars_10",
    "version": 3,
    "priceId": 2
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
    "gameId": "23783",
    "itemId": "gold_bars_10",
    "type": "Consumable",
    "iTunesSubscriptionType": null,
    "category": "bars",
    "title": "Bars (10)",
    "description": "Bundle of 10 Bars.",
    "imageUrl": "",
    "currency": {
      "bar": 10
    },
    "parentCurrency": {},
    "peerCurrency": {
      "deploypeer": {
        "gems": 11
      }
    },
    "defaultPriceId": -1,
    "prices": [
      {
        "priceId": 0,
        "referencePrice": 99,
        "storeData": {
          "amazon": {
            "id": "amazoniapid"
          },
          "itunes": {
            "ids": [
              {
                "appId": "iphone",
                "itunesId": "appleiapid"
              }
            ]
          },
          "facebook": {
            "currencyList": [
              {
                "currency": "USD",
                "price": 0.99
              },
              {
                "currency": "CAD",
                "price": 1.29
              }
            ]
          },
          "googlePlay": {
            "id": "googleiapid"
          }
        }
      },
      {
        "priceId": 1,
        "referencePrice": 999,
        "storeData": {
          "amazon": {
            "id": "amazoniapid"
          },
          "itunes": {
            "ids": [
              {
                "appId": "iphone",
                "itunesId": "appleiapid"
              }
            ]
          },
          "facebook": {
            "currencyList": [
              {
                "currency": "USD",
                "price": 0.99
              },
              {
                "currency": "CAD",
                "price": 1.29
              }
            ]
          },
          "googlePlay": {
            "id": "googleiapid"
          }
        }
      }
    ],
    "data": {
      "customAttr": "value"
    },
    "createdAt": 1592928409270,
    "updatedAt": 1592930578072,
    "version": 4,
    "absoluteImageUrl": "https://api.braincloudservers.com/files/portal/g/23783"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
itemId | The product item identifier.
version | The product configuration version. The version being validated. Pass -1 to bypass version checking.
priceId | The priceId being deleted.


