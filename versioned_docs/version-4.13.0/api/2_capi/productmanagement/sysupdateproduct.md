# SysUpdateProduct
## Overview
Updates an existing product with the specifed values. Pass -1 as the version to bypass version checking.

<PartialServop service_name="productManagement" operation_name="SYS_UPDATE_PRODUCT" / >

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
var itemId = "barBundle1Imp";
var version = 1;
var productJson = {
  "category": "bars",
  "title": "Bars (10)",
  "description": "The new bundle of 10 Bars."
};
var productManagementProxy = bridge.getProductManagementServiceProxy();

var postResult = productManagementProxy.sysUpdateProduct(itemId, version, productJson);
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
	"operation": "SYS_UPDATE_PRODUCT",
	"data": {
    "itemId": "barBundle1Imp",
    "version": 1,
    "productJson": { 
      "category": "bars",
      "title": "Bars (10)",
      "description": "The new bundle of 10 Bars."
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
    "itemId": "barBundle1Imp",
    "type": "Subscription",
    "iTunesSubscriptionType": "Free",
    "category": "bars",
    "title": "Bars (10)",
    "description": "The new bundle of 10 Bars.",
    "imageUrl": "",
    "currency": {
      "bar": 10
    },
    "parentCurrency": {},
    "peerCurrency": {},
    "defaultPriceId": -1,
    "prices": [],
    "data": {
      "customAttr": "value"
    },
    "createdAt": 1592594640577,
    "updatedAt": 1592596878019,
    "version": 2,
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
version | The product configuration version.
productJson | The product details to update. Note: If itemId is included in the productJson, it is ignored. The itemId provided as a direct parameter takes priority.


