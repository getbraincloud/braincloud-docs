# GenerateCodes

Generates specified quantity of redemption codes for a personal ('single-use') code type.

<PartialServop service_name="redemptionCode" operation_name="GENERATE_CODES" />

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
| emailAddress         | Email address to send to for background generated codes. Optional.                                              |

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
var quantity = 100;
var customCodeInfo = {};
var prefix = "";
var algorithmName = "FiveByFive";
var algorithmDetailsJson = {
    "includeCheck": false
};
var emailAddress = "name@domain";
var redemptionCodeProxy = bridge.getRedemptioncodeServiceProxy();

var postResult = redemptionCodeProxy.generateCodes(codeType, codeState, quantity, customCodeInfo, prefix, algorithmName, algorithmDetailsJson, emailAddress);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"redemptionCode",
    "operation":"GENERATE_CODES",
    "data":{
        "codeType":"the-code-type",
        "codeState":"Available",
        "quantity":100,
        "customCodeInfo":{},
        "prefix":"",
        "algorithmName":"FiveByFive",
        "algorithmDetailsJson":{
            "includeCheck":false
        },
        "emailAddress":"name@domain"
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

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                           | Description                                          |
| ----- | ------------------------------ | ---------------------------------------------------- |
| 40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found                |
| 40753 | REDEMPTION_CODE_TYPE_DISABLED  | Invalid code. Redemption code type has been disabled |

</details>
