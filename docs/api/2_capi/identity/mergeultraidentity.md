# MergeUltraIdentity
## Overview
Merge the profile associated with the provided Ultra credentials with the current profile.



### Status Codes
Code | Name | Description
---- | ---- | -----------
40211 | DUPLICATE_IDENTITY_TYPE | Returned when trying to attach an identity type that already exists for that profile. For instance you can have only one Twitter identity for a profile.

<PartialServop service_name="identity" operation_name="MERGE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string ultraUsername = "ultraUsername";
string ultraIdToken = "ultraIdToken";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.IdentityService.MergeUltraIdentity(
    ultraUsername, ultraIdToken, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* ultraUsername = "ultraUsername";
const char* ultraIdToken = "ultraIdToken";

<%= data.branding.codePrefix %>->getIdentityService()->mergeUltraIdentity(
    ultraUsername,
    ultraIdToken,
    this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString * ultraUsername = @"ultraUsername";
NSString * ultraIdToken = @"ultraIdToken";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService]
		mergeUltraIdentity:ultraUsername
		   		 ultraIdToken:ultraIdToken
              forceCreate:forceCreate
          completionBlock:successBlock
     errorCompletionBlock:failureBlock
                 cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String ultraUsername = "ultraUsername";
String ultraIdToken = "ultraIdToken";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().mergeUltraIdentity(ultraUsername, ultraIdToken, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var ultraUsername = "ultraUsername";
var ultraIdToken = "ultraIdToken";

<%= data.branding.codePrefix %>.identity.mergeUltraIdentity(ultraUsername, ultraIdToken, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
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

## Method Parameters
Parameter | Description
--------- | -----------
ultraUsername | It's what the user uses to log into the Ultra endpoint initially
ultraIdToken | The "id_token" taken from Ultra's JWT.


