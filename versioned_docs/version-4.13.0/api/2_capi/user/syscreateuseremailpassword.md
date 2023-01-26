# SysCreateUserEmailPassword
## Overview
Manually creates a new user for the current app. Note that this API is normally used for in an admin app for pre-creating users. Standard, dynamic, on-the-fly authentication is done via the Authentication service.



<PartialServop service_name="user" operation_name="SYS_CREATE_USER_EMAIL_PASSWORD" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var userProxy = bridge.getUserServiceProxy();

var postResult = userProxy.sysCreateUserEmailPassword(
  "bruce@wayneent.com",   // externalId = email
  "R@b1n3gg",             // password
  "Bats",                 // userName
  "d-eb88215a71bb42e44xb5a35d75fcd6193" );   
                          // notificationTemplateId

if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// Cloud Code only. To view example, switch to the Cloud Code tab
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
    "profileId": "0b53155b-1fc8-4916-xxxx-298379efc67a"
  }
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
550022 | INVALID_PASSWORD_CONTENT | The password doesn't meet the minimum password requirements.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
externalId | The email address of the user
password | The user's initial password (if the password is null, a random one will be generated)
username | The display or contact name of the user (stored in player state)
notificationTemplateId | If specified, the user will be sent an email confirming that the account has been created


