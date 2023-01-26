# GetParentCurrency
## Overview
Gets the parent player's currency for the given currency type **or** all currency types if null passed in.

<PartialServop service_name="product" operation_name="GET_PARENT_VC" / >

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
var levelName = "master";
var productProxy = bridge.getProductServiceProxy();

var postResult = productProxy.getParentCurrency(currencyType, levelName);
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
	"operation": "GET_PARENT_VC",
	"data": {
		"vc_id": "coins",
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
   "status":200,
   "data":{
      "createdAt":1507311971256,
      "currencyMap":{
         "credits":{
            "consumed":20,
            "balance":180,
            "purchased":0,
            "awarded":200
         }
      },
      "playerId":"dc129e18-af4c-439b-9b1d-e4b567fab38b",
      "updatedAt":1521049401784
   }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
currencyType | The currency type to retrieve or null if all currency types are being requested.
levelName | Name of the parent level.


