# UpdateUserItemData
## Overview
Updates the item data on the specified user item.

<PartialServop service_name="userItems" operation_name="UPDATE_USER_ITEM_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string itemId = "aaa-bbb-ccc-ddd";
int version = 1;
string newItemData = "{\"condition\":77,\"bonus\":1}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UserItemsService.UpdateUserItemData(itemId, version, newItemData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *itemId = "aaa-bbb-ccc-ddd";
int version = 1;
const char *newItemData = "{\"condition\":77,\"bonus\":1}";
<%= data.branding.codePrefix %>->getUserItemsService()->updateUserItemData(itemId, version, newItemData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *itemId = @"aaa-bbb-ccc-ddd";
int version = 1;
NSString *newItemData = "{\"condition\":77,\"bonus\":1}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> userItemsService] updateUserItemData:itemId
                    version:version
                newItemData:newItemData
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
String newItemData = "{\"condition\":77,\"bonus\":1}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getUserItemsService().updateUserItemData(itemId, version, newItemData, this);

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
var newItemData = {
  "condition": 77,
  "bonus": 1
};

<%= data.branding.codePrefix %>.userItems.updateUserItemData(itemId, version, newItemData, result =>
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
var newItemData = {
  "condition": 77,
  "bonus": 1
};
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.updateUserItemData(itemId, version, newItemData);
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
	"operation": "UPDATE_USER_ITEM_DATA",
	"data": {
		"itemId": "aaa-bbb-ccc-ddd",
		"version": 1,
		"newItemData": {
			"condition": 77,
			"bonus": 1
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
    "item": {
      "itemId": "bf74cc8a-3987-4bf7-8e35-683917e14ab8",
      "defId": "medal_bronze_1",
      "quantity": 1,
      "usesLeft": null,
      "coolDownStart": -1,
      "recoveryStart": -1,
      "itemData": {
        "condition": 77,
        "bonus": 1
      },
      "giftedTo": null,
      "giftedFrom": null,
      "blockId": null,
      "createdAt": 1566851160771,
      "updatedAt": 1566851174886,
      "version": 2,
      "maxUses": null,
      "coolDownUntil": -1,
      "recoveryUntil": -1,
      "itemDef": {}
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
itemId | The unique id of the user item. 
version | The version of the user item being updated. 
newItemData | New item data to replace existing user item data. 


