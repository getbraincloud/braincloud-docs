# Connect
## Overview
Start off a connection, based off connection type to <%= data.branding.productName %>'s Relay Servers.  Connect options come in from "ROOM_ASSIGNED" lobby callback

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
<%= data.branding.codePrefix %>->getRelayService()->getCount(eRelayConnectionType.WEBSOCKET, server.host, port, server.passcode, server.lobbyId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->getCount(eRelayConnectionType.WEBSOCKET, server.host, port, server.passcode, server.lobbyId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->getCount(eRelayConnectionType.WEBSOCKET, server.host, port, server.passcode, server.lobbyId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->getCount(eRelayConnectionType.WEBSOCKET, server.host, port, server.passcode, server.lobbyId, this);
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

## Method Parameters
Parameter | Description
--------- | -----------
connectionType | The connection type. INVALID, WEBSOCKET, TCP, UDP, MAX
options | Options sent in the connection


