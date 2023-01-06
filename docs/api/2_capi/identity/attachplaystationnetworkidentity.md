# AttachPlaystationNetworkIdentity
## Overview
Attach the user's PlaystationNetwork credentials to the current profile.



<PartialServop service_name="identity" operation_name="ATTACH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * playstationNetworkId = "somePlaystationNetworkId";
const char * authenticationToken = "somePlaystationNetworkAuthToken";

<%= data.branding.codePrefix %>->getIdentityService()->attachPlaystationNetworkIdentity(
    playstationNetworkId, authenticationToken, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
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
    "status" : 200,
    "data" : null
}
```
</details>

<details>
<summary>Common Error Code</summary>

### Status Codes
Code | Name | Description
---- | ---- | -----------
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one PlaystationNetwork identity for a profile.
40212 | MERGE_PROFILES | Returned when trying to attach an identity type that would result in two profiles being merged into one (for instance an anonymous account and a PlaystationNetwork account).

</details>


## Method Parameters
Parameter | Description
--------- | -----------
playstationNetworkId | The playstationNetwork id of the user
authenticationToken | The validated token from the PlaystationNetwork SDK (that will be further validated when sent to the <%= data.branding.productName %> service)


