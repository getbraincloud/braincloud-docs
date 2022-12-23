# UpdateContactEmail
## Overview
Update the user's contact email.



:::tip
Note this is unrelated to email authentication.
:::

<PartialServop service_name="playerState" operation_name="UPDATE_CONTACT_EMAIL" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string contactEmail = "someName@somedomain.com";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStateService.UpdateContactEmail(contactEmail, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *contactEmail = "someName@somedomain.com";
<%= data.branding.codePrefix %>->getPlayerStateService()->updateContactEmail(contactEmail, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *contactEmail = @"someName@somedomain.com";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStateService] updateContactEmail:contactEmail
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String contactEmail = "someName@somedomain.com";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStateService().updateContactEmail(contactEmail, this);

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
var contactEmail = "someName@somedomain.com";

<%= data.branding.codePrefix %>.playerState.updateContactEmail(contactEmail, result =>
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
var contactEmail = "someName@somedomain.com";
var playerStateProxy = bridge.getPlayerStateServiceProxy();

var postResult = playerStateProxy.updateContactEmail(contactEmail);
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
	"service": "playerState",
	"operation": "UPDATE_CONTACT_EMAIL",
	"data": {
		"contactEmail": "someName@somedomain.com"
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
        "contactEmail": "someName@somedomain.com"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
contactEmail | Updated email


