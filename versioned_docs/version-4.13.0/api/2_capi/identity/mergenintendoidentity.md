# MergeNintendoIdentity
## Overview
Merge the profile associated with the provided Nintendo credentials with the current profile.



<PartialServop service_name="identity" operation_name="MERGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string nintendoAccountId = "nsaid";  // Network Services Account ID
string nintendoAuthToken = "nsaToken";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.IdentityService.MergeNintendoIdentity(
    nintendoAccountId, nintendoAuthToken, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* nintendoAccountId = "nsaid";  // Network Services Account ID
const char* nintendoAuthToken = "nsaToken";

<%= data.branding.codePrefix %>->getIdentityService()->mergeNintendoIdentity(
    ultraUsername,
    ultraIdToken,
    this);
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
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Twitter identity for a profile.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
nintendoAccountId | The Nintendo Network Services Account (NSA) ID for the user
nintendoAuthToken | An NSA ID token retrieved via the NintendoSDK


