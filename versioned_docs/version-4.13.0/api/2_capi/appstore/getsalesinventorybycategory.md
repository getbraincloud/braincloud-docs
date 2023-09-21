# GetSalesInventoryByCategory
## Overview
Method gets the active sales inventory for the passed-in currency type, platform, and category.

Valid platforms are:
- itunes
- facebook
- appworld
- steam
- windows
- windowsPhone
- googlePlay
- amazon

<PartialServop service_name="appStore" operation_name="GET_INVENTORY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string storeId = "itunes";
string userCurrency = "{\"userCurrency\":\"USD\"}";
string category = "subscriptions";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AppStoreService.GetSalesInventoryByCategory(storeId, userCurrency, category, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *storeId = "itunes";
const char *userCurrency = "{\"userCurrency\":\"USD\"}";
const char *category = "subscriptions";
<%= data.branding.codePrefix %>->getAppStoreService()->getSalesInventoryByCategory(storeId, userCurrency, category, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *storeId = @"itunes";
NSString *userCurrency = @"{\"userCurrency\":\"USD\"}";
NSString *category = @"subscriptions";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> appStoreService] getSalesInventoryByCategory:storeId
               userCurrency:userCurrency
                   category:category
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String storeId = "itunes";
String userCurrency = "{\"userCurrency\":\"USD\"}";
String category = "subscriptions";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAppStoreService().getSalesInventoryByCategory(storeId, userCurrency, category, this);

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
var storeId = "itunes";
var userCurrency = {
    "userCurrency": "USD"
};
var category = "subscriptions";

<%= data.branding.codePrefix %>.appStore.getSalesInventoryByCategory(storeId, userCurrency, category, result =>
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
var storeId = "itunes";
var userCurrency = {
    "userCurrency": "USD"
};
var category = "subscriptions";
var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.getSalesInventoryByCategory(storeId, userCurrency, category);
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
	"service": "appStore",
	"operation": "GET_INVENTORY",
	"data": {
		"storeId": "itunes",
		"category": "subscriptions",
		"priceInfoCriteria": {
			"userCurrency": "USD"
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
    "status": 200,
    "data": {
        "productInventory": [
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
        "serverTime": 1395952561266
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
platform | The store platform. 
category | The product category.
userCurrency | The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.


