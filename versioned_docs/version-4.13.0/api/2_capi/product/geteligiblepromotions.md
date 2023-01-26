# GetEligiblePromotions
## Overview
Get eligible promotions.

<PartialServop service_name="product" operation_name="ELIGIBLE_PROMOTIONS" / >

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

<%= data.branding.codePrefix %>.ProductService.GetEligiblePromotions(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getProductService()->getEligiblePromotions(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> productService] getEligiblePromotions:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getProductService().getEligiblePromotions(this);

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

<%= data.branding.codePrefix %>.product.getEligiblePromotions(result =>
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
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.getEligiblePromotions();
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

