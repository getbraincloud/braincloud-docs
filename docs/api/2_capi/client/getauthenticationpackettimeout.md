# GetAuthenticationPacketTimeout

Gets the authentication packet timeout which is tracked separately from all other packets. Note that authentication packets are never retried and so this value represents the total time a client would wait to receive a reply to an authentication API call.

By default this timeout is set to 15 seconds.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
int timeout = <%= data.branding.codePrefix %>.GetAuthenticationPacketTimeout();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int timeout = <%= data.branding.codePrefix %>->getAuthenticationPacketTimeout();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int timeout = [<%= data.branding.codePrefix %> getAuthenticationPacketTimeout];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
int timeout = <%= data.branding.codePrefix %>.getAuthenticationPacketTimeout();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var timeout = <%= data.branding.codePrefix %>.getAuthenticationPacketTimeout();
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
