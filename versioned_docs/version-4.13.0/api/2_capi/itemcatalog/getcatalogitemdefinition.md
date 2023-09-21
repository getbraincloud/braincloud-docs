# GetCatalogItemDefinition
## Overview
Reads an existing item definition from the server, with language fields limited to the current or default language.

<PartialServop service_name="itemCatalog" operation_name="GET_CATALOG_ITEM_DEFINITION" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string defId = "sword001";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ItemCatalogService.GetCatalogItemDefinition(defId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *defId = "sword001";
<%= data.branding.codePrefix %>->getItemCatalogService()->getCatalogItemDefinition(defId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *defId = @"sword001";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> itemCatalogService] getCatalogItemDefinition:defId
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
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getItemCatalogService().getCatalogItemDefinition(defId, this);

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

<%= data.branding.codePrefix %>.itemCatalog.getCatalogItemDefinition(defId, result =>
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
var itemCatalogProxy = bridge.getItemCatalogServiceProxy();

var postResult = itemCatalogProxy.getCatalogItemDefinition(defId);
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
	"service": "itemCatalog",
	"operation": "GET_CATALOG_ITEM_DEFINITION",
	"data": {
		"defId": "sword001"
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
    "initData": {},
    "pState": "PUBLISHED",
    "publishedAt": 1566850042148,
    "createdAt": 1566849704195,
    "updatedAt": 1566850232538,
    "version": 4,
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
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
defId | The unique id of the item definition. 


