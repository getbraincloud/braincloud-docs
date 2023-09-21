# SysInitializePresence
## Overview
Creates or updates the presence of \<profileId\>. \<visible\> is optional (defaults to true). \<activity\> is optional. \<expirySecs\> is optional (defaults to <%= data.branding.productName %> property \<presPxExpirySecs\>).

<PartialServop service_name="presence" operation_name="SYS_INITIALIZE_PRESENCE" / >

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
var profileId = "aaa-bbb-ccc-ddd";
var visible = true;
var activity = {};
var expirySecs = 300;
var presenceProxy = bridge.getPresenceServiceProxy();

var postResult = presenceProxy.sysInitializePresence(profileId, visible, activity, expirySecs);
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
	"operation": "SYS_INITIALIZE_PRESENCE",
	"data": {
		"profileId": "aaa-bbb-ccc-ddd",
		"visible": true,
		"activity": {},
		"expirySecs": 300
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
profileId | Target profile id. 
visible | Should user appear in presence? True by default. 
activity | Presence activity record json. Size of the given activity must be equal to or less than the *Max content size (bytes)* app setting (see Messaging > Presence in the portal.) 
expirySecs | Number of seconds before expiry. 


