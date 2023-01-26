# CreateEntity
## Overview
Creates a new custom entity.

<PartialServop service_name="customEntity" operation_name="CREATE_ENTITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
string dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"forward\",\"goals\":2,\"assists\":4}";
string acl = "{\"other\":1}";
int timeToLive = null;
bool isOwned = false;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.CreateEntity(entityType, dataJson, acl, timeToLive, isOwned, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
const char *dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"forward\",\"goals\":2,\"assists\":4}";
const char *acl = "{\"other\":1}";
int timeToLive = null;
bool isOwned = false;
<%= data.branding.codePrefix %>->getCustomEntityService()->createEntity(entityType, dataJson, acl, timeToLive, isOwned, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
NSString *dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"forward\",\"goals\":2,\"assists\":4}";
NSString *acl = "{\"other\":1}";
int timeToLive = null;
bool isOwned = false;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] createEntity:entityType
                   dataJson:dataJson
                        acl:acl
                 timeToLive:timeToLive
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil
                    isOwned:isOwned];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String entityType = "athletes";
String dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"forward\",\"goals\":2,\"assists\":4}";
String acl = "{\"other\":1}";
int timeToLive = null;
boolean isOwned = false;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().createEntity(entityType, dataJson, acl, timeToLive, isOwned, this);

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
var entityType = "athletes";
var dataJson = {
  "firstName": "Super",
  "surName": "Star",
  "position": "forward",
  "goals": 2,
  "assists": 4
};
var acl = {
  "other": 1
};
var timeToLive = null;
var isOwned = false;

<%= data.branding.codePrefix %>.customEntity.createEntity(entityType, dataJson, acl, timeToLive, isOwned, result =>
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
var entityType = "athletes";
var dataJson = {
  "firstName": "Super",
  "surName": "Star",
  "position": "forward",
  "goals": 2,
  "assists": 4
};
var acl = {
  "other": 1
};
var timeToLive = null;
var isOwned = false;
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.createEntity(entityType, dataJson, acl, timeToLive, isOwned);
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
	"service": "customEntity",
	"operation": "CREATE_ENTITY",
	"data": {
		"entityType": "athletes",
		"dataJson": {
			"firstName": "Super",
			"surName": "Star",
			"position": "forward",
			"goals": 2,
			"assists": 4
		},
		"acl": {
			"other": 1
		},
		"timeToLive": null
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
    "entityId": "8469e360-0b24-4c87-xxxx-89fd0e3ee436",
    "version": 1,
    "acl": {
      "other": 1
    },
    "ownerId": null,
    "expiresAt": null,
    "timeToLive": null,
    "createdAt": 1573532801958,
    "updatedAt": 1573532801958
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity to create. 
dataJson | The entity's custom field data, as JSON. 
acl | The entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable by others. 
timeToLive | The duration of time, in milliseconds, the custom entity should live before being expired. Null indicates never expires. 
isOwned | Boolean to indicate whether the current user should be recorded as the owner of the object. If owned, the object will be automatically deleted if/when the user is deleted.


