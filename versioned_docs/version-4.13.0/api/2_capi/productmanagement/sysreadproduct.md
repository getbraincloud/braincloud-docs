# SysReadProduct
## Overview
Retrieve the full product meta-data for the specified product.

<PartialServop service_name="productManagement" operation_name="SYS_READ_PRODUCT" / >

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
var productManagementProxy = bridge.getProductManagementServiceProxy();

var postResult = productManagementProxy.sysReadProduct(itemId);
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
	"operation": "SYS_READ_PRODUCT",
	"data": {
    "itemId": "gold_bars_10"
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
    "productDetails": {
      "gameId": "23783",
      "itemId": "gold_bars_10",
      "type": "Consumable",
      "iTunesSubscriptionType": null,
      "category": "gold",
      "title": "product",
      "description": "gold_bars_10",
      "imageUrl": null,
      "currency": {},
      "parentCurrency": {},
      "peerCurrency": {
        "deploypeer": {
          "gems": 1
        }
      },
      "defaultPriceId": 0,
      "prices": [
        {
          "priceId": 0,
          "referencePrice": 400,
          "storeData": {
            "amazon": {
              "id": "com.amazon.cunsumable.gold.v1"
            },
            "facebook": {
              "currencyList": [
                {
                  "currency": "USD",
                  "price": 6
                }
              ]
            },
            "googlePlay": {
              "id": "3"
            }
          }
        },
        {
          "priceId": 1,
          "referencePrice": 500,
          "storeData": {
            "amazon": {
              "id": "a"
            }
          }
        }
      ],
      "data": null,
      "createdAt": 1592542611282,
      "updatedAt": 1592543124830,
      "version": 7,
      "absoluteImageUrl": null
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
itemId | The item id being requested.


