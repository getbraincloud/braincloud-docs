# GenerateCodesInline
## Overview
Generates specified quantity of redemption codes inline.


### Status Codes
Code | Name | Description
---- | ---- | -----------
40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found
40660 | INVALID_PARAMETER_VALUE | Invalid quantity, cannot:exceed: 100
40753 | REDEMPTION_CODE_TYPE_DISABLED | Invalid code. Redemption code type has been disabled

<PartialServop service_name="redemptionCode" operation_name="GENERATE_CODES_INLINE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string codeType = "the-code-type";
string codeState = "Available";
int quantity = 10;
string customCodeInfo = "{}";
string prefix = "";
string algorithmName = "FiveByFive";
string algorithmDetailsJson = "{ \"includeCheck\": false }";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.RedemptionCodeService.GenerateCodesInline(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *codeType = "the-code-type";
const char *codeState = "Available";
int quantity = 10;
const char *customCodeInfo = "{}";
const char *prefix = "";
const char *algorithmName = "FiveByFive";
const char *algorithmDetailsJson = "{ \"includeCheck\": false }";

<%= data.branding.codePrefix %>->getRedemptionCodeService()->generateCodesInline(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *codeType = @"the-code-type";
NSString *codeState = @"Available";
int quantity = 10;
NSString *customCodeInfo = "{}";
NSString *prefix = @"";
NSString *algorithmName = @"FiveByFive";
NSString *algorithmDetailsJson = "{ \"includeCheck\": false }";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> redemptionCodeService] generateCodesInline:codeType
                     codeState:codeState
                      quantity:quantity
                customCodeInfo:customCodeInfo
                        prefix:prefix
                 algorithmName:algorithmName
          algorithmDetailsJson:algorithmDetailsJson
               completionBlock:successBlock
          errorCompletionBlock:failureBlock
                      cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String codeType = "the-code-type";
String codeState = "Available";
int quantity = 10;
String customCodeInfo = "{}";
String prefix = "";
String algorithmName = "FiveByFive";
String algorithmDetailsJson = "{ \"includeCheck\": false }";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getRedemptionCodeService().generateCodesInline(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson, this);

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
var codeType = "the-code-type";
var codeState = "Available";
var quantity = 10;
var customCodeInfo = {};
var prefix = "";
var algorithmName = "FiveByFive";
var algorithmDetailsJson = {
  "includeCheck": false
};

<%= data.branding.codePrefix %>.redemptionCode.generateCodesInline(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson, result =>
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
var codeType = "the-code-type";
var codeState = "Available";
var quantity = 10;
var customCodeInfo = {};
var prefix = "";
var algorithmName = "FiveByFive";
var algorithmDetailsJson = {
  "includeCheck": false
};
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.generateCodesInline(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson);
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
  "operation": "GENERATE_CODES_INLINE",
  "data":
  {
    "codeType": "the-code-type",
    "codeState": "Available",
    "quantity": 10,
    "customCodeInfo": {},
    "prefix": "",
    "algorithmName": "FiveByFive",
    "algorithmDetailsJson": {
      "includeCheck": false
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
  "data": {
    "generatedScanCodes": [
      "vfaok-yu7gy-y4ida-jhibz-rtikc",
      "umy5u-ok0hj-afsc9-cz0tc-1jkvw",
      "poclc-f5bo1-f1jfr-bh2tm-cvuuf",
      "ckqzl-ogn2x-isdyr-utgr4-azx7f",
      "iivv8-2fjbo-mnvl4-hwvwc-axurj",
      "zdgsq-tsywh-hbhnf-bt90z-bwzqs",
      "qji29-hjk0a-lrk4v-yvll7-gd3or",
      "yi0uu-fsxkv-tdz3o-ebds7-qbyhk",
      "sbozv-tcp5x-4nzlg-hykok-zmk66",
      "zuzis-l1qva-qixmz-e3n5f-5qax6"
    ],
    "message": "Generating 10 redemption codes using FiveByFive algorithm and options (includeCheck=false)"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
codeType | The code type.
codeState | Optional. Initial state of the redemption code: 'Inactive' or 'Available'. Defaults to 'Inactive'.
quantity | The quantity of scan codes to be generated.
customCodeInfo | Optional custom information, as JSON object.
prefix | Prefix for all scan codes generate. Optional.
algorithmName | Name of the algorithm to be used to generate the codes. Currently supporting 'StructuredGuid' and 'FiveByFive'.
algorithmDetailsJson | Optional algorithm details, as JSON object.


