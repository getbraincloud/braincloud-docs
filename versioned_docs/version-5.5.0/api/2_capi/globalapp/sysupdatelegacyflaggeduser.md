# SysUpdateLegacyFlaggedUser

Updates a user's entry in the legacy list of flagged users.

<PartialServop service_name="globalApp" operation_name="SYS_UPDATE_LEGACY_FLAGGED_USER" />

## Method Parameters
Parameter | Description
--------- | -----------
profileId | Target user's profile id.
isActive | Flag indicating whether the user is flagged or not.
notes | A field for recording something noteworthy about this user.

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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var profileId = "the-profile-id";
var isActive = true;
var notes = "This is a note about the player.";
var globalAppProxy = bridge.getGlobalAppServiceProxy();

var postResult = globalAppProxy.sysUpdateLegacyFlaggedUser(profileId, isActive, notes);
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
  "operation": "SYS_UPDATE_LEGACY_FLAGGED_USER",
  "data":
  {
    "profileId": "the-profile-id",
    "isActive": true,
    "notes": "This is a note about the player."
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

