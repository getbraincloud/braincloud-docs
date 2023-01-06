# SysGetMessages
## Overview
:::tip
This method is available in Cloud Code scripts only.
:::

Retrieves the specified message, irregardless of ownership.




<PartialServop service_name="messaging" operation_name="SYS_GET_MESSAGES" / >

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
var msgIds = [ "msgId1", "msgId2" ];
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.sysGetMessages(msgIds);
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
	"operation": "SYS_GET_MESSAGES",
	"data": {
		"msgIds": [
			"msgId1",
			"msgId2"
		]
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

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
----- | ----------------------- | -----------------------------------
40601 | FEATURE_NOT_ENABLED | Messaging feature is not enabled for app.

</details>


## Method Parameters
Parameter | Description
--------- | ------------------------------------
msgIds | An array of the ids of messages to retrieve.


