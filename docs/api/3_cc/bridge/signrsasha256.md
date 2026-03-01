# SignRSASha256

Given a piece of data and a private key, calculates an SHA-256 with RSA (SHA256withRSA) signature for the data. Encoded as a base64 string. This signature can then be verified as authentic by a receiver with access to an associated public key.

*Note that the implementation supports both PKCS1 and PKCS8 RSA format private keys.*

## Method Parameters
Parameter | Description
--------- | -----------
privateKey | The private key used to generate the signature
dataString | The data string to calculate the signature for

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

```r
// N/A
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
            "signature": "V3iD/yE3G9s4vgB6TeF+HOCKEb9CmF8iPSE+dK3MAS991U0NXDIwJzyuzFxiJWIt2W8WtKfQJqpOITsMPmgxY0Ttj0yfG0uS7jjRr5/vtC3/ZNWrzmyXSiunDmPwmJ36PVuPjyVxLtZzkr4qw/l/7lAKcNz8515Dgjs2RQHC1EtRrmHpaMpWL32Ya8CKtmjkNdHI2Ng9MrvVp+aaIPCPGoLPWis+zD+ZxNr+i6c0BP8RQVqigS4Bnt/YBeLE+ZuAD/0puC6Kc2/AO1Sqgo6g927VUjGOVM7JqVAq0JZY8XG9K+OgL6VJuBfKCDaQ2HUV+MWhaxFA3vageIqG+6eIOA=="
        },
        "success": true
    },
    "status": 200
}
```
</details>

