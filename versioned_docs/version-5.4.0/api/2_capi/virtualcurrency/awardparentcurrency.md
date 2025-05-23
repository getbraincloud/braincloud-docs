# AwardParentCurrency

Award parent user the passed-in amount of currency. Returns an object representing the new currency values.

<PartialServop service_name="virtualCurrency" operation_name="AWARD_PARENT_VC" />

## Method Parameters
Parameter | Description
--------- | -----------
vcId | The currency type to award.
vcAmount | The amount of currency to award.
levelName | Name of the parent level.

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
var vcId = "coins";
var vcAmount = 1;
var levelName = "master";
var virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();

var postResult = virtualCurrencyProxy.awardParentCurrency(vcId, vcAmount, levelName);
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
	"service": "virtualCurrency",
	"operation": "AWARD_PARENT_VC",
	"data": {
		"vcId": "coins",
		"vcAmount": 1,
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
        "currencyMap": {
            "gems": {
                "purchased": 0,
                "balance": 0,
                "consumed": 0,
                "awarded": 0,
                "revoked": 0
            },
            "gold": {
                "purchased": 0,
                "balance": 100,
                "consumed": 0,
                "awarded": 100,
                "revoked": 0
            }
        }
    }
}
```
</details>

