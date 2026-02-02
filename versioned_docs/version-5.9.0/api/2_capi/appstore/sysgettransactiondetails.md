# SysGetTransactionDetails

Returns details of the identified product transaction.

<PartialServop service_name="appStore" operation_name="SYS_GET_TRANSACTION_DETAILS" />

## Method Parameters

| Parameter  | Description                      |
| ---------- | -------------------------------- |
| sequenceId | The sequnce ID of a transaction. |

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
var sequenceId = "the_sequence_id";

var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.sysGetTransactionDetails(sequenceId);
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
	"operation": "SYS_GET_TRANSACTION_DETAILS",
	"data": {
        "sequenceId": "the_sequence_id"
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
        "sequenceId": "620ebe87-cf50-4131-9b9a-ccd9aafdfb45",
        "playerId": "924539e0-0793-4437-930f-9b078cd0499d",
        "type": "mock",
        "itemId": "xxxx",
        "title": null,
        "data": null,
        "createdAt": 1712181435294,
        "updatedAt": 1713476624931,
        "transactionId": "yyyy",
        "dataJson": {
            "pending": {
                "itemId": "xxxx",
                "transactionId": "yyyy"
            },
            "final": {
                "purchaseData": {
                    "transId": "yyyy"
                },
                "transactionSummary": {
                    "transId": "yyyy"
                }
            }
        },
        "rewards": {
            "extra": null,
            "currency": {
                "cus_coins": 10
            }
        },
        "userItemRewards": null,
        "sandbox": false,
        "refPrice": 699,
        "regularPrice": null,
        "promotion": null,
        "pending": false,
        "pendingPriceId": 0,
        "pendingPromotionId": null
    },
    "status": 200
}
```

</details>
