# SysInvalidateSessionForUser
Invalidates a specific session for a user.

<PartialServop service_name="playerState" operation_name="SYS_INVALIDATE_SESSION_FOR_USER" />

## Method Parameters
Parameter | Description
--------- | -----------
profileId | The profile ID of the user whose session should be invalidated.
sessionId | The specific session ID to invalidate.

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

var postResult = playerStateProxy.sysInvalidateSessionForUser(profileId, sessionId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"playerState",
    "operation":"SYS_INVALIDATE_SESSION_FOR_USER",
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
    "invalidatedCount": 1,
    "invalidated": [
      "lfpkobk5u0613avdc1pai5udpd"
    ],
    "verification": true
  },
  "status": 200
}
```

</details>
