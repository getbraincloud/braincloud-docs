# ConfirmFacebookPurchase
## Overview
Confirm Facebook Purchase. On success, the player will be awarded the associated currencies.

<PartialServop service_name="product" operation_name="FB_CONFIRM_PURCHASE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string signedRequest = "Sample Facebook Receipt";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Product.ConfirmFacebookPurchase(signedRequest, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// N/A
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
var signedRequest = "Sample Facebook Receipt";

<%= data.branding.codePrefix %>.product.confirmFacebookPurchase(signedRequest, result =>
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
var signedRequest = "Sample Facebook Receipt";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.confirmFacebookPurchase(signedRequest);
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
	"operation": "FB_CONFIRM_PURCHASE",
	"data": {
		"signed_request": "Sample Facebook Receipt"
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
signedRequest | signed_request object received from Facebook


