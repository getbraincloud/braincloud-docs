# SysGetNotificationTemplates
## Overview
Returns an array of the notification templates defined - with the text for the specified language.

<PartialServop service_name="pushNotification" operation_name="SYS_GET_NOTIFICATION_TEMPLATES" / >

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
var defaultLanguageCode = "en";
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sysGetNotificationTemplates(defaultLanguageCode);
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
	"service": "pushNotification",
	"operation": "SYS_GET_NOTIFICATION_TEMPLATES",
	"data": {
		"defaultLanguageCode": "en",
		}
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
    "data": {
        "pushTemplates": 
        [
            {
                "notificationTemplateId" : 1,
                "name" : "awesomeSaleNotification",
                "defaultMessage" : "This is english text!",
                "updatedAt" : 1591730181151
            },
            {

                "notificationTemplateId" : 2,
                "name" : "anotherNotification",
                "message" : "This is another notification",
                "updatedAt" : 1591734121222
            }
        ]
    },
    "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
defaultLanguageCode | The language code (lowercase) to be used for returning the default message text.


