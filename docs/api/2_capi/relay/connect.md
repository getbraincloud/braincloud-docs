# Connect

Start off a connection, based off connection type to <%= data.branding.productName %>'s Relay Servers. Connect options come in from "ROOM_ASSIGNED" lobby callback

## Method Parameters

| Parameter      | Description                                            |
| -------------- | ------------------------------------------------------ |
| connectionType | The connection type. INVALID, WEBSOCKET, TCP, UDP, MAX |
| options        | Options sent in the connection                         |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
RelayConnectionType connectionType = RelayConnectionType.WEBSOCKET;
Dictionary<string, object> options = null;

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.RelayService.Connect(connectionType, options, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->connect(eRelayConnectionType.WEBSOCKET, server.host, port, server.passcode, server.lobbyId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->connect(eRelayConnectionType.WEBSOCKET, server.host, port, server.passcode, server.lobbyId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->connect(eRelayConnectionType.WEBSOCKET, server.host, port, server.passcode, server.lobbyId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.relay.connect(eRelayConnectionType.WEBSOCKET, server.host, port, server.passcode, server.lobbyId, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart

ServerResponse result = await <%= data.branding.codePrefix %>.relayService.connect(eRelayConnectionType.WEBSOCKET:eRelayConnectionType.WEBSOCKET, server.host:server.host, port:port, server.passcode:server.passcode, server.lobbyId:server.lobbyId);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
