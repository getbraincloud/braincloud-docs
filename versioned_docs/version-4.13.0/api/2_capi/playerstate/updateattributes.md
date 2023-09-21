# UpdateAttributes
## Overview
Update user attributes.

<PartialServop service_name="playerState" operation_name="UPDATE_ATTRIBUTES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string attributes = "{\"key1\":\"value1\",\"key2\":\"value2\"}";
bool wipeExisting = false;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStateService.UpdateAttributes(attributes, wipeExisting, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *attributes = "{\"key1\":\"value1\",\"key2\":\"value2\"}";
bool wipeExisting = false;
<%= data.branding.codePrefix %>->getPlayerStateService()->updateAttributes(attributes, wipeExisting, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *attributes = @"{\"key1\":\"value1\",\"key2\":\"value2\"}";
bool wipeExisting = false;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStateService] updateAttributes:attributes
               wipeExisting:wipeExisting
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String attributes = "{\"key1\":\"value1\",\"key2\":\"value2\"}";
boolean wipeExisting = false;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStateService().updateAttributes(attributes, wipeExisting, this);

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
var attributes = {
    "key1": "value1",
    "key2": "value2"
};
var wipeExisting = false;

<%= data.branding.codePrefix %>.playerState.updateAttributes(attributes, wipeExisting, result =>
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
var attributes = {
    "key1": "value1",
    "key2": "value2"
};
var wipeExisting = false;
var playerStateProxy = bridge.getPlayerStateServiceProxy();

var postResult = playerStateProxy.updateAttributes(attributes, wipeExisting);
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
	"service": "playerState",
	"operation": "UPDATE_ATTRIBUTES",
	"data": {
		"attributes": {
			"key1": "value1",
			"key2": "value2"
		},
		"wipeExisting": false
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
    "status" : 200,
    "data" : null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
jsonAttributes | Single layer JSON string that is a set of key-value pairs
wipeExisting | Whether to wipe existing attributes prior to update.


