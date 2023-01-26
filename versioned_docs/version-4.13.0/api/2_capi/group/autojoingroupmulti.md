# AutoJoinGroupMulti
## Overview
Find and join an open group in the pool of groups in multiple group types provided as input arguments.

- **isOpenGroup** - the isOpenGroup flag is set on group creation, or via the [SetGroupOpen](/api/capi/group/setgroupopen) method.

AutoJoinStrategy is defined by enum or constant in most of the client libraries.  For those that take a string, these are the valid values:

- **JoinFirstGroup** - Joins the first group found that matches the specified criteria.
- **JoinRandomGroup** - Finds all groups that matches the specified criteria and then randomly chooses one to join.

<PartialServop service_name="group" operation_name="AUTO_JOIN_GROUP_MULTI" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] groupTypes = {"type1","type2"};
AutoJoinStrategy autoJoinStrategy = AutoJoinStrategy.JoinRandomGroup;
string where = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Group.AutoJoinGroupMulti(groupTypes, autoJoinStrategy, where, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const std::vector<std::string> &groupTypes = vector_of_group_types;
eAutoJoinStrategy autoJoinStrategy = eAutoJoinStrategy::JoinFirstGroup;
const char *where = "{}";

<%= data.branding.codePrefix %>->getGroup()->autoJoinGroupMulti(groupTypes, autoJoinStrategy, where, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *groupTypes = @[group_type_array];
AutoJoinStrategy autoJoinStrategy = JoinFirstGroup;
NSString *where = @"{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService]
            autoJoinGroupMulti:groupTypes
              autoJoinStrategy:autoJoinStrategy
                         where:where 
               completionBlock:successBlock
          errorCompletionBlock:failureBlock
		              cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String[] groupTypes = new String[1];
groupTypes[0] = "type1";
groupTypes[1] = "type2";
AutoJoinStrategy autoJoinStrategy = AutoJoinStrategy.JoinRandomGroup;
String where = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroup().autoJoinGroupMulti(groupTypes, autoJoinStrategy, where, this);

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
var groupTypes = ["type1", "type2"];
var autoJoinStrategy = "JoinRandomGroup";
var where = {};

<%= data.branding.codePrefix %>.group.autoJoinGroupMulti(groupTypes, autoJoinStrategy, where, result =>
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
var groupTypes = ["a-group-type-1","a-group-type-2"];
var autoJoinStrategy = "JoinRandomGroup";
var where = {};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.autoJoinGroupMulti(groupTypes, autoJoinStrategy, where);
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
	"operation": "AUTO_JOIN_GROUP_MULTI",
	"data": {
		"groupTypes": ["group_types_array"],
		"autoJoinStrategy": "JoinRandomGroup",
		"where": {}
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
    {
     "data": {
     "groupType": "test",
     "groupId": "972e245c-38e8-4ccb-84db-8be5f530a27a",
     "memberCount": 3,
     "name": "Test2",
     "invitedPendingMemberCount": 0,
     "requestingPendingMemberCount": 0,
     "ownerId": "1b8c0719-6f2e-44a0-95a2-bae46a4c5278",
     "summaryData": null,
     "isOpenGroup": true
    },
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupTypes | The list of group types to draw candidates from
autoJoinStrategy | Selection strategy to employ when there are multiple matches
where | Query parameters (optional)


