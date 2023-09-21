# SysAddProductPrice
## Overview
Adds a new price to the given product item.

<PartialServop service_name="productManagement" operation_name="SYS_ADD_PRODUCT_PRICE" / >

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
var itemId = "gold_bars_10";
var version = 1;
var priceJson = {
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
};
var productManagementProxy = bridge.getProductManagementServiceProxy();

var postResult = productManagementProxy.sysAddProductPrice(itemId, version, priceJson);
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
	"operation": "SYS_ADD_PRODUCT_PRICE",
	"data": {
    "itemId": "gold_bars_10",
    "version": 1,
    "priceJson": { 
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
      }
    ],
    "data": {
      "customAttr": "value"
    },
    "createdAt": 1592928409270,
    "updatedAt": 1592928588330,
    "version": 2,
    "absoluteImageUrl": "https://api.braincloudservers.com/files/portal/g/23783",
    "newPriceId": 0
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
itemId | The product item identifier.
version | The product configuration version. 
priceJson | The price details as JSON map.


