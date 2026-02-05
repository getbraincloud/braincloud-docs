# OpenBundle
Allows a quantity of a specified bundle user item to be opened. Response indicates any items and currency awards configured for the associated bundle user item's BUNDLE type item definition, plus any 'items' awarded and any 'currencies' awarded, along with the resulting currency balances. If includeItemDef is true, the associated item definition will be included in the response for any user items awarded and for the bundle user item being opened (if any quantity of the bundle user item remains), with language fields limited to the current or default language.

<PartialServop service_name="userItems" operation_name="OPEN_BUNDLE" />

## Method Parameters
Parameter | Description
--------- | -----------
itemId | The unique id of the bundle user item.
version | The version of the bundle user item being sold. Accepts -1 if any version.
quantity | The quantity of the bundle user item to open.
includeDef | If true, the associated item definition will be included in the response for any user items awarded and if any quantity of the bundle user item remains.
optionsJson | Optional support for specifying 'blockIfExceedItemMaxStackable' indicating how to process awarding the bundle content items if the defId for any is for a stackable item with a max stackable quantity and the specified quantity to be awarded is too high. If true and the quantity is too high, the call is blocked and an error is returned. If false (default) and quantity is too high, the quantity is adjusted to the allowed maximum and the quantity not awarded is reported in response key 'itemsNotAwarded' - unless the adjusted quantity would be 0, in which case the call is blocked and an error is returned.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string itemId = "aaa-bbb-ccc-ddd";
int version = 1;
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

<%= data.branding.codePrefix %>.UseritemsService.OpenBundle(itemId, version, quantity, includeDef, optionsJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *itemId = "aaa-bbb-ccc-ddd";
int version = 1;
int quantity = 1;
bool includeDef = True;
const char *optionsJson = "{\"blockIfExceedItemMaxStackable\": False}";
<%= data.branding.codePrefix %>.getUseritemsService().openBundle(itemId, version, quantity, includeDef, optionsJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *itemId = @"aaa-bbb-ccc-ddd";
int version = 1;
int quantity = 1;
BOOL includeDef = True;
NSString *optionsJson = @"{\"blockIfExceedItemMaxStackable\": False}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> userItemsService] openBundle:
                       itemId:itemId
                      version:version
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
String itemId = "aaa-bbb-ccc-ddd";
int version = 1;
int quantity = 1;
bool includeDef = True;
String optionsJson = "{\"blockIfExceedItemMaxStackable\": False}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getUseritemsService.openBundle(itemId, version, quantity, includeDef, optionsJson, this);

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
var quantity = 1;
var includeDef = True;
var optionsJson = {
    "blockIfExceedItemMaxStackable": false
};
<%= data.branding.codePrefix %>.userItems.openBundle(itemId, version, quantity, includeDef, optionsJson, result =>
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
var itemId = "aaa-bbb-ccc-ddd";
var version = 1;
var quantity = 1;
var includeDef = True;
var optionsJson = {
    "blockIfExceedItemMaxStackable": false
};
ServerResponse result = await <%= data.branding.codePrefix %>.userItemsService.openBundle(itemId:itemId, version:version, quantity:quantity, includeDef:includeDef, optionsJson:optionsJson);

if (result.statusCode == 200) {
    print("Success");    
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var itemId = "aaa-bbb-ccc-ddd";
var version = 1;
var quantity = 1;
var includeDef = True;
var optionsJson = {
    "blockIfExceedItemMaxStackable": false
};
var userItemsProxy = bridge.getUseritemsServiceProxy();

var postResult = userItemsProxy.openBundle(itemId, version, quantity, includeDef, optionsJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"userItems",
    "operation":"OPEN_BUNDLE",
    "data":{
        "itemId":"aaa-bbb-ccc-ddd",
        "version":1,
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
        "quantity": 1,
        "itemsNotAwarded": {
            "s001": 6,
            "sword001": 8
        },
        "itemDef": {
            "defId": "s001b",
            "name": "s001b",
            "desc": "desp",
            "type": "BUNDLE",
            "category": "weapon",
            "tags": [
                "sword"
            ],
            "buyPriceDisabled": false,
            "buyPrice": {},
            "sellPrice": {},
            "image": null,
            "resourceGroup": null,
            "resourceTag": null,
            "meta": null,
            "pState": "PUBLISHED",
            "publishedAt": 1764001437452,
            "stackable": false,
            "maxStackable": null,
            "tradable": false,
            "blockchain": false,
            "autoOpen": false,
            "items": {
                "s001": {
                    "defId": "s001",
                    "quantity": 1
                },
                "sword001": {
                    "defId": "sword001",
                    "quantity": 1
                }
            }
        },
        "items": {}
    },
    "status": 200
}
```

</details>
