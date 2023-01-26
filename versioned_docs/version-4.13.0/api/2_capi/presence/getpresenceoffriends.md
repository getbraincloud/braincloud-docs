# GetPresenceOfFriends
## Overview
Gets the presence data for the given `platform`. Can be one of "all", "<%= data.branding.productName %>", or "facebook". Will not include offline profiles unless `includeOffline` is set to true.

<PartialServop service_name="presence" operation_name="GET_PRESENCE_OF_FRIENDS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string platform = <%= data.example.platform %>;
bool includeOffline = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};
    
<%= data.branding.codePrefix %>.PresenceService.GetPresenceOfFriends(platform, includeOffline, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* platform = <%= data.example.platform %>;
bool includeOffline = true;

<%= data.branding.codePrefix %>->getPresenceService()->getPresenceOfFriends(platform, includeOffline, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* platform = @<%= data.example.platform %>;
bool includeOffline = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> presenceService] getPresenceOfFriends:platform
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
String platform = <%= data.example.platform %>;
boolean includeOffline = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPresenceService().getPresenceOfFriends(platform, includeOffline, this);

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
var platform = <%= data.example.platform %>;
var includeOffline = true;

<%= data.branding.codePrefix %>.presence.getPresenceOfFriends(platform, includeOffline, result =>
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
var presenceProxy = bridge.getPresenceServiceProxy();
var platform = <%= data.example.platform %>;
var includeOffline = true;

var postResult = presenceProxy.getPresenceOfFriends(platform, includeOffline);
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
	"operation": "GET_PRESENCE_OF_FRIENDS",
	"data": {
		"friendPlatform": "brainCloud",
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
platform | Gets a list of Presence entries for the specified platform or "all" for all platforms. 
includeOffline | Should offline users be included in the response?


