# SysRecordTransaction

Records a manual transaction. Useful for stores that are not yet directly supported -- or for apps that doing purchases via other means - but still want to record them in brainCloud for reporting purposes.

<PartialServop service_name="appStore" operation_name="SYS_RECORD_TRANSACTION" />

## Method Parameters

| Parameter     | Description                                            |
| ------------- | ------------------------------------------------------ |
| storeId       | Identifies the store type.  See the [appendix](/appendix/platformIds) for Store Ids.  Use "_<id>" for custom ids. |
| profileId     | Profile ID of the user.                                |
| itemId        | Item ID of the product transaction to be recorded.     |
| promotionId   | Optional ID of any promotion that applies.             |
| dataJson      | Transaction details from the store's perspective.      |
| receiptData   | Receipt information.                                   |
| price         | Price in hundredths of the app's currency (e.g. cents) |
| processAwards | Whether to deliver rewards/items.                      |
| sandbox       | Whether purchase is sandbox.                           |


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
var storeId = "store_id";
var profileId = "user_profile_id";
var itemId = "product_item_id";
var promotionId = 5;
var dataJson = {'quantity': 1};
var receiptData = {'receipt': 'receipt_String'};
var priceInCents = 999;
var processAwards = true;
var sandbox = False;
var appStoreProxy = bridge.getAppstoreServiceProxy();

var postResult = appStoreProxy.sysRecordTransaction(storeId, profileId, itemId, promotionId, dataJson, receiptData, priceInCents, processAwards, sandbox);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"appStore",
    "operation":"SYS_RECORD_TRANSACTION",
    "data":{
        "storeId":"store_id",
        "profileId":"user_profile_id",
        "itemId":"product_item_id",
        "transactionId":"transaction_id",
        "promotionId":5,
        "dataJson":{
            "quantity":1
        },
        "receiptData":{
            "receipt":"receipt_String"
        },
        "price":999,
        "processAwards":true,
        "sandbox":false
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
        "userItemRewards": {
            "sword001": {
                "fac9e483-c958-46b9-a478-06c97a85e74a": {
                    "itemId": "fac9e483-c958-46b9-a478-06c97a85e74a",
                    "quantity": 1
                }
            }
        },
        "extra": {
            "customAttr": "value"
        },
        "rewards": {
            "extra": {
                "customAttr": "value"
            },
            "currency": {
                "bar": 10
            },
            "items": {
                "sword001": {
                    "defId": "sword001",
                    "quantity": 1
                }
            }
        },
        "currencies": {
            "currency": {
                "bar": {
                    "consumed": 0,
                    "balance": 30,
                    "purchased": 10,
                    "awarded": 20,
                    "revoked": 0
                },
                "coins": {
                    "consumed": 0,
                    "balance": 24,
                    "purchased": 0,
                    "awarded": 24,
                    "revoked": 0
                }
            }
        }
    },
    "status": 200
}
```

</details>
