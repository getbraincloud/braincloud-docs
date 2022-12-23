# ReceiveUserItemFrom
## Overview
Retrieves and transfers the gift item from the specified player, who must have previously called giveUserItemTo.

<PartialServop service_name="userItems" operation_name="RECEIVE_USER_ITEM_FROM" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string profileId = "a-user-profileId";
string itemId = "aaa-bbb-ccc-ddd";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UserItemsService.ReceiveUserItemFrom(profileId, itemId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *profileId = "a-user-profileId";
const char *itemId = "aaa-bbb-ccc-ddd";
<%= data.branding.codePrefix %>->getUserItemsService()->receiveUserItemFrom(profileId, itemId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *profileId = @"a-user-profileId";
NSString *itemId = @"aaa-bbb-ccc-ddd";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> userItemsService] receiveUserItemFrom:profileId
                     itemId:itemId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String profileId = "a-user-profileId";
String itemId = "aaa-bbb-ccc-ddd";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getUserItemsService().receiveUserItemFrom(profileId, itemId, this);

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
var profileId = "a-user-profileId";
var itemId = "aaa-bbb-ccc-ddd";

<%= data.branding.codePrefix %>.userItems.receiveUserItemFrom(profileId, itemId, result =>
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
var profileId = "a-user-profileId";
var itemId = "aaa-bbb-ccc-ddd";
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.receiveUserItemFrom(profileId, itemId);
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
	"operation": "RECEIVE_USER_ITEM_FROM",
	"data": {
		"profileId": "a-user-profileId",
		"itemId": "aaa-bbb-ccc-ddd"
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
      "itemId": "692ac167-ed6a-4539-9513-c7149d7166c2",
      "defId": "boost_rapidfire",
      "quantity": 1,
      "usesLeft": null,
      "coolDownStart": -1,
      "recoveryStart": -1,
      "itemData": {},
      "giftedTo": null,
      "giftedFrom": null,
      "blockId": null,
      "createdAt": 1566852144140,
      "updatedAt": 1566852144140,
      "version": 1,
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
profileId | The profile ID of the user who is giving the item. 
itemId | The ID uniquely identifying the user item to be transferred. 


