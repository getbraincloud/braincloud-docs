# ActivateCode

Activate a redemption code for a personal ('single-use') code type. Optional parameters: customCodeInfo.

<PartialServop service_name="redemptionCode" operation_name="ACTIVATE_CODE" />

## Method Parameters

| Parameter      | Description                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------- |
| scanCode       | The scan code. Also referred to as a _Promo Code_ in the Design Portal.                         |
| codeType       | The single-use ('personal') code type. Corresponds to the _Campaign Name_ in the Design Portal. |
| customCodeInfo | Optional custom information.                                                                    |

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var scanCode = "the-scan-code";
var codeType = "the-code-type";
var customCodeInfo = {};
var redemptionCodeProxy = bridge.getRedemptioncodeServiceProxy();

var postResult = redemptionCodeProxy.activateCode(scanCode, codeType, customCodeInfo);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"redemptionCode",
    "operation":"ACTIVATE_CODE",
    "data":{
        "scanCode":"the-scan-code",
        "codeType":"the-code-type",
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

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                           | Description                                          |
| ----- | ------------------------------ | ---------------------------------------------------- |
| 40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found                |
| 40395 | REDEMPTION_CODE_NOT_FOUND      | The specified code was not found                     |
| 40397 | REDEMPTION_CODE_ACTIVE         | Redemption code already activated                    |
| 40400 | REDEMPTION_CODE_INVALID        | Redemption code invalid                              |
| 40753 | REDEMPTION_CODE_TYPE_DISABLED  | Invalid code. Redemption code type has been disabled |

</details>
