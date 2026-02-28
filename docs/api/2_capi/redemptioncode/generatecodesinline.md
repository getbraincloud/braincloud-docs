# GenerateCodesInline

Generates specified quantity of redemption codes, for a personal ('single-use') code type, inline. Response indicates list of 'generatedScanCodes' on success.

<PartialServop service_name="redemptionCode" operation_name="GENERATE_CODES_INLINE" />

## Method Parameters

| Parameter            | Description                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------------- |
| codeType             | The personal ('single-use') code type. Corresponds to the _Campaign Name_ in the Design Portal.                 |
| codeState            | Optional. Initial state of the redemption code: 'Inactive' or 'Available'. Defaults to 'Inactive'.              |
| quantity             | The quantity of scan codes to be generated.                                                                     |
| customCodeInfo       | Optional custom information, as JSON object.                                                                    |
| prefix               | Prefix for all scan codes generate. Optional.                                                                   |
| algorithmName        | Name of the algorithm to be used to generate the codes. Currently supporting 'StructuredGuid' and 'FiveByFive'. |
| algorithmDetailsJson | Optional algorithm details, as JSON object.                                                                     |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
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
var redemptionCodeProxy = bridge.getRedemptioncodeServiceProxy();

var postResult = redemptionCodeProxy.generateCodesInline(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"redemptionCode",
    "operation":"GENERATE_CODES_INLINE",
    "data":{
        "codeType":"the-code-type",
        "codeState":"Available",
        "quantity":10,
        "customCodeInfo":{},
        "prefix":"",
        "algorithmName":"FiveByFive",
        "algorithmDetailsJson":{
            "includeCheck":false
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

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                           | Description                                          |
| ----- | ------------------------------ | ---------------------------------------------------- |
| 40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found                |
| 40660 | INVALID_PARAMETER_VALUE        | Invalid quantity, cannot:exceed: 100                 |
| 40753 | REDEMPTION_CODE_TYPE_DISABLED  | Invalid code. Redemption code type has been disabled |

</details>
