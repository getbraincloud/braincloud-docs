# RegisterSystemCallback

Register callback for RelayServer system messages.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
RSDataCallback rsDataCallback = (response) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};

<%= data.branding.codePrefix %>.RelayService.RegisterSystemCallback(rsDataCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->registerSystemCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->registerSystemCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->registerSystemCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.relay.registerSystemCallback(result =>
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
<%= data.branding.codePrefix %>.relayService.registerSystemCallback(relayCallback);

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
