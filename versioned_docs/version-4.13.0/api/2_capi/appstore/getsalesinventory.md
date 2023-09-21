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
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AppStoreService.GetSalesInventory(storeId, userCurrency, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *storeId = "itunes";
const char *userCurrency = "{\"userCurrency\":\"USD\"}";
<%= data.branding.codePrefix %>->getAppStoreService()->getSalesInventory(storeId, userCurrency, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *storeId = @"itunes";
NSString *userCurrency = @"{\"userCurrency\":\"USD\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> appStoreService] getSalesInventory:storeId
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
String storeId = "itunes";
String userCurrency = "{\"userCurrency\":\"USD\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAppStoreService().getSalesInventory(storeId, userCurrency, this);

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

<%= data.branding.codePrefix %>.appStore.getSalesInventory(storeId, userCurrency, result =>
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
var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.getSalesInventory(storeId, userCurrency);
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
userCurrency | The currency to retrieve the sales inventory for. This is only used for Steam and Facebook stores.


