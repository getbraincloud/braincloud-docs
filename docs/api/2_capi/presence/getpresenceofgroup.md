# GetPresenceOfGroup

Gets the presence data for the given `groupId`. Will not include offline profiles unless `includeOffline` is set to true.

<PartialServop service_name="presence" operation_name="GET_PRESENCE_OF_GROUP" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | Gets a list of Presence for the members of the specified group. The caller must be a member of the given group. 
includeOffline | Should offline users be included in the response?

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = <%= data.example.groupId %>;
bool includeOffline = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};
    
<%= data.branding.codePrefix %>.PresenceService.GetPresenceOfGroup(groupId, includeOffline, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* groupId = <%= data.example.groupId %>;
bool includeOffline = true;

<%= data.branding.codePrefix %>->getPresenceService()->getPresenceOfGroup(groupId, includeOffline, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* groupId = @<%= data.example.groupId %>;
BOOL includeOffline = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> presenceService] getPresenceOfGroup:groupId
             includeOffline:includeOffline
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String groupId = <%= data.example.groupId %>;
boolean includeOffline = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPresenceService().getPresenceOfGroup(groupId, includeOffline, this);

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
var groupId = <%= data.example.groupId %>;
var includeOffline = true;

<%= data.branding.codePrefix %>.presence.getPresenceOfGroup(groupId, includeOffline, result =>
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
var groupId = <%= data.example.groupId %>;
var includeOffline = true;

var postResult = presenceProxy.getPresenceOfGroup(groupId, includeOffline);
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
	"service": "presence",
	"operation": "GET_PRESENCE_OF_GROUP",
	"data": {
		"groupId": "aaa-bbb-ccc-ddd",
		"includeOffline": true
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
  "presence": [
   {
    "user": {
     "id": <%= data.example.profileId %>,
     "name": <%= data.example.playerName %>,
     "pic": null,
     "cxs": [
      "22284:fb416888-e76d-425d-a06d-a5529bdba8d9:id58ohotujj893gomctos244al"
     ]
    },
    "online": true,
    "summaryFriendData": {},
    "activity": {
     "LOCATION": "POKER_TABLE",
     "STATUS": "PLAYING_GAME"
    }
   }
  ]
 },
 "status": 200
}
```
</details>

