# SendRawPushToCustomQuery

Sends a push to users based on custom collection query and the profileIdField storing the user's <%= data.branding.productName %> profile Id.

<PartialServop service_name="pushNotification" operation_name="SEND_RAW_PUSH_TO_CUSTOM_QUERY" />

## Method Parameters

| Parameter        | Description                                                                                                                                                                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| customEntityType | Entity type identifying the applicable custom collection.                                                                                                                                                                                           |
| customQueryJson  | JSON query to be applied to the custom collection.                                                                                                                                                                                                  |
| profileIdField   | Name of field in custom collection that contains the user's <%= data.branding.productName %> profile Id. For owned custom collections, this would be `ownerId`, but for unowned custom collections this would be something like `data.bcProfileId`. |
| contentJson      | JSON containing applicable `fcmContent`, `iosContent` and/or `facebookContent`. At least one is required.                                                                                                                                           |

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
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var customEntityType = "athletes";
var customQueryJson = {
  "data.totalGoals": {
    "$gte": 10
  }
};
var profileIdField = "ownerId";
var contentJson = {
  "fcmContent": {
    "notification": {
      "body": "content of message",
      "title": "message title"
    },
    "data": {
      "customfield1": "customValue1",
      "customfield2": "customValue2"
    },
    "priority": "normal"
  },
  "iosContent": {
    "aps": {
      "alert": {
        "body": "content of message",
        "title": "message title"
      },
      "badge": 0,
      "sound": "gggg"
    }
  },
  "facebookContent": {
    "template": "content of message"
  }
};
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.sendRawPushToCustomQuery(customEntityType, customQueryJson, profileIdField, contentJson);
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
  "service": "pushNotification",
  "operation": "SEND_RAW_PUSH_TO_CUSTOM_QUERY",
  "data":
  {
    "customEntityType": "athletes",
    "customQueryJson": {
      "data.totalGoals": {
        "$gte": 10
      }
    },
    "profileIdField": "ownerId",
    "contentJson": {
      "fcmContent": {
        "notification": {
          "body": "content of message",
          "title": "message title"
        },
        "data": {
          "customfield1": "customValue1",
          "customfield2": "customValue2"
        },
        "priority": "normal"
      },
      "iosContent": {
        "aps": {
          "alert": {
            "body": "content of message",
            "title": "message title"
          },
          "badge": 0,
          "sound": "gggg"
        }
      },
      "facebookContent": {
        "template": "content of message"
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
    "data": {},
    "status": 200
}
```

</details>
