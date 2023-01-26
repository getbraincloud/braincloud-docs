# SysCreatePromotion
## Overview
Creates a new promotion. The full promotion JSON (minus the promotionId) should be provided. The full promotion JSON, including the created promotionId, will be returned as a result (similar to SysReadPromotion()).

<PartialServop service_name="promotions" operation_name="SYS_CREATE_PROMOTION" / >

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
var promotionJson = {
    "name": "Independence Day Sale",
    "type": "SCHEDULED",
    "startAt": 1593781259911,
    "endAt": 1594126859911,
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
            "trigger" : "ACTIVATED",
            "notificationTemplateId" : 1
        }
    ],
    "customJson": {
      "key": "value"
    }
  };
var promotionsProxy = bridge.getPromotionsServiceProxy();

var postResult = promotionsProxy.sysCreatePromotion(promotionJson);
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
	"operation": "SYS_CREATE_PROMOTION",
	"data": {
    "promotionJson": {
      "name": "Independence Day Sale",
      "type": "SCHEDULED",
      "startAt": 1593781259911,
      "endAt": 1594126859911,
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
              "trigger" : "ACTIVATED",
              "notificationTemplateId" : 1
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
    "gameId": "23783",
    "promotionId": 3,
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
    "createdAt": 1592544049481,
    "updatedAt": 1592544049481,
    "version": 1
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
promotionJson | The full promotion JSON (minus the promotionId).


