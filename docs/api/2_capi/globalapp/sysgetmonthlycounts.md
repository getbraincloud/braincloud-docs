# SysGetMonthlyCounts
## Overview
Returns the monthly analytics counts for the current app for the specified month.

<PartialServop service_name="globalApp" operation_name="SYS_GET_MONTHLY_COUNTS" / >

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
var globalAppProxy = bridge.getGlobalAppServiceProxy();

var month = "2019-11"
var postResult = globalAppProxy.sysGetMonthlyCounts( month );
if (postResult.status == 200) {
    // Success!

    var mau = postResult.data.mauCount;

}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// Cloud Code only. To view example, switch to the Cloud Code tab
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
    "status": 200,
    "data": {
        "monthDate": "2019-11",
        "sessionCount": 7,
        "sessionCountPlatform": {
            "IOS": 7
        },
        "sessionCountLibrary": {
            "APIExplorer": 7
        },
        "sessionCountLibraryVersion": {
            "4_3_0": 7
        },
        "dauCount": 3,
        "dauCountPlatform": {
            "IOS": 3
        },
        "mauCount": 3,
        "mauCountPlatform": {
            "IOS": 3
        },
        "accountCreationCount": 2,
        "accountCreationCountPlatform": {
            "IOS": 2
        },
        "purchaseCount": 0,
        "purchaseCountPlatform": {},
        "purchasedCountItem": {},
        "revenue": 0,
        "revenuePlatform": {},
        "revenueItem": {},
        "apiCallCount": 68,
        "s2sCallCount": 0,
        "webhookCallCount": 0,
        "webCallCount": 0,
        "ccApiCallCount": 25,
        "dispV1CallCount": 0,
        "offboardEventCount": 0,
        "ccScriptInvokeCount": 17,
        "scheduledScriptCallCount": 0,
        "loginsOverLimitCount": 0,
        "emailsSentCount": 0,
        "bulkOpCount": 0,
        "unreadableRequestCount": 0,
        "unprocessedRequestCount": 0,
        "freePeerApiCallCount": 0,
        "hostedCost": null,
        "hostedHours": null,
        "dormant": {
            "billedDormantAccounts": 4,
            "aggregatedDormantAccounts": 28
        },
        "rtt": {},
        "notificationCount": 0,
        "notificationCountTemplateId": {},
        "notificationCountPromotionId": {},
        "kbDownloaded": 0,
        "kbStorage": 14,
        "kbStorageMax": 2,
        "kbStorageDays": 7,
        "billingNetAPICount": 26,
        "billingBulkOpsCount": 0,
        "billingTotalAPICount": 26,
        "billingFreeApiCalls": 25,
        "billingDiscountedAPICredit": 0,
        "billingTotalBilledToCustomer": 43
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
month | The month to retrieve the data for, in "yyyy-MM" format. If empty, uses the current month.


