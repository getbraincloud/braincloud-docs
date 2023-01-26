# ReadFriendEntity
## Overview
Returns a particular entity of a particular friend.

<PartialServop service_name="friend" operation_name="READ_FRIEND_ENTITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string friendId = "profileId";
string entityId = "entityId";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FriendService.ReadFriendEntity(friendId, entityId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *friendId = "profileId";
const char *entityId = "entityId";
<%= data.branding.codePrefix %>->getFriendService()->readFriendEntity(friendId, entityId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *friendId = @"profileId";
NSString *entityId = @"entityId";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] readFriendEntity:friendId
                   entityId:entityId
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
String entityId = "entityId";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriendService().readFriendEntity(friendId, entityId, this);

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
var entityId = "entityId";

<%= data.branding.codePrefix %>.friend.readFriendEntity(friendId, entityId, result =>
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
var entityId = "entityId";
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.readFriendEntity(friendId, entityId);
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
	"operation": "READ_FRIEND_ENTITY",
	"data": {
		"friendId": "profileId",
		"entityId": "entityId"
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
        "entityId": "a3abc2ad-13ee-47a8-86a5-9c0a83f90314",
        "entityType": "PlayerData",
        "version": 1,
        "data": {
            "ACCOUNT_CREATION_TIME": 1353011574029,
            "ALL_TIME_SCORE": 1090560,
            "FIRST_PLAY_TIME": 1372781536842
        },
        "acl": {
            "other": 1
        },
        "createdAt": 1372901559406,
        "updatedAt": 1372901559406
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
friendId | Profile Id of friend who owns entity.
entityId | Id of entity to retrieve.


