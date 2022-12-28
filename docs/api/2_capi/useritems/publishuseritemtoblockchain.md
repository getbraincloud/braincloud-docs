# PublishUserItemToBlockchain
## Overview
Publishes the specified item to the item management attached blockchain. Results are reported asynchronously via an RTT event.

<PartialServop service_name="userItems" operation_name="PUBLISH_USER_ITEM_TO_BLOCKCHAIN" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string itemId = "aaa-bbb-ccc-ddd";
int version = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UserItemsService.PublishUserItemToBlockchain(itemId, version, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *itemId = "aaa-bbb-ccc-ddd";
int version = 1;
<%= data.branding.codePrefix %>->getUserItemsService()->publishUserItemToBlockchain(itemId, version, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *itemId = @"aaa-bbb-ccc-ddd";
int version = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> userItemsService] publishUserItemToBlockchain:itemId
                    version:version
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String itemId = "aaa-bbb-ccc-ddd";
int version = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getUserItemsService().publishUserItemToBlockchain(itemId, version, this);

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
var itemId = "aaa-bbb-ccc-ddd";
var version = 1;

<%= data.branding.codePrefix %>.userItems.publishUserItemToBlockchain(itemId, version, result =>
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
var itemId = "aaa-bbb-ccc-ddd";
var version = 1;
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.publishUserItemToBlockchain(itemId, version);
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
	"service": "userItems",
	"operation": "PUBLISH_USER_ITEM_TO_BLOCKCHAIN",
	"data": {
		"itemId": "aaa-bbb-ccc-ddd",
		"version": 1
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
itemId | The unique id of the user item. 
version | The version of the user item being published. 


