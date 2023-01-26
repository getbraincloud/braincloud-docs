# SysListTournamentTemplates
## Overview
Lists all tournament templates.

<PartialServop service_name="tournament" operation_name="SYS_LIST_TOURNAMENT_TEMPLATES" / >

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
var optionsJson = {         
      "sort": "ASCENDING"
    };

var postResult = tournamentProxy.sysEditTournamentTemplate(optionsJson);
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
	"service": "tournament",
	"operation": "SYS_LIST_TOURNAMENT_TEMPLATES",
	"data": {
    "optionsJson": {
      "sort": "ASCENDING"
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
    "tournamentTemplatesCount": 2,
    "tournamentTemplates": [
      {
        "tournamentCode": "testTournamentId",
        "version": 9,
        "description": {
          "name": {
            "en": "testTournamentName"
          },
          "desc": {
            "en": ""
        },
        "notifications": {
          "startingSoon": {
            "enabled": true,
            "pushId": 1,
            "mail": {
              "en": "d-86bc9796d49b45f8a1833c6ee6216c06"
            }
          },
          "start": {
            "enabled": true,
            "pushId": 1,
            "mail": {
              "en": "d-86bc9796d49b45f8a1833c6ee6216c06"
            }
          },
          "scorePassed": {
            "enabled": true,
            "pushId": 1,
            "mail": {}
          },
          "endingSoon": {
            "enabled": true,
            "pushId": 1,
            "mail": {
              "en": "d-86bc9796d49b45f8a1833c6ee6216c06"
            }
          },
          "complete": {
            "enabled": true,
            "pushId": 1,
            "mail": {
              "en": "d-86bc9796d49b45f8a1833c6ee6216c06"
            }
          }
        },
        "calcScript": "",
        "postScript": "",
        "customJson": {},
        "payoutRules": [
          {
            "rank": {
              "rankAbs": 1
            },
            "reward": {
              "currency": {
                "gems": 1
              }
            }
          }
        ],
        "entryFee": {},
        "createdAt": 1590674004863,
        "updatedAt": 1590674295500
      },
      {
        "tournamentCode": "uniqueTournamentCode",
        "version": 1,
        "description": {
          "name": {
            "en": "tFree"
          },
          "desc": {
            "en": "Free tournament. Pays out for rankings: 1st, 2nd and top 10%. Push notifications for start and complete."
          }
        },
        "notifications": {
          "startingSoon": {
            "enabled": false,
            "pushId": null,
            "mail": {}
          },
          "start": {
            "enabled": true,
            "pushId": 1,
            "mail": {}
          },
          "scorePassed": {
            "enabled": false,
            "pushId": null,
            "mail": {}
          },
          "endingSoon": {
            "enabled": false,
            "pushId": null,
            "mail": {}
          },
          "complete": {
            "enabled": true,
            "pushId": 1,
            "mail": {}
          }
        },
        "calcScript": "",
        "postScript": "",
        "customJson": {},
        "payoutRules": [
          {
            "rank": {
              "rankAbs": 1
            },
            "reward": {
              "experiencePoints": 10,
              "currency": {
                "coins": 100
              }
            }
          },
          {
            "rank": {
              "rankAbs": 2
            },
            "reward": {
              "experiencePoints": 5,
              "currency": {
                "coins": 50
              }
            }
          },
          {
            "rank": {
              "rankToPercent": 10
            },
            "reward": {
              "experiencePoints": 1,
              "currency": {
                "coins": 5
              }
            }
          }
        ],
        "entryFee": {},
        "createdAt": 1632511327924,
        "updatedAt": 1632511327924
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
optionsJson | Optional json to sort the list of tournament templates. Valid values for sort field are \"ASCENDING\" or \"DESCENDING\"; defaults to ASCENDING


