# AddCode
## Overview
This operation adds a code to your inventory.




### Results
Name | Description
--------- | -----------
response | Newly created redemption code object.

<PartialServop service_name="redemptionCode" operation_name="ADD_CODE" / >

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
var scanCode = "a-scan-code";
var codeType = "the-code-type";
var codeState = "Available";
var customCodeInfo = {};
var redemptionCodeProxy = bridge.getRedemptionCodeServiceProxy();

var postResult = redemptionCodeProxy.addCode(scanCode, codeType, codeState, customCodeInfo);
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
	"operation": "ADD_CODE",
	"data": {
		"scanCode": "a-scan-code",
		"codeType": "the-code-type",
		"codeState": "Available",
		"customCodeInfo": {}
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
                    "gameId": "1234556",
                    "scanCode": "102938475647382910",
                    "codeType": "typeOfCode",
                    "version": 2,
                    "codeState": "Available",
                    "customCodeInfo": {
                        "param1": 2235
                    },
                    "customRedemptionInfo": {},
                    "redeemedByProfileId": null,
                    "redeemedByProfileName": null,
                    "invalidationReason": null,
                    "createdAt": 1445456503428,
                    "activatedAt": null,
                    "redeemedAt": null,
                    "invalidatedAt": null
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
scanCode | A scan code. 
codeType | The code type. 
codeState | Initial state of the redemption code. 
customCodeInfo | Optional custom information. 


