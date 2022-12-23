# GetSalesInventory
## Overview
Method gets the active sales inventory for the passed-in currency type and platform.

Valid platforms are:
- itunes
- facebook
- appworld
- steam
- windows
- windowsPhone
- googlePlay

<PartialServop service_name="product" operation_name="GET_INVENTORY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string platform = "googlePlay";
string userCurrency = "credits";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ProductService.GetSalesInventory(platform, userCurrency, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *platform = "googlePlay";
const char *userCurrency = "credits";
<%= data.branding.codePrefix %>->getProductService()->getSalesInventory(platform, userCurrency, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *platform = @"googlePlay";
NSString *userCurrency = @"credits";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> productService] getSalesInventory:platform
               userCurrency:userCurrency
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String platform = "googlePlay";
String userCurrency = "credits";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getProductService().getSalesInventory(platform, userCurrency, this);

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
var platform = "googlePlay";
var userCurrency = "credits";

<%= data.branding.codePrefix %>.product.getSalesInventory(platform, userCurrency, result =>
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
var platform = "googlePlay";
var userCurrency = "credits";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.getSalesInventory(platform, userCurrency);
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
	"operation": "GET_INVENTORY",
	"data": {
		"platform": "googlePlay",
		"user_currency": "credits",
		"category": "collectables"
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
        "product_inventory": [
            {
                "currency": {
                    "bar": 50
                },
                "description": "Bundle of 50 Bars.",
                "fbUrl": "https://dev.braincloudservers.com/fbproductservice?gameId=eggies&itemId=barBundle2Imp",
                "gameId": "eggies",
                "imageUrl": "http://eggies6waves.braincloudservers.com/s3/eggies-prod/store/bars.png",
                "itemId": "barBundle2Imp",
                "priceData": {
                    "ids": [
                        {
                            "appId": "ipad",
                            "itunesId": "com.playbrains.eggiesdevhd2.barBundle2Imp"
                        },
                        {
                            "appId": "iphone",
                            "itunesId": "com.playbrains.eggiesdev2.barBundle2Imp"
                        }
                    ]
                },
                "title": "Bars"
            }
        ],
        "server_time": 1395952561266
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
platform | The store platform.
userCurrency | The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.


