# GetRegionsForLobbies
## Overview
Retrieves the region settings for each of the given lobby types.

<PartialServop service_name="lobby" operation_name="GET_REGIONS_FOR_LOBBIES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] lobbyTypes = { "2v2", "4v4" };
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.GetRegionsForLobbies(lobbyTypes, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> lobbyTypes;
lobbyTypes.push_back("2v2");
lobbyTypes.push_back("4v4");
<%= data.branding.codePrefix %>->getLobbyService()->getRegionsForLobbies(lobbyTypes, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *lobbyTypes = @[ @"2v2", @"4v4" ];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> lobbyService] getRegionsForLobbies:lobbyTypes
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String[] lobbyTypes = { "2v2", "4v4" };
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLobbyService().getRegionsForLobbies(lobbyTypes, this);

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
var lobbyTypes = [ "2v2", "4v4" ];

<%= data.branding.codePrefix %>.lobby.getRegionsForLobbies(lobbyTypes, result =>
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
var lobbyTypes = [ "2v2", "4v4" ];
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.getRegionsForLobbies(lobbyTypes);
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
	"operation": "GET_REGIONS_FOR_LOBBIES",
	"data": {
		"lobbyTypes": [
			"2v2",
			"4v4"
		]
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
    "lobbyTypeRegions": {
      "Relay_lobbyT_v2": [
        "ca-central-1"
      ]
    },
    "regionPingData": {
      "ca-central-1": {
        "type": "PING",
        "target": "dynamodb.ca-central-1.amazonaws.com"
      }
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
lobbyTypes | Types of lobby being queried. 


