# SysMemberLeft
## Overview
Informs brainCloud that the specified user has left the specified lobby.

<PartialServop service_name="lobby" operation_name="SYS_MEMBER_LEFT" / >

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
var cxId = "55555:aaa-bbb-ccc-ddd:asdfjkl";
var reason = "EVICTED";
var newOwnerCxId = "55555:eee-fff-ggg-hhh:asdfjkl"
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.sysMemberLeft(lobbyId, cxId, reason, newOwnerCxId);
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
	"operation": "SYS_MEMBER_LEFT",
	"data": {
		"lobbyId": "55555:4v4:19",
		"cxId": "55555:aaa-bbb-ccc-ddd:asdfjkl",
		"reason": "EVICTED",
		"newOwnerCxId": "55555:eee-fff-ggg-hhh:asdfjkl"
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
lobbyId | The id of lobby that should be returned to the 'setup' state
cxId | RTT connection id of specified member to be removed from the lobby
reason | Optional reason for the member leaving. Can be one of 'LEFT_BY_CHOICE', 'EVICTED', or 'LOST_CONNECTION'
newOwnerCxId | Optional RTT connection id of another lobby member to be made owner of the lobby if the member leaving is the current owner


