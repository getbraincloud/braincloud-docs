# InvalidateCode
## Overview
Invalidate a redemption code.


### Status Codes
Code | Name | Description
---- | ---- | -----------
40395 | REDEMPTION_CODE_NOT_FOUND | The specified code was not found
40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found
40400 | REDEMPTION_CODE_INVALID | Redemption code invalid
40753 | REDEMPTION_CODE_TYPE_DISABLED | Invalid code. Redemption code type has been disabled
40755 | REDEMPTION_CODE_TYPE_MISMATCH | Redemption code's code type does not match specified code type

<PartialServop service_name="redemptionCode" operation_name="INVALIDATE_CODE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string scanCode = "the-scan-code";
string codeType = "the-code-type";
string invalidationReason = "Redemption code no longer valid.";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.RedemptionCodeService.InvalidateCode(scanCode, codeType, invalidationReason, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *scanCode = "the-scan-code";
const char *codeType = "the-code-type";
const char *invalidationReason = "Redemption code no longer valid.";

<%= data.branding.codePrefix %>->getRedemptionCodeService()->invalidateCode(scanCode, codeType, invalidationReason, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *scanCode = @"the-scan-code";
NSString *codeType = @"the-code-type";
NSString *invalidationReason = @"Redemption code no longer valid.";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> redemptionCodeService] invalidateCode:scanCode
                      codeType:codeType
            invalidationReason:invalidationReason
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
String invalidationReason = "Redemption code no longer valid.";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getRedemptionCodeService().invalidateCode(scanCode, codeType, invalidationReason, this);

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
var invalidationReason = "Redemption code no longer valid.";

<%= data.branding.codePrefix %>.redemptionCode.invalidateCode(scanCode, codeType, invalidationReason, result =>
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
var invalidationReason = "Redemption code no longer valid.";
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.invalidateCode(scanCode, codeType, invalidationReason);
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
  "operation": "INVALIDATE_CODE",
  "data":
  {
    "scanCode": "the-scan-code",
    "codeType": "the-code-type",
    "invalidationReason": "Redemption code no longer valid."
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
    "scanCode": "hif4x-xgxgb-p7hei-x2jqy-jzrrk",
    "codeType": "ct",
    "redemptionCodeId": "1e73d56d-f043-4875-a347-1f06003bc7fd",
    "version": 2,
    "codeState": "Invalidated",
    "customCodeInfo": {},
    "customRedemptionInfo": {},
    "redeemedByProfileId": null,
    "redeemedByProfileName": null,
    "invalidationReason": "Redemption code no longer valid.",
    "createdAt": 1655498615494,
    "activatedAt": 1655498615494,
    "redeemedAt": null,
    "invalidatedAt": 1655499571944,
    "updatedAt": 1655498615494
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
invalidationReason | Optional custom information.


