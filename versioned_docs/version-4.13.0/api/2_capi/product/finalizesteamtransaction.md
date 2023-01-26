# FinalizeSteamTransaction
## Overview
Finalize Steam Transaction. On success, the player will be awarded the associated currencies.

<PartialServop service_name="product" operation_name="FINALIZE_STEAM_TRANSACTION" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string transId = "trans01";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ProductService.FinalizeSteamTransaction(transId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *transId = "trans01";
<%= data.branding.codePrefix %>->getProductService()->finalizeSteamTransaction(transId, this);
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
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var transId = "trans01";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.finalizeSteamTransaction(transId);
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
	"operation": "FINALIZE_STEAM_TRANSACTION",
	"data": {
		"transId": "trans01"
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
transId | Steam transaction id


