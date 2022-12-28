# RefreshPromotions
## Overview
Returns up-to-date eligible 'promotions' for the user and a 'promotionsRefreshed' flag indicating whether the user's promotion info required refreshing.

:::success
A user’s segments and promotions are automatically refreshed when they authenticate. Calling this method allows apps to periodically refresh the segment + promotion data for the user during the play session.
:::

:::tip
Note that this is an expensive call - calling it is equates to 2 API counts (technically 1 API + 10 bulk API) - so use it sparingly!
:::

<PartialServop service_name="appStore" operation_name="REFRESH_PROMOTIONS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.AppStoreService.RefreshPromotions(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getAppStoreService()->refreshPromotions(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> appStoreService] refreshPromotions:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAppStoreService().refreshPromotions(this);

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

<%= data.branding.codePrefix %>.appStore.refreshPromotions(result =>
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
var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.refreshPromotions();
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
	"operation": "REFRESH_PROMOTIONS"
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
    "promotionsRefreshed": false,
    "promotions": [
      {
        "gameId": "24591",
        "promotionId": 13,
        "type": "AUTOMATED",
        "name": "adtestidunder50",
        "message": "",
        "enabled": true,
        "segments": [
          3
        ],
        "prices": [
          {
            "itemId": "barBundle1Imp",
            "priceId": 0
          },
          {
            "itemId": "gemcollection",
            "priceId": 3
          }
        ],
        "notifications": [
          {
            "trigger": "ACTIVATED",
            "notificationTemplateId": 1
          }
        ],
        "duration": 5,
        "customJson": null,
        "isRetriggerable": true,
        "maxRetriggers": null,
        "maxPurchases": 1,
        "createdAt": 1619802897824,
        "updatedAt": 1619802981253,
        "version": 2,
        "triggeredForUserAt": 1619802981350,
        "expiresForUserAt": 1619820981350
      }
    ]
  },
  "status": 200
}
```
</details>

