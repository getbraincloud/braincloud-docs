# SysGetPresenceOfUsers
## Overview
Gets the presence data for the given \<profileIds\>. Will not include offline profiles unless \<includeOffline\> is set to true.

<PartialServop service_name="presence" operation_name="SYS_GET_PRESENCE_OF_USERS" / >

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
var profileIds = ["aaa-bbb-ccc-ddd","bbb-ccc-ddd-eee"];
var includeOffline = true;
var presenceProxy = bridge.getPresenceServiceProxy();

var postResult = presenceProxy.sysGetPresenceOfUsers(profileIds, includeOffline);
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
	"service": "presence",
	"operation": "SYS_GET_PRESENCE_OF_USERS",
	"data": {
		"profileIds": [
			"aaa-bbb-ccc-ddd",
			"bbb-ccc-ddd-eee"
		],
		"includeOffline": true
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
profileIds | Gets a list of Presence for the specified profile ids. 
includeOffline | Should offline users be included in the response? 


