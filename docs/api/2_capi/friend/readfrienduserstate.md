# ReadFriendUserState
## Overview
Read a friend's user state. If the specified Id is not a friend of the current user, will get "Not friends" message (40310) back.


### Status Codes
Code | Name | Description
---- | ---- | -----------
40310 | NOT_FRIENDS  | The specified Id is not a friend of the current user

<PartialServop service_name="friend" operation_name="READ_FRIEND_PLAYER_STATE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string friendId = "profileId";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FriendService.ReadFriendUserState(friendId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *friendId = "profileId";
<%= data.branding.codePrefix %>->getFriendService()->readFriendUserState(friendId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *friendId = @"profileId";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] readFriendUserState:friendId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String friendId = "profileId";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriendService().readFriendUserState(friendId, this);

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
var friendId = "profileId";

<%= data.branding.codePrefix %>.friend.readFriendUserState(friendId, result =>
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
var friendId = "profileId";
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.readFriendUserState(friendId);
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
	"service": "friend",
	"operation": "READ_FRIEND_PLAYER_STATE",
	"data": {
		"friendId": "profileId"
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
    "data": {
        "vcPurchased": 0,
        "xpCapped": false,
        "experiencePoints": 9796,
        "playerName": "",
        "vcClaimed": 0,
        "parentProfileId": null,
        "countryCode": null,
        "loginCount": 106,
        "server_time": 1449863680011,
        "experienceLevel": 11,
        "entities": [
            {
                "entityId": "a3abc2ad-13ee-47a8-86a5-9c0a83f90314",
                "entityType": "PlayerData",
                "version": 99,
                "data": {
                    "ALL_TIME_SCORE": 1003750
                },
                "acl": {
                    "other": 1
                },
                "createdAt": 1425909205616,
                "updatedAt": 1430338431696
            }
        ],
        "currency": {
            "coin": {
                "purchased": 9975000,
                "balance": 9968735,
                "consumed": 43500,
                "awarded": 37235
            }
        },
        "statistics": {
            "SCORE_STREAK_COUNT": 2
        },
        "abTestingId": 70,
        "id": "bb05182d-ff0c-4740-ae65-482751e74949",
        "profileId": "bb05182d-ff0c-4740-ae65-482751e74949"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
friendId | Profile Id of friend who owns entity.


