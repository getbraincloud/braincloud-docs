# SysReadPromotion
## Overview
Returns the full configuration data of the specified promotion.

<PartialServop service_name="promotions" operation_name="SYS_READ_PROMOTION" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var promotionId = 1
var promotionsProxy = bridge.getPromotionsServiceProxy();

var postResult = promotionsProxy.sysReadPromotion(promotionId);
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
	"operation": "SYS_READ_PROMOTION",
	"data": {
    "promotionId": 1
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
    "promotion": {
      "promotionId": 1,
      "type": "SCHEDULED",
      "name": "Independence Day Sale",
      "message": {
        "en": "Happy 4th of July!"
      },
      "enabled": false,
      "segments": [],
      "prices": [
        {
          "itemId": "coinbundle10",
          "priceId": 0
        }
      ],
      "notifications": [
        {
          "trigger": "ACTIVATED",
          "notificationTemplateId": 1
        }
      ],
      "customJson": {
        "key": "value"
      },
      "startAt": 1593781259911,
      "endAt": 1594126859911,
      "createdAt": 1592543345470,
      "updatedAt": 1592543345470,
      "version": 1
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
promotionId | ID uniquely identifying the promotion to read.


