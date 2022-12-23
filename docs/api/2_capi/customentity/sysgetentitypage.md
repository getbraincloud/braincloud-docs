# SysGetEntityPage
## Overview
Retrieves first page of custom entities from the server based on the custom entity type and specified query context. Bypasses ownership/ACL checks.

_Note that for collections with > 1,000 records, it is recommended that `doCount` be set to false for better performance._



Example context object:
```
{
  "pagination": {
    "rowsPerPage": 50,
    "pageNumber": 1,
    "doCount": false
  },
  "searchCriteria": {
    "data.position": "defense"
  },
  "sortCriteria": {
  }
}
```

<PartialServop service_name="customEntity" operation_name="SYS_GET_ENTITY_PAGE" / >

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
var context = {
  "pagination": {
    "rowsPerPage": 50,
    "pageNumber": 1,
    "doCount": false
  },
  "searchCriteria": {
    "data.position": "defense"
  },
  "sortCriteria": {
  }
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysGetEntityPage(entityType, context);
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
	"operation": "SYS_GET_ENTITY_PAGE",
	"data": {
		"entityType": "athletes",
    "context": {
			"pagination": {
				"rowsPerPage": 50,
				"pageNumber": 1
			},
			"searchCriteria": {
				"data.position": "defense"
			},
			"sortCriteria": {
				"createdAt": 1,
				"updatedAt": -1
			}
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
    "_serverTime": 1637946319239,
    "context": "eyJzZWFyY2hDcml0ZXJpYS...",
    "results": {
      "count": 1,
      "page": 1,
      "items": [
        {
          "entityId": "1497cc7e-66cb-4682-9eac-c755523369a8",
          "version": 3,
          "acl": {
            "other": 1
          },
          "ownerId": null,
          "expiresAt": null,
          "timeToLive": null,
          "createdAt": 1573540122600,
          "updatedAt": 1573540445332,
          "data": {
            "firstName": "Super",
            "surName": "Star",
            "position": "defense",
            "goals": 3,
            "assists": 5
          }
        }
      ],
      "moreAfter": false,
      "moreBefore": false
    }
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being retrieved. 
context | A context object describing the desired paging behaviour


