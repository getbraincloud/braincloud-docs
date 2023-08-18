# Initialize
## Overview
Initializes the authentication service with an anonymous installation ID and most recently used profile ID.
You will need to call this method before authenticating anonymously.

Note that calling this is the same as calling [<code>InitializeIdentity</code>](/api/capi/client/initializeidentity) in the <%= data.branding.codeClient %>.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.AuthenticationService.Initialize("profileId", "anonId");
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getAuthenticationService()->initialize("profileId", "anonId");
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * profileID = @"profileId";
NSString * anonymousID = @"anonId";

[[<%= data.branding.codePrefix %> authenticationService]
	        	initialize:profileID
	 	       anonymousID:anonymousID];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String profileID = "profileId";
String anonymousID = "anonId";

<%= data.branding.codePrefix %>.getAuthenticationService().initialize(profileId, anonymousId);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.authentication.initialize(profileId, anonymousId);
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

## Method Parameters
Parameter | Description
--------- | -----------
profileId | The ID of the profile ID that was most recently used by the app (on this device)
anonymousId | The anonymous installation ID that was generated for this device


