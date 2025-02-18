# SysIsGroupMember

Verifies if user is a group member and returns information about group member, bypassing ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_IS_GROUP_MEMBER" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
profileId | The profile id of the user to be checked.

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
var groupId = "a-group-id";
var profileId = "the-profile-id";
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysIsGroupMember(groupId, profileId);
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
	"operation": "SYS_IS_GROUP_MEMBER",
	"data": {
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
  "data": {
    "isGroupMember": true,
    "role": "MEMBER",
    "attributes": {}
  },
  "status": 200
}
```
</details>

