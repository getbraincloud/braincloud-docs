# SysRemoveFromLegacyFlaggedUsers
## Overview
Removes a user from the legacy list of flagged users.

<PartialServop service_name="globalApp" operation_name="SYS_REMOVE_FROM_LEGACY_FLAGGED_USERS" / >

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
var profileId = "the-profile-id";
var globalAppProxy = bridge.getGlobalAppServiceProxy();

var postResult = globalAppProxy.sysRemoveFromLegacyFlaggedUsers(profileId);
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
  "service": "globalApp",
  "operation": "SYS_REMOVE_FROM_LEGACY_FLAGGED_USERS",
  "data":
  {
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
  "data": {
    "removed": 1
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | Target user's profile id.


