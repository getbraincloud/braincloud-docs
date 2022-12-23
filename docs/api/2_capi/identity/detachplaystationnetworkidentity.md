# DetachPlaystationNetworkIdentity
## Overview
Detach the PlaystationNetwork identity from this profile.



### Status Codes
Code | Name | Description
---- | ---- | -----------
40210 | DOWNGRADING_TO_ANONYMOUS_ERROR | Occurs when detaching the last non-anonymous identity from an account with continueAnon set to false.

<PartialServop service_name="identity" operation_name="DETACH" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string playstationNetworkId = "somePlaystationNetworkId";

<%= data.branding.codePrefix %>.IdentityService.DetachPlaystationNetworkIdentity(
    playstationNetworkId,
    true,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * playstationNetworkId = "somePlaystationNetworkId";

<%= data.branding.codePrefix %>->getIdentityService()->detachPlaystationNetworkIdentity(
    playstationNetworkId, false, this);
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

## Method Parameters
Parameter | Description
--------- | -----------
playstationNetworkId | The playstationNetwork id of the user
continueAnon | Proceed even if the profile will revert to anonymous?


