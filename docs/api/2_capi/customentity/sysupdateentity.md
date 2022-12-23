# SysUpdateEntity
## Overview
Replaces the specified custom entity's data, and optionally updates the acl and expiry, on the server. Ignores ownership/ACL checks.

<PartialServop service_name="customEntity" operation_name="SYS_UPDATE_ENTITY" / >

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
var entityType = "athletes";
var entityId = "aaaa-bbbb-cccc-dddd";
var version = 1;
var dataJson = {
  "firstName": "Super",
  "surName": "Star",
  "position": "defense",
  "goals": 3,
  "assists": 5
};
var acl = {
  "other": 0
};
var timeToLive = null;
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysUpdateEntity(entityType, entityId, version, dataJson, acl, timeToLive);
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
	"service": "customEntity",
	"operation": "SYS_UPDATE_ENTITY",
	"data": {
		"entityType": "athletes",
		"entityId": "aaaa-bbbb-cccc-dddd",
		"version": 1,
		"dataJson": {
			"firstName": "Super",
			"surName": "Star",
			"position": "defense",
			"goals": 3,
			"assists": 5
		},
		"acl": {},
		"timeToLive": null
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
    "entityId": "1497cc7e-66cb-4682-9eac-c755523369a8",
    "version": 2,
    "acl": {
      "other": 1
    },
    "ownerId": null,
    "expiresAt": null,
    "timeToLive": null,
    "createdAt": 1573540122600,
    "updatedAt": 1573540142928
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being updated. 
entityId | The id of custom entity being updated. 
version | Version of the custom entity being updated. 
dataJson | New custom data, as JSON, to replace existing custom data. 
acl | New access control list settings to replace existing acl. Optional, ignored if null. 
timeToLive | The duration of time, in milliseconds, the custom entity should live from now before being expired. Null indicates never expires. To indicate no change, use -1. 


