# RevokeCurrency
Revoke the specified amount of currency from the user. User's balance can go negative.

<PartialServop service_name="virtualCurrency" operation_name="REVOKE_VC" />

## Method Parameters
Parameter | Description
--------- | -----------
vcId | The currency type to revoke.
vcAmount | The amount of currency to revoke.

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
var vcId = "coins";
var vcAmount = 1;
var virtualCurrencyProxy = bridge.getVirtualcurrencyServiceProxy();

var postResult = virtualCurrencyProxy.RevokeCurrency(vcId, vcAmount);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"virtualCurrency",
    "operation":"REVOKE_VC",
    "data":{
        "vcId":"coins",
        "vcAmount":1
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
    "currencyMap": {
      "bar": {
        "consumed": 0,
        "balance": 32,
        "purchased": 0,
        "awarded": 32,
        "revoked": 0
      },
      "coins": {
        "consumed": 0,
        "balance": 101,
        "purchased": 0,
        "awarded": 120,
        "revoked": 19
      }
    }
  },
  "status": 200
}
```

</details>

