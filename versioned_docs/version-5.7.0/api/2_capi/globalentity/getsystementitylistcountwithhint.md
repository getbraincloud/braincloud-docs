# GetSystemEntityListCountWithHint
Get a count of system entities from the server base on where clause and hinting on index hint. Where clause allows entityType, createdAt, updatedAt, data items.

<PartialServop service_name="globalEntity" operation_name="GET_SYSTEM_ENTITY_LIST_COUNT_WITH_HINT" />

## Method Parameters
Parameter | Description
--------- | -----------
where | A mongo style query string.
hintJson | The field index keys to be hinted, as JSON object.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string where = "{\"data.team\": \"Red\", \"data.position\": \"Forward\"}";
string hintJson = "{\"data.team\": 1, \"data.position\": 1}";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalentityService.GetSystemEntityListCountWithHint(where, hintJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *where = "{\"data.team\": \"Red\", \"data.position\": \"Forward\"}";
const char *hintJson = "{\"data.team\": 1, \"data.position\": 1}";
<%= data.branding.codePrefix %>.getGlobalentityService().getSystemEntityListCountWithHint(where, hintJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *where = @"{\"data.team\": \"Red\", \"data.position\": \"Forward\"}";
NSString *hintJson = @"{\"data.team\": 1, \"data.position\": 1}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> globalEntityService] GetSystemEntityListCountWithHint:
                        where:where
                     hintJson:hintJson
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String where = "{\"data.team\": \"Red\", \"data.position\": \"Forward\"}";
String hintJson = "{\"data.team\": 1, \"data.position\": 1}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getGlobalentityService.GetSystemEntityListCountWithHint(where, hintJson, this);

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
var where = {
    "data.team": "Red",
    "data.position": "Forward"
};
var hintJson = {
    "data.team": 1,
    "data.position": 1
};
<%= data.branding.codePrefix %>.globalEntity.GetSystemEntityListCountWithHint(where, hintJson, result =>
{
  var status = result.status;
  console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  where = {
    "data.team": "Red",
    "data.position": "Forward"
};
var  hintJson = {
    "data.team": 1,
    "data.position": 1
};

ServerResponse result = await <%= data.branding.codePrefix %>.globalEntityService.GetSystemEntityListCountWithHint(where:where, hintJson:hintJson);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var where = {
    "data.team": "Red",
    "data.position": "Forward"
};
var hintJson = {
    "data.team": 1,
    "data.position": 1
};
var globalEntityProxy = bridge.getGlobalentityServiceProxy();

var postResult = globalEntityProxy.GetSystemEntityListCountWithHint(where, hintJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"globalEntity",
    "operation":"GET_SYSTEM_ENTITY_LIST_COUNT_WITH_HINT",
    "data":{
        "where":{
            "data.team":"Red",
            "data.position":"Forward"
        },
        "hintJson":{
            "data.team":1,
            "data.position":1
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
    "status":200,
    "data":
    {
        "entityListCount":5
    }
}
```

</details>

