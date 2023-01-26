# UpdateSingletonFields
## Overview
Partially updates the data, of the singleton owned by the user for the specified custom entity type, with the specified fields, on the server.

<PartialServop service_name="customEntity" operation_name="UPDATE_SINGLETON_FIELDS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
int version = 1;
string fieldsJson = "{\"goals\":3,\"assists\":5}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.UpdateSingletonFields(entityType, version, fieldsJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
int version = 1;
const char *fieldsJson = "{\"goals\":3,\"assists\":5}";
<%= data.branding.codePrefix %>->getCustomEntityService()->updateSingletonFields(entityType, version, fieldsJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
int version = 1;
NSString *fieldsJson = "{\"goals\":3,\"assists\":5}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] updateSingletonFields:entityType
                    version:version
                 fieldsJson:fieldsJson
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
String fieldsJson = "{\"goals\":3,\"assists\":5}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().updateSingletonFields(entityType, version, fieldsJson, this);

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
var fieldsJson = {
  "goals": 3,
  "assists": 5
};

<%= data.branding.codePrefix %>.customEntity.updateSingletonFields(entityType, version, fieldsJson, result =>
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
var fieldsJson = {
  "goals": 3,
  "assists": 5
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.updateSingletonFields(entityType, version, fieldsJson);
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
	"operation": "UPDATE_SINGLETON_FIELDS",
	"data": {
		"entityType": "athletes",
		"version": 1,
		"fieldsJson": {
			"goals": 3,
			"assists": 5
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
    "version": 2,
    "updatedAt": 1591821018374
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity singleton being updated. Custom entity type must have option isOwned set to true.
version | Version of the custom entity singleton being updated. 
fieldsJson | Specific fields, as JSON, to set within singleton entity's custom data. 


