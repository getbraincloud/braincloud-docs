# InvalidateCode

Invalidate a redemption code for a personal ('single-use') code type.

<PartialServop service_name="redemptionCode" operation_name="INVALIDATE_CODE" />

## Method Parameters

| Parameter          | Description                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| scanCode           | The scan code.                                                                                  |
| codeType           | The personal ('single-use') code type. Corresponds to the _Campaign Name_ in the Design Portal. |
| invalidationReason | Optional custom information.                                                                    |

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
var invalidationReason = "Redemption code no longer valid.";
var redemptionCodeProxy = bridge.getRedemptioncodeServiceProxy();

var postResult = redemptionCodeProxy.invalidateCode(scanCode, codeType, invalidationReason);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"redemptionCode",
    "operation":"INVALIDATE_CODE",
    "data":{
        "scanCode":"the-scan-code",
        "codeType":"the-code-type",
        "invalidationReason":"Redemption code no longer valid."
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

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                           | Description                                                    |
| ----- | ------------------------------ | -------------------------------------------------------------- |
| 40395 | REDEMPTION_CODE_NOT_FOUND      | The specified code was not found                               |
| 40399 | REDEMPTION_CODE_TYPE_NOT_FOUND | The specified code type was not found                          |
| 40400 | REDEMPTION_CODE_INVALID        | Redemption code invalid                                        |
| 40753 | REDEMPTION_CODE_TYPE_DISABLED  | Invalid code. Redemption code type has been disabled           |
| 40755 | REDEMPTION_CODE_TYPE_MISMATCH  | Redemption code's code type does not match specified code type |

</details>
