# SysCreateChannel

Initializes a dynamic or system chat channel. Returns the channelId. Channel type can be "dy" or "sy".

<PartialServop service_name="chat" operation_name="SYS_CREATE_CHANNEL" />

## Method Parameters

| Parameter    | Description                                                                                |
| ------------ | ------------------------------------------------------------------------------------------ |
| channelType  | The channel type - currently 'dy' and 'sy' are supported.                                  |
| channelSubId | An app-defined channel sub id. Only letters, numbers, dashes, and underscores are allowed. |

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
<TabItem value="dart" label="Dart">
```

```dart
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var channelType = "dy";
var channelSubId = "myChatRoom";
var chatProxy = bridge.getChatServiceProxy();

var postResult = chatProxy.sysCreateChannel(channelType, channelSubId);
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
	"service": "chat",
	"operation": "SYS_CREATE_CHANNEL",
	"data": {
		"channelType": "dy",
		"channelSubId": "myChatRoom"
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
