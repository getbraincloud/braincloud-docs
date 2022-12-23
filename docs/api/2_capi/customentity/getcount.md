# GetCount
## Overview
Counts the number of custom entities meeting the specified where clause.

<PartialServop service_name="customEntity" operation_name="GET_COUNT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
string whereJson = "{\"data.position\":\"defense\"}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.GetCount(entityType, whereJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
const char *whereJson = "{\"data.position\":\"defense\"}";
<%= data.branding.codePrefix %>->getCustomEntityService()->getCount(entityType, whereJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
NSString *whereJson = "{\"data.position\":\"defense\"}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] getCount:entityType
                  whereJson:whereJson
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
String whereJson = "{\"data.position\":\"defense\"}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().getCount(entityType, whereJson, this);

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
var whereJson = {
  "data.position": "defense"
};

<%= data.branding.codePrefix %>.customEntity.getCount(entityType, whereJson, result =>
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
var whereJson = {
  "data.position": "defense"
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.getCount(entityType, whereJson);
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
	"operation": "GET_COUNT",
	"data": {
		"entityType": "athletes",
		"whereJson": {
			"data.position": "defense"
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
	"status": 200
	"data": {
    	"entityListCount": 5
  	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity to be counted. 
whereJson | The where clause, as JSON object. 


