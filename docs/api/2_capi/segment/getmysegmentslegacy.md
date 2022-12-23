# GetMySegmentsLegacy
## Overview
Returns the segments for the current user - in legacy format (i.e. using the existing, numeric segment ids). Available via cloud-code only.

<PartialServop service_name="segment" operation_name="GET_MY_SEGMENTS_LEGACY" / >

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
var segmentProxy = bridge.getSegmentServiceProxy();

var postResult = segmentProxy.getMySegmentsLegacy();
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
	"service": "segment",
	"operation": "GET_MY_SEGMENTS_LEGACY",
	"data": {}
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
		"segments": [
		  {
			"segmentId": 1,
			"name": "segmentname"
		  },
		  {
			"segmentId": 2,
			"name": "another segment"
		  }
		]
	  },
	  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
ownerId | Match owner identifier
matchId | Match identifier
version | Game state version to ensure turns are submitted once and in order
jsonMatchState | JSON string blob provided by the caller
pushNotificationMessage | Optional push notification message to send to the other party. Refer to the Push Notification functions for the syntax required.
nextPlayer | Optionally, force the next player player to be a specific player
jsonSummary | Optional JSON string defining what the other player will see as a summary of the game when listing their games
jsonStatistics | Optional JSON string blob provided by the caller


