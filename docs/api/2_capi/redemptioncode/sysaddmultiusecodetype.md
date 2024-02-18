# SysAddMultiUseCodeType
Add a new, shared ('multi-use') redemption code type configuration

<PartialServop service_name="redemptionCode" operation_name="SYS_ADD_MULTI_USE_CODE_TYPE" />

## Method Parameters
Parameter | Description
--------- | -----------
codeType | The unique code type. Corresponds to the _Campaign Name_ in the Design Portal.
jsonOptions | The multi-use code type configuration options, as JSON object. Required options are 'scanCode', 'validStart', and 'validEnd'. The 'scanCode' option must be unique and not exceed 20 characters. A 'maxRedemptions' of null indicates no limit. The 'customCodeInfo' will be applied to the multi-use codes upon redemption processing. For custom redemption codes, set a valid 'redemptionCodeScriptId' or, if null, the 'redemptionCodeScriptFullPathName' will be checked and, if valid, used to set the applicable script id. The 'async', 'maxRetries' and 'timeout' (in seconds) are only applicable if a valid 'redemptionScriptId' is specified.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var codeType = "unique_campaign_name";
var jsonOptions = {
    "description": "Codes to give away for promotion",
    "scanCode": "FREE100",
    "validStart": "[[#ts]]",
    "validEnd": "[[#ts+604800000]]",
    "maxRedemptions": 100,
    "customCodeInfo": {},
    "redemptionCodeScriptId": null,
    "redemptionCodeScriptFullPathName": "/redemptions/asynchronousRedemption",
    "maxRetries": 1,
    "async": true,
    "timeout": 300,
    "isDisabled": false
};
var redemptionCodeProxy = bridge.getRedemptioncodeServiceProxy();

var postResult = redemptionCodeProxy.SysAddMultiUseCodeType(codeType, jsonOptions);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"redemptionCode",
    "operation":"SYS_ADD_MULTI_USE_CODE_TYPE",
    "data":{
        "codeType":"unique_campaign_name",
        "jsonOptions":{
            "description":"Codes to give away for promotion",
            "scanCode":"FREE100",
            "validStart":"[[#ts]]",
            "validEnd":"[[#ts+604800000]]",
            "maxRedemptions":100,
            "customCodeInfo":{},
            "redemptionCodeScriptId":null,
            "redemptionCodeScriptFullPathName":"/redemptions/asynchronousRedemption",
            "maxRetries":1,
            "async":true,
            "timeout":300,
            "isDisabled":false
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
    "codeType": "unique_campaign_name",
    "description": "Codes to give away for promotion",
    "version": 1,
    "createdAt": 1708035413954,
    "updatedAt": 1708035413954,
    "async": false,
    "maxRetries": 0,
    "isDisabled": false,
    "customCodeInfo": {},
    "validStart": 1708035331008,
    "validEnd": 1708640131008,
    "codeUseType": "MULTI",
    "scanCode": "FREE100",
    "maxRedemptions": 100
  },
  "status": 200
}
```

</details>

