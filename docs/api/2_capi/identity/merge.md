# Merge
## Overview
Merges an identity from another profile to this player's profile. The left over profile is decided by the higher XP.

NOTE: If using the <%= data.branding.codeWrapper %>, once the merge is complete, from the <%= data.branding.productName %> client, you should call [<code>SetStoredProfileId</code>](/api/wrapper/setstoredprofileid) in the <%= data.branding.codeWrapper %> with the profileId returned in the cloud code script.



### Status Codes
Code | Name | Description
---- | ---- | -----------
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Facebook identity for a profile.

<PartialServop service_name="identity" operation_name="MERGE" / >

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
var externalId = "email@email.com";
var authenticationToken = "email@email.com";
var authenticationType = "Email";
var externalAuthName = "";
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.merge(externalId, authenticationToken, authenticationType, externalAuthName);
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
	"operation": "MERGE",
	"data": {
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

## Method Parameters
Parameter | Description
--------- | -----------
externalId | User ID
authenticationToken | Password or client side token
authenticationType | Type of authentication. Full list of types can be found [here](/api/appendix/authtypes).
externalAuthName | The name of the external authentication mechanism (optional)


