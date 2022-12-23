# RegisterListenersForProfiles
## Overview
Registers the caller for RTT presence updates for the given `profileIds`. If `bidirectional` is set to true, then also registers the targeted users for presence updates from the caller.

<PartialServop service_name="presence" operation_name="REGISTER_LISTENERS_FOR_PROFILES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
List<string> profileIds = new List<string>{ <%= data.example.profileId %> };
bool bidirectional = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};
    
<%= data.branding.codePrefix %>.PresenceService.RegisterListenersForProfiles(profileIds, bidirectional, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> profileIds;
profileIds.push_back(<%= data.example.profileId %>);
this; // implements IServerCallback

bool bidirectional = true;

<%= data.branding.codePrefix %>->getPresenceService()->registerListenersForProfiles(profileIds, bidirectional, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray* profileIds = [NSArray arrayWithObjects: @<%= data.example.profileId %>];
bool bidirectional = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> presenceService] registerListenersForProfiles:profileIds
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
String[] profileIds = new String[] { <%= data.example.profileId %> };
boolean bidirectional = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPresenceService().registerListenersForProfiles(profileIds, bidirectional, this);

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
var bidirectional = true;

<%= data.branding.codePrefix %>.presence.registerListenersForProfiles(profileIds, bidirectional, result =>
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
var bidirectional = true;

var postResult = presenceProxy.registerListenersForProfiles(profileIds, bidirectional);
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
	"operation": "REGISTER_LISTENERS_FOR_PROFILES",
	"data": {
		"profileIds": [
			"aaa-bbb-ccc-ddd",
			"bbb-ccc-ddd-eee"
		],
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
profileIds | Array of target profile IDs.
bidirectional | Should those profiles be mutually registered to listen to the current profile?


