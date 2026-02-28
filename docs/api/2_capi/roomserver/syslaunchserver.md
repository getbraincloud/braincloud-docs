# SysLaunchServer
Launch a hosted server directly. Allows for the bypassing of brainCloud lobby matchmaking.

<PartialServop service_name="roomServer" operation_name="LAUNCH_SERVER" />

## Method Parameters
Parameter | Description
--------- | -----------
serverName | The type of server to launch as defined in App > Design > Servers > My Servers .
scriptName | The name of the cloud code script to invoke for all hosted server launch events. Should be the whole path to the script.
scriptData | Optional JSON object that will be sent as input to the associated cloud code script.
regionId | Optional region id to target for the hosted server launch.

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
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var serverName = "my-server-type";
var scriptName = "script-name";
var scriptData = {
    "abc": "xyz"
};
var regionId = "ca-central-1";
var roomServerProxy = bridge.getRoomserverServiceProxy();

var postResult = roomServerProxy.launchServer(serverName, scriptName, scriptData, regionId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"roomServer",
    "operation":"LAUNCH_SERVER",
    "data":{
        "serverName":"my-server-type",
        "scriptName":"script-name",
        "scriptData":{
            "abc":"xyz"
        },
        "regionId":"ca-central-1"
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
        "serverId": "23782:d1787dee-7a3a-42e1-a2ae-74e08ca507f5"
    },
    "status": 200
}
```

</details>
