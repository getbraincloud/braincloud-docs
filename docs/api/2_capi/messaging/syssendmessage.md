# SysSendMessage
## Overview
:::tip
This method is available in Cloud Code scripts only.
:::

Sends a message on behalf of the system (i.e. app) to the specified users.



<PartialServop service_name="messaging" operation_name="SYS_SEND_MESSAGE" / >

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
var toProfileIds = [ "profileId1", "profileId2" ];
var contentJson = {
    "subject": "Upcoming features!",
    "text": "Chat and messaging features are here!"
};
var fromJson = {
    "id": null,
    "name": "App Administrator"
};
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.sysSendMessage(toProfileIds, contentJson, fromJson);
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
	"operation": "SYS_SEND_MESSAGE",
	"data": {
		"toProfileIds": [
			"profileId1",
			"profileId2"
		],
		"contentJson": {
			"subject": "Upcoming features!",
			"text": "Chat and messaging features are here!"
		},
		"fromJson": {
			"id": null,
			"name": "App Administrator"
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
--------- | -----------
toProfileIds | The array of recipients  
contentJson | The json content object to send in the message  
fromJson | Who the message is from. Should contain at least "name" field, and potential "pic" field as well.  


