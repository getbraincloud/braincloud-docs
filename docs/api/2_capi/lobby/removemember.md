# RemoveMember
## Overview
Evicts the specified user from the specified lobby. The caller must be the owner of the lobby.




### Status Codes
Code | Name | Description
---- | ---- | -----------
40601 | RTT_NOT_ENABLED | RTT must be enabled for this feature

<PartialServop service_name="lobby" operation_name="REMOVE_MEMBER" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string lobbyId = "55555:4v4:19";
string cxId = "55555:aaa-bbb-ccc-ddd:asdfjkl";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.RemoveMember(lobbyId, cxId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *lobbyId = "55555:4v4:19";
const char *cxId = "55555:aaa-bbb-ccc-ddd:asdfjkl";
<%= data.branding.codePrefix %>->getLobbyService()->removeMember(lobbyId, cxId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *lobbyId = @"55555:4v4:19";
NSString *cxId = @"55555:aaa-bbb-ccc-ddd:asdfjkl";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> lobbyService] removeMember:lobbyId
                       cxId:cxId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String lobbyId = "55555:4v4:19";
String cxId = "55555:aaa-bbb-ccc-ddd:asdfjkl";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getLobbyService().removeMember(lobbyId, cxId, this);

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
var lobbyId = "55555:4v4:19";
var cxId = "55555:aaa-bbb-ccc-ddd:asdfjkl";

<%= data.branding.codePrefix %>.lobby.removeMember(lobbyId, cxId, result =>
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
var lobbyId = "55555:4v4:19";
var cxId = "55555:aaa-bbb-ccc-ddd:asdfjkl";
var lobbyProxy = bridge.getLobbyServiceProxy();

var postResult = lobbyProxy.removeMember(lobbyId, cxId);
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
	"operation": "REMOVE_MEMBER",
	"data": {
		"lobbyId": "55555:4v4:19",
		"cxId": "55555:aaa-bbb-ccc-ddd:asdfjkl"
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

## Method Parameters
Parameter | Description
--------- | -----------
lobbyId | Id of chosen lobby.
connectionID | RTT connection id of specified member to be removed from the lobby.


