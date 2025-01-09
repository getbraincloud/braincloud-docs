# ReadGroup

Retrieve information about the group.

<PartialServop service_name="group" operation_name="READ_GROUP" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group

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

<%= data.branding.codePrefix %>.Group.ReadGroup(groupId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";

<%= data.branding.codePrefix %>->getGroup()->readGroup(groupId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] readGroup:groupId
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

<%= data.branding.codePrefix %>.getGroup().readGroup(groupId, this);

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

<%= data.branding.codePrefix %>.group.readGroup(groupId, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  groupId = "a-group-id";

ServerResponse result = await <%= data.branding.codePrefix %>.groupService.readGroup(groupId:groupId);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "a-group-id";
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.readGroup(groupId);
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
	"operation": "READ_GROUP",
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
  "data": {
    "gameId": "13229",
    "groupId": "d373ff92-3327-4176-85ed-3565a09c43fa",
    "ownerId": "8bd564a7-3f91-4a98-a4b3-43cd7d266133",
    "name": "agroup",
    "groupType": "group11",
    "createdAt": 1605155742940,
    "updatedAt": 1671123804120,
    "members": {
      "8bd564a7-3f91-4a98-a4b3-43cd7d266133": {
        "role": "OWNER",
        "attributes": {}
      },
      "79087465-5ca5-41a1-9d46-85ad23bc6efd": {
        "role": "MEMBER",
        "attributes": {}
      }
    },
    "pendingMembers": {},
    "version": 5,
    "data": {
      "indexedId": "groupblue"
    },
    "summaryData": {},
    "isOpenGroup": true,
    "defaultMemberAttributes": {},
    "memberCount": 2,
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

