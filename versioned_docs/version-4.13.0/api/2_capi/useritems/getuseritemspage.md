# GetUserItemsPage
## Overview
Retrieves the page of user's inventory from the server based on the context. If includeDef is true, response includes associated itemDef with each user item, with language fields limited to the current or default language.

<PartialServop service_name="userItems" operation_name="GET_USER_ITEMS_PAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"defId\":\"sword001\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
bool includeDef = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.UserItemsService.GetUserItemsPage(context, includeDef, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"defId\":\"sword001\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
bool includeDef = true;
<%= data.branding.codePrefix %>->getUserItemsService()->getUserItemsPage(context, includeDef, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"defId\":\"sword001\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
bool includeDef = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> userItemsService] getUserItemsPage:context
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
String context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"defId\":\"sword001\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
boolean includeDef = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getUserItemsService().getUserItemsPage(context, includeDef, this);

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
    "defId": "sword001"
  },
  "sortCriteria": {
    "createdAt": 1,
    "updatedAt": -1
  }
};
var includeDef = true;

<%= data.branding.codePrefix %>.userItems.getUserItemsPage(context, includeDef, result =>
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
    "defId": "sword001"
  },
  "sortCriteria": {
    "createdAt": 1,
    "updatedAt": -1
  }
};
var includeDef = true;
var userItemsProxy = bridge.getUserItemsServiceProxy();

var postResult = userItemsProxy.getUserItemsPage(context, includeDef);
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
	"operation": "GET_USER_ITEMS_PAGE",
	"data": {
		"context": {
			"pagination": {
				"rowsPerPage": 50,
				"pageNumber": 1
			},
			"searchCriteria": {
				"defId": "sword001"
			},
			"sortCriteria": {
				"createdAt": 1,
				"updatedAt": -1
			}
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
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzQwMyIsInBsYXllcklkIjoiOGNlNmU0NzUtMzVhOS00MmY2LWJhMDgtMjA2YmQwNzY1MGNhIiwiZ2lmdGVkVG8iOm51bGx9LCJzb3J0Q3JpdGVyaWEiOnsiY3JlYXRlZEF0IjoxLCJ1cGRhdGVkQXQiOi0xfSwicGFnaW5hdGlvbiI6eyJyb3dzUGVyUGFnZSI6NTAsInBhZ2VOdW1iZXIiOjF9LCJvcHRpb25zIjpudWxsfQ",
    "results": {
      "count": 1,
      "page": 1,
      "items": [
        {
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
      ],
      "moreAfter": false,
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
includeDef | If true, the associated item definition will be included in the response. 


