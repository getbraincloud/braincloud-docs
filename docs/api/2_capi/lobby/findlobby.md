# FindLobby
## Overview
Finds a lobby matching the specified parameters. Asynchronous - returns 200 to indicate that matchmaking has started.



<PartialServop service_name="lobby" operation_name="FIND_LOBBY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string lobbyType = "4v4";
int rating = 76;
int maxSteps = 3;
string algo = "{\"strategy\":\"ranged-absolute\",\"alignment\":\"center\",\"ranges\":[5,7.5,10]}";
string filterJson = "{\"cheater\":false}";
string[] otherUserCxIds = { "55555:aaa-bbb-ccc-ddd:asdfjkl" };
bool isReady = false;
string extraJson = "{}";
string teamCode = "blue";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.FindLobby(lobbyType, rating, maxSteps, algo, filterJson, otherUserCxIds, isReady, extraJson, teamCode, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *lobbyType = "4v4";
int rating = 76;
int maxSteps = 3;
const char *algo = "{\"strategy\":\"ranged-absolute\",\"alignment\":\"center\",\"ranges\":[5,7.5,10]}";
const char *filterJson = "{\"cheater\":false}";
std::vector<std::string> otherUserCxIds;
otherUserCxIds.push_back("55555:aaa-bbb-ccc-ddd:asdfjkl");
bool isReady = false;
const char *extraJson = "{}";
const char *teamCode = "blue";
<%= data.branding.codePrefix %>->getLobbyService()->findLobby(lobbyType, rating, maxSteps, algo, filterJson, otherUserCxIds, isReady, extraJson, teamCode, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *lobbyType = @"4v4";
int rating = 76;
int maxSteps = 3;
NSString *algo = @"{\"strategy\":\"ranged-absolute\",\"alignment\":\"center\",\"ranges\":[5,7.5,10]}";
NSString *filterJson = @"{\"cheater\":false}";
NSArray *otherUserCxIds = @[ @"55555:aaa-bbb-ccc-ddd:asdfjkl" ];
bool isReady = false;
NSString *extraJson = @"{}";
NSString *teamCode = @"blue";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> lobbyService] findLobby:lobbyType
                     rating:rating
                   maxSteps:maxSteps
                       algo:algo
                 filterJson:filterJson
             otherUserCxIds:otherUserCxIds
                    isReady:isReady
                  extraJson:extraJson
                   teamCode:teamCode
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String lobbyType = "4v4";
int rating = 76;
int maxSteps = 3;
String algo = "{\"strategy\":\"ranged-absolute\",\"alignment\":\"center\",\"ranges\":[5,7.5,10]}";
String filterJson = "{\"cheater\":false}";
String[] otherUserCxIds = { "55555:aaa-bbb-ccc-ddd:asdfjkl" };
boolean isReady = false;
String extraJson = "{}";
String teamCode = "blue";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLobbyService().findLobby(lobbyType, rating, maxSteps, algo, filterJson, otherUserCxIds, isReady, extraJson, teamCode, this);

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
var lobbyType = "4v4";
var rating = 76;
var maxSteps = 3;
var algo = {
    "strategy": "ranged-absolute",
    "alignment": "center",
    "ranges": [
        5,
        7.5,
        10
    ]
};
var filterJson = {
    "cheater": false
};
var otherUserCxIds = [ "55555:aaa-bbb-ccc-ddd:asdfjkl" ];
var isReady = false;
var extraJson = {};
var teamCode = "blue";

<%= data.branding.codePrefix %>.lobby.findLobby(lobbyType, rating, maxSteps, algo, filterJson, otherUserCxIds, isReady, extraJson, teamCode, result =>
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
var lobbyType = "4v4";
var rating = 76;
var maxSteps = 3;
var algo = {
    "strategy": "ranged-absolute",
    "alignment": "center",
    "ranges": [
        5,
        7.5,
        10
    ]
};
var filterJson = {
    "cheater": false
};
var otherUserCxIds = [ "55555:aaa-bbb-ccc-ddd:asdfjkl" ];
var isReady = false;
var extraJson = {};
var teamCode = "blue";
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.findLobby(lobbyType, rating, maxSteps, algo, filterJson, otherUserCxIds, isReady, extraJson, teamCode);
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
	"service": "lobby",
	"operation": "FIND_LOBBY",
	"data": {
		"lobbyType": "4v4",
		"rating": 76,
		"maxSteps": 3,
		"algo": {
			"strategy": "ranged-absolute",
			"alignment": "center",
			"ranges": [
				5,
				7.5,
				10
			]
		},
		"filterJson": {
			"cheater": false
		},
		"otherUserCxIds": [
			"55555:aaa-bbb-ccc-ddd:asdfjkl"
		],
		"isReady": false,
		"extraJson": {},
		"teamCode": "blue"
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
    "status": 200,
    "data": {}
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature

</details>


## Method Parameters
Parameter | Description
--------- | -----------
lobbyType | The type of lobby to look for. Lobby types are defined in the portal.
rating | The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
maxSteps | The maximum number of steps to wait when looking for an applicable lobby. Each step is ~5 seconds.
algo | The algorithm to use for increasing the search scope.
filterJson | Used to help filter the list of rooms to consider. Passed to the matchmaking filter, if configured.
otherUserCxIds | Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
isReady | Initial ready-status of this user.
extraJson | Initial extra-data about this user.
teamCode | Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.


