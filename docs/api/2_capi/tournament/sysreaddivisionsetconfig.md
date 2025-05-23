# SysReadDivisionSetConfig

Reads the current version of the division set configuration identified by the division set id.

<PartialServop service_name="tournament" operation_name="SYS_READ_DIVISION_SET_CONFIG" />

## Method Parameters
Parameter | Description
--------- | -----------
divSetId | The division set id uniquely identifying the division set configuration to be returned.

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
var divSetId = "divisionSetId";
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysReadDivisionSetConfig(divSetId);
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
  "operation": "SYS_READ_DIVISION_SET_CONFIG",
  "data":
  {
    "divSetId": "divisionSetId"
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
    "divSetId": "uniqueDivSetId",
    "desc": "Gold division",
    "scheduleType": "Sync",
    "lbTemplate": "l4",
    "max": 100,
    "expiryDays": 15,
    "createdAt": 1654004481428,
    "updatedAt": 1654004481428,
    "version": 1
  },
  "status": 200
}
```
</details>

