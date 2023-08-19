# IsAuthenticated
## Overview
Returns true if the user is authenticated.

If a session has timed out or if the server returns a session invalidation error, this flag will reset back to false.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
bool isAuthenticated = <%= data.branding.codePrefix %>.Authenticated;
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
bool isAuthenticated = <%= data.branding.codePrefix %>->isAuthenticated();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
bool isAuthenticated = [<%= data.branding.codePrefix %> isAuthenticated];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
boolean isAuthenticated = <%= data.branding.codePrefix %>.isAuthenticated();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var isAuthenticated = <%= data.branding.codePrefix %>.isAuthenticated();
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
var isAuthenticated = <%= data.branding.codePrefix %>.isAuthenticated();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
var isAuthenticated = <%= data.branding.codePrefix %>.isAuthenticated();
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

