# CreateSettopHandoffCode
## Overview
Creates a settop handoff code that is valid for a limited amount of time, and in accordance with the provided specifications. Use the [<code>AuthenticateSettopHandoff</code>](/api/capi/authentication/authenticatesettophandoff) call to log the user in via the generated code.

<PartialServop service_name="identity" operation_name="CREATE_HANDOFF_ID" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var identityProxy = bridge.getIdentityServiceProxy();

var handoffJson = { "fromApp": "launcher" };
var stringPool = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

var postResult = identityProxy.createSettopHandoffCode(
        6,              // numChars
        180,            // validSecs
        handoffJson,    // handoffJson
        stringPool      // stringPool
    ); 
if (postResult.status == 200) {
    // Success!
    var code = postResult.data.handoffCode;
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// Cloud Code only. To view example, switch to the Cloud Code tab
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
  "handoffCode": "105175"
 },
 "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
numChars | Number of entries in the generated code
validSecs | Number of seconds that the code should be valid for.
handoffJson | Custom JSON object - will be returned when the user logs in via [<code>AuthenticateSettopHandoff</code>](/api/capi/authentication/authenticatesettophandoff)
stringPool | The pool of characters (or phrases) to use to generate the random code. Use this value to constrain the code to digits, or digit-like phrases (i.e. "0n3", "tw0", etc.)


