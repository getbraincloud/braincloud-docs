# SetPingInterval

Set the ping interval.

## Method Parameters

| Parameter | Description              |
| --------- | ------------------------ |
| interval  | Seconds inbetween pings. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
float interval = 10;
<%= data.branding.codePrefix %>.RelayService.SetPingInterval(interval);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->SetPingInterval(10);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->SetPingInterval(10);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->SetPingInterval(10);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.relay.setPingInterval(10);
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
int interval = 10;
​
<%= data.branding.codePrefix %>.relayService.setPingInterval(interval);
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
