# SysDeletePromotion
## Overview
Deletes the specified promotion from the server.

<PartialServop service_name="promotions" operation_name="SYS_DELETE_PROMOTION" / >

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
var promotionId = 1;
var version = 2;
var promotionsProxy = bridge.getPromotionsServiceProxy();

var postResult = promotionsProxy.sysDeletePromotion(promotionId, version);
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
	"operation": "SYS_DELETE_PROMOTION",
	"data": {
    "promotionId": 1,
    "version": 1
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
  "data": null,
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
promotionId | ID uniquely identifying the promotion to update. Note: If promotionId is included in the promotionJson, it is ignored. The promotionId provided as a direct parameter takes priority.
version | Version of the promotion to update. Can bypass version check by passing in -1.


