# GetTournamentConfigs
## Overview
```
{
    "packetId": 1,
    "messages": [
        {
            "service": "tournament",
            "operation": "GET_TOURNAMENT_CONFIGS",
            "data": {
                "leaderboardId": "leaderboard1",
                "leaderboardVersionId": 1
            }
        }
    ]
}
```

Get tournament configs associated with a leaderboard.

<PartialServop service_name="tournament" operation_name="GET_TOURNAMENT_CONFIGS" / >

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
var leaderboardId = "the-leaderboard-id";
var leaderboardVersionId = 1;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.getTournamentConfigs(leaderboardId, leaderboardVersionId);
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
	"operation": "GET_TOURNAMENT_CONFIGS",
	"data": {
		"leaderboardId": "the-leaderboard-id",
		"leaderboardVersionId": 1
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
	"packetId": 1,
	"messageResponses": [{
		"status": 200,
		"data": {
			"tournamentConfigsCount": 1,
			"tournamentConfigs": [{
				"version": 8,
				"gameId": "123456",
				"tournamentCode": "testTournament",
				"description": {
					"name": {
						"en": "Test Tournament"
					},
					"desc": {
						"en": "Test Tournament"
					}
				},
				"notifications": {
					"startingSoon": {
						"enabled": false,
						"pushId": null,
						"mail": null
					},
					"start": {
						"enabled": false,
						"pushId": null,
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
						"enabled": false,
						"pushId": null,
						"mail": {}
					}
				},
				"calcScript": "",
				"postScript": "",
				"customJson": {},
				"payoutRules": [{
					"reward": {
						"currency": {
							"credits": 1
						}
					},
					"rank": {
						"rankAbs": 1
					}
				}, {
					"reward": {},
					"rank": {
						"rankRemainder": -1
					}
				}],
				"entryFee": {},
				"createdAt": 1483479902614,
				"updatedAt": 1483560895428
			}]
		}
	}]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
leaderboardId | The leaderboard to retrieve tournament info from. 
leaderboardVersionId | The version of the leaderboard to retrieve tournament info from.  Use -1 for current version. 


