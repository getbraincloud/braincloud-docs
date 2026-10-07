# SysDropMyUserItems

Client Cloud Code only. Drops the specified items from the session user's inventory, without any recovery of the currency paid for them.

If `dropMax` is `true`, the full quantity of each item is dropped. If `false`, a quantity of 1 of each item is dropped.

Items that cannot be dropped are skipped rather than failing the whole call — for example, an item that is not found in the user's inventory, an item published to the blockchain (has a `blockItemId`), or an item that has been given away and is awaiting pickup (has `giftedTo`). Their IDs are returned in `skippedItemIds`.

:::note
By default, at most **10** item IDs can be passed per call. The limit is set by the app property `userItemsDropItemsMaxItemIds` — contact support if you need it adjusted.

Each item ID passed counts as one bulk API call, whether or not the item was actually dropped.
:::

<PartialServop service_name="userItems" operation_name="SYS_DROP_MY_USER_ITEMS" />

## Method Parameters
Parameter | Description
--------- | -----------
itemIds | Array of user item IDs to drop from the session user's inventory.
dropMax | If `true`, the full quantity of each item is dropped. If `false`, a quantity of 1 of each item is dropped.

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
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var itemIds = ["aaa-bbb-ccc-ddd", "eee-fff-ggg-hhh"];
var dropMax = false;
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.sysDropMyUserItems(itemIds, dropMax);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "userItems",
    "operation": "SYS_DROP_MY_USER_ITEMS",
    "data": {
        "itemIds": [
            "aaa-bbb-ccc-ddd",
            "eee-fff-ggg-hhh"
        ],
        "dropMax": false
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
        "items": [
            {
                "itemId": "aaa-bbb-ccc-ddd",
                "defId": "potion001",
                "type": "ITEM",
                "quantity": 4,
                "itemData": {},
                "giftedTo": null,
                "giftedFrom": null,
                "createdAt": 1764001974250,
                "updatedAt": 1791360000000,
                "version": 3,
                "usesLeft": null,
                "coolDownStart": -1,
                "recoveryStart": -1,
                "maxUses": null,
                "coolDownUntil": -1,
                "recoveryUntil": -1
            }
        ],
        "skippedItemIds": [
            "eee-fff-ggg-hhh"
        ]
    },
    "status": 200
}
```

</details>

`items` lists the dropped items that still have some quantity remaining. Items that were dropped completely are not included. `skippedItemIds` is only present when one or more items could not be dropped.

<details>
<summary>Common Error Codes</summary>

### Status Codes

Code | Name | Description
---- | ---- | -----------
40358 | MISSING_REQUIRED_PARAMETER | `itemIds` or `dropMax` was not specified.
40660 | INVALID_PARAMETER_VALUE | More item IDs were passed than the app allows (10 by default).
40616 | CLOUD_CODE_ONLY_METHOD | The method was called directly from a client. It can only be called from client-session Cloud Code.

</details>
