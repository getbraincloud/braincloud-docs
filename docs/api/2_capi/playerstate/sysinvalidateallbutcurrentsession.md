# SysInvalidateAllButCurrentSession
Invalidates all sessions for the current user except the current session.

<PartialServop service_name="playerState" operation_name="SYS_INVALIDATE_ALL_BUT_CURRENT_SESSION" />

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
<TabItem value="lua" label="Roblox">
```

```lua
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var playerStateProxy = bridge.getPlayerstateServiceProxy();

var postResult = playerStateProxy.sysInvalidateAllButCurrentSession();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"playerState",
    "operation":"SYS_INVALIDATE_ALL_BUT_CURRENT_SESSION"
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
    "invalidatedCount": 1,
    "invalidated": [
      "vu6j3tdff5kht0bqer3cbhin5t"
    ],
    "verification": true
  },
  "status": 200
}
```

</details>
