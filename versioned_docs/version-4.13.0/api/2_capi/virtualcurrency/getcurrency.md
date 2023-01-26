# GetCurrency
## Overview
Gets the player's currency for the given currency type **or** all currency types if null passed in.

<PartialServop service_name="virtualCurrency" operation_name="GET_PLAYER_VC" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string vcId = "coins";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.VirtualCurrencyService.GetCurrency(vcId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *vcId = "coins";
<%= data.branding.codePrefix %>->getVirtualCurrencyService()->getCurrency(vcId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *vcId = @"coins";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> virtualCurrencyService] getCurrency:vcId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String vcId = "coins";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getVirtualCurrencyService().getCurrency(vcId, this);

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
var vcId = "coins";

<%= data.branding.codePrefix %>.virtualCurrency.getCurrency(vcId, result =>
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
var vcId = "coins";
var virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();

var postResult = virtualCurrencyProxy.getCurrency(vcId);
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
	"service": "virtualCurrency",
	"operation": "GET_PLAYER_VC",
	"data": {
		"vcId": "coins"
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
		}
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
vcId | The currency type to retrieve or null if all currency types are being requested. 


