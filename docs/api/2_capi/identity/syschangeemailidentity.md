# SysChangeEmailIdentity

Changes email address associated with specified user's email identity.



<PartialServop service_name="identity" operation_name="SYS_CHANGE_EMAIL_IDENTITY" />

## Method Parameters
Parameter | Description
--------- | -----------
oldEmailAddress | Old email address
profileId | The profileId of the applicable user
oldEmailAddress | The user's old email address
newEmailAddress | The user's new email address
updateContactEmail | Whether to also update contact email in user's profile

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
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
    "data": {}
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


