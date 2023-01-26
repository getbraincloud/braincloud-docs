# SysDeleteDivisionSetConfig
## Overview
Deletes the division set configuration uniquely identified by the division set id, with optional, additional enforcement. NOTE: Does NOT delete any division set instance leaderboards that have currently been created, those will expire at the normal time. Does NOT prevent players from posting scores to a division set instance they are already a member of. WILL prevent new players for joining the deleted division set (JoinDivisionSet Tournament service API). WILL prevent users from querying the division info (GetDivisionInfo Tournament service API). WILL prevent Design Portal users from being able to view the rankings of the division set instance leaderboards for the deleted Division Set config.

<PartialServop service_name="tournament" operation_name="SYS_DELETE_DIVISION_SET_CONFIG" / >

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
var divSetId = "divisionSetId";
var version = 10;
var force = false;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysDeleteDivisionSetConfig(divSetId, version, force);
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
  "operation": "SYS_DELETE_DIVISION_SET_CONFIG",
  "data":
  {
    "divSetId": "divisionSetId",
    "version": 10,
    "force": false
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
  "status" : 200,
  "data" : null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
divSetId | The division set id uniquely identifying the division set configuration to be deleted.
version | Current version number of division set config being deleted. Use -1 to disable version checking.
force | Optional flag, defaults to false. If false, ensures the division set config has no associated, unexpired division set instance leaderboards that still exist (disallows the deletion if so). If true, this checking is not enforced and may result in some limitations.


