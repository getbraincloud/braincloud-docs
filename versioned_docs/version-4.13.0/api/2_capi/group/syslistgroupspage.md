# SysListGroupsPage
## Overview
Retrieve a page of group summary information based on the specified context, bypassing ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_LIST_GROUPS_PAGE" / >

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
        "groupType": "BLUE"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysListGroupsPage(context);
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
	"operation": "SYS_LIST_GROUPS_PAGE",
	"data": {
		"context": {
			"pagination": {
				"rowsPerPage": 50,
				"pageNumber": 1
			},
			"searchCriteria": {
				"groupType": "BLUE"
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
        "results": {
            "moreBefore": false,
            "count": 1,
            "items": [
                {
                    "groupType": "test",
                    "groupId": "1d1abb61-8825-4374-a52a-d8186f336775",
                    "isOpenGroup": false,
                    "requestingPendingMemberCount": 0,
                    "invitedPendingMemberCount": 0,
                    "ownerId": "29696ee1-82f6-4d6e-86de-b68c3a5c347e",
                    "name": "test",
                    "memberCount": 1
                }
            ],
            "page": 1,
            "moreAfter": false
        },
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJncm91cFR5cGUiOiJ0ZXN0IiwiZ2FtZUlk"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The JSON context for the page request


