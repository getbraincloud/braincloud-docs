# AwardPeerCurrency
## Overview
Used to award Peer currency.

<PartialServop service_name="product" operation_name="AWARD_PEER_VC" / >

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
var currencyType = "tokens";
var amount = 1;
var peer = "gameloot";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.awardPeerCurrency(currencyType, amount, peer);
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
	"operation": "AWARD_PEER_VC",
	"data": {
		"vc_id": "tokens",
		"vc_amount": 1,
		"peer": "gameloot"
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
currencyType | Type of currency (Ex. ticket, tokens)
amount | Currency amount to be awarded
peer | Name of the peer


