# GetChildProfiles
## Overview
Returns a list of all child profiles in child Apps.

<PartialServop service_name="identity" operation_name="GET_CHILD_PROFILES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
bool includeProfileSummaryData = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.IdentityService.GetChildProfiles(includeProfileSummaryData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
bool includeProfileSummaryData = true;
<%= data.branding.codePrefix %>->getIdentityService()->getChildProfiles(includeProfileSummaryData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
bool includeProfileSummaryData = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService] getChildProfiles:includeProfileSummaryData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
boolean includeProfileSummaryData = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().getChildProfiles(includeProfileSummaryData, this);

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
var includeProfileSummaryData = true;

<%= data.branding.codePrefix %>.identity.getChildProfiles(includeProfileSummaryData, result =>
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
var includeProfileSummaryData = true;
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.getChildProfiles(includeProfileSummaryData);
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
	"operation": "GET_CHILD_PROFILES",
	"data": {
		"includeProfileSummaryData": true
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
	"status": 200,
	"data": {
		"children": [{
			"appId": "123456",
			"profileId": "b7h32751-befd-4a89-b6da-cd55hs3b2a86",
			"profileName": "Child1",
			"summaryFriendData": null
		}, {
			"appId": "123457",
			"profileId": "a17b3432-195b-45hf-b1e7-5f78g3462310",
			"profileName": "Child2",
			"summaryFriendData": null
		}]
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
includeSummaryData | Whether to return the summary friend data along with this call


