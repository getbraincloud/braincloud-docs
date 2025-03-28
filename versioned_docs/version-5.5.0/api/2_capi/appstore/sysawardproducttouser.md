# SysAwardProductToUser

Awards the specified user the product item rewards without requiring a purchase (free, no purchase transaction recorded).

<PartialServop service_name="appStore" operation_name="SYS_AWARD_PRODUCT_TO_USER" />

## Method Parameters

| Parameter | Description                                                |
| --------- | ---------------------------------------------------------- |
| profileId | Profile ID of the user to be awarded the product.          |
| itemId    | Item ID of the product to be awarded.                      |
| quantity  | Quantity of item to be awarded. Limited to 1 at this time. |

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
var profileId = "user_profile_id";
var itemId = "product_item_id";
var quantity = 1;
var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.sysAwardProductToUser(profileId, itemId, quantity);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"appStore",
    "operation":"SYS_AWARD_PRODUCT_TO_USER",
    "data":{
        "profileId":"user_profile_id",
        "itemId":"product_item_id",
        "quantity":1
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
                "17311754-f610-4a20-9934-3c9d255874e3": {
                    "itemId": "17311754-f610-4a20-9934-3c9d255874e3",
                    "quantity": 1
                }
            }
        },
        "extra": {
            "customAttr": "value"
        },
        "currency": {
            "bar": {
                "consumed": 0,
                "balance": 10,
                "purchased": 0,
                "awarded": 10,
                "revoked": 0
            },
            "coins": {
                "consumed": 0,
                "balance": 24,
                "purchased": 0,
                "awarded": 24,
                "revoked": 0
            }
        },
        "serverTime": 1739486770269,
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
        }
    },
    "status": 200
}
```

</details>
