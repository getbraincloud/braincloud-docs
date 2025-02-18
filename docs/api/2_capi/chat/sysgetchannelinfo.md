# SysGetChannelInfo

:::tip
This method is available in Cloud Code scripts only.
:::

Returns *description info* and *activity stats* for the specified channel. Note that `numMembers`, `numListeners` and `listeners` are only returned for non-global groups. 




<PartialServop service_name="chat" operation_name="SYS_GET_CHANNEL_INFO" />

## Method Parameters
Parameter | Description
--------- | -----------
channelId | The id of the channel

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
var channelId = "55555:gl:bcDev";
var chatProxy = bridge.getChatServiceProxy();

var postResult = chatProxy.sysGetChannelInfo(channelId);
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
	"operation": "SYS_GET_CHANNEL_INFO",
	"data": {
		"channelId": "55555:gl:bcDev"
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
        "id": "55555:gl:<%= data.branding.productName %>Dev",
        "type": "gl",
        "code": "<%= data.branding.productName %>Dev",
        "name": "<%= data.branding.productName %> dev",
        "desc": "For discussing <%= data.branding.productName %> development status",
        "stats": {
            "messageCount": 25
        }
    }
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40346 | CHAT_INVALID_CHANNEL_ID | The channel id provided is invalid.
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature
40616 | CLOUD_CODE_ONLY | Method only available via cloud code

</details>


