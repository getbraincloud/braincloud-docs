# DropUserItem
## Overview
Allows a quantity of a specified user item to be dropped, without any recovery of the money paid for the item. If any quantity of the user item remains, it will be returned, potentially with the associated itemDef (with language fields limited to the current or default language).

<PartialServop service_name="userItems" operation_name="DROP_USER_ITEM" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string itemId = "aaa-bbb-ccc-ddd";
int quantity = 1;
bool includeDef = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UserItemsService.DropUserItem(itemId, quantity, includeDef, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *itemId = "aaa-bbb-ccc-ddd";
int quantity = 1;
bool includeDef = true;
<%= data.branding.codePrefix %>->getUserItemsService()->dropUserItem(itemId, quantity, includeDef, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *itemId = @"aaa-bbb-ccc-ddd";
int quantity = 1;
bool includeDef = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> userItemsService] dropUserItem:itemId
                   quantity:quantity
                 includeDef:includeDef
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
int quantity = 1;
boolean includeDef = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getUserItemsService().dropUserItem(itemId, quantity, includeDef, this);

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
var quantity = 1;
var includeDef = true;

<%= data.branding.codePrefix %>.userItems.dropUserItem(itemId, quantity, includeDef, result =>
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
var quantity = 1;
var includeDef = true;
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.dropUserItem(itemId, quantity, includeDef);
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
	"operation": "DROP_USER_ITEM",
	"data": {
		"itemId": "aaa-bbb-ccc-ddd",
		"quantity": 1,
		"includeDef": true
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
    "item": {}
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
itemId | The unique id of the user item. 
quantity | The quantity of the user item to drop. 
includeDef | If true and any quantity of the user item remains, the associated item definition will be included in the response. 


