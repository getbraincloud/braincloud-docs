# GetUserItem
## Overview
Retrieves the identified user item from the server. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.

<PartialServop service_name="userItems" operation_name="GET_USER_ITEM" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string itemId = "aaa-bbb-ccc-ddd";
bool includeDef = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UserItemsService.GetUserItem(itemId, includeDef, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *itemId = "aaa-bbb-ccc-ddd";
bool includeDef = true;
<%= data.branding.codePrefix %>->getUserItemsService()->getUserItem(itemId, includeDef, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *itemId = @"aaa-bbb-ccc-ddd";
bool includeDef = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> userItemsService] getUserItem:itemId
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
boolean includeDef = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getUserItemsService().getUserItem(itemId, includeDef, this);

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
var includeDef = true;

<%= data.branding.codePrefix %>.userItems.getUserItem(itemId, includeDef, result =>
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
var includeDef = true;
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.getUserItem(itemId, includeDef);
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
	"operation": "GET_USER_ITEM",
	"data": {
		"itemId": "aaa-bbb-ccc-ddd",
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
    "item": {
      "itemId": "2f100f95-60cd-436e-b973-e33cbc6b3728",
      "defId": "medal_bronze_2",
      "quantity": 1,
      "usesLeft": null,
      "coolDownStart": -1,
      "recoveryStart": -1,
      "itemData": {},
      "giftedTo": null,
      "giftedFrom": null,
      "blockId": null,
      "createdAt": 1566849320462,
      "updatedAt": 1566849320462,
      "version": 1,
      "maxUses": null,
      "coolDownUntil": -1,
      "recoveryUntil": -1,
      "itemDef": {
        "defId": "medal_bronze_2",
        "name": "Medium Bronze Medal",
        "desc": "",
        "type": "ITEM",
        "category": "collectable",
        "tags": [
          "medal"
        ],
        "buyPrice": {},
        "sellPrice": {},
        "image": null,
        "resourceGroup": null,
        "resourceTag": null,
        "meta": {},
        "pState": "PUBLISHED",
        "publishedAt": 1566585957049,
        "stackable": false,
        "consumable": false,
        "uses": null,
        "coolDownSecs": 0,
        "recoverySecs": 0,
        "activatable": false,
        "statusName": null,
        "activeSecs": null,
        "tradable": false,
        "blockchain": false,
        "blockchainDefId": null
      }
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
includeDef | If true, the associated item definition will be included in the response. 


