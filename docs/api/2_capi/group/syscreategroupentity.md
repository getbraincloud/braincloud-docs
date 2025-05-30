# SysCreateGroupEntity

Create an entity in the group with no owner. Optional parameters: All except groupId.

<PartialServop service_name="group" operation_name="SYS_CREATE_GROUP_ENTITY" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group
entityType | Type of the group entity
acl | Access control list for the group entity
jsonData | Custom application data

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
var entityType = "myEntityType";
var acl = {
    "member": 2,
    "other": 1
};
var jsonData = {
    "aKey": "aValue"
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysCreateGroupEntity(groupId, entityType, acl, jsonData);
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
	"operation": "SYS_CREATE_GROUP_ENTITY",
	"data": {
		"groupId": "a-group-id",
		"entityType": "myEntityType",
		"acl": {
			"member": 2,
			"other": 1
		},
		"jsonData": {
			"aKey": "aValue"
		}
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
        "gameId": "20595",
        "groupId": "fee55a37-5e86-43e8-942e-06bcbe1b701e",
        "entityId": "91cfece7-debb-4698-ba6b-cd2cb432458d",
        "ownerId": null,
        "entityType": "BLUE",
        "createdAt": 1462812680359,
        "updatedAt": 1462812680359,
        "version": 1,
        "data": {},
        "acl": {
            "member": 2,
            "other": 1
        }
    }
}
```
</details>

