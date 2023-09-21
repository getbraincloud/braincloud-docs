# RegisterListenersForFriends
## Overview
Registers the caller for RTT presence updates from friends on the given `platform`. Can be one of "all", "<%= data.branding.productName %>", or "facebook". If `bidirectional` is set to true, then also registers the targeted users for presence updates from the caller.

<PartialServop service_name="presence" operation_name="REGISTER_LISTENERS_FOR_FRIENDS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string platform = "<%= data.branding.productName %>";
bool bidirectional = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};
    
<%= data.branding.codePrefix %>.PresenceService.RegisterListenersForFriends(platform, bidirectional, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* platform = "<%= data.branding.productName %>";
bool bidirectional = true;

<%= data.branding.codePrefix %>->getPresenceService()->registerListenersForFriends(platform, bidirectional, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString* platform = @"<%= data.branding.productName %>";
bool bidirectional = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> presenceService] registerListenersForFriends:platform
             bidirectional:bidirectional
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String platform = "<%= data.branding.productName %>";
boolean bidirectional = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPresenceService().registerListenersForFriends(platform, bidirectional, this);

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
var platform = "<%= data.branding.productName %>";
var bidirectional = true;

<%= data.branding.codePrefix %>.presence.registerListenersForFriends(platform, bidirectional, result =>
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
var platform = "<%= data.branding.productName %>";
var bidirectional = true;

var postResult = presenceProxy.registerListenersForFriends(platform, bidirectional);
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
	"operation": "REGISTER_LISTENERS_FOR_FRIENDS",
	"data": {
		"friendPlatform": "brainCloud",
		"bidirectional": true
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
     "name": "",
     "pic": null,
     "cxs": [
      "22284:fb416888-e76d-425d-a06d-a5529bdba8d9:"
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
platform | Presence for friends of the caller on the specified platform. Use "all" or omit for all platforms. 
bidirectional | Should those profiles be mutually registered to listen to the current profile?


