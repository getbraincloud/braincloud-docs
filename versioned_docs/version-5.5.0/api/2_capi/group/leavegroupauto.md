# LeaveGroupAuto

Leave a group in which the user is a member. If member is OWNER, a new owner is automatically selected: most recently active ADMIN; otherwise, most recently active MEMBER; otherwise, group is deleted.

<PartialServop service_name="group" operation_name="LEAVE_GROUP_AUTO" />

## Method Parameters

| Parameter | Description          |
| --------- | -------------------- |
| groupId   | The id of the group. |

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

<%= data.branding.codePrefix %>.GroupService.LeaveGroupAuto(groupId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";
<%= data.branding.codePrefix %>.getGroupService().leaveGroupAuto(groupId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> groupService] leaveGroupAuto:
                      groupId:groupId
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String groupId = "a-group-id";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getGroupService.leaveGroupAuto(groupId, this);

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
<%= data.branding.codePrefix %>.group.leaveGroupAuto(groupId, result =>
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
var groupId = "a-group-id";
ServerResponse result = await <%= data.branding.codePrefix %>.groupService.leaveGroupAuto(groupId:groupId);

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

var postResult = groupProxy.leaveGroupAuto(groupId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"group",
    "operation":"LEAVE_GROUP_AUTO",
    "data":{
        "groupId":"a-group-id"
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
    "data": {}
}
```

</details>
