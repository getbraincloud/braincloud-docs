# SysEnablePromotion
## Overview
Enable/Disable a promotion. A convenience API for easily toggling a promotion on/off.

<PartialServop service_name="promotions" operation_name="SYS_ENABLE_PROMOTION" / >

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
var version = 1;
var enabled = true;
var promotionsProxy = bridge.getPromotionsServiceProxy();

var postResult = promotionsProxy.sysEnablePromotion(promotionId, version, enabled);
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
	"operation": "SYS_ENABLE_PROMOTION",
	"data": {
    "promotionId": 1,
    "version": 1,
    "enabled": true
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
      "enabled": true,
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
      "startAt": 1593781259911,
      "endAt": 1594126859911,
      "createdAt": 1592543866698,
      "updatedAt": 1592590019283,
      "version": 2
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
promotionId | ID uniquely identifying the promotion to update. Note: If promotionId is included in the promotionJson, it is ignored. The promotionId provided as a direct parameter takes priority.
version | Version of the promotion to update. Can bypass version check by passing in -1.
enabled | Flag true to enable promotion, false to disable promotion.


