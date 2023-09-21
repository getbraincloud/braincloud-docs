# GetCatalogItemsPage
## Overview
Retrieves page of catalog items from the server, with language fields limited to the text for the current or default language.

<PartialServop service_name="itemCatalog" operation_name="GET_CATALOG_ITEMS_PAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"category\":\"sword\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.ItemCatalogService.GetCatalogItemsPage(context, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"category\":\"sword\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
<%= data.branding.codePrefix %>->getItemCatalogService()->getCatalogItemsPage(context, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"category\":\"sword\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> itemCatalogService] getCatalogItemsPage:context
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"category\":\"sword\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getItemCatalogService().getCatalogItemsPage(context, this);

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
var context = {
  "pagination": {
    "rowsPerPage": 50,
    "pageNumber": 1
  },
  "searchCriteria": {
    "category": "sword"
  },
  "sortCriteria": {
    "createdAt": 1,
    "updatedAt": -1
  }
};

<%= data.branding.codePrefix %>.itemCatalog.getCatalogItemsPage(context, result =>
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
var context = {
  "pagination": {
    "rowsPerPage": 50,
    "pageNumber": 1
  },
  "searchCriteria": {
    "category": "sword"
  },
  "sortCriteria": {
    "createdAt": 1,
    "updatedAt": -1
  }
};
var itemCatalogProxy = bridge.getItemCatalogServiceProxy();

var postResult = itemCatalogProxy.getCatalogItemsPage(context);
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
	"operation": "GET_CATALOG_ITEMS_PAGE",
	"data": {
		"context": {
			"pagination": {
				"rowsPerPage": 50,
				"pageNumber": 1
			},
			"searchCriteria": {
				"category": "sword"
			},
			"sortCriteria": {
				"createdAt": 1,
				"updatedAt": -1
			}
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
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzQwMyJ9LCJzb3J0Q3JpdGVyaWEiOnsiY3JlYXRlZEF0IjoxLCJ1cGRhdGVkQXQiOi0xfSwicGFnaW5hdGlvbiI6eyJyb3dzUGVyUGFnZSI6MSwicGFnZU51bWJlciI6MSwiZG9Db3VudCI6dHJ1ZX0sIm9wdGlvbnMiOm51bGx9",
    "results": {
      "count": 7,
      "page": 1,
      "items": [
        {
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
          "image": "https://api.braincloudservers.com/files/portal/g/23403/metadata/itemDefinitions/medal_bronze_1.png",
          "resourceGroup": null,
          "resourceTag": null,
          "meta": {
            "level": "bronze"
          },
          "initData": {
            "exp": 0
          },
          "pState": "PUBLISHED",
          "publishedAt": 1566584361752,
          "createdAt": 1566584032523,
          "updatedAt": 1566584437921,
          "version": 4,
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
      ],
      "moreAfter": true,
      "moreBefore": false
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | The json context for the page request. 


