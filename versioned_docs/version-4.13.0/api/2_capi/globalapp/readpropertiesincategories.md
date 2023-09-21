# ReadPropertiesInCategories
## Overview
Read all the global properties of the app that exist in any of the categories provided.

<PartialServop service_name="globalApp" operation_name="READ_PROPERTIES_IN_CATEGORIES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string[] categories = { "cName1", "cName2" };

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalAppService.ReadPropertiesInCategories(categories, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<std::string> categories;
categories.push_back("cName1");
categories.push_back("cName2");
<%= data.branding.codePrefix %>->getGlobalAppService()->readPropertiesInCategories(categories, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray *categories = @[ @"cName1", @"cName2" ];
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalAppService] readPropertiesInCategories:categories
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String[] categories = { "cName1", "cName2" };
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalAppService().readPropertiesInCategories(categories, this);

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
var categories = [ "cName1", "cName2" ];
<%= data.branding.codePrefix %>.globalApp.readPropertiesInCategories(categories, result =>
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
var categories = [ "cName1", "cName2" ];
var globalAppProxy = bridge.getGlobalAppServiceProxy();

var postResult = globalAppProxy.readPropertiesInCategories(categories);
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
	"operation": "READ_PROPERTIES_IN_CATEGORIES",
	"data": {
        "categories": ["comma separated category strings"]
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
categories | List of categories to retrieve the global properties.


