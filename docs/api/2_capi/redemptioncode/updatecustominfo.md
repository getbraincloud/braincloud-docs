# UpdateCustomInfo
## Overview
Update the custom information for a redemption code.


<PartialServop service_name="redemptionCode" operation_name="UPDATE_CUSTOM_INFO" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string scanCode = "the-scan-code";
string codeType = "the-code-type";
int version = 3;
string customCodeInfo = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.RedemptionCodeService.UpdateCustomInfo(scanCode, codeType, version, customCodeInfo, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *scanCode = "the-scan-code";
const char *codeType = "the-code-type";
int version = 3;
const char *customCodeInfo = "{}";

<%= data.branding.codePrefix %>->getRedemptionCodeService()->updateCustomInfo(scanCode, codeType, version, customCodeInfo, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *scanCode = @"the-scan-code";
NSString *codeType = @"the-code-type";
int version = 3;
NSString *customCodeInfo = "{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> redemptionCodeService] updateCustomInfo:scanCode
                      codeType:codeType
                       version:version
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
int version = 3;
String customCodeInfo = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getRedemptionCodeService().updateCustomInfo(scanCode, codeType, version, customCodeInfo, this);

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
var version = 3;
var customCodeInfo = {};

<%= data.branding.codePrefix %>.redemptionCode.updateCustomInfo(scanCode, codeType, version, customCodeInfo, result =>
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
var version = 3;
var customCodeInfo = {};
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.updateCustomInfo(scanCode, codeType, version, customCodeInfo);
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
  "operation": "UPDATE_CUSTOM_INFO",
  "data":
  {
    "scanCode": "the-scan-code",
    "codeType": "the-code-type",
    "version": 3,
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
    "scanCode": "hif4x-xgxgb-p7hei-x2jqy-jzrrk",
    "codeType": "ct",
    "redemptionCodeId": "1e73d56d-f043-4875-a347-1f06003bc7fd",
    "version": 2,
    "codeState": "Invalidated",
    "customCodeInfo": {
      "new_key": "new_value"
    },
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

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40395 | REDEMPTION_CODE_NOT_FOUND | The specified code was not found
40396 | REDEMPTION_CODE_VERSION_MISMATCH | Version mismatch
40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found
40753 | REDEMPTION_CODE_TYPE_DISABLED | Invalid code. Redemption code type has been disabled
40755 | REDEMPTION_CODE_TYPE_MISMATCH | Redemption code's code type does not match specified code type

</details>


## Method Parameters
Parameter | Description
--------- | -----------
scanCode | The scan code.
codeType | The code type.
version | Current version of the redemption code (for concurrency checking.)
customCodeInfo | Optional custom information.


