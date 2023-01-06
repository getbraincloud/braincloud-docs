# SysRemoveGroupMember
## Overview
Remove a member from the group, bypassing group ownership/ACL checks.


<PartialServop service_name="group" operation_name="SYS_REMOVE_GROUP_MEMBER" / >

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
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysRemoveGroupMember(groupId, profileId);
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
  "operation": "SYS_REMOVE_GROUP_MEMBER",
  "data":
  {
    "groupId": "a-group-id",
    "profileId": "the-profile-id"
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

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40455 | APP_ERROR | Cannot delete group owner.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
profileId | The profile id of the user being removed from the group.


