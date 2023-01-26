# SysDisbandLobby
## Overview
Disbands the given lobby. `msg` and `details` are optional values.

<PartialServop service_name="lobby" operation_name="SYS_DISBAND_LOBBY" / >

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
var lobbyId = "55555:4v4:19";
var msg = "Game over";
var details = {};
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.sysDisbandLobby(lobbyId, msg, details);
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
	"service": "lobby",
	"operation": "SYS_DISBAND_LOBBY",
	"data": {
		"lobbyId": "55555:4v4:19",
		"msg": "Game over",
		"details": {}
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
lobbyId | The id of lobby that this room server is associated with. 
msg | Optional message to send to lobby members. 
details | Optional data to send to lobby members. 


