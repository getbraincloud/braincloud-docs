# ConsumePeerCurrency
## Overview
Consumes currency in a peer.

<PartialServop service_name="virtualCurrency" operation_name="CONSUME_PEER_VC" / >

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
var vcId = "tokens";
var vcAmount = 1;
var peerCode = "gameloot";
var virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();

var postResult = virtualCurrencyProxy.consumePeerCurrency(vcId, vcAmount, peerCode);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var vcId = "tokens";
var vcAmount = 1;
var peerCode = "gameloot";
var virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();

var postResult = virtualCurrencyProxy.consumePeerCurrency(vcId, vcAmount, peerCode);
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
vcId | Type of currency (Ex. ticket, tokens)
vcAmount | Currency amount to be consumed
peer | Name of the peer


