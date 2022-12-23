# GenerateCodes
## Overview
Generates specified quantity of redemption codes.


### Status Codes
Code | Name | Description
---- | ---- | -----------
40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found
40753 | REDEMPTION_CODE_TYPE_DISABLED | Invalid code. Redemption code type has been disabled

<PartialServop service_name="redemptionCode" operation_name="GENERATE_CODES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string codeType = "the-code-type";
string codeState = "Available";
int quantity = 100;
string customCodeInfo = "{}";
string prefix = "";
string algorithmName = "FiveByFive";
string algorithmDetailsJson = "{ \"includeCheck\": false }";
string emailAddress = "email@email.com";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.RedemptionCodeService.GenerateCodes(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson, emailAddress, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *codeType = "the-code-type";
const char *codeState = "Available";
int quantity = 100;
const char *customCodeInfo = "{}";
const char *prefix = "";
const char *algorithmName = "FiveByFive";
const char *algorithmDetailsJson = "{ \"includeCheck\": false }";
const char *emailAddress = "email@email.com";

<%= data.branding.codePrefix %>->getRedemptionCodeService()->generateCodes(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson, emailAddress, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *codeType = @"the-code-type";
NSString *codeState = @"Available";
int quantity = 100;
NSString *customCodeInfo = "{}";
NSString *prefix = @"";
NSString *algorithmName = @"FiveByFive";
NSString *algorithmDetailsJson = "{ \"includeCheck\": false }";
NSString *emailAddress = @"email@email.com";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> redemptionCodeService] generateCodes:codeType
                     codeState:codeState
                      quantity:quantity
                customCodeInfo:customCodeInfo
                        prefix:prefix
                 algorithmName:algorithmName
          algorithmDetailsJson:algorithmDetailsJson
                  emailAddress:emailAddress
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
int quantity = 100;
String customCodeInfo = "{}";
String prefix = "";
String algorithmName = "FiveByFive";
String algorithmDetailsJson = "{ \"includeCheck\": false }";
String emailAddress = "email@email.com";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getRedemptionCodeService().generateCodes(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson, emailAddress, this);

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
var quantity = 100;
var customCodeInfo = {};
var prefix = "";
var algorithmName = "FiveByFive";
var algorithmDetailsJson = {
  "includeCheck": false
};
var emailAddress = "email@email.com";

<%= data.branding.codePrefix %>.redemptionCode.generateCodes(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson, emailAddress, result =>
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
var quantity = 100;
var customCodeInfo = {};
var prefix = "";
var algorithmName = "FiveByFive";
var algorithmDetailsJson = {
  "includeCheck": false
};
var emailAddress = "email@email.com";
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.generateCodes(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson, emailAddress);
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
  "operation": "GENERATE_CODES",
  "data":
  {
    "codeType": "the-code-type",
    "codeState": "Available",
    "quantity": 100,
    "customCodeInfo": {},
    "prefix": "",
    "algorithmName": "FiveByFive",
    "algorithmDetailsJson": {
      "includeCheck": false
    },
    "emailAddress": "email@email.com"
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
    "message": "Generating 100 redemption codes using FiveByFive algorithm and options (includeCheck=false)"
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
emailAddress | Email address to send to for background generated codes. Optional.


