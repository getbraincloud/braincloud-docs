# UpdateGroupEntityAcl
## Overview
Update the acl settings for a group entity, enforcing ownership.

<PartialServop service_name="group" operation_name="UPDATE_GROUP_ENTITY_ACL" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "a-group-id";
string entityId = "a-group-entity-id";
string acl = "{ \"member\": 1, \"other\": 0 }";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupService.UpdateGroupEntityAcl(groupId, entityId, acl, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "a-group-id";
const char *entityId = "a-group-entity-id";
const char *acl = "{ \"member\": 1, \"other\": 0 }";

<%= data.branding.codePrefix %>->getGroupService()->updateGroupEntityAcl(groupId, entityId, acl, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"a-group-id";
NSString *entityId = @"a-group-entity-id";
NSString *acl = "{ \"member\": 1, \"other\": 0 }";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupService] updateGroupEntityAcl:
                       groupId:groupId
                      entityId:entityId
                           acl:acl
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
String entityId = "a-group-entity-id";
String acl = "{ \"member\": 1, \"other\": 0 }";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupService().updateGroupEntityAcl(groupId, entityId, acl, this);

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
var entityId = "a-group-entity-id";
var acl = {
  "member": 1,
  "other": 0
};

<%= data.branding.codePrefix %>.group.updateGroupEntityAcl(groupId, entityId, acl, result =>
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
var entityId = "a-group-entity-id";
var acl = {
  "member": 1,
  "other": 0
};
var groupProxy = bridge.getGroupServiceProxy();

var postResult = groupProxy.updateGroupEntityAcl(groupId, entityId, acl);
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
  "operation": "UPDATE_GROUP_ENTITY_ACL",
  "data":
  {
    "groupId": "a-group-id",
    "entityId": "a-group-entity-id",
    "acl": {
      "member": 1,
      "other": 0
    }
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
    "createdAt": 1666994425075,
    "entityType": "myEntityType",
    "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
    "entityId": "e62dfe16-e6ec-4ebf-b044-2bb3626027e8",
    "acl": {
      "member": 1,
      "other": 0
    },
    "ownerId": null,
    "version": 2,
    "updatedAt": 1666994963444
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
entityId | The id of the entity to update.
acl | Access control list for the group entity.


