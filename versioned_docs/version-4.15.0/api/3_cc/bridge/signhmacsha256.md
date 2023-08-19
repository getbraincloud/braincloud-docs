# SignHMACSha256
## Overview
Given a piece of data and a shared secrect key, calculates an SHA-256 with HMAC signature for the data.

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
var secrectKey = "aSecrectKey";
var dataString = "String to sign";
var response = {};

response.signature = bridge.utils().signHMACSha256( secrectKey, dataString );

// Return the result
response;

```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var secrectKey = "aSecrectKey";
var dataString = "String to sign";
var response = {};

response.signature = bridge.utils().signHMACSha256( secrectKey, dataString );

// Return the result
response;

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
  "response": {
   "signature": "ArniCzEFCYHOMZg4f+c7dYXhkT/J0tpQ6+pB2rpOFJQ="
  },
  "success": true
 },
 "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
secrectKey | The shared secrect key used to generate the signature
dataString | The data string to calculate the signature for


