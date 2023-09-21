# ClearSavedProfileId
## Overview
Used to clear the saved profile ID - to use in cases when the user is attempting to switch to a different game profile.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.AuthenticationService.ClearSavedProfileID();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getAuthenticationService()->clearSavedProfileID();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[[<%= data.branding.codePrefix %> authenticationService] clearSavedProfile];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public void clearSavedProfileId();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.authentication.clearSavedProfileId();
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

