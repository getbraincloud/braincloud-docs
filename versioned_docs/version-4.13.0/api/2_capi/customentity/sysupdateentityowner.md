# SysUpdateEntityOwner
## Overview
Updates the owner of the specified custom entity.

<PartialServop service_name="customEntity" operation_name="SYS_UPDATE_ENTITY_OWNER" / >

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
var oldProfileId = "www-xxx-yyy-zzz1";
var newProfileId = "www-xxx-yyy-zzz2";
var version = 1;

var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysUpdateEntityOwner(entityType, entityId, oldProfileId, newProfileId, version);
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
	"operation": "SYS_UPDATE_ENTITY_OWNER",
	"data": {
		"entityType": "athletes",
		"entityId": "aaaa-bbbb-cccc-dddd",
    "oldOwnerId": "www-xxx-yyy-zzz1",
    "newOwnerId": "www-xxx-yyy-zzz2",    
		"version": 1
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
    "ownerId": "www-xxx-yyy-zzz2",
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
oldOwnerId | The profileId of the existing owner of the entity.
newOwnerId | The profileId of the new owner of the entity.
version | Version of the custom entity being updated. 


