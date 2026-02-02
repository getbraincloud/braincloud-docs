# RevokeParentCurrency
Revoke the specified amount of currency from the parent user. Parent user's balance can go negative

<PartialServop service_name="virtualCurrency" operation_name="REVOKE_PARENT_VC" />

## Method Parameters
Parameter | Description
--------- | -----------
vcId | The currency type to revoke.
vcAmount | The amount of currency to revoke.
levelName | The name of the parent level.

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
var levelName = "master";
var virtualCurrencyProxy = bridge.getVirtualcurrencyServiceProxy();

var postResult = virtualCurrencyProxy.RevokeParentCurrency(vcId, vcAmount, levelName);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"virtualCurrency",
    "operation":"REVOKE_PARENT_VC",
    "data":{
        "vcId":"coins",
        "vcAmount":1,
        "levelName":"master"
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
      "parent2VC1": {
        "consumed": 0,
        "balance": 9,
        "purchased": 0,
        "awarded": 10,
        "revoked": 1
      },
      "parent2VC2": {
        "consumed": 0,
        "balance": 0,
        "purchased": 0,
        "awarded": 0,
        "revoked": 0
      }
    }
  },
  "status": 200
}
```

</details>

