# InvalidateCode
## Overview
This operation invalidates the specified redemption code.




### Results
Name | Description
--------- | -----------
response | Newly updated redemption code object

<PartialServop service_name="redemptionCode" operation_name="INVALIDATE_CODE" / >

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
var scanCode = "the-scan-code";
var codeType = "the-code-type";
var invalidationReason = "Redemption code no longer valid.";
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.invalidateCode(scanCode, codeType, invalidationReason);
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
	"service": "redemptionCode",
	"operation": "INVALIDATE_CODE",
	"data": {
		"scanCode": "the-scan-code",
		"codeType": "the-code-type",
		"invalidationReason": "Redemption code no longer valid."
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
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": {
                "response": {
                    "gameId": "102938475647382910",
                    "scanCode": "999999",
                    "codeType": "typeOfCode",
                    "version": 2,
                    "codeState": "Available",
                    "customCodeInfo": {
                        "param1": 2235
                    },
                    "customRedemptionInfo": {},
                    "redeemedByProfileId": null,
                    "redeemedByProfileName": null,
                    "invalidationReason": "reason",
                    "createdAt": 0,
                    "activatedAt": null,
                    "redeemedAt": null,
                    "invalidatedAt": 1445456503428
                }
            }
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
scanCode | The scan code. 
codeType | The code type. 
invalidationReason | Optional custom information. 


