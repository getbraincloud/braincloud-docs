# SysReadGroupMembers
## Overview
Read all members in the group, bypassing ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_READ_GROUP_MEMBERS" / >

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

var postResult = groupProxy.sysReadGroupMembers(groupId);
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
	"operation": "SYS_READ_GROUP_MEMBERS",
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
        "ee8cad26-16f2-4ef8-9045-3aab84ce6362": {
            "role": "OWNER",
            "attributes": {},
            "playerName": "Peter",
            "emailAddress": "klug@bitheads.com",
            "pic": "https://some.domain.com/mypicture.jpg",
            "summaryFriendData": {
                "xp": 12,
                "attributeName": "value"
            }
        },
        "295c510f-507f-4bcf-80e1-ebc73708ec3c": {
            "role": "MEMBER",
            "attributes": {},
            "playerName": "Billy",
            "emailAddress": "billy@bitheads.com",
            "pic": null
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group


