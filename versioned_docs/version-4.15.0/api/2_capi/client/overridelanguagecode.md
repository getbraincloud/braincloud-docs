# OverrideLanguageCode
## Overview
Sets the language code sent to <%= data.branding.productName %> when a user authenticates. If the language is set to a non-ISO 639-1 standard value the app default will be used instead.  The supported languages and the default can be set on the [Localization](https://portal.braincloudservers.com/admin/dashboard#/development/core-settings-localization) page of the portal.

These methods should be called before authenticating so that they are sent to the server.

Will override any auto detected language.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string languageCode = "en";
<%= data.branding.codePrefix %>.OverrideLanguageCode(languageCode);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* languageCode = "en";
<%= data.branding.codePrefix %>->overrideLanguageCode(languageCode);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* languageCode = @"en";
[<%= data.branding.codePrefix %> overrideLanguageCode:languageCode];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String languageCode = "en";
<%= data.branding.codePrefix %>.overrideLanguageCode(languageCode);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var languageCode = "en";
<%= data.branding.codePrefix %>.overrideLanguageCode(languageCode);
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
var languageCode = "en";
<%= data.branding.codePrefix %>.overrideLanguageCode(languageCode);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
var languageCode = "en";
<%= data.branding.codePrefix %>.overrideLanguageCode(languageCode);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
languageCode | ISO 639-1 two-letter language code


