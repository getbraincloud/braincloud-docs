# MergePeerProfile
## Overview
Merge the peer profile associated with the provided externalId with the current profile.

NOTE: If using the <%= data.branding.codeWrapper %>, once the merge is complete you should call [<code>SetStoredProfileId</code>](/api/wrapper/setstoredprofileid) in the <%= data.branding.codeWrapper %> with the profileId returned in the Merge call.



<PartialServop service_name="identity" operation_name="MERGE_PEER_PROFILE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var peer = "gameloot";
var externalId = "UserID";
var authenticationToken = "token";
var authenticationType = "email";
var externalAuthName = "";

var identityProxy = bridge.getIdentityServiceProxy();
identityProxy.mergePeerProfile(peer, externalId, authenticationToken, authenticationType, externalAuthName);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "identity",
	"operation": "MERGE_PEER_PROFILE",
	"data": {
		"peer": "gameloot",
		"externalId": "email@email.com",
		"authenticationToken": "email@email.com",
		"authenticationType": "Email",
		"externalAuthName": ""
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
   "data":{  
      "profileId":"f94f7e2d-3cdd-4fd6-9c28-392f7875e9df"
   },
   "status":200
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Steam identity for a profile.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
peer | Name of the peer service
externalId | User ID
authenticationToken | Password or client side token
authenticationType | Type of authentication. Full list of types can be found [here](/api/appendix/authtypes).
externalAuthName | The name of the external authentication mechanism (optional, used for custom authentication types)


