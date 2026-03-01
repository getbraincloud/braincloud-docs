# RegisterRelayCallback

Register callback for relay messages coming from peers.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
//For the client library version 4.5.6, it now includes a netId parameter.
static void relayCallback(short netId, byte[] data)
{
    string message = Encoding.ASCII.GetString(data, 0, data.Length);
    Console.WriteLine("netId: " + netId);
    Console.WriteLine("relayCallback: " + message);
}

//For the client library version 4.5.5 and older, it only has one data parameter.
static void relayCallback(byte[] data)
{
    string message = Encoding.ASCII.GetString(data, 0, data.Length);
    Console.WriteLine("relayCallback: " + message);
}
<%= data.branding.codePrefix %>.RelayService.RegisterRelayCallback(relayCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->RegisterRelayCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->RegisterRelayCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->RegisterRelayCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.relay.RegisterRelayCallback(result =>
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
 void relayCallback(int netId, Uint8List data) {
   // Your code
 }
​
<%= data.branding.codePrefix %>.relayService.RegisterRelayCallback(relayCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local relayCallback = function(jsonResponse)
    -- Your code
end

<%= data.branding.codePrefix %>:getRelayService():RegisterRelayCallback(relayCallback)
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

```r
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
