# SysDropAllMyUserItems

Client Cloud Code only. Drops every droppable item in the session user's inventory, without any recovery of the currency paid for them.

Items published to the blockchain (have a `blockItemId`) and items that have been given away and are awaiting pickup (have `giftedTo`) are not dropped.

:::caution
This permanently deletes the user's items and cannot be undone. Unlike [DropUserItem](/api/capi/useritems/dropuseritem) and [SysDropMyUserItems](/api/capi/useritems/sysdropmyuseritems), no `DroppedItem` analytics events are recorded for the deleted items.
:::

:::note
Each user item deleted counts as one bulk API call. Nothing is counted if the user had no droppable items.
:::

<PartialServop service_name="userItems" operation_name="SYS_DROP_ALL_MY_USER_ITEMS" />

## Method Parameters

This method takes no parameters.

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
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.sysDropAllMyUserItems();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service": "userItems",
    "operation": "SYS_DROP_ALL_MY_USER_ITEMS",
    "data": {}
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
        "deletedCount": 12
    },
    "status": 200
}
```

</details>

`deletedCount` is the number of user item entries that were deleted. A stackable item counts as one entry, whatever its quantity.

<details>
<summary>Common Error Codes</summary>

### Status Codes

Code | Name | Description
---- | ---- | -----------
40616 | CLOUD_CODE_ONLY_METHOD | The method was called directly from a client. It can only be called from client-session Cloud Code.

</details>
