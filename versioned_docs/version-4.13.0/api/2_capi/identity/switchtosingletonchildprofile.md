# SwitchToSingletonChildProfile
## Overview
Switches to a child profile of an app when only one profile exists. If multiple profiles exist this returns an error.

<PartialServop service_name="identity" operation_name="SWITCH_TO_CHILD_PROFILE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string childAppId = "1234567";

<%= data.branding.codePrefix %>.IdentityService.SwitchToSingletonChildProfile(
    childAppId,
    true,
    ApiSuccess, ApiError);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * childAppId = "1234567";

<%= data.branding.codePrefix %>->getIdentityService()->switchToSingletonChildProfile(
    childAppId, true, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)switchToSingletonChildProfile:(NSString *)childAppId
                 forceCreate:(bool)forceCreate
             completionBlock:(BCCompletionBlock)cb
        errorCompletionBlock:(BCErrorCompletionBlock)ecb
                    cbObject:(BCCallbackObject)cbObject;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public void switchToSingletonChildProfile(String in_childAppId, boolean in_forceCreate, IServerCallback in_callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.switchToSingletonChildProfile = function(childAppId, forceCreate, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var childAppId = "123456";
var forceCreate = true;

var identityProxy = bridge.getIdentityServiceProxy();
var retVal = identityProxy.switchToSingletonChildProfile(childAppId, forceCreate);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var childAppId = "123456";
var forceCreate = true;

var identityProxy = bridge.getIdentityServiceProxy();
var retVal = identityProxy.switchToSingletonChildProfile(childAppId, forceCreate);
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
   "data":{  
      "abTestingId":93,
      "lastLogin":1558725462395,
      "server_time":1558725462431,
      "refundCount":0,
      "timeZoneOffset":-5,
      "experiencePoints":0,
      "createdAt":1558462162948,
      "parentProfileId":"08ae9b33-3e9d-43d5-835e-7915e0da0fca",
      "emailAddress":null,
      "experienceLevel":0,
      "countryCode":"CA",
      "vcClaimed":0,
      "currency":{  

      },
      "id":"e3bf5491-aed5-402c-8eb3-e218e77a58ff",
      "amountSpent":0,
      "parentCurrency":{  
         "Parent":{  

         }
      },
      "previousLogin":1558462162950,
      "playerName":"",
      "pictureUrl":null,
      "incoming_events":[  

      ],
      "languageCode":"en",
      "vcPurchased":0,
      "isTester":false,
      "loginCount":2,
      "xpCapped":false,
      "profileId":"e3bf5491-aed5-402c-8eb3-e218e77a58ff",
      "newUser":false,
      "sent_events":[  

      ],
      "rewards":{  
         "rewardDetails":{  

         },
         "currency":{  

         },
         "rewards":{  

         }
      },
      "switchToAppId":"12336",
      "statistics":{  

      }
   },
   "status":200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
childAppId | The App ID of the child app to switch to
forceCreate | Should a new profile be created if it does not exist?


