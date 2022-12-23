# UpdateGroupSummaryData
## Overview
Update a group's summary data.

<PartialServop service_name="group" operation_name="UPDATE_GROUP_SUMMARY_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "a-group-id";
int version = 3;
string summaryData = "{ \"faction\": \"warlords\" }";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupService.UpdateGroupSummaryData(groupId, version, summaryData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";
int version = 3;
const char *summaryData = "{ \"faction\": \"warlords\" }";
<%= data.branding.codePrefix %>->getGroupService()->updateGroupSummaryData(groupId, version, summaryData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
int version = 3;
NSString *summaryData = @"{ \"faction\": \"warlords\" }";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] updateGroupSummaryData:groupId
                    version:version
                summaryData:summaryData
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
int version = 3;
String summaryData = "{ \"faction\": \"warlords\" }";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupService().updateGroupSummaryData(groupId, version, summaryData, this);

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
var version = 3;
var summaryData = { "faction": "warlords" };

<%= data.branding.codePrefix %>.group.updateGroupSummaryData(groupId, version, summaryData, result =>
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
var version = 3;
var summaryData = { "faction": "warlords" };
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.updateGroupSummaryData(groupId, version, summaryData);
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
	"operation": "UPDATE_GROUP_SUMMARY_DATA",
	"data": {
		"groupId": "a-group-id",
		"version": 3,
		"summaryData": {}
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
    "gameId": "12345",
    "groupId": "b7b590e0-0e27-47ef-8bf5-03a3b4e34475",
    "ownerId": "77ce8889-20b7-4d01-b248-e0beb747f1b4",
    "name": "myGroupName",
    "groupType": "newGroupType",
    "createdAt": 1561472696504,
    "updatedAt": 1561472926006,
    "members": {
      "77ce8889-20b7-4d01-b248-e0beb747f1b4": {
        "role": "OWNER",
        "attributes": {}
      }
    },
    "pendingMembers": {},
    "version": 4,
    "summaryData": {
      "new": "data"
    },
    "isOpenGroup": true,
    "defaultMemberAttributes": {},
    "memberCount": 1,
    "invitedPendingMemberCount": 0,
    "requestingPendingMemberCount": 0,
    "acl": {
      "member": 2,
      "other": 0
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group 
version | Version to verify 
summaryData | Public summary data for the group that is viewable even by non-members 


