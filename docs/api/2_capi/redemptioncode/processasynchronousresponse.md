# ProcessAsynchronousResponse
## Overview
Callback with asynchronous response for the redemption code service to process for an asynchronous redemption code.


### Status Codes
Code | Name | Description
---- | ---- | -----------
40395 | REDEMPTION_CODE_NOT_FOUND | The specified code was not found
40398 | REDEMPTION_CODE_NOT_ACTIVE | The specified code is not active
40401 | REDEMPTION_CODE_REDEEMED | The code has already been redeemed
40402 | REDEMPTION_CODE_REDEEMED_BY_SELF | The code has already been redeemed by the calling user
40403 | REDEMPTION_CODE_REDEEMED_BY_OTHER | The code has already been redeemed by another user
40757 | REDEMPTION_OF_CUSTOM_CODE_FAILED | Missing identity, required for get identity data
40758 | REDEMPTION_CODE_NOT_IN_PROGRESS | The code state is not in progress
40759 | REDEMPTION_CODE_ATTEMPT_ERROR | The attempt number input was not correct
40760 | REDEMPTION_CODE_ATTEMPT_MISMATCH | The applicable attempt number associated with the redemption attempt being processed doesn't match the code type
40761 | REDEMPTION_CODE_ASYNC_BAD_RESPONSE | The asynchronous response was not correct
40762 | REDEMPTION_CODE_BY_ID_NOT_FOUND | The specified code was not found by redemptionCodeId
40767 | REDEMPTION_CODE_TYPE_NOT_ASYNC | The specified codeType was not asynchronous
40768 | REDEMPTION_CODE_ASYNC_PROCESSING_TIMEOUT | The specified timeout was hit

<PartialServop service_name="redemptionCode" operation_name="PROCESS_ASYNCHRONOUS_RESPONSE" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var scanCode = "the-scan-code";
var redemptionCodeId = "the-redemption-code-id";
var codeType = "";
var attempt = 0;
var asyncResponse = {
  "success": true,
  "complete": false,
  "customRedemptionInfo": {
    "someCustomKey": "someCustomValue"
  }
};
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.processAsynchronousResponse(scanCode, redemptionCodeId, codeType, attempt, asyncResponse);
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
  "operation": "PROCESS_ASYNCHRONOUS_RESPONSE",
  "data":
  {
    "scanCode": "the-scan-code",
    "redemptionCodeId": "the-redemption-code-id",
    "codeType": "",
    "attempt": 0,
    "asyncResponse": {
      "success": true,
      "complete": false,
      "customRedemptionInfo": {
        "someCustomKey": "someCustomValue"
      }
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
    "gameId": "23713",
    "scanCode": "fdjsl-zh5h2-mwdw1-no0ua-x40ci",
    "codeType": "test22",
    "redemptionCodeId": "b75e0c13-08d2-41d1-9cf6-ff4a72356d2f",
    "version": 3,
    "codeState": "InProgress",
    "customCodeInfo": {
      "factoryId": 22
    },
    "customRedemptionInfo": {
      "transaction_id": "9d3936f686fccd646669f67f332440e54a48f5c05a562c89a6637dc1125654eb"
    },
    "redeemedByProfileId": null,
    "redeemedByProfileName": null,
    "invalidationReason": null,
    "createdAt": 1655818588627,
    "activatedAt": 1655818588627,
    "redeemedAt": null,
    "invalidatedAt": null,
    "updatedAt": 1655818611860,
    "currentAttempt": 0,
    "status": {
      "attempt": 0,
      "attemptedAt": 1655818605849,
      "attemptedBy": "c14caf2b-6c72-4c8e-9280-54356f7d56c2",
      "scriptId": "2f944060-9eff-40c4-bdc3-ab7d00f83f35",
      "scriptVersion": 38,
      "attemptState": "IN_PROGRESS",
      "response": {
        "success": true,
        "complete": false,
        "customRedemptionInfo": {
          "transaction_id": "9d3936f686fccd646669f67f332440e54a48f5c05a562c89a6637dc1125654eb"
        },
        "errorCode": null,
        "errorMsg": null
      }
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
scanCode | The scan code being redeemed. Required.
redemptionCodeId | The redemption code id of the redemption code being processed. Required.
codeType | The type of the scan code. Optional.
attempt | The applicable attempt number associated with the redemption attempt being processed. Required.
asyncResponse | Required asynchronous response info, as JSON object, indicating status via success and complete flags, along with applicable, but optional, customRedemptionInfo (JSON object) and/or errorCode (Integer) and errorMsg (String).  Note: A timeout exception is thrown if the max asynchronous processing time (configured for the associated redemption code type) has been exceeded and processing is still in progress (complete: false).


