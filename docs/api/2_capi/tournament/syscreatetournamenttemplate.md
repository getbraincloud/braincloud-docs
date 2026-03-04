# SysCreateTournamentTemplate

Creates a new tournament template.

<PartialServop service_name="tournament" operation_name="SYS_CREATE_TOURNAMENT_TEMPLATE" />

## Method Parameters
Parameter | Description
--------- | -----------
tournamentCode | The unique tournament code to assign to the template.
configJson | Configuration data defining the tournament template. Include entryType ("PLAYER" or "GROUP") to specify whether the tournament is for individual players or groups.

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
            "en": "Free player tournament. Pays out for rankings: 1st, 2nd and top 10%. Push notifications for start and complete."
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
                "rankToPercent": 10
            }
        }
    ],
    "entryFee": {}
};
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysCreateTournamentTemplate(tournamentCode, configJson);

// GROUP example
tournamentCode = "myGroupTournamentCode";
configJson = {
    "entryType": "GROUP",
    "description": {
        "name": {
            "en": "Group Tournament"
        },
        "desc": {
            "en": "Tournament for groups."
        }
    },
    "postScript": "/tournaments/ProcessGroupTournamentCompleteRankingsCalculated",
    "excludeInitialScoresFromRewards": false,
    "customJson": {}
};

postResult = tournamentProxy.sysCreateTournamentTemplate(tournamentCode, configJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// PLAYER example
{
    "service": "tournament",
    "operation": "SYS_CREATE_TOURNAMENT_TEMPLATE",
    "data": {
        "tournamentCode": "myPlayerTournamentCode",
        "configJson": {
            "entryType": "PLAYER",
            "description": {
                "name": {
                    "en": "Free player tournament"
                },
                "desc": {
                    "en": "Free player tournament. Pays out for rankings: 1st, 2nd and top 10%. Push notifications for start and complete."
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
                        "rankToPercent": 10
                    }
                }
            ],
            "entryFee": {}
        }
    }
}

// GROUP example
{
    "service": "tournament",
    "operation": "SYS_CREATE_TOURNAMENT_TEMPLATE",
    "data": {
        "tournamentCode": "myGroupTournamentCode",
        "configJson": {
            "entryType": "GROUP",
            "description": {
                "name": {
                    "en": "Group Tournament"
                },
                "desc": {
                    "en": "Tournament for groups."
                }
            },
            "postScript": "/tournaments/ProcessGroupTournamentCompleteRankingsCalculated",
            "excludeInitialScoresFromRewards": false,
            "customJson": {}
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

