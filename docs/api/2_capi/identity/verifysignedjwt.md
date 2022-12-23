# VerifySignedJwt
## Overview
Verifies a signed JWT provided as a string.

<PartialServop service_name="identity" operation_name="VERIFY_SIGNED_JWT" / >

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
var jksUri = "https://xxx.";
var issuer = "https://xxx.";
var audience = "api://default";
var jwtString = "jihgfhgsjkfgfjkgh";
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.verifySignedJwt(jksUri, issuer, audience, jwtString);
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
  "service": "identity",
  "operation": "VERIFY_SIGNED_JWT",
  "data":
  {
    "jksUri": "https://xxx.",
    "issuer": "https://xxx.",
    "audience": "api://default",
    "jwtString": "jihgfhgsjkfgfjkgh"
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
    "claims": {
      "sub": "00u1caz4q626WtuOc555",
      "name": "John Snow",
      "email": "johns@xxx.com",
      "ver": 1,
      "iss": "https://login.xxx.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0",
      "aud": "0oa1k21u00qBbTwaz555",
      "iat": 1573052062,
      "exp": 1573055662,
      "jti": "ID.HntoaUAOrMR4XXXswVCAV8Vi2eU_gplsbx4xgW4BhgM",
      "amr": [
        "pwd",
        "rsa",
        "mfa"
      ],
      "idp": "00o1caT4n2FS01065357",
      "nonce": "a81b30479be55fe98fda915525acf2da",
      "preferred_username": "johns@xxx.com",
      "auth_time": 1573052055,
      "at_hash": "n_bRbPka--WLaLKWEKEDUZXXXXXX",
      "groups": [
        "Everyone",
        "BrainCloudUsers"
      ]
    },
    "issuedAt": 1573052067000,
    "expiresAt": 1573055667000
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
jksUri | JKS uri.
issuer | issuer uri.
audience | JWT audience.
jwtString | JWT string representation.


