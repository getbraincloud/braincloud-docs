# MergePlaystationNetworkIdentity

Merge the profile associated with the provided PlaystationNetwork credentials with the current profile.

NOTE: If using the <%= data.branding.codeWrapper %>, once the merge is complete you should call [<code>SetStoredProfileId</code>](/api/wrapper/setstoredprofileid) in the <%= data.branding.codeWrapper %> with the profileId returned in the Merge call.

<PartialServop service_name="identity" operation_name="MERGE" />

## Method Parameters

| Parameter            | Description                                                                                                                                    |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| playstationNetworkId | The playstationNetwork id of the user                                                                                                          |
| authenticationToken  | The validated token from the PlaystationNetwork SDK (that will be further validated when sent to the <%= data.branding.productName %> service) |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string playstationNetworkId = "somePlaystationNetworkId";
string authenticationToken = "somePlaystationNetworkAuthToken";

<%= data.branding.codePrefix %>.IdentityService.MergePlaystationNetworkIdentity(
    playstationNetworkId,
    authenticationToken,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * playstationNetworkId = "somePlaystationNetworkId";
const char * authenticationToken = "somePlaystationNetworkAuthToken";

<%= data.branding.codePrefix %>->getIdentityService()->mergePlaystationNetworkIdentity(
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
<TabItem value="dart" label="Dart">
```

```dart
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
    "data": {
        "profileId": "f94f7e2d-3cdd-4fd6-9c28-392f7875e9df"
    },
    "status": 200
}
```

</details>

<details>
<summary>Common Error Code</summary>

### Status Codes

| Code  | Name                    | Description                                                                                                                                                         |
| ----- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one PlaystationNetwork identity for a profile. |

</details>
