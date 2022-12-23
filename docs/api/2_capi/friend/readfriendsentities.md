# ReadFriendsEntities
## Overview
Returns entities of all friends based on type and/or subtype.

<PartialServop service_name="friend" operation_name="READ_FRIENDS_ENTITIES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "entityType";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FriendService.ReadFriendsEntities(entityType, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "entityType";
<%= data.branding.codePrefix %>->getFriendService()->readFriendsEntities(entityType, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"entityType";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] readFriendsEntities:entityType
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String entityType = "entityType";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriendService().readFriendsEntities(entityType, this);

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
var entityType = "entityType";

<%= data.branding.codePrefix %>.friend.readFriendsEntities(entityType, result =>
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
var entityType = "entityType";
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.readFriendsEntities(entityType);
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
	"operation": "READ_FRIENDS_ENTITIES",
	"data": {
		"entityType": "entityType"
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
        "results": [
            {
                "userId": "bb05182d-ff0c-4740-ae65-4342452e74949",
                "entities": [
                    {
                        "entityId": "bb05182d-ff0c-4740-ae65-4827534949",
                        "entityType": "PlayerData",
                        "version": 99,
                        "data": {
                            "ACCOUNT_CREATION_TIME": 1353011574029,
                            "ALL_TIME_SCORE": 1003750,
                            "FIRST_PLAY_TIME": 1430338388347
                        },
                        "acl": {
                            "other": 1
                        },
                        "createdAt": 1425909205616,
                        "updatedAt": 1430338431696
                    }
                ]
            }
        ]
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | Type of entities to retrieve


