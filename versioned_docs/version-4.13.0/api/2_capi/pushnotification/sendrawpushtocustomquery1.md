# SendRawPushToCustomQuery
## Overview
Sends a push to users based on custom collection query and the profileIdField storing the user's <%= data.branding.productName %> profile Id.

<PartialServop service_name="pushNotification" operation_name="SEND_RAW_PUSH_TO_CUSTOM_QUERY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string customEntityType = "athletes";
string customQueryJson = "{ \"data.totalGoals\": { \"$gte\": 10 } }";
string profileIdField = "ownerId";
string contentJson = "{ \"fcmContent\": { \"notification\": { \"body\": \"content of message\", \"title\": \"message title\" }, \"data\": { \"customfield1\": \"customValue1\", \"customfield2\": \"customValue2\" }, \"priority\": \"normal\" }, \"iosContent\": { \"aps\": { \"alert\": { \"body\": \"content of message\", \"title\": \"message title\" }, \"badge\": 0, \"sound\": \"gggg\" } }, \"facebookContent\": { \"template\": \"content of message\" } }";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PushNotificationService.SendRawPushToCustomQuery(customEntityType, customQueryJson, profileIdField, contentJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const chat *customEntityType = "athletes";
const chat *customQueryJson = "{ \"data.totalGoals\": { \"$gte\": 10 } }";
const chat *profileIdField = "ownerId";
const chat *contentJson = "{ \"fcmContent\": { \"notification\": { \"body\": \"content of message\", \"title\": \"message title\" }, \"data\": { \"customfield1\": \"customValue1\", \"customfield2\": \"customValue2\" }, \"priority\": \"normal\" }, \"iosContent\": { \"aps\": { \"alert\": { \"body\": \"content of message\", \"title\": \"message title\" }, \"badge\": 0, \"sound\": \"gggg\" } }, \"facebookContent\": { \"template\": \"content of message\" } }";

<%= data.branding.codePrefix %>->getPushNotificationService()->sendRawPushToCustomQuery(customEntityType, customQueryJson, profileIdField, contentJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *customEntityType = @"athletes";
NSString *customQueryJson = "{ \"data.totalGoals\": { \"$gte\": 10 } }";
NSString *profileIdField = @"ownerId";
NSString *contentJson = "{ \"fcmContent\": { \"notification\": { \"body\": \"content of message\", \"title\": \"message title\" }, \"data\": { \"customfield1\": \"customValue1\", \"customfield2\": \"customValue2\" }, \"priority\": \"normal\" }, \"iosContent\": { \"aps\": { \"alert\": { \"body\": \"content of message\", \"title\": \"message title\" }, \"badge\": 0, \"sound\": \"gggg\" } }, \"facebookContent\": { \"template\": \"content of message\" } }";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> pushNotificationService] sendRawPushToCustomQuery:customEntityType
               customQueryJson:customQueryJson
                profileIdField:profileIdField
                   contentJson:contentJson
               completionBlock:successBlock
          errorCompletionBlock:failureBlock
                      cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String customEntityType = "athletes";
String customQueryJson = "{ \"data.totalGoals\": { \"$gte\": 10 } }";
String profileIdField = "ownerId";
String contentJson = "{ \"fcmContent\": { \"notification\": { \"body\": \"content of message\", \"title\": \"message title\" }, \"data\": { \"customfield1\": \"customValue1\", \"customfield2\": \"customValue2\" }, \"priority\": \"normal\" }, \"iosContent\": { \"aps\": { \"alert\": { \"body\": \"content of message\", \"title\": \"message title\" }, \"badge\": 0, \"sound\": \"gggg\" } }, \"facebookContent\": { \"template\": \"content of message\" } }";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPushNotificationService().sendRawPushToCustomQuery(customEntityType, customQueryJson, profileIdField, contentJson, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
  System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
  System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
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

<%= data.branding.codePrefix %>.pushNotification.sendRawPushToCustomQuery(customEntityType, customQueryJson, profileIdField, contentJson, result =>
{
  var status = result.status;
  console.log(status + " : " + JSON.stringify(result, null, 2));
});
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
  "status" : 200,
  "data" : {}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
customEntityType | Entity type identifying the applicable custom collection.
customQueryJson | JSON query to be applied to the custom collection.
profileIdField | Name of field in custom collection that contains the user's <%= data.branding.productName %> profile Id. For owned custom collections, this would be `ownerId`, but for unowned custom collections this would be something like `data.bcProfileId`.
contentJson | JSON containing applicable `fcmContent`, `iosContent` and/or `facebookContent`. At least one is required.


