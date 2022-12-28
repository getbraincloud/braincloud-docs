# CreateLobbyWithPingData
## Overview
Creates an instance of a lobby.

Use [PingRegions](/api/capi/lobby/pingregions) to generate the ping data.

<PartialServop service_name="lobby" operation_name="CREATE_LOBBY_WITH_PING_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string lobbyType = "4v4";
int rating = 76;
string[] otherUserCxIds = { "123456:aaa-bbb-ccc-ddd:asdfjkl" };
string settings = "{}";
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

<%= data.branding.codePrefix %>.LobbyService.CreateLobbyWithPingData(lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *lobbyType = "4v4";
int rating = 76;
std::vector<std::string> otherUserCxIds;
otherUserCxIds.push_back("123456:aaa-bbb-ccc-ddd:asdfjkl");
const char *settings = "{}";
bool isReady = false;
const char *extraJson = "{}";
const char *teamCode = "blue";
<%= data.branding.codePrefix %>->getLobbyService()->createLobbyWithPingData(lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *lobbyType = @"4v4";
int rating = 76;
NSArray *otherUserCxIds = @[ @"123456:aaa-bbb-ccc-ddd:asdfjkl" ];
NSString *settings = @"{}";
bool isReady = false;
NSString *extraJson = @"{}";
NSString *teamCode = @"blue";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> lobbyService] createLobbyWithPingData:lobbyType
                     rating:rating
             otherUserCxIds:otherUserCxIds
                   settings:settings
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
String[] otherUserCxIds = { "123456:aaa-bbb-ccc-ddd:asdfjkl" };
String settings = "{}";
boolean isReady = false;
String extraJson = "{}";
String teamCode = "blue";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLobbyService().createLobbyWithPingData(lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, this);

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
var otherUserCxIds = [ "123456:aaa-bbb-ccc-ddd:asdfjkl" ];
var settings = {};
var isReady = false;
var extraJson = {};
var teamCode = "blue";

<%= data.branding.codePrefix %>.lobby.createLobbyWithPingData(lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, result =>
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
var otherUserCxIds = [ "123456:aaa-bbb-ccc-ddd:asdfjkl" ];
var settings = {};
var isReady = false;
var extraJson = {};
var teamCode = "blue";
var pingData = {
    "ca-central-1": 98,
    "us-west-1": 123
};
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.createLobbyWithPingData(lobbyType, rating, otherUserCxIds, settings, isReady, extraJson, teamCode, pingData);
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
	"operation": "CREATE_LOBBY_WITH_PING_DATA",
	"data": {
		"lobbyType": "4v4",
		"rating": 76,
		"otherUserCxIds": [
			"55555:aaa-bbb-ccc-ddd:asdfjkl"
		],
		"settings": {},
		"isReady": false,
		"extraJson": {},
		"teamCode": "blue",
		"pingData": {
			"ca-central-1": 98,
			"us-west-1": 123
		}
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
lobbyType | The type of lobby to look for. Lobby types are defined in the portal.
rating | The skill rating to use for finding the lobby. Provided as a separate parameter because it may not exactly match the user's rating (especially in cases where parties are involved).
otherUserCxIds | Array of other users (i.e. party members) to add to the lobby as well. Will constrain things so that only lobbies with room for all players will be considered.
settings | Owner settings for this lobby.
isReady | Initial ready-status of this user.
extraJson | Initial extra-data about this user.
teamCode | Preferred team for this user, if applicable. Send `""` or `null` for automatic assignment.
pingData | Ping times for each region available for this lobby type. Can use GET_REGIONS_FOR_LOBBIES to retreive the list of regions for a given lobby type. pingData is automatically passed in on the client.


