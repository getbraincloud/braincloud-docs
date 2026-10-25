# SysTestRedeemCode

Redeems a code on behalf of the calling player, same as [RedeemCode](/api/capi/redemptioncode/redeemcode), while allowing testers to optionally bypass certain redemption constraints. The calling player must have `isTester=true` on their profile.

:::tip
Despite the `Sys` naming convention, this is **not** callable via true server-to-server (app-secret) authentication - only from an authenticated player session (client SDK or Cloud Code running as the player). It also skips the failed-redemption retry-limit check that normally applies to `RedeemCode`.
:::

_Note that if the optional `codeType` is not provided, the system assumes that codes &lt;= 20 characters are shared ('multi-use') codes - while codes &gt;= 25 characters are personal ('single-use') codes._

<PartialServop service_name="redemptionCode" operation_name="SYS_TEST_REDEEM_CODE" />

## Method Parameters

| Parameter             | Description                                                                                                                                                                                                                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scanCode              | The code to redeem. Sometimes referred to as the Promo Code in the Design Portal.                                                                                                                                                                                                                                 |
| codeType              | Optional - The type of code. Corresponds to the _Campaign Name_ in the Design Portal.                                                                                                                                                                                                                             |
| customRedemptionInfo  | Optional - A JSON string containing custom redemption data                                                                                                                                                                                                                                                        |
| optionsJson           | Optional control flags for testers. `ignoreDisabled` (boolean, default false): allow redeeming a code whose code type is disabled. `ignoreInactive` (boolean, default false): allow redeeming a code still in the `Inactive` state. `ignoreValidStart` (boolean, default false): allow redeeming before the code type's `validStart` (the `validEnd` is always still respected). |

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
<TabItem value="objectivec" label="Obj-C">
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
<TabItem value="gdscript" label="GDScript">
```

```gdscript
N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var scanCode = "a scan code";
var codeType = "a code type";
var customRedemptionInfo = {};
var optionsJson = {
    "ignoreDisabled": false,
    "ignoreInactive": false,
    "ignoreValidStart": false
};
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.sysTestRedeemCode(scanCode, codeType, customRedemptionInfo, optionsJson);
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
    "operation": "SYS_TEST_REDEEM_CODE",
    "data": {
        "scanCode": "the-scan-code",
        "codeType": "the-code-type",
        "customRedemptionInfo": {},
        "optionsJson": {
            "ignoreDisabled": false,
            "ignoreInactive": false,
            "ignoreValidStart": false
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
        "gameId": "23782",
        "scanCode": "vfaok-yu7gy-y4ida-jhibz-rtikc",
        "codeType": "ct",
        "redemptionCodeId": "ea2db0da-ef7b-4390-b747-df2eafaba2a3",
        "version": 2,
        "codeState": "Redeemed",
        "customCodeInfo": {},
        "customRedemptionInfo": {},
        "redeemedByProfileId": "c5ecdbda-5f91-41a9-96aa-174f412f7657",
        "redeemedByProfileName": "",
        "invalidationReason": null,
        "createdAt": 1655757623392,
        "activatedAt": 1655757623392,
        "redeemedAt": 1655758430895,
        "invalidatedAt": null,
        "updatedAt": 1655757623392
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                              | Description                                                                                     |
| ----- | --------------------------------- | ------------------------------------------------------------------------------------------------- |
| 41061 | REDEMPTION_CODE_NOT_A_TESTER      | The calling player is not flagged as a tester (`isTester=true` required to use this operation).    |
| 40395 | REDEMPTION_CODE_NOT_FOUND         | The specified code was not found                                                                   |
| 40398 | REDEMPTION_CODE_NOT_ACTIVE        | The specified code is not active (unless `ignoreInactive` is set)                                  |
| 40399 | REDEMPTION_CODE_TYPE_NOT_FOUND    | The specified code type was not found                                                              |
| 40401 | REDEMPTION_CODE_REDEEMED          | The code has already been redeemed                                                                 |
| 40402 | REDEMPTION_CODE_REDEEMED_BY_SELF  | The code has already been redeemed by the calling user                                             |
| 40403 | REDEMPTION_CODE_REDEEMED_BY_OTHER | The code has already been redeemed by another user                                                 |
| 40753 | REDEMPTION_CODE_TYPE_DISABLED     | The code type is disabled (unless `ignoreDisabled` is set)                                         |

</details>
