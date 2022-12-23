# SysReadGroupData
## Overview
Retrieve a group's data object, bypassing ownership/ACL checks.


### Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group

<PartialServop service_name="group" operation_name="SYS_READ_GROUP_DATA" / >

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
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysReadGroupData(groupId);
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
	"operation": "SYS_READ_GROUP_DATA",
	"data": {
		"groupId": "a-group-id"
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
    "data": {
        "data": {
            "testInc": 123
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The context string returned from the server from a previous call to ListGroupsPage or ListGroupsPageByOffset
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.


