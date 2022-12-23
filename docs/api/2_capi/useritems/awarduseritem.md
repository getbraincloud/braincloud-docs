# AwardUserItem
## Overview
Allows item(s) to be awarded to a user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.

<PartialServop service_name="userItems" operation_name="AWARD_USER_ITEM" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string defId = "sword001";
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

<%= data.branding.codePrefix %>.UserItemsService.awardUserItem(defId, quantity, includeDef, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *defId = "sword001";
int quantity = 1;
bool includeDef = true;
<%= data.branding.codePrefix %>->getUserItemsService()->awardUserItem(defId, quantity, includeDef, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *idefId = "sword001";
int quantity = 1;
bool includeDef = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> userItemsService] awardUserItem:defId
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
String defId = "sword001";
int quantity = 1;
boolean includeDef = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getUserItemsService().awardUserItem(defId, quantity, includeDef, this);

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
var defId = "sword001";
var quantity = 1;
var includeDef = true;

<%= data.branding.codePrefix %>.userItems.awardUserItem(defId, quantity, includeDef, result =>
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
var defId = "sword001";
var quantity = 1;
var includeDef = true;
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.awardUserItem(defId, quantity, includeDef);
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
		"defId": "sword001",
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
    "items": {
      "d01c70b8-b1a1-457e-ba14-dd52909ffc4a": {
        "itemId": "d01c70b8-b1a1-457e-ba14-dd52909ffc4a",
        "defId": "medal_bronze_1",
        "quantity": 1,
        "usesLeft": null,
        "coolDownStart": -1,
        "recoveryStart": -1,
        "itemData": {
          "exp": 0
        },
        "giftedTo": null,
        "giftedFrom": null,
        "blockId": null,
        "createdAt": 1566847876350,
        "updatedAt": 1566847876350,
        "version": 1,
        "maxUses": null,
        "coolDownUntil": -1,
        "recoveryUntil": -1,
        "itemDef": {
          "defId": "medal_bronze_1",
          "name": "Small Bronze Medal",
          "desc": "",
          "type": "ITEM",
          "category": "collectable",
          "tags": [
            "medal"
          ],
          "buyPrice": {
            "coins": 2000
          },
          "sellPrice": {
            "coins": 200
          },
          "image": "https://api.braincloudservers.com/files/portal/g/00000/metadata/itemDefinitions/medal_bronze_1.png",
          "resourceGroup": null,
          "resourceTag": null,
          "meta": {
            "level": "bronze"
          },
          "pState": "PUBLISHED",
          "publishedAt": 1566584361752,
          "stackable": true,
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
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
defId | The unique id of the item definition to award. 
quantity | The quantity of the item to award. 
includeDef | If true, the associated item definition will be included in the response. 


