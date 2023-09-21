# SysInitializePresence
## Overview
:::tip
This method is available in Cloud Code scripts only.
:::

Creates or updates the presence of `profileId`. `visible` is optional (defaults to true). `activity` is optional. `expirySecs` is optional (defaults to <%= data.branding.productName %> property `presPxExpirySecs`). If `activity` is included, the same restrictions apply as those outlined in <code>[UpdateActivity](/api/capi/presence/updateactivity)</code>.

<PartialServop service_name="presence" operation_name="SYS_INITIALIZE_PRESENCE" / >

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
var presenceProxy = bridge.getPresenceServiceProxy();
var profileId = "aaa-bbb-ccc-ddd";
var activity = { "LOCATION": "POKER_TABLE", "STATUS": "PLAYING_GAME" };
var visible = true;
var expirySecs = 300;

var postResult = presenceProxy.sysInitializePresence(profileId, activity, visible, expirySecs);
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

<details>
<summary>JSON Response</summary>

```json
{
 "data": null,
 "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | Target profile ID.
visible | Should user appear in presence? True by default.
activity | Presence activity record json.
expirySecs | Time before this activity record expires.


