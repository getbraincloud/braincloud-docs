# AwardParentCurrency
## Overview
Award parent user the passed-in amount of currency. Returns an object representing the new currency values.

<PartialServop service_name="product" operation_name="AWARD_PARENT_VC" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var currencyType = "coins";
var amount = 1;
var levelName = "master";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.awardParentCurrency(currencyType, amount, levelName);
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
	"operation": "AWARD_PARENT_VC",
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

## Method Parameters
Parameter | Description
--------- | -----------
currencyType | The currency type to award.
amount | The amount of currency to award.
levelName | Name of the parent level.


