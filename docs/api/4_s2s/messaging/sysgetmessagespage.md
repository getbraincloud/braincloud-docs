# SysGetMessagesPage
## Overview
Gets the page of system messages from the server based on the encoded context.

<PartialServop service_name="messaging" operation_name="SYS_GET_MESSAGES_PAGE" / >

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
var context = {
  "pagination": {
    "rowsPerPage": 10,
    "pageNumber": 1
  },
  "searchCriteria": {
    "message.from.id": null
  },
  "sortCriteria": {
    "mbCr": 1,
    "mbUp": -1
  }
};
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.sysGetMessagesPage(context);
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
	"service": "messaging",
	"operation": "SYS_GET_MESSAGES_PAGE",
	"data": {
		"context": {
			"pagination": {
				"rowsPerPage": 10,
				"pageNumber": 1
			},
			"searchCriteria": {
				"message.from.id": null
			},
			"sortCriteria": {
				"mbCr": 1,
				"mbUp": -1
			}
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
context | The search and paging criteria. 


