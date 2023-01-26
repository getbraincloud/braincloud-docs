# SysGetDailyCounts
## Overview
Returns the daily analytics counts for the current app for the specified date.

<PartialServop service_name="globalApp" operation_name="SYS_GET_DAILY_COUNTS" / >

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

var day = "2019-11-07"
var postResult = globalAppProxy.sysGetDailyCounts( day );
if (postResult.status == 200) {
    // Success!

    var dau = postResult.data.userCount;

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
        "date": "2019-11-07",
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
        "sessionCountHourly": [
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            2,
            0,
            1,
            0,
            0,
            1,
            1,
            1,
            0,
            0,
            0,
            0
        ],
        "userCount": 3,
        "userCountPlatform": {
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
        "apiCallCountDay": 65,
        "heartbeatCountDay": 0,
        "apiCallCount": {
            "authenticationV2": {
                "AUTHENTICATE-Email": 7
            },
            "user": {
                "SYS_CREATE_USER_EMAIL_PASSWORD": 4,
                "SYS_CREATE_USER_EXTERNAL_AUTH": 1,
                "SYS_CREATE_USER_UNIVERSAL_ID": 1,
                "SYS_GET_PAGE": 2
            },
            "group": {
                "GET_MY_GROUPS": 1
            },
            "leaderboard": {
                "POST_GROUP_SCORE_DYNAMIC": 2
            },
            "playerState": {
                "UPDATE_SUMMARY": 1,
                "READ": 1
            },
            "customEntity": {
                "SYS_LIST_COLLECTIONS": 1,
                "SYS_LIST_INDEXES": 2
            },
            "log": {
                "LOG_DEBUG": 15
            },
            "script": {
                "RUN-CreateSettopHandoffCode": 3,
                "RUN-ResetAllQuestsAndMilestones": 7,
                "RUN-SysGetDailyCounts": 6
            },
            "identity": {
                "CREATE_SETTOP_HANDOFF_CODE": 1
            },
            "gamification": {
                "RESET_ALL_QUESTS_AND_MILESTONES": 1,
                "RESET_QUESTS": 1
            },
            "globalApp": {
                "SYS_GET_DAILY_COUNTS": 8
            }
        },
        "apiCallTime": {
            "group": {
                "GET_MY_GROUPS": 4
            },
            "leaderboard": {
                "POST_GROUP_SCORE_DYNAMIC": 16
            },
            "authenticationV2": {
                "AUTHENTICATE-Email": 1029
            },
            "user": {
                "SYS_CREATE_USER_EMAIL_PASSWORD": 303,
                "SYS_CREATE_USER_UNIVERSAL_ID": 87,
                "SYS_CREATE_USER_EXTERNAL_AUTH": 6,
                "SYS_GET_PAGE": 21
            },
            "playerState": {
                "UPDATE_SUMMARY": 2,
                "READ": 5
            },
            "customEntity": {
                "SYS_LIST_COLLECTIONS": 17,
                "SYS_LIST_INDEXES": 69
            },
            "script": {
                "RUN-CreateSettopHandoffCode": 129,
                "RUN-ResetAllQuestsAndMilestones": 172,
                "RUN-SysGetDailyCounts": 161
            },
            "identity": {
                "CREATE_SETTOP_HANDOFF_CODE": 2
            },
            "gamification": {
                "RESET_ALL_QUESTS_AND_MILESTONES": 24,
                "RESET_QUESTS": 3
            },
            "log": {
                "LOG_DEBUG": 5
            },
            "globalApp": {
                "SYS_GET_DAILY_COUNTS": 40
            }
        },
        "apiAppErrors": {
            "leaderboard": {
                "POST_GROUP_SCORE_DYNAMIC": 1
            },
            "user": {
                "SYS_CREATE_USER_EMAIL_PASSWORD": 1
            },
            "customEntity": {
                "SYS_LIST_INDEXES": 1
            },
            "script": {
                "RUN-CreateSettopHandoffCode": 2,
                "RUN-ResetAllQuestsAndMilestones": 7
            }
        },
        "apiAppWarnings": {},
        "apiSysErrors": {
            "globalApp": {
                "SYS_GET_DAILY_COUNTS": 1
            }
        },
        "s2sCallCountDay": 0,
        "s2sCallAppErrors": 0,
        "s2sCallAppWarnings": 0,
        "s2sCallSysErrors": 0,
        "webCallCountDay": 0,
        "webhookCallCountDay": 0,
        "webhookAppErrors": 0,
        "webhookAppWarnings": 0,
        "webhookSysErrors": 0,
        "ccApiCallCountDay": 23,
        "dispV1CallCountDay": 0,
        "offboardEventCountDay": 0,
        "ccScriptInvokeCountDay": 16,
        "scheduledScriptCallCountDay": 0,
        "loginsOverLimitCount": 0,
        "notificationCount": 0,
        "notificationCountPlatform": {},
        "notificationCountTemplateId": {},
        "notificationCountPromotionId": {},
        "emailsSentCount": 0,
        "bulkOpsCount": 0,
        "unreadableRequestCount": 0,
        "unprocessedRequestCount": 0,
        "freePeerApiCallCount": 0,
        "hostedCost": null,
        "hostedHours": null,
        "kbDownloaded": 0,
        "kbStorage": 2,
        "dormant": {
            "accountsStored180to365Days": 0,
            "accountsStoredDormant": 4,
            "accountsStoredTotal": 7,
            "accountsStored30to90Days": 2,
            "accountsStoredUpto30Days": 1,
            "accountsStored90to180Days": 0,
            "accountsStoredGT365Days": 4
        },
        "rtt": {
            "sends": 0,
            "entries": 0,
            "deliveries": 0,
            "ccxHourly": {},
            "ccxTotal": 0,
            "ccxOverageHourly": {},
            "ccxOveragesTotal": 0
        },
        "createdAt": 0,
        "updatedAt": 1573154410375,
        "billingNetAPICount": 26,
        "billingBulkOpsCount": 0,
        "billingTotalAPICount": 26,
        "billingFreeApiCalls": 23,
        "billingDiscountedAPICredit": 0,
        "billingTotalBilledToCustomer": 42
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
day | The day to retrieve the data for, in "yyyy-MM-dd" format. If empty, uses the current date.


