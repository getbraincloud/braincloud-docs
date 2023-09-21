# VerifyMicrosoftReceipt
## Overview
Verify Microsoft Receipt. On success, the player will be awarded the associated currencies.

<PartialServop service_name="product" operation_name="VERIFY_MICROSOFT_RECEIPT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string receipt = "Receipt XML";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ProductService.VerifyMicrosoftReceipt(receipt, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *receipt = "Receipt XML";
<%= data.branding.codePrefix %>->getProductService()->verifyMicrosoftReceipt(receipt, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// NA
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var receipt = "Receipt XML";

<%= data.branding.codePrefix %>.product.verifyMicrosoftReceipt(receipt, result =>
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
var receipt = "Receipt XML";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.verifyMicrosoftReceipt(receipt);
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
	"service": "product",
	"operation": "VERIFY_MICROSOFT_RECEIPT",
	"data": {
		"receipt": "Receipt XML"
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
    "status": 200,
    "data": {
        "result": "OK"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
receipt | Receipt XML


