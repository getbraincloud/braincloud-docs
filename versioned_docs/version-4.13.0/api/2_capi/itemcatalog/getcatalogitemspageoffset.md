# GetCatalogItemsPageOffset
## Overview
Gets the page of catalog items from the server based on the encoded context and specified page offset, with language fields limited to the text for the current or default language.

<PartialServop service_name="itemCatalog" operation_name="GET_CATALOG_ITEMS_PAGE_OFFSET" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string context = "\"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0\"";
int pageOffset = 1;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ItemCatalogService.GetCatalogItemsPageOffset(context, pageOffset, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *context = "\"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0\"";
int pageOffset = 1;
<%= data.branding.codePrefix %>->getItemCatalogService()->getCatalogItemsPageOffset(context, pageOffset, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *context = "\"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0\"";
int pageOffset = 1;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> itemCatalogService] getCatalogItemsPageOffset:context
                 pageOffset:pageOffset
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String context = "\"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0\"";
int pageOffset = 1;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getItemCatalogService().getCatalogItemsPageOffset(context, pageOffset, this);

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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;

<%= data.branding.codePrefix %>.itemCatalog.getCatalogItemsPageOffset(context, pageOffset, result =>
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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;
var itemCatalogProxy = bridge.getItemCatalogServiceProxy();

var postResult = itemCatalogProxy.getCatalogItemsPageOffset(context, pageOffset);
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
	"operation": "GET_CATALOG_ITEMS_PAGE_OFFSET",
	"data": {
		"context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0",
		"pageOffset": 1
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
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzQwMyJ9LCJzb3J0Q3JpdGVyaWEiOnsiY3JlYXRlZEF0IjoxLCJ1cGRhdGVkQXQiOi0xfSwicGFnaW5hdGlvbiI6eyJyb3dzUGVyUGFnZSI6MSwicGFnZU51bWJlciI6MiwiZG9Db3VudCI6dHJ1ZX0sIm9wdGlvbnMiOm51bGx9",
    "results": {
      "count": 7,
      "page": 2,
      "items": [
        {
          "gameId": "23403",
          "defId": "medal_bronze_2",
          "name": {
            "en": "Medium Bronze Medal"
          },
          "desc": {
            "en": ""
          },
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
          "initData": {},
          "pState": "PUBLISHED",
          "publishedAt": 1566585957049,
          "createdAt": 1566585954652,
          "updatedAt": 1566585957049,
          "version": 2,
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
      ],
      "moreAfter": true,
      "moreBefore": true
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The context string returned from the server from a previous call to GetCatalogItemsPage or GetCatalogItemsPageOffset. 
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point. 


