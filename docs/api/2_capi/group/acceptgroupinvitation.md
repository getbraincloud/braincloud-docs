# AcceptGroupInvitation
## Overview
Accept an invitation to become a member of the group.

Example group invite request:
```
data" : {
  ...
  "invited":[
     {
        "groupType":"Clan",
        "groupId":"9c09427c-a0f1-4247-8799-dee270a2357f",
        "memberCount":14,
        "name":"Rico's Roughnecks",
        "invitedPendingMemberCount":1,
        "requestingPendingMemberCount":0,
        "ownerId":"0d08a2e5-8692-4f6b-9e0c-099e0e1031e4",
        "isOpenGroup":false
     }
  ],
  ...
}
```

<PartialServop service_name="group" operation_name="ACCEPT_GROUP_INVITATION" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "a-group-id";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupService.AcceptGroupInvitation(groupId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";
<%= data.branding.codePrefix %>->getGroupService()->acceptGroupInvitation(groupId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] acceptGroupInvitation:groupId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String groupId = "a-group-id";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupService().acceptGroupInvitation(groupId, this);

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
var groupId = "a-group-id";

<%= data.branding.codePrefix %>.group.acceptGroupInvitation(groupId, result =>
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
var groupId = "a-group-id";
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.acceptGroupInvitation(groupId);
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
	"service": "group",
	"operation": "ACCEPT_GROUP_INVITATION",
	"data": {
		"groupId": "a-group-id"
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
    "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group


