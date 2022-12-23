# SysSendPasswordResetUniversalIdAdvancedWithExpiry
## Overview
Triggers the sending of a password reset email to the specified user - but allows the dev to override the email template that will be used. _Note that the user must have a universalId identity attached to their profile, and an email address in their contact info._
_



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

<PartialServop service_name="user" operation_name="SYS_SEND_PASSWORD_RESET_UNIVERSAL_ID_ADVANCED_WITH_EXPIRY" / >

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

var serviceParams = {
  "templateId": "template-id-guid",
  "dynamicData": {
    "aKey": "aValue"
  },
  "categories": [
    "category1",
    "category2"
  ]  
}

var postResult = userProxy.sysSendPasswordResetUniversalIdAdvancedWithExpiry(
  "aaa-bbb-ccc-ddd",    // profileId
  1440,                 // TTL of the reset url
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
serviceParams | The service-specific email paramaters
tokenTtlInMinutes | The time-to-live for the password reset url, in minutes.


