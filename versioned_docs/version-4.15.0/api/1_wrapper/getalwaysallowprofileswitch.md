# GetAlwaysAllowProfileSwitch
## Overview
For non-anonymous authentication methods, a profile ID will be passed in when this value is set to false. This will generate an error on the server if the profile ID passed in does not match the profile associated with the authentication credentials.

By default, this value is true.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
bool allowSwitch = <%= data.branding.codePrefix %>.GetAlwaysAllowProfileSwitch();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.intialize_step %>
        
bool alwaysAllow = <%= data.branding.codePrefix %>.AlwaysAllowProfileSwitch;

<%= data.branding.codePrefix %>.AlwaysAllowProfileSwitch = false; // Disables profile switches.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BOOL allowSwitch = <%= data.branding.codePrefix %>.alwaysAllowProfileSwitch;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
bool allowSwitch = <%= data.branding.codePrefix %>.getAlwaysAllowProfileSwitch();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var allowSwitch = <%= data.branding.codePrefix %>.getAlwaysAllowProfileSwitch();
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
var allowSwitch = <%= data.branding.codePrefix %>.getAlwaysAllowProfileSwitch();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
var allowSwitch = <%= data.branding.codePrefix %>.getAlwaysAllowProfileSwitch();
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```javascript
var allowSwitch = <%= data.branding.codePrefix %>.getAlwaysAllowProfileSwitch();
```
</details>

