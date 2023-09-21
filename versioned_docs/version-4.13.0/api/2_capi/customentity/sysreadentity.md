# SysReadEntity
## Overview
Reads a custom entity. Ignores ownership/ACL checks.

<PartialServop service_name="customEntity" operation_name="SYS_READ_ENTITY" / >

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
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysReadEntity(entityType, entityId);
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
	"operation": "SYS_READ_ENTITY",
	"data": {
		"entityType": "athletes",
		"entityId": "aaaa-bbbb-cccc-dddd"
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
    "entityId": "f9d91cda-3ece-447c-xxxx-046fa026520c",
    "version": 1,
    "acl": {
      "other": 1
    },
    "ownerId": null,
    "expiresAt": null,
    "timeToLive": null,
    "createdAt": 1573537595505,
    "updatedAt": 1573537595505,
    "entityType": "athletes",
    "data": {
      "firstName": "Super",
      "surName": "Star",
      "position": "forward",
      "goals": 2,
      "assists": 4
    },
    "_serverTime": 1637946319239    
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being read. 
entityId | The id of custom entity being read. 


