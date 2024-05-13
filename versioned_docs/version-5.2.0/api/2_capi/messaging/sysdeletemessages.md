# SysDeleteMessages

Deletes specified system messages on the server. Note, if a regular message, deletes all references to it.

<PartialServop service_name="messaging" operation_name="SYS_DELETE_MESSAGES" />

## Method Parameters
Parameter | Description
--------- | -----------
msgIds | An array of message ids.

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
var msgIds = [
  "msgId1",
  "msgId2"
];
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.sysDeleteMessages(msgIds);
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
  "operation": "SYS_DELETE_MESSAGES",
  "data":
  {
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
  "data": {
    "actual": 1,
    "requested": 1
  },
  "status": 200
}
```
</details>

