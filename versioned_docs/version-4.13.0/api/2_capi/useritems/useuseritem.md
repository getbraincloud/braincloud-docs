# UseUserItem
## Overview
Uses the specified item, potentially consuming it.

<PartialServop service_name="userItems" operation_name="USE_USER_ITEM" / >

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
bool includeDef = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UserItemsService.UseUserItem(itemId, version, newItemData, includeDef, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *itemId = "aaa-bbb-ccc-ddd";
int version = 1;
const char *newItemData = "{\"condition\":77,\"bonus\":1}";
bool includeDef = true;
<%= data.branding.codePrefix %>->getUserItemsService()->useUserItem(itemId, version, newItemData, includeDef, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *itemId = @"aaa-bbb-ccc-ddd";
int version = 1;
NSString *newItemData = "{\"condition\":77,\"bonus\":1}";
bool includeDef = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> userItemsService] useUserItem:itemId
                    version:version
                newItemData:newItemData
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
int version = 1;
String newItemData = "{\"condition\":77,\"bonus\":1}";
boolean includeDef = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getUserItemsService().useUserItem(itemId, version, newItemData, includeDef, this);

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
var includeDef = true;

<%= data.branding.codePrefix %>.userItems.useUserItem(itemId, version, newItemData, includeDef, result =>
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
var includeDef = true;
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.useUserItem(itemId, version, newItemData, includeDef);
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
	"operation": "USE_USER_ITEM",
	"data": {
		"itemId": "aaa-bbb-ccc-ddd",
		"version": 1,
		"newItemData": {
			"condition": 77,
			"bonus": 1
		},
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
    "used": true,
    "statusEffects": {
      "activeStart": 1566851245914,
      "statusName": "boosted",
      "details": {},
      "activeUntil": 1567751245914
    },
    "item": {
      "itemId": "6ff179ce-6689-4fad-9d97-f94df35ea287",
      "defId": "boost_rapidfire",
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
      "createdAt": 1566851211540,
      "updatedAt": 1566851245917,
      "version": 2,
      "maxUses": null,
      "coolDownUntil": -1,
      "recoveryUntil": -1,
      "itemDef": {
        "defId": "boost_rapidfire",
        "name": "Rapid Fire",
        "desc": "Rapid fire for the next match.",
        "type": "ITEM",
        "category": "boost",
        "tags": null,
        "buyPrice": {
          "coins": 200
        },
        "sellPrice": {
          "coins": 400
        },
        "image": null,
        "resourceGroup": null,
        "resourceTag": null,
        "meta": {},
        "pState": "PUBLISHED",
        "publishedAt": 1566850042148,
        "stackable": false,
        "consumable": false,
        "uses": null,
        "coolDownSecs": 0,
        "recoverySecs": 0,
        "activatable": true,
        "statusName": "boosted",
        "activeSecs": 900000,
        "tradable": true,
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
version | The version of the user item being used. 
newItemData | Optional item data to replace existing user item data. Specify null to leave item data unchanged. Specify empty map to clear item data. 
includeDef | If true, the associated item definition will be included in the response. 


