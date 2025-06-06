# SysSetDefaultProductPrice

Sets the default (i.e. active) price for the given product item.

<PartialServop service_name="productManagement" operation_name="SYS_SET_DEFAULT_PRODUCT_PRICE" />

## Method Parameters
Parameter | Description
--------- | -----------
itemId | The product item identifier.
version | The product configuration version. The version being validated. Pass -1 to bypass version checking.
priceId | The priceId being set as the default. Pass -1 to make a product item not-for-sale.

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
var itemId = "gold_bars_10";
var version = 1;
var priceId = 2;
var productManagementProxy = bridge.getProductManagementServiceProxy();

var postResult = productManagementProxy.sysSetDefaultProductPrice(itemId, version, priceId);
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
	"operation": "SYS_SET_DEFAULT_PRODUCT_PRICE",
	"data": {
    "itemId": "gold_bars_10",
    "version": 1,
    "priceId": 2
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
    "defaultPriceId": 2,
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
      },
      {
        "priceId": 2,
        "referencePrice": 699,
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
    "updatedAt": 1592931088568,
    "version": 2,
    "absoluteImageUrl": "https://api.braincloudservers.com/files/portal/g/23783"
  },
  "status": 200
}
```
</details>

