# UpdateSingleton
## Overview
Updates the singleton owned by the user for the specified custom entity type on the server, creating the singleton if it does not exist. This operation results in the owned singleton's data being completely replaced by the passed in JSON object.

<PartialServop service_name="customEntity" operation_name="UPDATE_SINGLETON" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
int version = 1;
string dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"defense\",\"goals\":3,\"assists\":5}";
string acl = "{\"other\":1}";
int timeToLive = null;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.UpdateSingleton(entityType, version, dataJson, acl, timeToLive, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
int version = 1;
const char *dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"defense\",\"goals\":3,\"assists\":5}";
const char *acl = "{\"other\":1}";
int timeToLive = null;
<%= data.branding.codePrefix %>->getCustomEntityService()->updateSingleton(entityType, version, dataJson, acl, timeToLive, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
int version = 1;
NSString *dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"defense\",\"goals\":3,\"assists\":5}";
NSString *acl = "{\"other\":1}";
int timeToLive = null;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] updateSingleton:entityType
                    version:version
                   dataJson:dataJson
                        acl:acl
                 timeToLive:timeToLive
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String entityType = "athletes";
int version = 1;
String dataJson = "{\"firstName\":\"Super\",\"surName\":\"Star\",\"position\":\"defense\",\"goals\":3,\"assists\":5}";
String acl = "{\"other\":1}";
int timeToLive = null;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().updateSingleton(entityType, version, dataJson, acl, timeToLive, this);

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
var version = 1;
var dataJson = {
  "firstName": "Super",
  "surName": "Star",
  "position": "forward",
  "goals": 3,
  "assists": 5
};
var acl = {
  "other": 1
};
var timeToLive = null;

<%= data.branding.codePrefix %>.customEntity.updateSingleton(entityType, version, dataJson, acl, timeToLive, result =>
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
var version = 1;
var dataJson = {
  "firstName": "Super",
  "surName": "Star",
  "position": "defense",
  "goals": 3,
  "assists": 5
};
var acl = {
  "other": 1
};
var timeToLive = null;
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.updateSingleton(entityType, version, dataJson, acl, timeToLive);
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
	"operation": "UPDATE_SINGLETON",
	"data": {
		"entityType": "athletes",
		"version": 1,
		"dataJson": {
			"firstName": "Super",
			"surName": "Star",
			"position": "defense",
			"goals": 3,
			"assists": 5
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
  "data": {
    "timeToLive": null,
    "version": 2,
    "expiresAt": null,
    "updatedAt": 1591820239028
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity singleton to create/update. Custom entity type must have option isOwned set to true. 
version | Version of the custom entity singleton being updated. 
dataJson | The singleton entity's custom field data, as JSON.
acl | The singleton entity's Access Control List as an object. A null ACL implies default permissions which make the entity readable by others.
timeToLive | The duration of time, in milliseconds, the singleton custom entity should live before being expired. Null indicates never expires. Value of -1 indicates no change for updates.


