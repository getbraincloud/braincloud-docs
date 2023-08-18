# SignRSASha256
## Overview
Given a piece of data and a private key, calculates an SHA-256 with RSA (SHA256withRSA) signature for the data. This signature can then be verified as authentic by a receiver with access to an associated public key. 

*Note that the implementation supports both PKCS1 and PKCS8 RSA format private keys.*

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
var privateKey = "aPrivateKey";
var dataString = "String to sign";
var response = {};

response.signature = bridge.utils().signRSASha256( privateKey, dataString );

// Return the result
response;

```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var privateKey = "aPrivateKey";
var dataString = "String to sign";
var response = {};

response.signature = bridge.utils().signRSASha256( privateKey, dataString );

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
   "signature": "acdUTXOT8P5q7W6h+IGZYp8s5Vnxj8RvQLRGdYz7ufJ/hxboDetxxxxxxvjDuKlvBrgE/mWg9d+j36EbWkDIDbOhGl61ec0n/ZeYnc7M5j55G1BDATWLu/zzbVwNr+jYVXjlQ7T+/GUpiLvI+vUA5Uv/AQlbQOoeKyzM="
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
privateKey | The private key used to generate the signature
dataString | The data string to calculate the signature for


