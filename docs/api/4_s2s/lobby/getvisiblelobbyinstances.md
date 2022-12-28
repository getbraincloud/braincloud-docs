# GetVisibleLobbyInstances
## Overview
Gets a map keyed by rating of the visible lobby instances matching the given type and rating range.

<PartialServop service_name="lobby" operation_name="GET_VISIBLE_LOBBY_INSTANCES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var lobbyType = "Relay_lobbyT_v2";
var minRating = 10;
var maxRating = 100;
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.getVisibleLobbyInstances(lobbyType, minRating, maxRating);
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
	"operation": "GET_VISIBLE_LOBBY_INSTANCES",
	"data": {
		"lobbyType": "Relay_lobbyT_v2",
		"minRating": 10,
		"maxRating": 100
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
    "lobbiesByRating": {
      "20.0": [
        {
          "id": "23782:Relay_lobbyT_v2:2",
          "lobbyType": "Relay_lobbyT_v2",
          "state": "setup",
          "rating": 20,
          "desc": "starts as soon as 1 player is ready",
          "owner": {
            "profileId": "10b6d6fa-0aa6-43b0-a7b3-48aff2d13312",
            "name": "",
            "rating": 0,
            "pic": null,
            "cxId": "23782:10b6d6fa-0aa6-43b0-a7b3-48aff2d13312:52kc0h19k0pnnjhnrp8pug7udd"
          },
          "numMembers": 1,
          "maxMembers": 8
        }
      ]
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
lobbyType | The type of lobby to look for. Lobby types are defined in the portal.
minRating | The minimum skill rating to use for finding the lobbies.
maxRating | The maximum skill rating to use for finding the lobbies.


