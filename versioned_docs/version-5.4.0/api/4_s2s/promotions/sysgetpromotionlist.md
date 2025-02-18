# SysGetPromotionList

Returns the list of configured promotions (without full details).

<PartialServop service_name="promotions" operation_name="SYS_GET_PROMOTION_LIST" />

## Method Parameters

| Parameter | Description                                                                               |
| --------- | ----------------------------------------------------------------------------------------- |
| type      | SCHEDULED or AUTOMATED to filter specific type, or empty string to return all promotions. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var type = "SCHEDULED"
var promotionsProxy = bridge.getPromotionsServiceProxy();

var postResult = promotionsProxy.sysGetPromotionList(type);
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
	"service": "promotions",
	"operation": "SYS_GET_PROMOTION_LIST",
	"data": {
    "type": "SCHEDULED"
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
        "promotions": [
            {
                "promotionId": 1,
                "type": "SCHEDULED",
                "name": "Independence Day Sale",
                "enabled": false,
                "segments": [],
                "startAt": 1593781259911,
                "endAt": 1594126859911,
                "createdAt": 1592543345470,
                "updatedAt": 1592543345470,
                "version": 1
            },
            {
                "promotionId": 2,
                "type": "SCHEDULED",
                "name": "Good Friday Day Sale",
                "enabled": false,
                "segments": [],
                "startAt": 1593781259911,
                "endAt": 1594126859911,
                "createdAt": 1592572610332,
                "updatedAt": 1592572610332,
                "version": 1
            }
        ]
    },
    "status": 200
}
```

</details>
