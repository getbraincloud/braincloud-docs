# SysGetProductList

Returns the list of products (summary details only) for the specified category (optional).

<PartialServop service_name="productManagement" operation_name="SYS_GET_PRODUCT_LIST" />

## Method Parameters
Parameter | Description
--------- | -----------
category | Optional. The product item category to filter on. Leave blank or null to retrieve all products.

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
var category = "bars";
var productManagementProxy = bridge.getProductManagementServiceProxy();

var postResult = productManagementProxy.sysGetProductList(category);
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
	"operation": "SYS_GET_PRODUCT_LIST",
	"data": {
    "category": "bars"
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
    "products": [
      {
        "itemId": "barBundle1Imp12peer",
        "defaultReferencePrice": -1,
        "iTunesSubscriptionType": "Free",
        "data": {
          "customAttr": "value"
        },
        "imageUrl": "",
        "description": "Bundle of 10 Bars.",
        "title": "Bars (10)",
        "category": "bars",
        "type": "Subscription"
      }
    ]
  },
  "status": 200
}
```
</details>

