# SysSendSignal

Send the given data to all members of the given lobby.

<PartialServop service_name="lobby" operation_name="SYS_SEND_SIGNAL" />

## Method Parameters
Parameter | Description
--------- | -----------
lobbyId | Id of chosen lobby. 
signalData | Signal data to be sent. 
from | Optional 'from' data to be sent. 

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var lobbyId = "123456:4v4:19";
var signalData = {};
var from = {};
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.sysSendSignal(lobbyId, signalData, from);
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
	"operation": "SYS_SEND_SIGNAL",
	"data": {
		"lobbyId": "55555:4v4:19",
		"signalData": {},
		"from": {}
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

