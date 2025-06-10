# SysGetReport

Returns the full report for the given reportId, if it exists.

<PartialServop service_name="report" operation_name="SYS_GET_REPORT" />

## Method Parameters

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| reportId  | The report id uniquely identify the report. |

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
var reportId = "the_report_id_guid";
var reportProxy = bridge.getReportServiceProxy();

var postResult = reportProxy.sysGetReport(reportId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"report",
    "operation":"SYS_GET_REPORT",
    "data":{
        "reportId":"the_report_id_guid"
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
        "reportId": "d2b844f6-8800-49af-96d2-5e1d89010cb0",
        "createdAt": 1736381720687,
        "updatedAt": 1736381720687,
        "expireAtIso": 1737245720687,
        "subject": "retention",
        "recurrence": ["daily"],
        "startDate": "2024-12-09",
        "endDate": "2025-01-09",
        "genTitle": {
            "en": "All retention stats for enduser accounts created between 2024-12-09 - 2025-01-09",
            "fr": "Tous les retention stats for enduser accounts created between 2024-12-09 - 2025-01-09"
        },
        "title": null,
        "ownerId": null,
        "isFinancial": false,
        "isPublic": true,
        "data": {
            "2024-12-10": {
                "_id": "2024-12-10",
                "crn00": 0,
                "crn01": 0,
                "crn02": 0,
                "crn03": 0,
                "crn04": 0,
                "crn05": 0,
                "crn06": 0,
                "crn07": 0,
                "crn14": 0,
                "crn21": 0,
                "crn28": 0,
                "crn30": 0,
                "rrn00": 1,
                "rrn01": 0,
                "rrn02": 0,
                "rrn03": 0,
                "rrn04": 0,
                "rrn05": 0,
                "rrn06": 0,
                "rrn07": 0,
                "rrn14": 0,
                "rrn21": 0,
                "rrn28": 0,
                "rrn30": 0,
                "rrd00": 1,
                "rrd01": 0,
                "rrd02": 0,
                "rrd03": 0,
                "rrd04": 0,
                "rrd05": 0,
                "rrd06": 0,
                "rrd07": 0,
                "rrd14": 0,
                "rrd21": 0,
                "rrd28": 0,
                "rrd30": 0,
                "crd00": null,
                "crd01": null,
                "crd02": null,
                "crd03": null,
                "crd04": null,
                "crd05": null,
                "crd06": null,
                "crd07": null,
                "crd14": null,
                "crd21": null,
                "crd28": null,
                "crd30": null
            },
            "2025-01-08": {
                "_id": "2025-01-08",
                "crn00": 2326,
                "crn01": 1,
                "crn02": 0,
                "crn03": 0,
                "crn04": 0,
                "crn05": 0,
                "crn06": 0,
                "crn07": 0,
                "crn14": 0,
                "crn21": 0,
                "crn28": 0,
                "crn30": 0,
                "rrn00": 2344,
                "rrn01": 1,
                "rrn02": 0,
                "rrn03": 0,
                "rrn04": 0,
                "rrn05": 0,
                "rrn06": 0,
                "rrn07": 0,
                "rrn14": 0,
                "rrn21": 0,
                "rrn28": 0,
                "rrn30": 0,
                "rrd00": 1,
                "rrd01": 0.0004266211604095563,
                "rrd02": 0,
                "rrd03": 0,
                "rrd04": 0,
                "rrd05": 0,
                "rrd06": 0,
                "rrd07": 0,
                "rrd14": 0,
                "rrd21": 0,
                "rrd28": 0,
                "rrd30": 0,
                "crd00": 1,
                "crd01": 0.0004299226139294927,
                "crd02": 0,
                "crd03": 0,
                "crd04": 0,
                "crd05": 0,
                "crd06": 0,
                "crd07": 0,
                "crd14": 0,
                "crd21": 0,
                "crd28": 0,
                "crd30": 0
            }
        },
        "appId": "23782",
        "appName": "deploypeer"
    },
    "status": 200
}
```

</details>
