# SysListDivisionSetConfigs
## Overview
Lists all division set configurations for the app.

<PartialServop service_name="tournament" operation_name="SYS_LIST_DIVISION_SET_CONFIGS" / >

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
var optionsJson = {
  "sort": "ASCENDING"
};
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysListDivisionSetConfigs(optionsJson);
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
  "service": "tournament",
  "operation": "SYS_LIST_DIVISION_SET_CONFIGS",
  "data":
  {
    "optionsJson": {
      "sort": "ASCENDING"
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
    "count": 7,
    "divSetConfigs": [
      {
        "divSetId": "div1",
        "desc": "A division to the player",
        "scheduleType": "Sync",
        "lbTemplate": "lcon",
        "max": 100,
        "expiryDays": 15,
        "createdAt": 1593703109596,
        "updatedAt": 1594670543542,
        "version": 1
      },
      {
        "divSetId": "uniqueDivSetId",
        "desc": "Gold division",
        "scheduleType": "Sync",
        "lbTemplate": "l4",
        "max": 100,
        "expiryDays": 15,
        "createdAt": 1654004481428,
        "updatedAt": 1654004481428,
        "version": 1
      }
    ]
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
optionsJson | Optional JSON to sort the list of division set configs. Valid values for sort field are \ASCENDING\ or \DESCENDING\. Unsorted if not specified.


