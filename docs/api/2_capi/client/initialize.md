# Initialize
## Overview
> To initialize, use this code:











This method initializes the <%= data.branding.productName %> client SDK.  The information required to initialize can be found on the [Application IDs page](https://portal.braincloudservers.com/admin/dashboard#/development/core-settings-information) of the portal.

:::caution
Initialize must be called before you can call any <%= data.branding.productName %> APIs.
:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// If you're using Unity, you can make use of the <%= data.branding.productName %>Settings toolbar
string serverUrl = "https://api.braincloudservers.com/dispatcherv2";
string secret = "1234-1234-1234-1234";
string appId = "123456";

<%= data.branding.codePrefix %>.Initialize(serverUrl, secret, appId, "1.0.0");
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* serverUrl = "https://api.braincloudservers.com/dispatcherv2";
const char* secret = "1234-1234-1234-1234";
const char* appId = "123456";

<%= data.branding.codePrefix %>->initialize(serverUrl, secret, appId, "1.0.0");
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* serverUrl = @"https://api.braincloudservers.com/dispatcherv2";
NSString* secret = @"1234-1234-1234-1234";
NSString* appId = @"123456";

[<%= data.branding.codePrefix %> initialize:serverUrl
                                 secretKey:secret
                                    appId:appId
                                    appVersion:"1.0.0"];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String serverUrl = "https://api.braincloudservers.com/dispatcherv2";
String secret = "1234-1234-1234-1234";
String appId = "123456";

<%= data.branding.codePrefix %>.initialize(appId, secret, "1.0.0", serverUrl);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var secret = "1234-1234-1234-1234";
var appId = "123456";

<%= data.branding.codePrefix %>.initialize(appId, secret, "1.0.0");
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
var secret = "1234-1234-1234-1234";
var appId = "123456";

<%= data.branding.codePrefix %>.initialize(appId, secret, "1.0.0");
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
var secret = "1234-1234-1234-1234";
var appId = "123456";

<%= data.branding.codePrefix %>.initialize(appId, secret, "1.0.0");
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
serverUrl | The url of the <%= data.branding.productName %> server.
secretKey | The secret key for your app found in the <%= data.branding.productName %> portal.
appId | The id of your app found in the <%= data.branding.productName %> portal.
appVersion | The version of your app. This can be used to prevent older versions of your app from logging into <%= data.branding.productName %>.


