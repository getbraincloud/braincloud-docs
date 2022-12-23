# SysExtendPxExpiry
## Overview
:::tip
This method is available in Cloud Code scripts only.
:::

Extends the px expiry of `profileId` by the specified amount of `seconds`. If no time limit is given, the value of <%= data.branding.productName %> property `presPxExpirySecs` will be used.
If seconds is greater than <%= data.branding.productName %> property `presPxExpiryExtSecMax`, then it will just extend by `presPxExpiryExtSecMax`.

<PartialServop service_name="presence" operation_name="SYS_EXTEND_PX_EXPIRY" / >

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
var seconds = 300;

var postResult = presenceProxy.sysExtendPxExpiry(profileId, seconds);
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
	"operation": "SYS_EXTEND_PX_EXPIRY",
	"data": {
		"profileId": "aaa-bbb-ccc-ddd",
		"seconds": 25
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
seconds | Number of seconds to extend px expiry


