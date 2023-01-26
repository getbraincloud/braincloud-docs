# SysChangeEmailIdentity
## Overview
Changes email address associated with specified user's email identity.



<PartialServop service_name="identity" operation_name="SYS_CHANGE_EMAIL_IDENTITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var profileId = "user-profile-id";
var oldEmailAddress = "oldemail@email.com";
var newEmailAddress = "newemail@email.com";
var updateContactEmail = true;
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.sysChangeEmailIdentity(profileId, oldEmailAddress, newEmailAddress, updateContactEmail);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "identity",
	"operation": "SYS_CHANGE_EMAIL_IDENTITY",
	"data": {
        "profileId": "user-profile-id",
        "oldEmailAddress": "oldemail@email.com",
        "newEmailAddress": "newemail@email.com",
		"updateContactEmail": true
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```json
{
    "status": 200,
    "data": {
    }
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40583 | APP_ERROR | New email address is already in use

</details>


## Method Parameters
Parameter | Description
--------- | -----------
oldEmailAddress | Old email address
profileId | The profileId of the applicable user
oldEmailAddress | The user's old email address
newEmailAddress | The user's new email address
updateContactEmail | Whether to also update contact email in user's profile


