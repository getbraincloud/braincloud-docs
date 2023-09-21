# ReadSelectedProperties
## Overview
Read all the global properties of the app identified by the property names provided in parameter.

<PartialServop service_name="globalApp" operation_name="READ_SELECTED_PROPERTIES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] propertyNames = { "pName1", "pName2" };

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalAppService.ReadSelectedProperties(propertyNames, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> propertyNames;
propertyNames.push_back("pName1");
propertyNames.push_back("pName2");
<%= data.branding.codePrefix %>->getGlobalAppService()->readSelectedProperties(propertyNames, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *propertyNames = @[ @"pName1", @"pName2" ];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalAppService] readSelectedProperties:propertyNames
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String[] propertyNames = { "pName1", "pName2" };
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalAppService().readSelectedProperties(propertyNames, this);

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
var propertyNames = [ "pName1", "pName2" ];
<%= data.branding.codePrefix %>.globalApp.readSelectedProperties(propertyNames, result =>
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
var propertyNames = [ "pName1", "pName2" ];
var globalAppProxy = bridge.getGlobalAppServiceProxy();

var postResult = globalAppProxy.readSelectedProperties(propertyNames);
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
	"service": "globalApp",
	"operation": "READ_SELECTED_PROPERTIES",
	"data": {
        "propertyNames": ["comma separated property names"]
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
    "status":200,
    "data":{
        "pName1": {
            "name": "pName1",
            "value": "value1"
        },
        "pName2": {
            "name": "pName2",
            "value": "value2"
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
propertyNames | List of property names identifying the global properties to return.


