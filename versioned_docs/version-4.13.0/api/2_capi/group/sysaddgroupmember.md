# SysAddGroupMember
## Overview
Add a user as a member to the group, bypassing ownership/ACL checks. Optional parameters: role OR attributes.

<PartialServop service_name="group" operation_name="SYS_ADD_GROUP_MEMBER" / >

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
var profileId = "the-profile-id";
var role = "MEMBER";
var attributes = {};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysAddGroupMember(groupId, profileId, role, attributes);
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
  "operation": "SYS_ADD_GROUP_MEMBER",
  "data":
  {
    "groupId": "a-group-id",
    "profileId": "the-profile-id",
    "role": "MEMBER",
    "attributes": {}
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
  "status" : 200,
  "data" : null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
profileId | The profile id of the member being added.
role | Role of the user being added as a member.
attributes | Attributes of the member being added.


