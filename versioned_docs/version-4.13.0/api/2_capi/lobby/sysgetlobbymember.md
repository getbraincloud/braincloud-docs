# SysGetLobbyMember
## Overview
Retrieves lobby membership details for the specified user.

<PartialServop service_name="lobby" operation_name="SYS_GET_LOBBY_MEMBER" / >

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
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.sysGetLobbyMember(lobbyId, cxId);
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
	"operation": "SYS_GET_LOBBY_MEMBER",
	"data": {
		"lobbyId": "55555:4v4:19",
		"cxId": "55555:aaa-bbb-ccc-ddd:asdfjkl"
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
    "profileId": "c394230e-53c0-4ba3-8eed-90963e58de9c",
    "name": "",
    "pic": "",
    "rating": 1200,
    "team": "all",
    "isReady": true,
    "extra": {},
    "passcode": "8ebbd5",
    "cxId": "13229:c394230e-53c0-4ba3-8eed-90963e58de9c:il6dpch4c8g4jm6p3o5vc85ssq"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
lobbyId | Id of chosen lobby
cxId | RTT connection id of a lobby member


