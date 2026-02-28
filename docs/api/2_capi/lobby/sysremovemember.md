# SysRemoveMember

Evicts the specified user from the specified lobby.

<PartialServop service_name="lobby" operation_name="SYS_REMOVE_MEMBER" />

## Method Parameters

| Parameter | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| lobbyId   | Id of chosen lobby.                                                 |
| cxId      | RTT connection id of specified member to be removed from the lobby. |

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
var lobbyId = "55555:4v4:19";
var cxId = "55555:aaa-bbb-ccc-ddd:asdfjkl";
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.sysRemoveMember(lobbyId, cxId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"lobby",
    "operation":"SYS_REMOVE_MEMBER",
    "data":{
        "lobbyId":"55555:4v4:19",
        "cxId":"55555:aaa-bbb-ccc-ddd:asdfjkl"
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
