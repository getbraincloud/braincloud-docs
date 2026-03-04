# SysInvalidateAllSessionsForUserExcept
Invalidates all sessions for a user except a specific session.

<PartialServop service_name="playerState" operation_name="SYS_INVALIDATE_ALL_SESSIONS_FOR_USER_EXCEPT" />

## Method Parameters
Parameter | Description
--------- | -----------
profileId | The profile ID of the user whose sessions should be invalidated.
sessionId | The specific session ID to keep active (not invalidate).

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
var profileId = "a-profile-id";
var sessionId = "a-session-id";
var playerStateProxy = bridge.getPlayerstateServiceProxy();

var postResult = playerStateProxy.sysInvalidateAllSessionsForUserExcept(profileId, sessionId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"playerState",
    "operation":"SYS_INVALIDATE_ALL_SESSIONS_FOR_USER_EXCEPT",
    "data":{
        "profileId":"a-profile-id",
        "sessionId":"a-session-id"
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
    "invalidatedCount": 0,
    "invalidated": [],
    "verification": true
  },
  "status": 200
}
```

</details>
