# SysGetTransactionsPageOffset

Gets the page of product transactions information from the server based on the encoded context and specified page offset.

<PartialServop service_name="appStore" operation_name="SYS_GET_TRANSACTIONS_PAGE_OFFSET" />

## Method Parameters

| Parameter  | Description                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| context    | The context string returned from the server from a previous call to GetPage or GetPageOffset.                                       |
| pageOffset | The positive or negative page offset to fetch. Uses the last page retrieved using the context string to determine a starting point. |

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
var context = "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjp7IiRyZWdleCI6Ii4qaWxkLioiLCIkb3B0";
var pageOffset = 1;

var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.sysGetTransactionsPageOffset(context, pageOffset);
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
	"operation": "SYS_GET_TRANSACTIONS_PAGE_OFFSET",
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
        "_serverTime": 1723709740032,
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMzc4MiJ9LCJzb3J0Q3JpdGVyaWEiOnsiY3JlYXRlZEF0IjotMX0sInBhZ2luYXRpb24iOnsicm93c1BlclBhZ2UiOjEsInBhZ2VOdW1iZXIiOjIsImRvQ291bnQiOnRydWUsInNraXBSZWNvdW50IjpmYWxzZX0sIm9wdGlvbnMiOm51bGwsInJlc3VsdENvdW50IjoyfQ",
        "results": {
            "count": 2,
            "page": 2,
            "items": [
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
            "moreBefore": true
        }
    },
    "status": 200
}
```

</details>
