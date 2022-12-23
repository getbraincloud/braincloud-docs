# SysGetMessagesForOwnerPageOffset
## Overview
Retrieves the page of messages, owned by specified ownerId, from the server based on the encoded context and specified page offset.




### Status Codes
Code | Name | Description
----- | ----------------------- | -----------------------------------
40601 | FEATURE_NOT_ENABLED | Messaging feature is not enabled for app.

<PartialServop service_name="messaging" operation_name="SYS_GET_MESSAGES_FOR_OWNER_PAGE_OFFSET" / >

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
var ownerId = "493dd9ad-5196-4494-aab1-02fbffa4c7af";
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;
var messagingProxy = bridge.getMessagingServiceProxy();

var postResult = messagingProxy.sysGetMessagesForOwnerPageOffset(ownerId, context, pageOffset);
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
	"service": "messaging",
	"operation": "SYS_GET_MESSAGES_FOR_OWNER_PAGE_OFFSET",
	"data": {
    "ownerId": "493dd9ad-5196-4494-aab1-02fbffa4c7af",
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
  "data": {
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6e30sInNvcnRDcml0ZXJpYSI6eyJtYkNyIjoxLCJtYlVwIjotMX0sInBhZ2luYXRpb24iOnsicm93c1BlclBhZ2UiOjEwLCJwYWdlTnVtYmVyIjoxLCJkb0NvdW50IjpmYWxzZSwic2tpcFJlY291bnQiOmZhbHNlfSwib3B0aW9ucyI6bnVsbCwicmVzdWx0Q291bnQiOjF9",
    "results": {
      "count": 20,
      "page": 2,
      "items": [
        {
          "mbVer": 1,
          "mbUp": 1623349641504,
          "read": false,
          "msgCr": 1623349641498,
          "msgVer": 1,
          "mbCr": 1623349641504,
          "msgId": "f6631ba6-c11e-4fea-bd65-181b16ec9335",
          "msgUp": 1623349641498,
          "message": {
            "from": {
              "id": "a687ba2f-cc66-463a-8b3c-db900eba7e94",
              "name": "Rookie"
            },
            "sentAt": 1623349641498,
            "to": [
              "493dd9ad-5196-4494-aab1-02fbffa4c7af"
            ],
            "content": {
              "subject": "new",
              "text": "test"
            }
          },
          "msgbox": "inbox"
        }
      ],
      "moreAfter": false,
      "moreBefore": false
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | ----------------------------
ownerId | The profile ID of the owner
context | The search and paging criteria
pageOffset | Number of pages to go forward or back


