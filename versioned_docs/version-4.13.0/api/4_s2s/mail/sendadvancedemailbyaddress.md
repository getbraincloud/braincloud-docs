# SendAdvancedEmailByAddress
## Overview
Sends a advanced email to the given user. 
 See the documentation for contents of 'serviceParams'.

<PartialServop service_name="mail" operation_name="SEND_ADVANCED_EMAIL_BY_ADDRESS" / >

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
var emailAddress = "test@email.com";
var serviceParams = {
	"fromAddress": "fromAddress",
	"fromName": "fromName",
	"replyToAddress": "replyToAddress",
	"replyToName": "replyToName",
	"templateId": "8f14c77d-61f4-4966-ab6d-0bee8b13d090",
	"subject": "subject",
	"body": "Body goes here",
	"useHtml": false,
	"substitutions": {
		":name": "John Doe",
		":resetLink": "www.dummuyLink.io"
	},
	"categories": [
		"category1",
		"category2"
	]
};
var mailProxy = bridge.getMailServiceProxy();

var postResult = mailProxy.sendAdvancedEmailByAddress(emailAddress, serviceParams);
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
	"service": "mail",
	"operation": "SEND_ADVANCED_EMAIL_BY_ADDRESS",
	"data": {
		"emailAddress": "test@email.com",
		"serviceParams": {
			"fromAddress": "fromAddress",
			"fromName": "fromName",
			"replyToAddress": "replyToAddress",
			"replyToName": "replyToName",
			"templateId": "8f14c77d-61f4-4966-ab6d-0bee8b13d090",
			"subject": "subject",
			"body": "Body goes here",
			"useHtml": false,
			"substitutions": {
				":name": "John Doe",
				":resetLink": "www.dummuyLink.io"
			},
			"categories": [
				"category1",
				"category2"
			]
		}
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
emailAddress | The address to send the email to. 
serviceParams | Set of parameters dependant on the mail service configured. 


