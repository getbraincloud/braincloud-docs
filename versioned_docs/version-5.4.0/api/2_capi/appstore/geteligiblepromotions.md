# GetEligiblePromotions

Get eligible promotions.

<PartialServop service_name="appStore" operation_name="ELIGIBLE_PROMOTIONS" />

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

<%= data.branding.codePrefix %>.AppStoreService.GetEligiblePromotions(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getAppStoreService()->getEligiblePromotions(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> appStoreService] getEligiblePromotions:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getAppStoreService().getEligiblePromotions(this);

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

<%= data.branding.codePrefix %>.appStore.getEligiblePromotions(result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart

ServerResponse result = await <%= data.branding.codePrefix %>.appStoreService.getEligiblePromotions();

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.getEligiblePromotions();
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
	"operation": "ELIGIBLE_PROMOTIONS"
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
        "promotions": [
            {
                "gameId": "10019",
                "promotionId": 9,
                "type": "SCHEDULED",
                "name": "session >= 2",
                "message": "test1",
                "enabled": true,
                "targetAllUsers": false,
                "segments": [
                    5
                ],
                "prices": [
                    {
                        "itemId": "regGems150",
                        "priceId": 1
                    }
                ],
                "notifications": [
                    {
                        "trigger": "ACTIVATED",
                        "notificationTemplateId": 10
                    }
                ],
                "customJson": {
                    "key": "value"
                },
                "startAt": 1415374185745,
                "endAt": 1415806185745,
                "createdAt": 0,
                "updatedAt": 1415729753294
            }
        ]
    }
}
```
</details>

