# GetAppId
## Overview
Returns the app id of the client app.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string appId = <%= data.branding.codePrefix %>.GetAppId();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * appId = <%= data.branding.codePrefix %>->getAppId();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
const char * appId = [<%= data.branding.codePrefix %> appId];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String appId = <%= data.branding.codePrefix %>.getAppId();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var appId = <%= data.branding.codePrefix %>.getAppId();
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
var appId = <%= data.branding.codePrefix %>.getAppId();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
var appId = <%= data.branding.codePrefix %>.getAppId();
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

