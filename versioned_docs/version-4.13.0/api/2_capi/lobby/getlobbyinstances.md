# GetLobbyInstances
## Overview
Gets a map keyed by rating of the visible lobby instances matching the given type and rating range.

<PartialServop service_name="lobby" operation_name="GET_LOBBY_INSTANCES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string lobbyType = "Relay_lobbyT_v2";
Dictionary<string, object> criteriaJson = new Dictionary<string, object>
{
  { "rating", new Dictionary<string, object>
      {
        { "min", 10 },
        { "max", 100 }
      }
  }
};

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.GetLobbyInstances(lobbyType, criteriaJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *lobbyType = "Relay_lobbyT_v2";
const char *criteriaJson = "{\"rating\":{\"min\":10,\"max\":100}}";

<%= data.branding.codePrefix %>->getLobbyService()->getLobbyInstances(lobbyType, criteriaJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *lobbyType = @"Relay_lobbyT_v2";
NSString *criteriaJson = @"{\"rating\":{\"min\":10,\"max\":100}}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> lobbyService] getLobbyInstances:lobbyType
               criteriaJson:criteriaJson
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String lobbyType = "Relay_lobbyT_v2";
String criteriaJson = "{\"rating\":{\"min\":10,\"max\":100}}";

this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLobbyService().getLobbyInstances(lobbyType, criteriaJson, this);

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
var lobbyType = "Relay_lobbyT_v2";
var "criteriaJson" = {
      "rating": {
        "min": 10,
        "max": 100
      }
    };

<%= data.branding.codePrefix %>.lobby.getLobbyInstances(lobbyType, criteriaJson, result =>
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
var lobbyType = "Relay_lobbyT_v2";
var criteriaJson = {
      "rating": {
        "min": 10,
        "max": 100
      }
    };
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.getLobbyInstances(lobbyType, criteriaJson);
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
	"operation": "GET_LOBBY_INSTANCES",
	"data": {
		"lobbyType": "Relay_lobbyT_v2",
    "criteriaJson": {
      "rating": {
        "min": 10,
        "max": 100
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
    "lobbiesByRating": {
      "20.0": [
        {
          "id": "23782:Relay_lobbyT_v2:2",
          "lobbyType": "Relay_lobbyT_v2",
          "state": "setup",
          "rating": 20,
          "desc": "starts as soon as 1 player is ready",
          "owner": {
            "profileId": "10b6d6fa-0aa6-43b0-a7b3-48aff2d13312",
            "name": "",
            "rating": 0,
            "pic": null,
            "cxId": "23782:10b6d6fa-0aa6-43b0-a7b3-48aff2d13312:52kc0h19k0pnnjhnrp8pug7udd"
          },
          "numMembers": 1,
          "maxMembers": 8
        }
      ]
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
lobbyType | The type of lobby to look for. Lobby types are defined in the portal.
criteriaJson | JSON object describing the filter criteria. Supported sub-values include: 'rating'.


