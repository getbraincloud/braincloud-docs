# AddCode

Add a redemption code for a personal ('single-use') code type. Optional parameters: codeState and customCodeInfo.

<PartialServop service_name="redemptionCode" operation_name="ADD_CODE" />

## Method Parameters

| Parameter      | Description                                                                                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scanCode       | A scan code (also referred to as a _Promo Code_). Warning: If the scanCode added is less than 25 characters, the optional codeType must be specified in order to redeem it. |
| codeType       | The personal ('single-use') code type. Corresponds to the _Campaign Name_ in the Design Portal.                                                                             |
| codeState      | Initial state of the redemption code.                                                                                                                                       |
| customCodeInfo | Optional custom information.                                                                                                                                                |

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
var scanCode = "a_scan_code";
var codeType = "the_code_type";
var codeState = "Available";
var customCodeInfo = {};
var redemptionCodeProxy = bridge.getRedemptioncodeServiceProxy();

var postResult = redemptionCodeProxy.addCode(scanCode, codeType, codeState, customCodeInfo);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"redemptionCode",
    "operation":"ADD_CODE",
    "data":{
        "scanCode":"a_scan_code",
        "codeType":"the_code_type",
        "codeState":"Available",
        "customCodeInfo":{}
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

| Code  | Name                           | Description                                          |
| ----- | ------------------------------ | ---------------------------------------------------- |
| 40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found                |
| 40753 | REDEMPTION_CODE_TYPE_DISABLED  | Invalid code. Redemption code type has been disabled |

</details>
