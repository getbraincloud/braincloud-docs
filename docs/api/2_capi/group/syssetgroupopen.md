# SysSetGroupOpen
## Overview
Set whether a group is open (true) or closed (false), bypassing ownership/ACL checks.


### Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group
isOpenGroup | true if group is open; false if closed

<PartialServop service_name="group" operation_name="SYS_SET_GROUP_OPEN" / >

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
var groupId = "a-group-id";
var isOpenGroup = false;
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysSetGroupOpen(groupId, isOpenGroup);
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
	"service": "group",
	"operation": "SYS_SET_GROUP_OPEN",
	"data": {
		"groupId": "a-group-id",
		"isOpenGroup": true
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
    "status": 200,
    "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
profileId | The profile id of the user being removed from the group.


