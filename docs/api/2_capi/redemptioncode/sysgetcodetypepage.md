# SysGetCodeTypePage
Gets the page of redemption code type configuration information from the server based on the specified context.

<PartialServop service_name="redemptionCode" operation_name="SYS_GET_CODE_TYPE_PAGE" />

## Method Parameters
Parameter | Description
--------- | -----------
context | The json context for the page request.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
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
        "codeUseType": "MULTI",
        "validStart": {
            "$lte": "[[#ts]]"
        },
        "validEnd": {
            "$gt": "[[#ts+60000]]"
        },
        "isDisabled": {
            "$ne": true
        }
    },
    "sortCriteria": {}
};
var redemptionCodeProxy = bridge.getRedemptioncodeServiceProxy();

var postResult = redemptionCodeProxy.sysGetCodeTypePage(context);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"redemptionCode",
    "operation":"SYS_GET_CODE_TYPE_PAGE",
    "data":{
        "context":{
            "pagination":{
                "rowsPerPage":50,
                "pageNumber":1
            },
            "searchCriteria":{
                "codeUseType":"MULTI",
                "validStart":{
                    "$lte":"[[#ts]]"
                },
                "validEnd":{
                    "$gt":"[[#ts+60000]]"
                },
                "isDisabled":{
                    "$ne":true
                }
            },
            "sortCriteria":{}
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
        "_serverTime": 1708035466493,
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzc4MiIsImNvZGVVc2VUeXBlIjoiTVVMVEkiLCJ2YWxpZFN0YXJ0Ijp7IiRsdGUiOjE3MDgwMzU0NTU2MjV9LCJ2YWxpZEVuZCI6eyIkZ3QiOjE3MDgwMzU1MTU2MjV9LCJpc0Rpc2FibGVkIjp7IiRuZSI6dHJ1ZX19LCJzb3J0Q3JpdGVyaWEiOnt9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjo1MCwicGFnZU51bWJlciI6MSwiZG9Db3VudCI6dHJ1ZSwic2tpcFJlY291bnQiOnRydWV9LCJvcHRpb25zIjpudWxsLCJyZXN1bHRDb3VudCI6MX0",
        "results": {
            "count": 1,
            "page": 1,
            "items": [
                {
                    "gameId": "23782",
                    "codeType": "unique_campaign_name",
                    "description": "Codes to give away for promotion",
                    "version": 1,
                    "createdAt": 1708035413954,
                    "updatedAt": 1708035413954,
                    "async": false,
                    "maxRetries": 0,
                    "isDisabled": false,
                    "customCodeInfo": {},
                    "validStart": 1708035331008,
                    "validEnd": 1708640131008,
                    "codeUseType": "MULTI",
                    "scanCode": "FREE100",
                    "maxRedemptions": 100
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

