# SysGetReportForStartDate

Returns the report matching given subject, recurrence and startDate criteria, if it exists.

<PartialServop service_name="report" operation_name="SYS_GET_REPORT_FOR_START_DATE" />

## Method Parameters

| Parameter  | Description              |
| ---------- | ------------------------ |
| subject    | The report subject.      |
| recurrence | The report recurrence.   |
| startDate  | The formatted startDate. |

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
var subject = "retention";
var recurrence = "weekly";
var startDate = "2024-11-09";
var reportProxy = bridge.getReportServiceProxy();

var postResult = reportProxy.sysGetReportForStartDate(subject, recurrence, startDate);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"report",
    "operation":"SYS_GET_REPORT_FOR_START_DATE",
    "data":{
        "subject":"retention",
        "recurrence":"weekly",
        "startDate":"2024-11-09"
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
        "reportId": "b22dc327-0047-4167-b0e9-bb55589d5c25",
        "createdAt": 1736986525896,
        "updatedAt": 1736986525896,
        "expireAtIso": 1737850525896,
        "subject": "retention",
        "recurrence": ["daily"],
        "startDate": "2024-12-16",
        "endDate": "2025-01-16",
        "genTitle": {
            "en": "All retention stats for enduser accounts created between 2024-12-16 - 2025-01-16",
            "fr": "Tous les retention stats for enduser accounts created between 2024-12-16 - 2025-01-16"
        },
        "title": null,
        "ownerId": null,
        "isFinancial": false,
        "isPublic": true,
        "data": {
            "2025-01-14": {
                "_id": "2025-01-14",
                "crn00": 1,
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
                "crd00": 1,
                "crd01": 0,
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
            },
            "2025-01-10": {
                "_id": "2025-01-10",
                "crn00": 1,
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
                "crd00": 1,
                "crd01": 0,
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
            },
            "2025-01-08": {
                "_id": "2025-01-08",
                "crn00": 1,
                "crn01": 0,
                "crn02": 1,
                "crn03": 0,
                "crn04": 0,
                "crn05": 0,
                "crn06": 0,
                "crn07": 1,
                "crn14": 0,
                "crn21": 0,
                "crn28": 0,
                "crn30": 0,
                "rrn00": 1,
                "rrn01": 1,
                "rrn02": 1,
                "rrn03": 1,
                "rrn04": 1,
                "rrn05": 1,
                "rrn06": 1,
                "rrn07": 1,
                "rrn14": 0,
                "rrn21": 0,
                "rrn28": 0,
                "rrn30": 0,
                "rrd00": 1,
                "rrd01": 1,
                "rrd02": 1,
                "rrd03": 1,
                "rrd04": 1,
                "rrd05": 1,
                "rrd06": 1,
                "rrd07": 1,
                "rrd14": 0,
                "rrd21": 0,
                "rrd28": 0,
                "rrd30": 0,
                "crd00": 1,
                "crd01": 0,
                "crd02": 1,
                "crd03": 0,
                "crd04": 0,
                "crd05": 0,
                "crd06": 0,
                "crd07": 1,
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
