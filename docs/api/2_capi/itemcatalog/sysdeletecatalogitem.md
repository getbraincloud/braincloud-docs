# SysDeleteCatalogItem

Delete an existing Item catalog

<PartialServop service_name="itemCatalog" operation_name="SYS_DELETE_CATALOG_ITEM" />

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
var defId = "sword001";
var version = 1;
var forceDeleteAnyState = False;
var itemCatalogProxy = bridge.getItemcatalogServiceProxy();

var postResult = itemCatalogProxy.SysDeleteCatalogItem(defId, version, forceDeleteAnyState);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"itemCatalog",
    "operation":"SYS_DELETE_CATALOG_ITEM",
    "data":{
        "defId":"sword001",
        "version":1,
        "forceDeleteAnyState":false
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
  "status" : 200,
  "data" : null
}
```

</details>

## Method Parameters
Parameter | Description
--------- | -----------
defId | The unique id of the item definition.
version | Version of catalog item to delete. For any version, specify -1.
forceDeleteAnyState | false - Delete only if the item is in Revoked or Draft state. true - delete item irrespective of the state.
