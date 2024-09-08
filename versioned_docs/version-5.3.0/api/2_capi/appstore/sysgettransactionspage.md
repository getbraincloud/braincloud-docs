# SysGetTransactionsPage

Gets the page of product transactions information from the server based on the specified context.

<PartialServop service_name="appStore" operation_name="SYS_GET_TRANSACTIONS_PAGE" />

## Method Parameters

| Parameter | Description                                              |
| --------- | -------------------------------------------------------- |
| context   | A context object describing the desired paging behaviour |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
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
      "profileId": "a_profile_id",
      "type": "steam",
      "pending": true
    },
    "sortCriteria": {
      "createdAt": -1
    }
};

var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.sysGetTransactionsPage(context);
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
	"service": "appStore",
	"operation": "SYS_GET_TRANSACTIONS_PAGE",
	"data": {
    "context": {
      "pagination": {
        "rowsPerPage": 50,
        "pageNumber": 1
      },
      "searchCriteria": {
        "profileId": "a_profile_id",
        "type": "steam",
        "pending": true
      },
      "sortCriteria": {
        "createdAt": -1
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
        "_serverTime": 1723708475404,
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzc4MiJ9LCJzb3J0Q3JpdGVyaWEiOnsiY3JlYXRlZEF0IjotMX0sInBhZ2luYXRpb24iOnsicm93c1BlclBhZ2UiOjUwLCJwYWdlTnVtYmVyIjoxLCJkb0NvdW50Ijp0cnVlLCJza2lwUmVjb3VudCI6ZmFsc2V9LCJvcHRpb25zIjpudWxsLCJyZXN1bHRDb3VudCI6Mn0",
        "results": {
            "count": 2,
            "page": 1,
            "items": [
                {
                    "regularPrice": 699,
                    "pending": false,
                    "sandbox": true,
                    "type": "mock",
                    "title": "mock",
                    "sequenceId": "5a39dc01-7da0-4d0d-9264-b7f00cac5c78",
                    "transactionId": "tttt",
                    "refPrice": 699,
                    "itemId": "xxxx",
                    "createdAt": 1723707586432,
                    "pendingPromotionId": null,
                    "profileId": "4f4b36f6-f660-4902-ba25-935d359274ae",
                    "pendingPriceId": null,
                    "updatedAt": 1723707586432
                },
                {
                    "pending": false,
                    "sandbox": false,
                    "type": "mock",
                    "sequenceId": "620ebe87-cf50-4131-9b9a-ccd9aafdfb45",
                    "transactionId": "yyyy",
                    "refPrice": 699,
                    "itemId": "xxxx",
                    "createdAt": 1712181435294,
                    "pendingPromotionId": null,
                    "profileId": "924539e0-0793-4437-930f-9b078cd0499d",
                    "pendingPriceId": 0,
                    "updatedAt": 1713476624931
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
