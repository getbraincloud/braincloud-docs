# SysCreateTournamentTemplate
## Overview
Creates a new tournament template.

<PartialServop service_name="tournament" operation_name="SYS_CREATE_TOURNAMENT_TEMPLATE" / >

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
var tournamentCode = "uniqueTournamentCode";
var configJson = {
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
              "pushId": 2,
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
              "pushId": 3,
              "mail": {}
          }
      },
      "calcScript": "",
      "postScript": "",
      "customJson": {},
      "payoutRules": [
          {
              "reward": {
              "experiencePoints": 10,
              "currency": {
                  "coins": 100
              }
              },
              "rank": {
              "rankAbs": 1
              }
          },
          {
              "reward": {
              "experiencePoints": 5,
              "currency": {
                  "coins": 50
              }
              },
              "rank": {
              "rankAbs": 2
              }
          },
          {
              "reward": {
              "experiencePoints": 1,
              "currency": {
                  "coins": 5
              }
              },
              "rank": {
              "rankToPercent": 10
              }
          }
      ],
      "entryFee": {}
    };
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysCreateTournamentTemplate(tournamentCode, configJson);
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
	"operation": "SYS_CREATE_TOURNAMENT_TEMPLATE",
	"data": {
    "tournamentCode": "uniqueTournamentCode",
    "configJson": {
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
              "pushId": 2,
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
              "pushId": 3,
              "mail": {}
          }
      },
      "calcScript": "",
      "postScript": "",
      "customJson": {},
      "payoutRules": [
          {
              "reward": {
              "experiencePoints": 10,
              "currency": {
                  "coins": 100
              }
              },
              "rank": {
              "rankAbs": 1
              }
          },
          {
              "reward": {
              "experiencePoints": 5,
              "currency": {
                  "coins": 50
              }
              },
              "rank": {
              "rankAbs": 2
              }
          },
          {
              "reward": {
              "experiencePoints": 1,
              "currency": {
                  "coins": 5
              }
              },
              "rank": {
              "rankToPercent": 10
              }
          }
      ],
      "entryFee": {}
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
    "gameId": "23782",
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
        "pushId": 2,
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
        "pushId": 3,
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
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
tournamentCode | The unique tournament code to assign to the template
configJson | Configuration data defining the tournament template


