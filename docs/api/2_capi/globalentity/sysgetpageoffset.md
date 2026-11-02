# SysGetPageOffset

Retrieves previous or next pages after having called the [SysGetPage](/api/capi/globalentity/sysgetpage) method. Like SysGetPage, this bypasses ownership and ACL checks.

This call is available via Cloud Code and S2S.

<PartialServop service_name="globalEntity" operation_name="SYS_GET_PAGE_OFFSET" />

## Method Parameters
Parameter | Description
--------- | -----------
context | The context string returned from the server from a previous call to SysGetPage or SysGetPageOffset
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.

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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjoiYWRkcmVzcyIsImdhbWVJZCI6IjEyMzQ1NiJ9";
var pageOffset = 1;
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.sysGetPageOffset(context, pageOffset);
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
            "page": 2,
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
            "moreBefore": true
        }
    },
    "status": 200
}
```
</details>
