# SysGetLegacyFlaggedUserData
## Overview
Retrieves the details about a legacy flagged user.

<PartialServop service_name="globalApp" operation_name="SYS_GET_LEGACY_FLAGGED_USER_DATA" / >

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

var postResult = globalAppProxy.sysGetLegacyFlaggedUserData(profileId);
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
  "operation": "SYS_GET_LEGACY_FLAGGED_USER_DATA",
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
+{
+  "data": {
+    "isActive": true,
+    "notes": "This is a note about the player.",
+    "updatedAt": 1666991622419,
+    "profileId": "f76698c7-bb0c-439a-a46d-44b5f6ca6e15",
+    "playerName": "",
+    "pictureUrl": null,
+    "summaryFriendData": null
+  },
+  "status": 200
+}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | Target user's profile id.


