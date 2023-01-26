# GetRandomGroupsMatching
## Overview
Gets a list of up to maxReturn randomly selected groups from the server based on the where condition.

<PartialServop service_name="group" operation_name="GET_RANDOM_GROUPS_MATCHING" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string where = "{\"groupType\":\"BLUE\"}";
int maxReturn = 20;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupService.GetRandomGroupsMatching(where, maxReturn, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *where = "{\"groupType\":\"BLUE\"}";
int maxReturn = 20;
<%= data.branding.codePrefix %>->getGroupService()->getRandomGroupsMatching(where, maxReturn, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *where = @"{\"groupType\":\"BLUE\"}";
int maxReturn = 20;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] getRandomGroupsMatching:where
                  maxReturn:maxReturn
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String where = "{\"groupType\":\"BLUE\"}";
int maxReturn = 20;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupService().getRandomGroupsMatching(where, maxReturn, this);

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
var where = {
    "groupType": "BLUE"
};
var maxReturn = 20;

<%= data.branding.codePrefix %>.group.getRandomGroupsMatching(where, maxReturn, result =>
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
var where = {
    "groupType": "BLUE"
};
var maxReturn = 20;
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.getRandomGroupsMatching(where, maxReturn);
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
	"operation": "GET_RANDOM_GROUPS_MATCHING",
	"data": {
		"where": {
			"groupType": "BLUE"
		},
		"maxReturn": 20
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
    "count": 1,
    "groups": [
      {
        "gameId": "12345",
        "groupId": "b7b590e0-0e27-47ef-8bf5-03a3b4e34475",
        "ownerId": "77ce8889-20b7-4d01-b248-e0beb747f1b4",
        "name": "myGroupName",
        "groupType": "myGroupType",
        "createdAt": 1561472696504,
        "updatedAt": 1561472696504,
        "members": {
          "77ce8889-20b7-4d01-b248-e0beb747f1b4": {
            "role": "OWNER",
            "attributes": {}
          }
        },
        "pendingMembers": {},
        "version": 1,
        "data": {},
        "summaryData": {},
        "isOpenGroup": true,
        "defaultMemberAttributes": {},
        "memberCount": 1,
        "invitedPendingMemberCount": 0,
        "requestingPendingMemberCount": 0,
        "acl": {
          "member": 2,
          "other": 0
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
where | Mongo style query string. 
maxReturn | Count of groups to randomly select 


