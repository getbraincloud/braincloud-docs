# SysDeleteMessage
## Overview
:::tip
This method is available in Cloud Code scripts only.
:::

Delete the specified message.




### Status Codes
Code | Name | Description
---- | ---- | -----------
40601 | FEATURE_NOT_ENABLED | Messaging feature is not enabled for app.

<PartialServop service_name="messaging" operation_name="SYS_DELETE_MESSAGE" / >

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
var msgId = "msgId1";
var msgVer = 1;
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.sysDeleteMessage(msgId, msgVer);
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
	"operation": "SYS_DELETE_MESSAGE",
	"data": {
		"msgId": "msgId1",
		"msgVer": 1
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
 }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | ------------------------------------
msgId | The id of the message to update.
msgVer | The version of the message.


