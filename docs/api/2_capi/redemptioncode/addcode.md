# AddCode
## Overview
Add a redemption code. Optional parameters: codeState and customCodeInfo.


<PartialServop service_name="redemptionCode" operation_name="ADD_CODE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string scanCode = "a-scan-code";
string codeType = "the-code-type";
string codeState = "Available";
string customCodeInfo = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.RedemptionCodeService.AddCode(scanCode, codeType, codeState, customCodeInfo, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *scanCode = "a-scan-code";
const char *codeType = "the-code-type";
const char *codeState = "Available";
const char *customCodeInfo = "{}";

<%= data.branding.codePrefix %>->getRedemptionCodeService()->addCode(scanCode, codeType, codeState, customCodeInfo, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *scanCode = @"a-scan-code";
NSString *codeType = @"the-code-type";
NSString *codeState = @"Available";
NSString *customCodeInfo = "{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> redemptionCodeService] addCode:scanCode
                      codeType:codeType
                     codeState:codeState
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
String scanCode = "a-scan-code";
String codeType = "the-code-type";
String codeState = "Available";
String customCodeInfo = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getRedemptionCodeService().addCode(scanCode, codeType, codeState, customCodeInfo, this);

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
var scanCode = "a-scan-code";
var codeType = "the-code-type";
var codeState = "Available";
var customCodeInfo = {};

<%= data.branding.codePrefix %>.redemptionCode.addCode(scanCode, codeType, codeState, customCodeInfo, result =>
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
var scanCode = "a-scan-code";
var codeType = "the-code-type";
var codeState = "Available";
var customCodeInfo = {};
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.addCode(scanCode, codeType, codeState, customCodeInfo);
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
  "operation": "ADD_CODE",
  "data":
  {
    "scanCode": "a-scan-code",
    "codeType": "the-code-type",
    "codeState": "Available",
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
    "version": 1,
    "codeState": "Inactive",
    "customCodeInfo": {},
    "customRedemptionInfo": {},
    "redeemedByProfileId": null,
    "redeemedByProfileName": null,
    "invalidationReason": null,
    "createdAt": 1655483646387,
    "activatedAt": 1655483646387,
    "redeemedAt": null,
    "invalidatedAt": null,
    "updatedAt": 1655483646387
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
40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found
40753 | REDEMPTION_CODE_TYPE_DISABLED | Invalid code. Redemption code type has been disabled

</details>


## Method Parameters
Parameter | Description
--------- | -----------
scanCode | A scan code.
codeType | The code type.
codeState | Initial state of the redemption code.
customCodeInfo | Optional custom information.


