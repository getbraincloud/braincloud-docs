# SysGetRandomEntitiesMatching
## Overview
Gets a list of up to maxReturn randomly selected custom entities from the server based on the entity type and where condition, bypassing ownership/ACL permissions checking.

<PartialServop service_name="customEntity" operation_name="SYS_GET_RANDOM_ENTITIES_MATCHING" / >

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
var whereJson = {
  "data.position": "forward"
};
var maxReturn = 2;
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysGetRandomEntitiesMatching(entityType, whereJson, maxReturn);
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
	"operation": "SYS_GET_RANDOM_ENTITIES_MATCHING",
	"data": {
    "entityType": "athletes",
    "whereJson": {
      "data.position": "forward"
    },
    "maxReturn": 2
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
    "entityList": [
      {
        "entityId": "8b34a18b-5846-45d4-a7b8-e65775ca1973",
        "version": 1,
        "acl": {
          "other": 2
        },
        "ownerId": null,
        "expiresAt": null,
        "timeToLive": null,
        "createdAt": 1602700646415,
        "updatedAt": 1602700646415,
        "entityType": "athletes",
        "data": {
          "firstName": "Super",
          "surName": "Star",
          "position": "forward",
          "goals": 2,
          "assists": 4
        }
      },
      {
        "entityId": "e3ea0e05-032f-4b46-86cf-0423f5a9da24",
        "version": 1,
        "acl": {
          "other": 2
        },
        "ownerId": null,
        "expiresAt": null,
        "timeToLive": null,
        "createdAt": 1602700650242,
        "updatedAt": 1602700650242,
        "entityType": "athletes",
        "data": {
          "firstName": "Super",
          "surName": "Star",
          "position": "forward",
          "goals": 2,
          "assists": 4
        }
      }
    ],
    "entityListCount": 2
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being retrieved. 
whereJson | The where clause, as JSON object.
maxReturn | The maximum number of entities to return.


