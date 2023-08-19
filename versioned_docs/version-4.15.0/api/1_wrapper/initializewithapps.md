# InitializeWithApps
## Overview
Method initializes `<%= data.branding.codeWrapper %>` and `<%= data.branding.codeClient %>`  with a map of appid->secretkey.

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
<%= data.branding.codePrefix %>.InitWithApps(); // extra data, such as: _appId, _secret and _appVersion, is taken from the <%= data.branding.productName %> Unity Plugin.
DontDestroyOnLoad(go); // keep the <%= data.branding.productName %> game object through scene changes

// C#
string serverUrl = "<%= data.branding.serverUrl %>";
string secret = <%= data.example.appSecret %>;
string appId = <%= data.example.appId %>;
string childSecret = <%= data.example.appChildSecret %>;
string childAppId = <%= data.example.appChildId %>;
Dictionary<string, string> secretMap = new Dictionary<string, string>();
secretMap.Add(appId, secret);
secretMap.Add(childAppId, childSecret);
string version = <%= data.example.appVersion %>;

<%= data.branding.codePrefix %> = new <%= data.branding.codeWrapper %>();
<%= data.branding.codePrefix %>.InitWithApps(serverUrl, appId, secretMap, version);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* serverUrl = "<%= data.branding.serverUrl %>";
std::string secret = <%= data.example.appSecret %>;
std::string appId = <%= data.example.appId %>;
std::string childSecret = <%= data.example.appChildSecret %>;
std::string childAppId = <%= data.example.appChildId %>;
std::map<std::string, std::string> secretMap;
secretMap[appId] = secret;
secretMap[childAppId] = childSecret;
const char* version = <%= data.example.appVersion %>;
const char* company = <%= data.example.companyName %>;
const char* appName = <%= data.example.appName %>;

<%= data.branding.codePrefix %>->initializeWithApps(serverUrl, appId.c_str(), secretMap, version, company, appName);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* serverUrl = @"<%= data.branding.serverUrl %>";
NSString* secret = @<%= data.example.appSecret %>;
NSString* appId = @<%= data.example.appId %>;
NSString* childSecret = @<%= data.example.appChildSecret %>;
NSString* childAppId = @<%= data.example.appChildId %>;
NSDictionary* secretMap = @{
    appId      : secret, 
    childAppId : childSecret,
};
NSString* version = @<%= data.example.appVersion %>;

[<%= data.branding.codePrefix %> initializeWithApps:serverUrl
                defaultAppId:appId
                   secretMap:secretMap
                  appVersion:version];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String serverUrl = "<%= data.branding.serverUrl %>";
String secret = <%= data.example.appSecret %>;
String appId = <%= data.example.appId %>;
String childSecret = <%= data.example.appChildSecret %>;
String childAppId = <%= data.example.appChildId %>;
Map<String, String> secretMap = new HashMap<String, String>();
secretMap.put(appId, secret);
secretMap.put(childAppId, childSecret);
String version = <%= data.example.appVersion %>;

<%= data.branding.codePrefix %>.initializeWithApps(serverUrl, appId, secretMap, version);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var secret = <%= data.example.appSecret %>;
var appId = <%= data.example.appId %>;
var childSecret = <%= data.example.appChildSecret %>;
var childAppId = <%= data.example.appChildId %>;
var secretMap = {};
secretMap[appId] = secret;
secretMap[childAppId] = childSecret;
var version = <%= data.example.appVersion %>;

<%= data.branding.codePrefix %>.initializeWithApps(appId, secretMap, version);
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
var secret = <%= data.example.appSecret %>;
var appId = <%= data.example.appId %>;
var childSecret = <%= data.example.appChildSecret %>;
var childAppId = <%= data.example.appChildId %>;
var secretMap = {};
secretMap[appId] = secret;
secretMap[childAppId] = childSecret;
var version = <%= data.example.appVersion %>;

<%= data.branding.codePrefix %>.initializeWithApps(appId, secretMap, version);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
var secret = <%= data.example.appSecret %>;
var appId = <%= data.example.appId %>;
var childSecret = <%= data.example.appChildSecret %>;
var childAppId = <%= data.example.appChildId %>;
var secretMap = {};
secretMap[appId] = secret;
secretMap[childAppId] = childSecret;
var version = <%= data.example.appVersion %>;

<%= data.branding.codePrefix %>.initializeWithApps(appId, secretMap, version);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```javascript
var secret = <%= data.example.appSecret %>;
var appId = <%= data.example.appId %>;
var childSecret = <%= data.example.appChildSecret %>;
var childAppId = <%= data.example.appChildId %>;
var secretMap = {};
secretMap[appId] = secret;
secretMap[childAppId] = childSecret;
var version = <%= data.example.appVersion %>;

<%= data.branding.codePrefix %>.initializeWithApps(appId, secretMap, version);
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
serverURL | The URL to the <%= data.branding.productName %> server
appId | The default app ID
secretMap | All app ids to secret keys used by this application
version | The app version
*companyName* | Client dependent - The company name used in the keychain for storing anonymous and profile IDs. You are free to pick anything you want.
*appName* | Client dependent - The app name used in the keychain for storing anonymous and profile IDs. You are free to pick anything you want.


