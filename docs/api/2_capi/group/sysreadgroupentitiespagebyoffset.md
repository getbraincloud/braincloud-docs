# SysReadGroupEntitiesPageByOffset
## Overview
Retrieve a page of group entity information based on the encoded context and specified page offset, bypassing ownership/ACL checks.

<PartialServop service_name="group" operation_name="SYS_READ_GROUP_ENTITIES_PAGE_BY_OFFSET" / >

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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.sysReadGroupEntitiesPageByOffset(context, pageOffset);
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
	"operation": "SYS_READ_GROUP_ENTITIES_PAGE_BY_OFFSET",
	"data": {
		"context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0",
		"pageOffset": 1
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
            "moreBefore": true,
            "count": 3,
            "items": [
                {
                    "gameId": "20595",
                    "groupId": "fee55a37-5e86-43e8-942e-06bcbe1b701e",
                    "entityId": "ccbf996c-9e96-4935-b570-eebaab81c75a",
                    "ownerId": null,
                    "entityType": "RED",
                    "createdAt": 1462812845384,
                    "updatedAt": 1462812845384,
                    "version": 1,
                    "data": {
                        "third": true
                    },
                    "acl": {
                        "member": 2,
                        "other": 1
                    }
                }
            ],
            "page": 2,
            "moreAfter": false
        },
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJncm91cElkIjoiZmVlNTVhMzctNWU4Ni00M2U4LTk"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The context string returned from the server from a previous call to ReadGroupEntitiesPage or ReadGroupEntitiesPageByOffset
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.


