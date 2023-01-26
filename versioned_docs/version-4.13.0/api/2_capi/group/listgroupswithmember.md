# ListGroupsWithMember
## Overview
Retrieve group summary information about the groups in which the specified user is a member.

<PartialServop service_name="group" operation_name="LIST_GROUPS_WITH_MEMBER" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string profileId = "profileId";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.ListGroupsWithMember(profileId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *profileId = "profileId";

<%= data.branding.codePrefix %>->getGroup()->listGroupsWithMember(profileId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *profileId = @"profileId";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] listGroupsWithMember:profileId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String profileId = "profileId";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().listGroupsWithMember(profileId, this);

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
var profileId = "profileId";

<%= data.branding.codePrefix %>.group.listGroupsWithMember(profileId, result =>
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
var profileId = "profileId";
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.listGroupsWithMember(profileId);
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
	"operation": "LIST_GROUPS_WITH_MEMBER",
	"data": {
		"profileId": "profileId"
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
        "groups": [
            {
                "groupType": "test",
                "groupId": "69191b48-0cb1-4538-9758-e2f5ef4c524b",
                "isOpenGroup": false,
                "requestingPendingMemberCount": 0,
                "invitedPendingMemberCount": 0,
                "ownerId": "b67b2d73-1e8c-42e9-9be5-9c1879a48555",
                "name": "test22",
                "memberCount": 1
            }
        ]
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | ID of the user to search for


