# OverrideCountryCode
## Overview
Sets the country code sent to <%= data.branding.productName %> when a user authenticates. Will override any auto detected country.

These methods should be called before authenticating so that they are sent to the server.

:::caution
Because of a Unity limitation country code cannot be detected automatically on any platforms other than iOS and Android.
:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string countryCode = "CA";
<%= data.branding.codePrefix %>.OverrideCountryCode(countryCode);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* countryCode = "CA";
<%= data.branding.codePrefix %>->overrideCountryCode(countryCode);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* countryCode = @"CA";
[<%= data.branding.codePrefix %> overrideCountryCode:countryCode];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String countryCode = "CA";
<%= data.branding.codePrefix %>.overrideCountryCode(countryCode);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var countryCode = "CA";
<%= data.branding.codePrefix %>.overrideCountryCode(countryCode);
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
var countryCode = "CA";
<%= data.branding.codePrefix %>.overrideCountryCode(countryCode);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
var countryCode = "CA";
<%= data.branding.codePrefix %>.overrideCountryCode(countryCode);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
countryCode | ISO 3166-1 two-letter country code


