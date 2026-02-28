# RevokePeerCurrency
Revoke the specified amount of currency from the peer user. Peer user's balance can go negative.

<PartialServop service_name="virtualCurrency" operation_name="REVOKE_PEER_VC" />

## Method Parameters
Parameter | Description
--------- | -----------
vcId | Type of currency (Ex. ticket, tokens)
vcAmount | The amount of currency to be revoked.
peerCode | The peer code of the peer.

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
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var vcId = "tokens";
var vcAmount = 1;
var peerCode = "gameloot";
var virtualCurrencyProxy = bridge.getVirtualcurrencyServiceProxy();

var postResult = virtualCurrencyProxy.RevokePeerCurrency(vcId, vcAmount, peerCode);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"virtualCurrency",
    "operation":"REVOKE_PEER_VC",
    "data":{
        "vcId":"tokens",
        "vcAmount":1,
        "peerCode":"gameloot"
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
            "peerVC1": {
                "consumed": 0,
                "balance": 9,
                "purchased": 0,
                "awarded": 10,
                "revoked": 1
            },
            "peerVC2": {
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

