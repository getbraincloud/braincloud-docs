# GetConnectionStatus

Return the RTT connection status (CONNECTED, DISCONNECTED, CONNECTING, and DISCONNECTING).

<PartialServop service_name="rttRegistration" operation_name="GET_CONNECTION_STATUS" />

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.RTTService.GetConnectionStatus();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getConnectionStatus();
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
<%= data.branding.codePrefix %>.RTTService.getConnectionStatus();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.rttService.getConnectionStatus();
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
RTTConnectionStatus? response = _bc.rttService.getConnectionStatus();
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local response = <%= data.branding.codePrefix %>:getRttService():getConnectionStatus()
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
