# VerifyOktaJWT
## Overview
Used in an External Authentication script to validate an OKTA login. 

Usage:

1. The client app should first implement the Okta login
2. Then pass the Okta User ID (as externalId) and JWT token (as authenticationToken) to <%= data.branding.productName %> via the [<code>AuthenticateExternal</code>](/api/capi/authentication/authenticateexternal) call
3. This will automatically invoke the custom external auth script (configured via the **Design | Authentication | External** portal page)
4. Where verifyOktaJwt() can be called to verify the JWT token before proceeding



Constants like the Okta domain and audience are best stored as global properties in your app.

<PartialServop service_name="identity" operation_name="VERIFY_OKTA_JWT" / >

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

// The key config parameters are best managed as global properties
url = bridge.getGlobalProperty("oktaUrl");
appId = bridge.getGlobalProperty("oktaClientId");
group = bridge.getGlobalProperty("oktaGroup"); 

userId = data.externalId; // Okta User Id
token = data.authenticationToken; // JWT Token

// Verify Okta Token
var identityProxy = bridge.getIdentityServiceProxy();
response = identityProxy.verifyOktaJwt(url, appId, token);

var hasPermission = false;

if(response.status == 200) {
    // Optional - verify that user is member of the appropriate group
    var groups = response.data.claims.groups;
    for(i = 0; i < groups.length; i++) {
        if(group == groups[i]) {
            hasPermission = true;
        }
    }
}

// Return true or false to indicate valid login
hasPermission;
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
    "claims": {
      "sub": "00u1caz4q626WtuOc555",
      "name": "John Snow",
      "email": "johns@xxx.com",
      "ver": 1,
      "iss": "https://dev-5555555.okta.com/oauth2/default",
      "aud": "0oa1k21u00qBbTwaz555",
      "iat": 1573052062,
      "exp": 1573055662,
      "jti": "ID.HntoaUAOrMR4XXXswVCAV8Vi2eU_gplsbx4xgW4BhgM",
      "amr": [
        "pwd"
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
domain | Okta domain (also known as the *Okta Issuer URI*)
audience | JWT audience (also known as *Okta Client ID*)
jwtString | JWT string (passed in as `data.authenticationToken` to the script)


