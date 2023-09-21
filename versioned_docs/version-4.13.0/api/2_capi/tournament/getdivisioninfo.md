# GetDivisionInfo
## Overview
Essentially the same as <code>[GetTournamentStatus](/api/capi/tournament/gettournamentstatus)</code>, but takes a division set id instead of a leaderboardId as its parameter. 

Provides information about the division - schedule, entry fees, prizes - as well as the player's enrollment status.

<PartialServop service_name="tournament" operation_name="GET_DIVISION_INFO" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string divSetId = "exampleDivSetId";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.TournamentService.GetDivisionInfo(divSetId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *divSetId = "exampleDivSetId";
<%= data.branding.codePrefix %>->getTournamentService()->getDivisionInfo(divSetId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *divSetId = @"exampleDivSetId";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> tournamentService] getDivisionInfo:divSetId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String divSetId = "exampleDivSetId";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getTournamentService().getDivisionInfo(divSetId, this);

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
var divSetId = "exampleDivSetId";

<%= data.branding.codePrefix %>.tournament.getDivisionInfo(divSetId, result =>
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
var divSetId = "exampleDivSetId";
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.getDivisionInfo(divSetId);
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
	"operation": "GET_DIVISION_INFO",
	"data": {
		"divSetId": "exampleDivSetId"
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
        "server_time": 1537496450261,
        "versionId": 1,
        "tournamentTimetable": {
            "tRegistrationStart": 1537496450261,
            "tState": "ACTIVE",
            "tPlayEnd": 1538072460000,
            "tRegistrationEnd": 1538072460000,
            "tPlayStart": 1537496450261
        },
        "tournamentConfigs": [
            {
                "tournamentCode": "free",
                "description": {
                    "name": {
                        "en": "Free Tournament"
                    },
                    "desc": {
                        "en": "Basic free-to-enter tournament"
                    }
                },
                "customJson": {},
                "payoutRules": [
                    {
                        "reward": {
                            "experiencePoints": 100,
                            "currency": {
                                "coin": 1000
                            }
                        },
                        "rank": {
                            "rankAbs": 1
                        }
                    },
                    {
                        "reward": {
                            "experiencePoints": 50,
                            "currency": {
                                "coin": 500
                            }
                        },
                        "rank": {
                            "rankAbs": 2
                        }
                    },
                    {
                        "reward": {
                            "experiencePoints": 25,
                            "currency": {
                                "coin": 250
                            }
                        },
                        "rank": {
                            "rankAbs": 3
                        }
                    },
                    {
                        "reward": {
                            "experiencePoints": 5,
                            "currency": {
                                "coin": 50
                            }
                        },
                        "rank": {
                            "rankToPercent": 50
                        }
                    }
                ],
                "entryFee": {}
            }
        ],
        "enrolled": false
    },
    "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
divSetId | Division set id


