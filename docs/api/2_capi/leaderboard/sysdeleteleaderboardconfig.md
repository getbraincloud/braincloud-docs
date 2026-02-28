# SysDeleteLeaderboardConfig

Delete a leaderboard config, with support for tournament leaderboards. Note that a leaderboard configured as a tournament template-only cannot be deleted if any division set configuration is referencing it.

<PartialServop service_name="leaderboard" operation_name="SYS_DELETE_LEADERBOARD_CONFIG" />

## Method Parameters

| Parameter     | Description                                                                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| leaderboardId | The leaderboard to delete.                                                                                                                                              |
| forceDelete   | Flag indicates whether to force delete leaderboard even if it has a tournament in progress or if it is an ADHOC leaderboard with future scheduled tournament period(s). |

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
var leaderboardId = "a-leaderboard-id";
var forceDelete = False;
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.sysDeleteLeaderboardConfig(leaderboardId, forceDelete);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"leaderboard",
    "operation":"SYS_DELETE_LEADERBOARD_CONFIG",
    "data":{
        "leaderboardId":"a-leaderboard-id",
        "forceDelete":false
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
    "status": 200,
    "data": {}
}
```

</details>
