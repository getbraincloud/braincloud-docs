# SysUpdateMessage
## Overview
:::tip
This method is available in Cloud Code scripts only.
:::

Update the content of the specified message.




### Status Codes
Code | Name | Description
----- | ----------------------- | ----------------------------
40601 | FEATURE_NOT_ENABLED | Messaging feature is not enabled for app.

<PartialServop service_name="messaging" operation_name="SYS_UPDATE_MESSAGE" / >

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
var msgId = "e7d15e38-1bc7-40bd-aecf-80ea38b11992";
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
		"msgId": "e7d15e38-1bc7-40bd-aecf-80ea38b11992",
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

<details>
<summary>JSON Response</summary>

```json
{
    "status": 200,
    "data": {
		"actual": 0,
		"requested": 1,
		"msgId": "e7d15e38-1bc7-40bd-aecf-80ea38b11992"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | --------------------------------
msgId | The id of the message to update.
msgVer | The version of the message.
content | The new content to write to the message.


