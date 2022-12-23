# GetSharedEntityForProfileId
## Overview
Method returns a shared entity for the given profile and entity ID.

An entity is shared if its ACL allows for the currently logged in user to read the data.

<PartialServop service_name="entity" operation_name="READ_SHARED_ENTITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string targetProfileId = "profile1";
string entityId = "someEntityId";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.EntityService.GetSharedEntityForProfileId(targetProfileId, entityId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *targetProfileId = "profile1";
const char *entityId = "someEntityId";
<%= data.branding.codePrefix %>->getEntityService()->getSharedEntityForProfileId(targetProfileId, entityId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *targetProfileId = @"profile1";
NSString *entityId = @"someEntityId";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> entityService] getSharedEntityForProfileId:targetProfileId
                   entityId:entityId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String targetProfileId = "profile1";
String entityId = "someEntityId";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getEntityService().getSharedEntityForProfileId(targetProfileId, entityId, this);

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
var targetProfileId = "profile1";
var entityId = "someEntityId";

<%= data.branding.codePrefix %>.entity.getSharedEntityForProfileId(targetProfileId, entityId, result =>
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
var targetProfileId = "profile1";
var entityId = "someEntityId";
var entityProxy = bridge.getEntityServiceProxy();

var postResult = entityProxy.getSharedEntityForProfileId(targetProfileId, entityId);
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
	"service": "entity",
	"operation": "READ_SHARED_ENTITY",
	"data": {
		"targetProfileId": "profile1",
		"entityId": "someEntityId"
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
        "entityId": "544db68a-48ad-4fc9-9f44-5fd36fc6445f",
        "entityType": "publicInfo",
        "_serverTime": 1637946319239,
        "version": 1,
        "data": {
            "name": "john",
            "age": 30
        },
        "acl": {
            "other": 1
        },
        "createdAt": 1395943044322,
        "updatedAt": 1395943044322
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
targetProfileId | The profile id to retrieve shared entities for
entityId | The ID of the entity that will be retrieved


