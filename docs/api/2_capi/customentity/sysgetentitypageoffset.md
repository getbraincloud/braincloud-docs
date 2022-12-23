# SysGetEntityPageOffset
## Overview
Gets the page of custom entities from the server based on the encoded context and specified page offset. Bypasses ownership/ACL checks.

<PartialServop service_name="customEntity" operation_name="SYS_GET_ENTITY_PAGE_OFFSET" / >

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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysGetEntityPageOffset(entityType, context, pageOffset);
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
	"operation": "SYS_GET_ENTITY_PAGE_OFFSET",
	"data": {
		"entityType": "athletes",
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
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6e30sInNvcnRDcml0ZXJpYSI6eyJjcmVhdGVkQXQiOjF9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjoyMCwicGFnZU51bWJlciI6MSwiZG9DbXXXXXXXmFsc2V9LCJvcHRpb25zIjpudWxsfQ",
    "results": {
      "page": 1,
      "items": [
        {
          "entityId": "781a5f97-1fa8-41e5-xxxx-7f648af19414",
          "version": 1,
          "acl": {
            "other": 1
          },
          "ownerId": "b7e7116e-749d-444f-xxxx-13f1101512a3",
          "expiresAt": null,
          "timeToLive": null,
          "createdAt": 1573534287525,
          "updatedAt": 1573534287525,
          "data": {
            "level1": "complete",
            "level2": "incomplete"
          }
        }
      ]
    }
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being retrieved. 
context | The context string returned from the server from a previous call to GetPage or GetPageOffset. 
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point. 


