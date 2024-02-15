# SysGetCodeTypePageOffset
Gets the page of redemption code type configuration information from the server based on the encoded context and specified page offset.

<PartialServop service_name="redemptionCode" operation_name="SYS_GET_CODE_TYPE_PAGE_OFFSET" />

## Method Parameters
Parameter | Description
--------- | -----------
context | The context string returned from the server from a previous call to SysGetCodeTypePage or SysGetCodeTypePageOffset.
pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point.

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;
var redemptionCodeProxy = bridge.getRedemptioncodeServiceProxy();

var postResult = redemptionCodeProxy.SysGetCodeTypePageOffset(context, pageOffset);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"redemptionCode",
    "operation":"SYS_GET_CODE_TYPE_PAGE_OFFSET",
    "data":{
        "context":"eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0",
        "pageOffset":1
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
    "_serverTime": 1708035564432,
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzc4MiIsImNvZGVVc2VUeXBlIjoiTVVMVEkiLCJ2YWxpZFN0YXJ0Ijp7IiRsdGUiOjE3MDgwMzU0NTU2MjV9LCJ2YWxpZEVuZCI6eyIkZ3QiOjE3MDgwMzU1MTU2MjV9LCJpc0Rpc2FibGVkIjp7IiRuZSI6dHJ1ZX19LCJzb3J0Q3JpdGVyaWEiOnt9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjo1MCwicGFnZU51bWJlciI6MSwiZG9Db3VudCI6ZmFsc2UsInNraXBSZWNvdW50Ijp0cnVlfSwib3B0aW9ucyI6bnVsbCwicmVzdWx0Q291bnQiOjF9",
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

