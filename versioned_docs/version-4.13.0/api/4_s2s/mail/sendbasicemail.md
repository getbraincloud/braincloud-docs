# SendBasicEmail
## Overview
Sends a simple text email to the given user.

<PartialServop service_name="mail" operation_name="SEND_BASIC_EMAIL" / >

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
var profileId = "f7144cc0-b996-440f-8459-21b0ecb91a10";
var subject = "Basic email subject";
var body = "This is the body of the email";
var mailProxy = bridge.getMailServiceProxy();

var postResult = mailProxy.sendBasicEmail(profileId, subject, body);
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
	"operation": "SEND_BASIC_EMAIL",
	"data": {
		"profileId": "f7144cc0-b996-440f-8459-21b0ecb91a10",
		"subject": "Basic email subject",
		"body": "This is the body of the email"
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
profileId | The user to send the email to. 
subject | Subject of the email. 
body | Body of the email. 


