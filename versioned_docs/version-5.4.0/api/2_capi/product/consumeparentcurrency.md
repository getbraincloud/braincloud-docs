# ConsumeParentCurrency

Consumes currency in a parent app.

<PartialServop service_name="product" operation_name="CONSUME_PARENT_VC" />

## Method Parameters
Parameter | Description
--------- | -----------
currencyType | The currency type to consume.
amount | The amount of currency to consume.
levelName | Name of the parent level.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code Only
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code Only
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code Only
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code Only
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code Only
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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var currencyType = "coins";
var amount = 1;
var levelName = "master";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.consumeParentCurrency(currencyType, amount, levelName);
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
	"service": "product",
	"operation": "CONSUME_PARENT_VC",
	"data": {
		"vc_id": "coins",
		"vc_amount": 1,
		"levelName": "master"
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
    "data" :
    {
        "updatedAt": 1395693913234,
        "currencyMap": {
            "gems": {
                "purchased": 0,
                "balance": 0,
                "consumed": 0,
                "awarded": 0
            },
            "gold": {
                "purchased": 0,
                "balance": 123,
                "consumed": 0,
                "awarded": 123
            }
        },
        "playerId": "acf11847-055f-470d-abb7-b93052201491",
        "createdAt": 1395693907421
    }
}
```
</details>

