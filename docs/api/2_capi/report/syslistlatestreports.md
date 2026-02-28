# SysListLatestReports

Returns a list of the metadata for the latest reports for the given report options.

<PartialServop service_name="report" operation_name="SYS_LIST_LATEST_REPORTS" />

## Method Parameters

| Parameter   | Description                                                                            |
| ----------- | -------------------------------------------------------------------------------------- |
| optionsJson | The report options to be applied. Must include 'subject'. May include 'recurrence'.    |
| maxReturn   | The maximum number of results to return. Typically limited to a maximum of 20 results. |

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
var optionsJson = {
    "subject": "retention",
    "recurrence": "daily"
};
var maxReturn = 5;
var reportProxy = bridge.getReportServiceProxy();

var postResult = reportProxy.sysListLatestReports(optionsJson, maxReturn);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"report",
    "operation":"SYS_LIST_LATEST_REPORTS",
    "data":{
        "optionsJson":{
            "subject":"retention",
            "recurrence":"daily"
        },
        "maxReturn":5
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
        "_serverTime": 1739211901588,
        "list": [
            {
                "reportId": "3f8e0907-f1a9-4eac-93dd-e0f68b28191c",
                "endDate": "2025-02-10",
                "subject": "retention",
                "appName": "deploypeer",
                "title": null,
                "ownerId": null,
                "expireAtIso": 1740010518040,
                "recurrence": ["daily"],
                "createdAt": 1739146518040,
                "isFinancial": false,
                "appId": "23782",
                "isPublic": true,
                "genTitle": {
                    "en": "All retention stats for enduser accounts created between 2025-01-10 - 2025-02-10",
                    "fr": "Tous les retention stats for enduser accounts created between 2025-01-10 - 2025-02-10"
                },
                "startDate": "2025-01-10",
                "updatedAt": 1739146518040
            },
            {
                "reportId": "e062e4c1-8a75-4602-85a9-3c2125495aca",
                "endDate": "2025-02-09",
                "subject": "retention",
                "appName": "deploypeer",
                "title": null,
                "ownerId": null,
                "expireAtIso": 1739924118054,
                "recurrence": ["daily"],
                "createdAt": 1739060118054,
                "isFinancial": false,
                "appId": "23782",
                "isPublic": true,
                "genTitle": {
                    "en": "All retention stats for enduser accounts created between 2025-01-09 - 2025-02-09",
                    "fr": "Tous les retention stats for enduser accounts created between 2025-01-09 - 2025-02-09"
                },
                "startDate": "2025-01-09",
                "updatedAt": 1739060118054
            }
        ]
    },
    "status": 200
}
```

</details>
