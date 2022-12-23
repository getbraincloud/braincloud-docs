# SysGetLegacyFlaggedUserDataList
## Overview
Retrieves the list of legacy flagged users for an app.

<PartialServop service_name="globalApp" operation_name="SYS_GET_LEGACY_FLAGGED_USER_DATA_LIST" / >

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
var isActiveOnly = true;
var globalAppProxy = bridge.getGlobalAppServiceProxy();

var postResult = globalAppProxy.sysGetLegacyFlaggedUserDataList(isActiveOnly);
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
  "operation": "SYS_GET_LEGACY_FLAGGED_USER_DATA_LIST",
  "data":
  {
    "isActiveOnly": true
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
    "f76698c7-bb0c-439a-a46d-44b5f6ca6e15": {
      "isActive": true,
      "notes": "This is a note about the player.",
      "updatedAt": 1666991622419,
      "profileId": "f76698c7-bb0c-439a-a46d-44b5f6ca6e15",
      "playerName": "",
      "summaryFriendData": null,
      "pictureUrl": null
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
isActiveOnly | Optional flag to include only actively flagged users. Default is true.


