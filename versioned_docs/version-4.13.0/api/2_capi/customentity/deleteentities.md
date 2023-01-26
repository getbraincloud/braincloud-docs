# DeleteEntities
## Overview
Deletes all applicable custom entities from the server based on the custom entity type and specified delete criteria, enforcing ownership/ACL permissions.

<PartialServop service_name="customEntity" operation_name="DELETE_ENTITIES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
string deleteCriteria = "{\"entityId\": { \"$in\":[\"aaaa-bbbb-cccc-dddd\", \"ffff-gggg-hhhh-iiii\", \"jjjj-kkkk-llll-mmmm\"]}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.DeleteEntities(entityType, deleteCriteria, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
const char *deleteCriteria = "{\"entityId\": { \"$in\":[\"aaaa-bbbb-cccc-dddd\", \"ffff-gggg-hhhh-iiii\", \"jjjj-kkkk-llll-mmmm\"]}";
<%= data.branding.codePrefix %>->getCustomEntityService()->deleteEntities(entityType, deleteCriteria, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
NSString *deleteCriteria = "{\"entityId\": { \"$in\":[\"aaaa-bbbb-cccc-dddd\", \"ffff-gggg-hhhh-iiii\", \"jjjj-kkkk-llll-mmmm\"]}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] deleteEntities:entityType
			 deleteCriteria:deleteCriteria
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
string deleteCriteria = "{\"entityId\": { \"$in\":[\"aaaa-bbbb-cccc-dddd\", \"ffff-gggg-hhhh-iiii\", \"jjjj-kkkk-llll-mmmm\"]}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().deleteEntities(entityType, deleteCriteria, this);

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
var deleteCriteria = {
    "entityId": { "$in":
        ["aaaa-bbbb-cccc-dddd", "ffff-gggg-hhhh-iiii", "jjjj-kkkk-llll-mmmm"]
    }
};

<%= data.branding.codePrefix %>.customEntity.deleteEntities(entityType, deleteCriteria, result =>
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
var deleteCriteria = {
    "entityId": { "$in":
        ["aaaa-bbbb-cccc-dddd", "ffff-gggg-hhhh-iiii", "jjjj-kkkk-llll-mmmm"]
    }
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.deleteEntities(entityType, deleteCriteria);
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
	"operation": "DELETE_ENTITIES",
	"data": {
		"entityType": "athletes",
		"deleteCriteria": {
			"entityId": { "$in":
				["aaaa-bbbb-cccc-dddd", "ffff-gggg-hhhh-iiii", "jjjj-kkkk-llll-mmmm"]
			}
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
    "deletedCount": 2
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being deleted. 
deleteCriteria | The delete criteria to be applied. 


