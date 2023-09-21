# Initialize
## Overview
Method initializes both `<%= data.branding.codeWrapper %>` and `<%= data.branding.codeClient %>`.

The parameters for this method vary by client (for example the Unity client takes none at all, as all data is pulled from the <%= data.branding.productName %> editor menu data).

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Unity
GameObject go = new GameObject();
<%= data.branding.codePrefix %> = go.AddComponent<<%= data.branding.codeWrapper %>>();
<%= data.branding.codePrefix %>.WrapperName = _wrapperName; // optionally set a wrapper-name
<%= data.branding.codePrefix %>.Init(); // extra data, such as: _appId, _secret and _appVersion, is taken from the <%= data.branding.productName %> Unity Plugin.
DontDestroyOnLoad(go); // keep the <%= data.branding.productName %> game object through scene changes

// C#
string serverUrl = "<%= data.branding.serverUrl %>";
string secret = "1234-1234-1234-1234";
string appId = "123456";
string version = "1.0.0";

<%= data.branding.codePrefix %>.Init(serverUrl, secret, appId, version);

```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* serverUrl = "<%= data.branding.serverUrl %>";
const char* secret = "1234-1234-1234-1234";
const char* appId = "123456";
const char* version = "1.0.0";
const char* company = "<%= data.branding.companyName %>";
const char* appName = "Awesome Game";

<%= data.branding.codePrefix %>->initialize(serverUrl, secret, appId, version, company, appName);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* serverUrl = @"<%= data.branding.serverUrl %>";
NSString* secret = @"1234-1234-1234-1234";
NSString* appId = @"123456";
NSString* appId = @"1.0.0";
NSString* company = @"<%= data.branding.companyName %>";
NSString* appName = @"Awesome Game";

[<%= data.branding.codePrefix %> initialize:serverUrl
      secretKey:secret
          appId:appId
        version:version
     companyName:company
         appName:appName];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
private <%= data.branding.codeWrapper %> <%= data.branding.codePrefix %>;


//Initialize <%= data.branding.codeWrapper %>
<%= data.branding.codePrefix %> = new <%= data.branding.codeWrapper %>("default");
 
//After that, initialize your app with appId, app secret and app version
<%= data.branding.codePrefix %>.initialize("12832", "d03c0bf7-e00c-4179-b477-37e90bc54df9", "1.0.0");

```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
secret = "1234-1234-1234-1234";
appId = "123456";

<%= data.branding.codePrefix %>.initialize(appId, secret, "1.0.0");
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
secret = "1234-1234-1234-1234";
appId = "123456";

<%= data.branding.codePrefix %>.initialize(appId, secret, "1.0.0");
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
secret = "1234-1234-1234-1234";
appId = "123456";

<%= data.branding.codePrefix %>.initialize(appId, secret, "1.0.0");
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```javascript
secret = "1234-1234-1234-1234";
appId = "123456";

<%= data.branding.codePrefix %>.initialize(appId, secret, "1.0.0");
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
serverURL | The URL to the <%= data.branding.productName %> server
secretKey | The secret key for your app
appId | The app ID
version | The app version
*companyName* | Client dependent - The company name used in the keychain for storing anonymous and profile IDs. You are free to pick anything you want.
*appName* | Client dependent - The app name used in the keychain for storing anonymous and profile IDs. You are free to pick anything you want.


