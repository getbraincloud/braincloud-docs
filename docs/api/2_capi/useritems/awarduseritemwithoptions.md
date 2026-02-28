# AwardUserItemWithOptions
Allows item(s) to be awarded to a user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.

<PartialServop service_name="userItems" operation_name="AWARD_USER_ITEM" />

## Method Parameters
Parameter | Description
--------- | -----------
defId | The unique id of the item definition to award.
quantity | The quantity of the item to award.
includeDef | If true, the associated item definition will be included in the response.
optionsJson | Optional support for specifying 'blockIfExceedItemMaxStackable' indicating how to process the award if the defId is for a stackable item with a max stackable quantity and the specified quantity to award is too high. If true and the quantity is too high, the call is blocked and an error is returned. If false (default) and quantity is too high, the quantity is adjusted to the allowed maximum and the quantity not awarded is reported in response key 'itemsNotAwarded' - unless the adjusted quantity would be 0, in which case the call is blocked and an error is returned.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string defId = "sword001";
int quantity = 1;
bool includeDef = True;
string optionsJson = "{\"blockIfExceedItemMaxStackable\": False}";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UseritemsService.AwardUserItemWithOptions(defId, quantity, includeDef, optionsJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *defId = "sword001";
int quantity = 1;
bool includeDef = True;
const char *optionsJson = "{\"blockIfExceedItemMaxStackable\": False}";
<%= data.branding.codePrefix %>.getUseritemsService().awardUserItemWithOptions(defId, quantity, includeDef, optionsJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *defId = @"sword001";
int quantity = 1;
BOOL includeDef = True;
NSString *optionsJson = @"{\"blockIfExceedItemMaxStackable\": False}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> userItemsService] awardUserItemWithOptions:
                        defId:defId
                     quantity:quantity
                   includeDef:includeDef
                  optionsJson:optionsJson
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String defId = "sword001";
int quantity = 1;
bool includeDef = True;
String optionsJson = "{\"blockIfExceedItemMaxStackable\": False}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getUseritemsService.awardUserItemWithOptions(defId, quantity, includeDef, optionsJson, this);

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
var includeDef = True;
var optionsJson = {
    "blockIfExceedItemMaxStackable": false
};
<%= data.branding.codePrefix %>.userItems.awardUserItemWithOptions(defId, quantity, includeDef, optionsJson, result =>
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
var defId = "sword001";
var quantity = 1;
var includeDef = True;
var optionsJson = {
    "blockIfExceedItemMaxStackable": false
};
ServerResponse result = await <%= data.branding.codePrefix %>.userItemsService.awardUserItemWithOptions(defId:defId, quantity:quantity, includeDef:includeDef, optionsJson:optionsJson);

if (result.statusCode == 200) {
    print("Success");    
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local defId = "sword001"
local quantity = 1
local includeDef = True
local optionsJson = {
    blockIfExceedItemMaxStackable = false
}

local callback = function(result)
	if result.statusCode == 200 then
		print("Success")
	else
		print("Failed | " .. tostring(result.status))
	end
end

<%= data.branding.codePrefix %>:getUserItemsService():awardUserItemWithOptions(defId, quantity, includeDef, optionsJson, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var defId = "sword001";
var quantity = 1;
var includeDef = True;
var optionsJson = {
    "blockIfExceedItemMaxStackable": false
};
var userItemsProxy = bridge.getUseritemsServiceProxy();

var postResult = userItemsProxy.awardUserItemWithOptions(defId, quantity, includeDef, optionsJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"userItems",
    "operation":"AWARD_USER_ITEM",
    "data":{
        "defId":"sword001",
        "quantity":1,
        "includeDef":true,
        "optionsJson":{
            "blockIfExceedItemMaxStackable":false
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
        "items": {
            "3f980b72-e9b0-421c-a23b-09f4a297432f": {
                "itemId": "3f980b72-e9b0-421c-a23b-09f4a297432f",
                "defId": "sword001",
                "type": "ITEM",
                "quantity": 1,
                "itemData": {},
                "giftedTo": null,
                "giftedFrom": null,
                "createdAt": 1763999328116,
                "updatedAt": 1763999328116,
                "version": 1,
                "usesLeft": null,
                "coolDownStart": -1,
                "recoveryStart": -1,
                "maxUses": null,
                "coolDownUntil": -1,
                "recoveryUntil": -1,
                "itemDef": {
                    "defId": "sword001",
                    "name": "crimson sword",
                    "desc": "a sword whose blade is forged in...",
                    "type": "ITEM",
                    "category": "sword",
                    "tags": [
                        "sword",
                        "crimson",
                        "pointy"
                    ],
                    "buyPriceDisabled": false,
                    "buyPrice": {
                        "coins": 200
                    },
                    "sellPrice": {
                        "coins": 200
                    },
                    "image": null,
                    "resourceGroup": "equipment.asset",
                    "resourceTag": "sword001",
                    "meta": null,
                    "pState": "PUBLISHED",
                    "publishedAt": 1763999316395,
                    "stackable": true,
                    "maxStackable": null,
                    "tradable": false,
                    "blockchain": false,
                    "consumable": false,
                    "uses": null,
                    "coolDownSecs": 0,
                    "recoverySecs": 0,
                    "activatable": false,
                    "statusName": null,
                    "activeSecs": null,
                    "maxActiveSecs": null,
                    "statusBehaviour": null
                }
            }
        }
    },
    "status": 200
}
```

</details>
