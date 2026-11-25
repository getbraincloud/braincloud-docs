# SysGetPage

Retrieves the first page of global entities matching the specified query context, bypassing ownership and ACL checks. Unlike [GetPage](/api/capi/globalentity/getpage), the results include entities owned by any user and system entities (entities without an owner).

This call is available via Cloud Code and S2S.

After retrieving a page of entities with this method, use [SysGetPageOffset](/api/capi/globalentity/sysgetpageoffset) to retrieve previous or next pages.

See the [Generic Paged Queries](/api/appendix/genericpagedqueries) documentation for creating the context object.

<PartialServop service_name="globalEntity" operation_name="SYS_GET_PAGE" />

## Method Parameters
Parameter | Description
--------- | -----------
context | The json context for the page request.

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
<TabItem value="objectivec" label="Obj-C">
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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
-- Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Lua">
```

```lua
-- Cloud Code only. To view example, switch to the Cloud Code tab
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
        "entityType": "address"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};

var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.sysGetPage(context);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// Cloud Code only. To view example, switch to the Cloud Code tab
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
        "_serverTime": 1761926400000,
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjoiYWRkcmVzcyIsImdhbWVJZCI6IjEyMzQ1NiJ9",
        "results": {
            "count": 120,
            "page": 1,
            "items": [
                {
                    "gameId": "123456",
                    "entityId": "14281c38-abf6-4ca2-8436-b2bd3a8d5a9a",
                    "ownerId": "784cc6c6-4569-4d75-bd10-62dc8ae0218a",
                    "entityType": "address",
                    "entityIndexedId": "home",
                    "version": 1,
                    "data": {
                        "street": "1309 Carling"
                    },
                    "acl": {
                        "other": 0
                    },
                    "timeToLive": 0,
                    "expiresAt": 9223372036854775807,
                    "createdAt": 1449861388021,
                    "updatedAt": 1449861388021
                }
            ],
            "moreAfter": true,
            "moreBefore": false
        }
    },
    "status": 200
}
```
</details>
