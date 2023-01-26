# SysCreateEntity
## Overview
Advanced version of createEntity that allows a specific user to be specified as owner (or none). Also callable from S2S sessions.

<PartialServop service_name="customEntity" operation_name="SYS_CREATE_ENTITY" / >

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
var dataJson = {
  "firstName": "Super",
  "surName": "Star",
  "position": "forward",
  "goals": 2,
  "assists": 4
};
var acl = {
  "other": 1
};
var timeToLive = null;
var owner = null;
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysCreateEntity(entityType, dataJson, acl, timeToLive, owner);
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
	"operation": "SYS_CREATE_COLLECTION",
	"data": {
		"entityType": "athletes",
		"collectionOptsJson": {}
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
    "entityId": "8469e360-0b24-4c87-xxxx-89fd0e3ee436",
    "version": 1,
    "acl": {
      "other": 1
    },
    "ownerId": null,
    "expiresAt": null,
    "timeToLive": null,
    "createdAt": 1573532801958,
    "updatedAt": 1573532801958
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity to create. 
dataJson | The entity's custom field data, as JSON. 
acl | The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable by others. 
timeToLive | The duration of time, in milliseconds, the custom entity should live before being expired. Null indicates never expires. 
ownerId | ProfileId of the user that will own this identity, or null if no owner. 


