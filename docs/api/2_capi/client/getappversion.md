# GetAppVersion
## Overview
Returns the app version of the client app.

<PartialServop service_name="event" operation_name="UPDATE_EVENT_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string appVersion = <%= data.branding.codePrefix %>.GetAppVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * appVersion = <%= data.branding.codePrefix %>->getAppVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
const char * appVersion = [<%= data.branding.codePrefix %> appVersion];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String appVersion = <%= data.branding.codePrefix %>.getAppVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var appVersion = <%= data.branding.codePrefix %>.getAppVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
var appVersion = <%= data.branding.codePrefix %>.getAppVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
var appVersion = <%= data.branding.codePrefix %>.getAppVersion();
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```javascript
var appId = <%= data.branding.codePrefix %>.getAppId();
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
sendApiErrorCallbacks | If set to true API error callbacks will be called for every cached message with statusCode CLIENT_NETWORK_ERROR and reasonCode CLIENT_NETWORK_ERROR_TIMEOUT.


