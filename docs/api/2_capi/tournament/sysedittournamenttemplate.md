# SysEditTournamentTemplate

Changes an existing tournament template.

<PartialServop service_name="tournament" operation_name="SYS_EDIT_TOURNAMENT_TEMPLATE" />

## Method Parameters
Parameter | Description
--------- | -----------
tournamentCode | The tournament code uniquely identifying the template being edited.
configJson | Configuration data changes to be applied to the tournament template. Include entryType ("PLAYER" or "GROUP") to specify whether the tournament is for individual players or groups.
version | Current version number of tournament template to update, use -1 to disable version checking.
applyChangesToLiveLeaderboards | If true, forces updates to all leaderboards with current version referencing that tournament code to set the new tournament template version. If false, new tournament template version is picked up on the leaderboards' next rotation.

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
// PLAYER example
var tournamentCode = "myPlayerTournamentCode";
var configJson = {
    "entryType": "PLAYER",
    "description": {
        "name": {
            "en": "Free player tournament"
        },
        "desc": {
            "en": "Free player tournament. Pays out for rankings: 1st, 2nd and top 20%. Push notifications for start, complete and ending soon."
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
            "enabled": true,
            "pushId": 3,
            "mail": {}
        },
        "complete": {
            "enabled": true,
            "pushId": 3,
            "mail": {}
        }
    },
    "postScript": "/tournaments/ProcessPlayerTournamentCompleteRankingsCalculated",
    "customJson": {},
    "excludeInitialScoresFromRewards": false,
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
                "rankToPercent": 20
            }
        }
    ],
    "entryFee": {}
};
var version = -1;
var applyChangesToLiveLeaderboards = false;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysEditTournamentTemplate(tournamentCode, configJson, version, applyChangesToLiveLeaderboards);

// GROUP example
tournamentCode = "myGroupTournamentCode";
configJson = {
    "entryType": "GROUP",
    "description": {
        "name": {
            "en": "Group tournament"
        },
        "desc": {
            "en": "Tournament for groups."
        }
    },
    "postScript": "/tournaments/ProcessGroupTournamentCompleteRankingsCalculated",
    "excludeInitialScoresFromRewards": false,
    "customJson": {}
};

postResult = tournamentProxy.sysEditTournamentTemplate(tournamentCode, configJson, version, applyChangesToLiveLeaderboards);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// PLAYER example
{
    "service": "tournament",
    "operation": "SYS_EDIT_TOURNAMENT_TEMPLATE",
    "data": {
        "tournamentCode": "myPlayerTournamentCode",
        "configJson": {
            "entryType": "PLAYER",
            "description": {
                "name": {
                    "en": "Free player tournament"
                },
                "desc": {
                    "en": "Free player tournament. Pays out for rankings: 1st, 2nd and top 20%. Push notifications for start, complete and ending soon."
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
                    "enabled": true,
                    "pushId": 3,
                    "mail": {}
                },
                "complete": {
                    "enabled": true,
                    "pushId": 3,
                    "mail": {}
                }
            },
            "postScript": "/tournaments/ProcessPlayerTournamentCompleteRankingsCalculated",
            "customJson": {},
            "excludeInitialScoresFromRewards": false,
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
                        "rankToPercent": 20
                    }
                }
            ],
            "entryFee": {}
        },
        "version": -1,
        "applyChangesToLiveLeaderboards": false
    }
}

// GROUP example
{
    "service": "tournament",
    "operation": "SYS_EDIT_TOURNAMENT_TEMPLATE",
    "data": {
        "tournamentCode": "myGroupTournamentCode",
        "configJson": {
            "entryType": "GROUP",
            "description": {
                "name": {
                    "en": "Group tournament"
                },
                "desc": {
                    "en": "Tournament for groups."
                }
            },
            "postScript": "/tournaments/ProcessGroupTournamentCompleteRankingsCalculated",
            "excludeInitialScoresFromRewards": false,
            "customJson": {}
        },
        "version": -1,
        "applyChangesToLiveLeaderboards": false
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
    "calcScriptId": "",
    "postScriptId": "",
    "excludeInitialScoresFromRewards": false,
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

