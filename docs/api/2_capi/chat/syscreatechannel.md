# SysCreateChannel
## Overview
Initializes a dynamic chat channel. Returns the channelId. Channel type must be "dy".

<PartialServop service_name="chat" operation_name="SYS_CREATE_CHANNEL" / >

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

<details>
<summary>JSON Response</summary>

```json
{
  "data": {
    "channelId": "12345:dy:myChatRoom"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
channelType | The channel type - currently only 'dy' is supported. 
channelSubId | An app-defined channel sub id. Only letters, numbers, dashes, and underscores are allowed. 


