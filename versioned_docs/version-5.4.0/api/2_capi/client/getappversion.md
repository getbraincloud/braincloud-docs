# GetAppVersion

Returns the app version of the client app.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string appVersion = <%= data.branding.codePrefix %>.GetAppVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * appVersion = <%= data.branding.codePrefix %>->getAppVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
const char * appVersion = [<%= data.branding.codePrefix %> appVersion];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String appVersion = <%= data.branding.codePrefix %>.getAppVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var appVersion = <%= data.branding.codePrefix %>.getAppVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var appVersion = <%= data.branding.codePrefix %>.getAppVersion();
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
