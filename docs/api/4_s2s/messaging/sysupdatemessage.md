# SysUpdateMessage
## Overview
Updates a system message.

<PartialServop service_name="messaging" operation_name="SYS_UPDATE_MESSAGE" / >

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
var msgId = "msgId1";
var msgVer = 1;
var contentJson = {
  "subject": "New features",
  "text": "Chat and messaging features coming soon..."
};
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.sysUpdateMessage(msgId, msgVer, contentJson);
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
	"service": "messaging",
	"operation": "SYS_UPDATE_MESSAGE",
	"data": {
		"msgId": "msgId1",
		"msgVer": 1,
		"contentJson": {
			"subject": "New features",
			"text": "Chat and messaging features coming soon..."
		}
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
msgId | The id of the message to update. 
msgVer | The version of the message. Use -1 to specify latest version. 
contentJson | The new content to write to the message. 


