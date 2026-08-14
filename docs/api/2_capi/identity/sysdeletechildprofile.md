# SysDeleteChildProfile

Deletes a specified user's child profile in the given child app. Invalidates any active sessions for the child profile before deletion. Also deletes any descendants of the child profile.

<PartialServop service_name="identity" operation_name="SYS_DELETE_CHILD_PROFILE" />

## Method Parameters
Parameter | Description
--------- | -----------
appId | The child app id. Also accepted as `gameId` for legacy compatibility.
parentProfileId | The parent profile id.
profileId | The child profile id to delete. If omitted, the singleton child profile is used.

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
<TabItem value="objectivec" label="Obj-C">
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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var appId = "the-child-app-id";
var parentProfileId = "the-parent-profile-id";
var profileId = "the-child-profile-id";
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.sysDeleteChildProfile(appId, parentProfileId, profileId);
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
    "service": "identity",
    "operation": "SYS_DELETE_CHILD_PROFILE",
    "data": {
        "appId": "the-child-app-id",
        "parentProfileId": "the-parent-profile-id",
        "profileId": "the-child-profile-id"
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
        "profileId": "the-child-profile-id",
        "appId": "the-child-app-id"
    },
    "status": 200
}
```

</details>
