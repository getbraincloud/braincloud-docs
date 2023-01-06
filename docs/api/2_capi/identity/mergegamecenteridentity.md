# MergeGameCenterIdentity
## Overview
Merge the profile associated with the specified Game Center identity with the current profile.

NOTE: If using the <%= data.branding.codeWrapper %>, once the merge is complete you should call [<code>SetStoredProfileId</code>](/api/wrapper/setstoredprofileid) in the <%= data.branding.codeWrapper %> with the profileId returned in the Merge call.



<PartialServop service_name="identity" operation_name="MERGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string gameCenterId = "someId";

<%= data.branding.codePrefix %>.IdentityService.MergeGameCenterIdentity(
    gameCenterId,
    SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * gameCenterId = "someId";

<%= data.branding.codePrefix %>->getIdentityService()->mergeGameCenterIdentity(
    gameCenterId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
- (void)mergeGameCenterIdentity:(NSString *)gameCenterId
                completionBlock:(BCCompletionBlock)cb
           errorCompletionBlock:(BCErrorCompletionBlock)ecb
                       cbObject:(BCCallbackObject)cbObject;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public void mergeGameCenterIdentity(String gameCenterId, IServerCallback callback)
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.identity.mergeGameCenterIdentity = function(gameCenterId, callback)
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
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Game Center identity for a profile.

</details>


## Method Parameters
Parameter | Description
--------- | -----------
gameCenterId | The player's game center id  (use the playerID property from the local GKPlayer object)


