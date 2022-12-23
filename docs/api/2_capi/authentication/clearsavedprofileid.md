# ClearSavedProfileId
## Overview
Used to clear the saved profile ID - to use in cases when the user is attempting to switch to a different game profile.

<PartialServop service_name="authenticationV2" operation_name="AUTHENTICATE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.AuthenticationService.ClearSavedProfileID();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getAuthenticationService()->clearSavedProfileID();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[[<%= data.branding.codePrefix %> authenticationService] clearSavedProfile];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public void clearSavedProfileId();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.authentication.clearSavedProfileId();
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

<details>
<summary>JSON Response</summary>

```javascript
var userId = "UserId";
var password = "password";
var forceCreate = true;

<%= data.branding.codePrefix %>.authentication.authenticateUniversal(userId, password, forceCreate, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
userId | The user's ID.
password | The password of the user.
forceCreate | If set to true, create a new profile if userId not found. If set to false and anonymous ID does not exist on the server, return an error.


