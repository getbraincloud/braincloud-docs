# SysReadGroupEntitiesPage
## Overview
Retrieve a page of group entity information based on the specified context, bypassing ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_READ_GROUP_ENTITIES_PAGE" / >

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
var context = {
    "pagination": {
        "rowsPerPage": 50,
        "pageNumber": 1
    },
    "searchCriteria": {
        "groupId": "130745f4-df57-4162-8f90-d89214fc8512",
        "entityType": "BLUE"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysReadGroupEntitiesPage(context);
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
	"operation": "SYS_READ_GROUP_ENTITIES_PAGE",
	"data": {
		"context": {
			"pagination": {
				"rowsPerPage": 50,
				"pageNumber": 1
			},
			"searchCriteria": {
				"groupId": "130745f4-df57-4162-8f90-d89214fc8512",
				"entityType": "BLUE"
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
        "results": {
            "moreBefore": false,
            "count": 3,
            "items": [
                {
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
            ],
            "page": 1,
            "moreAfter": true
        },
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJncm91cElkIjoiZmVlNTVhMzct"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The JSON context for the page request


