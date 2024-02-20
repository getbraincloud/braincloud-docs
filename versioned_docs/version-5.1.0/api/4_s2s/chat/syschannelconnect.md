# SysChannelConnect
Connect to a chat channel.

<PartialServop service_name="chat" operation_name="SYS_CHANNEL_CONNECT" />

## Method Parameters
Parameter | Description
--------- | -----------
channelId | The channel id to connect to.
maxReturn | Max channel messages to return.

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
var channelId = "55555:sy:mysyschannel";
var maxReturn = 10;
var chatProxy = bridge.getChatServiceProxy();

var postResult = chatProxy.SysChannelConnect(channelId, maxReturn);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"chat",
    "operation":"SYS_CHANNEL_CONNECT",
    "data":{
        "channelId":"55555:sy:mysyschannel",
        "maxReturn":10
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
    "messages": [
      {
        "date": 1698765119868,
        "ver": 1,
        "msgId": "869767741372417",
        "from": {
          "name": "Homer",
          "pic": "http://www.simpsons.test/homer.jpg",
          "id": ""
        },
        "content": {
          "text": "Hello world",
          "custom": {
            "somethingCustom": "wow"
          }
        },
        "expiresAt": 1701357119868,
        "chId": "55555:sy:mysyschannel",
        "updatedAt": 1698765119868
      }
    ]
  },
  "status": 200
}
```

</details>

