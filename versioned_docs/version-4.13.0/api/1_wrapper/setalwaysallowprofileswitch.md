# SetAlwaysAllowProfileSwitch
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
<%= data.branding.intialize_step %>

<%= data.branding.codePrefix %>.SetAlwaysAllowProfileSwitch(false);    // Default is true
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->setAlwaysAllowProfileSwitch(true);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
<%= data.branding.codePrefix %>.alwaysAllowProfileSwitch = YES;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.setAlwaysAllowProfileSwitch(true);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.setAlwaysAllowProfileSwitch(true);
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
<%= data.branding.codePrefix %>.setAlwaysAllowProfileSwitch(true);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
<%= data.branding.codePrefix %>.setAlwaysAllowProfileSwitch(true);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```javascript
<%= data.branding.codePrefix %>.setAlwaysAllowProfileSwitch(true);
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
alwaysAllow | Controls whether the profile ID is passed in with non-anonymous authentications.


