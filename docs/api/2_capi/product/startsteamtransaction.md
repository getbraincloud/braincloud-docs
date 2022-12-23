# StartSteamTransaction
## Overview
Initialize a Steam transaction.

<PartialServop service_name="product" operation_name="START_STEAM_TRANSACTION" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string itemId = "item01";
string language = "en";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ProductService.StartSteamTransaction(itemId, language, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *itemId = "item01";
const char *language = "en";
<%= data.branding.codePrefix %>->getProductService()->startSteamTransaction(itemId, language, this);
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
var itemId = "item01";
var language = "en";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.startSteamTransaction(itemId, language);
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
	"operation": "START_STEAM_TRANSACTION",
	"data": {
		"itemId": "item01",
		"language": "en"
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
    "data": {}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
itemId | Items to purchase
language | ISO 639-1 language code


