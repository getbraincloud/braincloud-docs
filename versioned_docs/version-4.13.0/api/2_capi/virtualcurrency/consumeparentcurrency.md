# ConsumeParentCurrency
## Overview
Consumes currency in a parent app.

<PartialServop service_name="virtualCurrency" operation_name="CONSUME_PARENT_VC" / >

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
var vcId = "coins";
var vcAmount = 1;
var levelName = "master";
var virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();

var postResult = virtualCurrencyProxy.consumeParentCurrency(vcId, vcAmount, levelName);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var vcId = "coins";
var vcAmount = 1;
var levelName = "master";
var virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();

var postResult = virtualCurrencyProxy.consumeParentCurrency(vcId, vcAmount, levelName);
if (postResult.status == 200) {
    // Success!
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
                "awarded": 0
            },
            "gold": {
                "purchased": 0,
                "balance": 90,
                "consumed": 10,
                "awarded": 100
            }
        }

    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
vcId | The currency type to consume.
vcAmount | The amount of currency to consume.
levelName | Name of the parent level.


