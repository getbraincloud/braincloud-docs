# GetCurrency
## Overview
Gets the player's currency for the given currency type **or** all currency types if null passed in.

<PartialServop service_name="product" operation_name="GET_PLAYER_VC" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string currencyType = "coins";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ProductService.GetCurrency(currencyType, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *currencyType = "coins";
<%= data.branding.codePrefix %>->getProductService()->getCurrency(currencyType, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *currencyType = @"coins";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> productService] getCurrency:currencyType
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String currencyType = "coins";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getProductService().getCurrency(currencyType, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var currencyType = "coins";

<%= data.branding.codePrefix %>.product.getCurrency(currencyType, result =>
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
var currencyType = "coins";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.getCurrency(currencyType);
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
	"operation": "GET_PLAYER_VC",
	"data": {
		"vc_id": "coins"
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
		"updatedAt": 1479752110785,
		"currencyMap": {
			"gems": {
				"purchased": 0,
				"balance": 12212,
				"consumed": 133,
				"awarded": 12345
			}
		},
		"parentCurrency": {
			"Master": {
				"credits": {
					"purchased": 0,
					"balance": 12212,
					"consumed": 133,
					"awarded": 12345
				}
			}
		},
		"peerCurrency": {
			"gameLootPeer": {
				"tickets": {
					"purchased": 0,
					"balance": 12212,
					"consumed": 133,
					"awarded": 12345
				}
			}
		},
		"playerId": "362ce861-b749-4ce4-a57a-175232e21b5d",
		"createdAt": 1459439058040
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
currencyType | The currency type to retrieve or null if all currency types are being requested.


