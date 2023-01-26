# ReadSingleton
## Overview
Reads the custom entity singleton owned by the session's user.

<PartialServop service_name="customEntity" operation_name="READ_SINGLETON" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.ReadSingleton(entityType, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
<%= data.branding.codePrefix %>->getCustomEntityService()->readSingleton(entityType, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] readSingleton:entityType
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
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().readSingleton(entityType, this);

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

<%= data.branding.codePrefix %>.customEntity.readSingleton(entityType, result =>
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
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.readSingleton(entityType);
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
	"operation": "READ_SINGLETON",
	"data": {
		"entityType": "athletes",
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
    "entityId": "12a57791-2600-47dc-ad3c-96a54c461a58",
    "version": 1,
    "acl": {
      "other": 0
    },
    "ownerId": "cde6c0b2-e9e4-40e4-8c8a-91ebba5a2291",
    "expiresAt": null,
    "timeToLive": null,
    "createdAt": 1590264448888,
    "updatedAt": 1591815136870,
    "entityType": "athletes",
    "data": {
        "firstName": "Super", 
        "surName": "Star", 
        "position" : "forward", 
        "goals": 2, 
        "assists": 4 
    },
    "_serverTime": 1637946319239
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being read. Custom entity type must have option isOwned set to true.


