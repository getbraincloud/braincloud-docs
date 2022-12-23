# GiveUserItemTo
## Overview
Gifts item to the specified player.

<PartialServop service_name="userItems" operation_name="GIVE_USER_ITEM_TO" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string profileId = "a-user-profileId";
string itemId = "aaa-bbb-ccc-ddd";
int version = 1;
int quantity = 1;
bool immediate = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UserItemsService.GiveUserItemTo(profileId, itemId, version, quantity, immediate, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *profileId = "a-user-profileId";
const char *itemId = "aaa-bbb-ccc-ddd";
int version = 1;
int quantity = 1;
bool immediate = true;
<%= data.branding.codePrefix %>->getUserItemsService()->giveUserItemTo(profileId, itemId, version, quantity, immediate, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *profileId = @"a-user-profileId";
NSString *itemId = @"aaa-bbb-ccc-ddd";
int version = 1;
int quantity = 1;
bool immediate = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> userItemsService] giveUserItemTo:profileId
                     itemId:itemId
                    version:version
                   quantity:quantity
                  immediate:immediate
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
int version = 1;
int quantity = 1;
boolean immediate = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getUserItemsService().giveUserItemTo(profileId, itemId, version, quantity, immediate, this);

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
var version = 1;
var quantity = 1;
var immediate = true;

<%= data.branding.codePrefix %>.userItems.giveUserItemTo(profileId, itemId, version, quantity, immediate, result =>
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
var version = 1;
var quantity = 1;
var immediate = true;
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.giveUserItemTo(profileId, itemId, version, quantity, immediate);
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
	"operation": "GIVE_USER_ITEM_TO",
	"data": {
		"profileId": "a-user-profileId",
		"itemId": "aaa-bbb-ccc-ddd",
		"version": 1,
		"quantity": 1,
		"immediate": true
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
      "itemId": "2f100f95-60cd-436e-b973-e33cbc6b3728",
      "defId": "medal_bronze_2",
      "quantity": 1,
      "usesLeft": null,
      "coolDownStart": -1,
      "recoveryStart": -1,
      "itemData": {},
      "giftedTo": "74516a07-4d56-4f0a-82b9-df941d451318",
      "giftedFrom": "8ce6e475-35a9-42f6-ba08-206bd07650ca",
      "blockId": null,
      "createdAt": 1566849320462,
      "updatedAt": 1566849606132,
      "version": 2,
      "maxUses": null,
      "coolDownUntil": -1,
      "recoveryUntil": -1,
      "itemDef": {}
    },
    "giftItemId": "b303c738-82bd-4ab2-9688-544d45104a85"
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | The ID of the recipient's user profile. 
itemId | The ID uniquely identifying the user item to be transferred. 
version | The version of the user item being transferred. 
quantity | The quantity of the user item to transfer. 
immediate | Flag set to true if item is to be immediately transferred, otherwise false to have the sender sents an event and transfers item(s) only when recipient calls receiveUserItemFrom. 


