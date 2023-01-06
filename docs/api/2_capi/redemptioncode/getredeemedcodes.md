# GetRedeemedCodes
## Overview
Retrieve the codes already redeemed by user.

<PartialServop service_name="redemptionCode" operation_name="GET_REDEEMED_CODES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string codeType = "a code type";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.RedemptionCodeService.GetRedeemedCodes(codeType, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *codeType = "a code type";
<%= data.branding.codePrefix %>->getRedemptionCodeService()->getRedeemedCodes(codeType, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *codeType = @"a code type";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> redemptionCodeService] getRedeemedCodes:codeType
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String codeType = "a code type";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getRedemptionCodeService().getRedeemedCodes(codeType, this);

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
var codeType = "a code type";

<%= data.branding.codePrefix %>.redemptionCode.getRedeemedCodes(codeType, result =>
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
var codeType = "a code type";
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.getRedeemedCodes(codeType);
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
	"service": "redemptionCode",
	"operation": "GET_REDEEMED_CODES",
	"data": {
		"codeType": "a code type"
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
        "codes": [
            {
                "gameId": "123456",
                "scanCode": "999999",
                "codeType": "default",
                "version": 2,
                "codeState": "Redeemed",
                "customCodeInfo": {},
                "customRedemptionInfo": {},
                "redeemedByProfileId": "28d0745e-5634-49ae-9b09-f61930ce6e43",
                "redeemedByProfileName": "",
                "invalidationReason": null,
                "createdAt": 0,
                "activatedAt": null,
                "redeemedAt": 1445456503428,
                "invalidatedAt": null
            }
        ]
    }
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found

</details>


## Method Parameters
Parameter | Description
--------- | -----------
codeType | Optional - The type of codes to retrieve. Returns all codes if left unspecified.
#
