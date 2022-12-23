# SysSendPasswordResetEmailAdvanced
## Overview
Reset users password using templates.

<PartialServop service_name="user" operation_name="SYS_SEND_PASSWORD_RESET_EMAIL_ADVANCED" / >

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
};

var postResult = userProxy.sysSendPasswordResetEmailAdvanced(
  "aaa-bbb-ccc-ddd",    // profileId
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
profileId | Profile Id of the target user to reset password
serviceParams | Set of parameters dependant on the mail service configured


