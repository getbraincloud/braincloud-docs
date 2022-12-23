# ActivateCode
## Overview
Activate a redemption code. Optional parameters: customCodeInfo.


### Status Codes
Code | Name | Description
---- | ---- | -----------
40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found
40395 | REDEMPTION_CODE_NOT_FOUND | The specified code was not found
40397 | REDEMPTION_CODE_ACTIVE | Redemption code already activated
40400 | REDEMPTION_CODE_INVALID | Redemption code invalid
40753 | REDEMPTION_CODE_TYPE_DISABLED | Invalid code. Redemption code type has been disabled

<PartialServop service_name="redemptionCode" operation_name="ACTIVATE_CODE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string scanCode = "the-scan-code";
string codeType = "the-code-type";
string customCodeInfo = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.RedemptionCodeService.ActivateCode(scanCode, codeType, customCodeInfo, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *scanCode = "the-scan-code";
const char *codeType = "the-code-type";
const char *customCodeInfo = "{}";

<%= data.branding.codePrefix %>->getRedemptionCodeService()->activateCode(scanCode, codeType, customCodeInfo, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *scanCode = @"the-scan-code";
NSString *codeType = @"the-code-type";
NSString *customCodeInfo = "{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> redemptionCodeService] activateCode:scanCode
                      codeType:codeType
                customCodeInfo:customCodeInfo
               completionBlock:successBlock
          errorCompletionBlock:failureBlock
                      cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String scanCode = "the-scan-code";
String codeType = "the-code-type";
String customCodeInfo = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getRedemptionCodeService().activateCode(scanCode, codeType, customCodeInfo, this);

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
var scanCode = "the-scan-code";
var codeType = "the-code-type";
var customCodeInfo = {};

<%= data.branding.codePrefix %>.redemptionCode.activateCode(scanCode, codeType, customCodeInfo, result =>
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
var scanCode = "the-scan-code";
var codeType = "the-code-type";
var customCodeInfo = {};
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.activateCode(scanCode, codeType, customCodeInfo);
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
  "operation": "ACTIVATE_CODE",
  "data":
  {
    "scanCode": "the-scan-code",
    "codeType": "the-code-type",
    "customCodeInfo": {}
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
    "scanCode": "a-scan-code",
    "codeType": "ct",
    "redemptionCodeId": "7379b058-8669-4199-b4bb-712f1e77ea8e",
    "version": 2,
    "codeState": "Available",
    "customCodeInfo": {},
    "customRedemptionInfo": {},
    "redeemedByProfileId": null,
    "redeemedByProfileName": null,
    "invalidationReason": null,
    "createdAt": 1655483646387,
    "activatedAt": 1655483664964,
    "redeemedAt": null,
    "invalidatedAt": null,
    "updatedAt": 1655483646387
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
scanCode | The scan code.
codeType | The code type.
customCodeInfo | Optional custom information.


