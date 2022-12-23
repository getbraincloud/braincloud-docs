# InitializeIdentity
## Overview
Initializes the authentication service with an anonymous installation ID and most recently used profile ID.
You will need to call this method before authenticating anonymously.

Note that calling this is the same as calling [<code>Initialize</code>](/api/capi/authentication/initialize) in the BrainCloudAuthentication service.

:::caution
InitializeIdentity must be called before you can authenticate a user anonymously.
:::

<PartialServop service_name="event" operation_name="UPDATE_EVENT_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.InitializeIdentity("myProfileId", "myAnonymousId");
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->initializeIdentity("myProfileId", "myAnonymousId");
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[<%= data.branding.codePrefix %> initializeIdentity:@"myProfileId", anonymousId:@"myAnonymousId"];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.initializeIdentity("myProfileId", "myAnonymousId");
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.initializeIdentity = function(profileId, anonymousId)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
<%= data.branding.codePrefix %>.initializeIdentity = function(profileId, anonymousId)
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
<%= data.branding.codePrefix %>.initializeIdentity = function(profileId, anonymousId)
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```javascript
var secret = "1234-1234-1234-1234";
var appId = "123456";

<%= data.branding.codePrefix %>.initialize(appId, secret, "1.0.0");
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | The profile id of the user
anonymousId | The anonymous id of the user


