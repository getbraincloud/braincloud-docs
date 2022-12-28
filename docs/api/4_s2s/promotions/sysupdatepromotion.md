# SysUpdatePromotion
## Overview
Updates the specified promotion with the provided promotionJson. Any promotionId included in the promotionJson will be ignored.

<PartialServop service_name="promotions" operation_name="SYS_UPDATE_PROMOTION" / >

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
var promotionId = 1;
var version = 1;
var promotionJson ={
  "name": "Independence Day Sale",
  "type": "SCHEDULED",
  "startAt": 1593781140000,
  "endAt": 1594126859999,
  "message": {
      "en": "Happy 4th of July!",
      "fr": "Joyeux 4 juillet!"
  },
  "enabled": true,
  "segments": [ 1 ],
  "prices": [
      {
          "itemId": "coinbundle10",
          "priceId": 1
      }
  ],
  "notifications": [
      {
          "trigger" : "ACTIVATED",
          "notificationTemplateId" : 1
      }
  ],
  "customJson": {
    "key": "value"
  }
}
var promotionsProxy = bridge.getPromotionsServiceProxy();

var postResult = promotionsProxy.sysUpdatePromotion(promotionId, version, promotionJson);
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
	"operation": "SYS_UPDATE_PROMOTION",
	"data": {
    "promotionId": 1,
    "version": 2,
    "promotionJson": {
        "name": "Independence Day Sale",
        "type": "SCHEDULED",
        "startAt": 1593781140000,
        "endAt": 1594126859999,
        "message": {
            "en": "Happy 4th of July!",
            "fr": "Joyeux 4 juillet!"
        },
        "enabled": true,
        "segments": [ 1 ],
        "prices": [
            {
                "itemId": "coinbundle10",
                "priceId": 1
            }
        ],
        "notifications": [
            {
                "trigger" : "ACTIVATED",
                "notificationTemplateId" : 2
            }
        ],
        "customJson": {
          "key": "value"
        }
    }
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
        "en": "Happy 4th of July!",
        "fr": "Joyeux 4 juillet!"
      },
      "enabled": true,
      "segments": [
        1
      ],
      "prices": [
        {
          "itemId": "coinbundle10",
          "priceId": 1
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
      "startAt": 1593781140000,
      "endAt": 1594126859999,
      "createdAt": 1592543345470,
      "updatedAt": 1592589083592,
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
promotionJson | The full promotion JSON (minus the promotionId).


