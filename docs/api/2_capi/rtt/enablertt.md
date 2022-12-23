# EnableRTT
## Overview
Attempts to establish an RTT connection to the <%= data.branding.productName %> servers. 

RTT must be enabled in the *Design Portal*, under **Design | Core App Info | Advanced Settings**.

RTT is available to all *Plus* plan subscriptions.

<PartialServop service_name="rttRegistration" operation_name="REQUEST_CLIENT_CONNECTION" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Real-time Tech (RTT) must be checked on the dashboard, under Design | Core App Info | Advanced Settings.
eRTTConnectionType rttConnectionType = eRTTConnectionType.WEBSOCKET;
SuccessCallback successCallback = (response, cbObject) =>
{
	Dictionary<string, object> jsonMessage = (Dictionary<string, object>)JsonFx.Json.JsonReader.Deserialize(response);
	Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];
	
	string heartbeatSeconds = jsonData["heartbeatSeconds"].ToString();
	
	string logMessage = string.Join(" | ", new [] {heartbeatSeconds});
	Debug.Log(logMessage); // 30
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
	Debug.Log(string.Format("[EnableRTT Failed] {0}  {1}  {2}", status, code, error));
};
<%= data.branding.codePrefix %>.RTTService.EnableRTT(rttConnectionType, successCallback, failureCallback);		
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
bool useWebSocket = true;

<%= data.branding.codePrefix %>->enableRTT(useWebSocket, true);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
Coming soon!
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IRTTConnectCallback

<%= data.branding.codePrefix %>.RTTService.enableRTT(this);

public void rttConnectSuccess()
{
    System.out.print("Success");
}
public void rttConnectFailure(String errorMessage)
{
    System.out.print(String.format("Failed | %s", errorMessage));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.rttService.enableRTT(result =>
{
    console.log(result);
}, error =>
{
    console.log(error);
});
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

<details>
<summary>JSON Response</summary>

```json
{
    "service": "rtt",
    "operation": "CONNECT",
    "data": {
        "heartbeatSeconds": 30
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
connectionType | Type of RTT connections being established. Examples: WebSocket, TCP.


