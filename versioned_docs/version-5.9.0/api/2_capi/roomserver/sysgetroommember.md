# SysGetRoomMember
Used to retrieve the details of the given room member.

<PartialServop service_name="roomServer" operation_name="SYS_GET_ROOM_MEMBER" />

## Method Parameters
Parameter | Description
--------- | -----------
member | Member data used as input to a direct launch provider for validating the connection of a client.
brainCloudContext | Data provided by brainCloud when the server instance was launched.

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
var member = {
    "cxId": "55555:abc:123"
};
var brainCloudContext = {
    "scriptId": "my-script-id",
    "scriptData": {
        "abc": "xyz"
    }
};
var roomServerProxy = bridge.getRoomserverServiceProxy();

var postResult = roomServerProxy.sysGetRoomMember(member, brainCloudContext);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"roomServer",
    "operation":"SYS_GET_ROOM_MEMBER",
    "data":{
        "member":{
            "cxId":"55555:abc:123"
        },
        "brainCloudContext":{
            "scriptId":"my-script-id",
            "scriptData":{
                "abc":"xyz"
            }
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
  "status" : 200,
  "data" : {
    "answer": "NaN"
  }
}
```

</details>
