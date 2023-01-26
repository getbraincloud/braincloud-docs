# GetEntityPage
## Overview
Retrieves the first page of custom entities from the server based on the custom entity type and specified query context.

_Note that for collections with > 1,000 records, it is recommended that `doCount` be set to false for better performance._



Example context object:
```
{
  "pagination": {
    "rowsPerPage": 50,
    "pageNumber": 1,
    "doCount": false
  },
  "searchCriteria": {
    "data.position": "defense"
  },
  "sortCriteria": {
  }
}
```


:::caution
Note that one has to be careful when using <code>GetEntityPage()</code> with <em>owned</em> entities.
:::

The system's behaviour will vary depending upon the setting of the new compatibility flag:

_[ ] Include shared objects in Owned Custom Entity GetEntityPage queries (warning: can be slow). Can be overwritten by specifying 'ownedOnly' in query context 'options'._

If the flag is enabled (i.e. checked), the system will look for all objects that match the search criteria that:

* are _owned_ by the user, and...
* are **accessible by the user** (i.e. `acl.other` is not 0)

That second part of the search criteria is a waste if you are _only_ looking for objects _owned_ by the user - which is normally the case.  (_It can also be very slow and CPU intensive if the search query is too broad in that context._)

For this reason, it is highly recommended that all apps un-check this compatibility flag - so that the default query syntax is as efficient as possible, by focusing on objects _owned_ by the user _only_.

Once un-checked, it is still possible to search for shared entities (i.e. entities whose `acl.other` is not 0) by including a special `ownedOnly` option in the query:

Example context object with `ownedOnly` option:
```
{
  "pagination": {
    "rowsPerPage": 50,
    "pageNumber": 1,
    "doCount": false
  },
  "searchCriteria": {
    "data.position": "defense"
  },
  "sortCriteria": {
  },
  "options": {
    "ownedOnly": false
  }
}
```

:::info
In all cases, having proper custom indexes defined for your queries is essential for best performance. Developers are encouraged to contact support to have our team examine your entities and indexes before significant launches / feature releases. We are happy to help! 
:::

<PartialServop service_name="customEntity" operation_name="GET_ENTITY_PAGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string entityType = "athletes";
string context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"data.position\":\"defense\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.CustomEntityService.GetEntityPage(entityType, context, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *entityType = "athletes";
const char *context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"data.position\":\"defense\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";

<%= data.branding.codePrefix %>->getCustomEntityService()->getEntityPage(entityType, context, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *entityType = @"athletes";
NSString *context = @"{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"data.position\":\"defense\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";

BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> customEntityService] getEntityPage:entityType
                    context:context
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String entityType = "athletes";
String context = "{\"pagination\":{\"rowsPerPage\":50,\"pageNumber\":1},\"searchCriteria\":{\"data.position\":\"defense\"},\"sortCriteria\":{\"createdAt\":1,\"updatedAt\":-1}}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getCustomEntityService().getEntityPage(entityType, context, this);

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
var entityType = "athletes";
var context = {
    "pagination": {
        "rowsPerPage": 50,
        "pageNumber": 1
    },
    "searchCriteria": {
        "data.position": "defense"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};

<%= data.branding.codePrefix %>.customEntity.getEntityPage(entityType, context, result =>
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
var entityType = "athletes";
var context = {
  "pagination": {
    "rowsPerPage": 50,
    "pageNumber": 1
  },
  "searchCriteria": {
    "data.position": "defense"
  },
  "sortCriteria": {
    "createdAt": 1
  }
};

var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.getEntityPage(entityType, context);
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
	"service": "customEntity",
	"operation": "GET_ENTITY_PAGE",
	"data": {
		"entityType": "athletes",
		"context": {
			"pagination": {
				"rowsPerPage": 50,
				"pageNumber": 1
			},
			"searchCriteria": {
				"data.position": "defense"
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
  "status": 200,
  "data": {
    "_serverTime": 1637946319239,
    "context": "lciI6MSwiZG9Db3VudCI6dHJ...",
    "results": {
      "count": 4,
      "page": 1,
      "items": [
        {
          "entityId": "f9d91cda-3ece-447c-bf81-046fa026520c",
          "version": 1,
          "acl": {
            "other": 1
          },
          "ownerId": null,
          "expiresAt": null,
          "timeToLive": null,
          "createdAt": 1573537595505,
          "updatedAt": 1573537595505,
          "data": {
            "firstName": "Super",
            "surName": "Star",
            "position": "defense",
            "goals": 2,
            "assists": 4
          }
        },
        {
          "entityId": "1497cc7e-66cb-4682-9eac-c755523369a8",
          "version": 3,
          "acl": {
            "other": 1
          },
          "ownerId": null,
          "expiresAt": null,
          "timeToLive": null,
          "createdAt": 1573540122600,
          "updatedAt": 1573540445332,
          "data": {
            "firstName": "Super",
            "surName": "Star2",
            "position": "defense",
            "goals": 3,
            "assists": 5
          }
        }
      ],
      "moreAfter": true,
      "moreBefore": false
    }
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity being retrieved. 
context | A context object describing the desired paging behaviour


