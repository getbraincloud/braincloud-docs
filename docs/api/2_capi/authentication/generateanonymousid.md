# GenerateAnonymousId
## Overview
Generates a GUID for use as an anonymous installation ID for <%= data.branding.productName %>. Normally only called once when the application starts for the first time.

The generated ID is used in conjunction with [<code>InitializeIdentity</code>](/api/capi/client/initializeidentity) in the <%= data.branding.codeClient %>.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string anonId = <%= data.branding.codePrefix %>.AuthenticationService.GenerateAnonymousId();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::string anonId = <%= data.branding.codePrefix %>->getAuthenticationService()->generateAnonymousId();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * anonId = [[<%= data.branding.codePrefix %> authenticationService] generateAnonymousId];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String anonId = <%= data.branding.codePrefix %>.getAuthenticationService().generateAnonymousId();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var anonId = <%= data.branding.codePrefix %>.authentication.generateAnonymousId();
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

