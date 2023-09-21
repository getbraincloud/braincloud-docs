# ReadGroupMembers
## Overview
Read the members of the group.

<PartialServop service_name="group" operation_name="READ_MEMBERS_OF_GROUP" / >

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

<%= data.branding.codePrefix %>.Group.ReadGroupMembers(groupId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";

<%= data.branding.codePrefix %>->getGroup()->readGroupMembers(groupId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] readGroupMembers:groupId
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

<%= data.branding.codePrefix %>.getGroup().readGroupMembers(groupId, this);

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

<%= data.branding.codePrefix %>.group.readGroupMembers(groupId, result =>
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

var postResult = groupProxy.readGroupMembers(groupId);
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
  "groupId": "a-group-id"
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
        "ee8cad26-16f2-4ef8-9045-3aab84ce6362": {
            "role": "OWNER",
            "attributes": {},
            "playerName": "Peter",
            "emailAddress": "klug@bitheads.com",
            "pic": "https://some.domain.com/mypicture.jpg",
            "summaryFriendData": {
                "xp": 12,
                "attributeName": "value"
            }
        },
        "295c510f-507f-4bcf-80e1-ebc73708ec3c": {
            "role": "MEMBER",
            "attributes": {},
            "playerName": "Billy",
            "emailAddress": "billy@bitheads.com",
            "pic": null
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | ID of the group


