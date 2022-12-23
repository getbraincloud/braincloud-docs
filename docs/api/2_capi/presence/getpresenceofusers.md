# GetPresenceOfUsers
## Overview
Gets the presence data for the given `profileIds`. Will not include offline profiles unless `includeOffline` is set to true.

<PartialServop service_name="presence" operation_name="GET_PRESENCE_OF_USERS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] profileIds = { <%= data.example.profileId %> };
bool includeOffline = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};
    
<%= data.branding.codePrefix %>.PresenceService.GetPresenceOfUsers(profileIds, includeOffline, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> profileIds;
profileIds.push_back(<%= data.example.profileId %>);

bool includeOffline = true;

<%= data.branding.codePrefix %>->getPresenceService()->getPresenceOfUsers(profileIds, includeOffline, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray* profileIds = [NSArray arrayWithObjects: @<%= data.example.profileId %>];
bool includeOffline = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> presenceService] getPresenceOfUsers:profileIds
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
String[] profileIds = new String[] { <%= data.example.profileId %> };
boolean includeOffline = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPresenceService().getPresenceOfUsers(profileIds, includeOffline, this);

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
var profileIds = [<%= data.example.profileId %>];
var includeOffline = true;

<%= data.branding.codePrefix %>.presence.getPresenceOfUsers(profileIds, includeOffline, result =>
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
var profileIds = [<%= data.example.profileId %>];
var includeOffline = true;

var postResult = presenceProxy.getPresenceOfUsers(profileIds, includeOffline);
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
	"operation": "GET_PRESENCE_OF_USERS",
	"data": {
		"profileIds": [
			"aaa-bbb-ccc-ddd",
			"bbb-ccc-ddd-eee"
		],
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

## Method Parameters
Parameter | Description
--------- | -----------
profileIds | Gets a list of Presence for the specified profile ids. 
includeOffline | Should offline users be included in the response?


