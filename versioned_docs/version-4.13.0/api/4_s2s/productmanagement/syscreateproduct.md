# SysCreateProduct
## Overview
Creates a new product with the specifed values.

<PartialServop service_name="productManagement" operation_name="SYS_CREATE_PRODUCT" / >

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
var productJson = {
  "itemId": "barBundle1Imp12peer",
  "type": "Subscription",
  "iTunesSubscriptionType": "Free",
  "category": "bars",
  "title": "Bars (10)",
  "description": "Bundle of 10 Bars.",
  "imageUrl": "",
  "currency": {
    "bar": 10
  },
  "parentCurrency": {},
  "peerCurrency": {
      "deploypeer":{
          "gems":15
      }
  },
  "data": {
    "customAttr": "value"
  }
};
var productManagementProxy = bridge.getProductManagementServiceProxy();

var postResult = productManagementProxy.sysCreateProduct(productJson);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
//for iTunesSubscriptionType Subscription. Should be one of AutoRenewable, Free, or NonRenewing
{
	"service": "productManagement",
	"operation": "SYS_CREATE_PRODUCT",
	"data": {
    "productJson": { 
      "itemId": "barBundle1Imp12peer",
      "type": "Subscription",
      "iTunesSubscriptionType": "Free",
      "category": "bars",
      "title": "Bars (10)",
      "description": "Bundle of 10 Bars.",
      "imageUrl": "",
      "currency": {
        "bar": 10
      },
      "parentCurrency": {},
      "peerCurrency": {
          "deploypeer":{
              "gems":15
          }
      },
      "data": {
        "customAttr": "value"
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
    "itemId": "barBundle1Imp12peer",
    "type": "Subscription",
    "iTunesSubscriptionType": "Free",
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
        "gems": 15
      }
    },
    "defaultPriceId": -1,
    "prices": [],
    "data": {
      "customAttr": "value"
    },
    "createdAt": 1592594992376,
    "updatedAt": 1592594992376,
    "version": 1,
    "absoluteImageUrl": "https://api.braincloudservers.com/files/portal/g/23783"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
productJson | The product details.


