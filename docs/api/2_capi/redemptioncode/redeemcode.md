# RedeemCode
## Overview
Redeem a code.

<PartialServop service_name="redemptionCode" operation_name="REDEEM_CODE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string scanCode = "a scan code";
string codeType = "a code type";
string customRedemptionInfo = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.RedemptionCodeService.RedeemCode(scanCode, codeType, customRedemptionInfo, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *scanCode = "a scan code";
const char *codeType = "a code type";
const char *customRedemptionInfo = "{}";
<%= data.branding.codePrefix %>->getRedemptionCodeService()->redeemCode(scanCode, codeType, customRedemptionInfo, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *scanCode = @"a scan code";
NSString *codeType = @"a code type";
NSString *customRedemptionInfo = @"{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> redemptionCodeService] redeemCode:scanCode
                   codeType:codeType
       customRedemptionInfo:customRedemptionInfo
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String scanCode = "a scan code";
String codeType = "a code type";
String customRedemptionInfo = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getRedemptionCodeService().redeemCode(scanCode, codeType, customRedemptionInfo, this);

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
var scanCode = "a scan code";
var codeType = "a code type";
var customRedemptionInfo = {};

<%= data.branding.codePrefix %>.redemptionCode.redeemCode(scanCode, codeType, customRedemptionInfo, result =>
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
var scanCode = "a scan code";
var codeType = "a code type";
var customRedemptionInfo = {};
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.redeemCode(scanCode, codeType, customRedemptionInfo);
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
	"operation": "REDEEM_CODE",
	"data": {
		"scanCode": "the-scan-code",
		"codeType": "the-code-type",
		"customRedemptionInfo": {}
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
  "data": {
    "gameId": "23782",
    "scanCode": "vfaok-yu7gy-y4ida-jhibz-rtikc",
    "codeType": "ct",
    "redemptionCodeId": "ea2db0da-ef7b-4390-b747-df2eafaba2a3",
    "version": 2,
    "codeState": "Redeemed",
    "customCodeInfo": {},
    "customRedemptionInfo": {},
    "redeemedByProfileId": "c5ecdbda-5f91-41a9-96aa-174f412f7657",
    "redeemedByProfileName": "",
    "invalidationReason": null,
    "createdAt": 1655757623392,
    "activatedAt": 1655757623392,
    "redeemedAt": 1655758430895,
    "invalidatedAt": null,
    "updatedAt": 1655757623392
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
scanCode | The code to redeem
codeType | The type of code
jsonCustomRedemptionInfo | Optional - A JSON string containing custom redemption data
#### Status Codes
Code | Name | Description
---- | ---- | -----------
40395 | REDEMPTION_CODE_NOT_FOUND | The specified code was not found
40398 | REDEMPTION_CODE_NOT_ACTIVE | The specified code is not active
40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found
40401 | REDEMPTION_CODE_REDEEMED | The code has already been redeemed
40402 | REDEMPTION_CODE_REDEEMED_BY_SELF | The code has already been redeemed by the calling user
40403 | REDEMPTION_CODE_REDEEMED_BY_OTHER | The code has already been redeemed by another user


