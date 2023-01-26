# SysSendPasswordResetEmailAdvancedWithExpiry
## Overview
Triggers the sending of a password reset email to the specified user - but allows the dev to override the email template that will be used. _Note that the user must have an email identity attached to their profile._



Example serviceParams (for Sendgrid dynamic templates):
```
{
  "templateId": "template-id-guid",
  "dynamicData": {
    "aKey": "aValue"
  },
  "categories": [
    "category1",
    "category2"
  ]
}
```

<PartialServop service_name="user" operation_name="SYS_SEND_PASSWORD_RESET_EMAIL_ADVANCED_WITH_EXPIRY" / >

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

var tokenTtlInMinutes = 1440;

var serviceParams = {
  "templateId": "template-id-guid",
  "dynamicData": {
    "aKey": "aValue"
  },
  "categories": [
    "category1",
    "category2"
  ]  
};

var postResult = userProxy.sysSendPasswordResetEmailAdvancedWithExpiry(
  "aaa-bbb-ccc-ddd",    // profileId
  tokenTtlInMinutes,    // Number of minutes before the reset URL expires 
  serviceParams);       // template Id and any subst parameters


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
  "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | The profileId of the user to send the password reset email to
tokenTtlInMinutes | The time-to-live for the password reset url, in minutes
serviceParams | The service-specific email paramaters


