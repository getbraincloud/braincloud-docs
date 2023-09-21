# SysGetUserExport
## Overview
Exports user information for a single profile ID.

<PartialServop service_name="user" operation_name="SYS_GET_USER_EXPORT" / >

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
var profileId = "82cbbbf2-ee44-4279-b5a0-3e9bf04edf25";
var optionsJson = {
      "includeEntities": true,
      "customEntity": {
        "exclude": ["playerBackups"] 
      }
    };
var userProxy = bridge.getUserServiceProxy();

var postResult = userProxy.sysGetUserExport(profileId, optionsJson);   
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
}
  "service": "user",
  "operation": "SYS_GET_USER_EXPORT",
  "data": {
    "profileId" : "a-profiled-id",
    "optionsJson": {
      "includeEntities": true,
      "customEntity": {
        "exclude": ["playerBackups"] 
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
    "82cbbbf2-ee44-4279-b5a0-3e9bf04edf25": [
      {
        "appEmailAccounts": [
          {
            "emailAddress": "jasonbitheads@gmail.com"
          }
        ],
        "childEntities": [
          {
            "entityId": "77d2e40d-1807-4ebe-bff3-a77a4067e632",
            "entityType": "address",
            "version": 1,
            "data": {
              "street": "1309 Carling"
            },
            "acl": {
              "other": 0
            },
            "createdAt": 1623785645742,
            "updatedAt": 1623785645742
          },
          {
            "entityId": "3abe124b-2652-4c1c-96b9-f36b39415e09",
            "entityType": "address1",
            "version": 1,
            "data": {
              "street": "1310 Carling"
            },
            "acl": {
              "other": 0
            },
            "createdAt": 1623785660029,
            "updatedAt": 1623785660029
          }
        ],
        "credentials": [
          {
            "externalId": "jasonbitheads@gmail.com",
            "authenticationType": "Email",
            "authSubType": ""
          }
        ],
        "groups": {
          "requested": [],
          "invited": [],
          "groups": []
        },
        "leaderboardScores": [
          {
            "leaderboardId": "aLeaderboardId",
            "versionId": 31,
            "score": 10,
            "data": {
              "nickname": "batman"
            },
            "createdAt": 1634748477272,
            "updatedAt": 1634748477272
          },
          {
            "leaderboardId": "aLeaderboardId11",
            "versionId": 31,
            "score": 10,
            "data": {
              "nickname": "batman"
            },
            "createdAt": 1634748537457,
            "updatedAt": 1634748537457
          }
        ],
        "playerCurrency": {
          "createdAt": 1623785637325,
          "updatedAt": 1623785637325,
          "syncTimestamp": 1623785637325,
          "items": {}
        },
        "playerProfile": [
          {
            "playerName": "",
            "pictureUrl": null,
            "platforms": [
              "IOS"
            ],
            "home": null,
            "countryCode": "CA",
            "languageCode": "en",
            "timeZoneOffset": -5,
            "createdAt": 1623785637315,
            "updatedAt": 1623785637337,
            "amountSpent": 0,
            "refundCount": 0,
            "vcClaimed": 0,
            "vcPurchased": 0,
            "summaryFriendData": null,
            "isTester": false,
            "ab_testing_id": 95,
            "loginCount": 1,
            "lastLogin": 1623785637323,
            "previousLogin": null,
            "randomAttribute": 0.3492390588647414,
            "playerRating": 0,
            "shieldExpiry": 0,
            "matchesPlayed": 0,
            "lastMatch": 0,
            "activeSessions": [
              "rgk8kmpguqquakojqmvsh6hco6"
            ],
            "matchAttackExpiry": null,
            "matchEnabled": false,
            "attributes": {},
            "automatedPromotions": [],
            "friendProfileIds": [],
            "emailAddress": "jasonbitheads@gmail.com"
          }
        ],
        "playerStatistics": {
          "syncTimestamp": 1623785637334,
          "statistics": {},
          "experienceLevel": 0,
          "experiencePoints": 0,
          "milestonesStatus": {},
          "questsStatus": {},
          "playerAchievements": []
        }
      }
    ]
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | Profile ID of the user
optionsJson | Export options as JSON object, `includeEntities` field is required, the `customEntity` field is optional (with `include` and `exclude` options, if `include` specified - only include entities from the owned custom entities specified, if `exclude` specified - included all owned custom entities for this user, except for the specified collections.)


