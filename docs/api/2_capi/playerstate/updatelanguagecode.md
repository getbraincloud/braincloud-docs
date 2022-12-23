# UpdateLanguageCode
## Overview
Update user's language code preference on their profile.

<PartialServop service_name="playerState" operation_name="UPDATE_LANGUAGE_CODE" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
int languageCode = "fr";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStateService.UpdateLanguageCode(languageCode, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int languageCode = "fr";
<%= data.branding.codePrefix %>->getPlayerStateService()->updateLanguageCode(languageCode, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int languageCode = "fr";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStateService] updateLanguageCode:languageCode
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
int languageCode = "fr";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStateService().updateLanguageCode(languageCode, this);

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
int languageCode = "fr";

<%= data.branding.codePrefix %>.playerState.updateLanguageCode(languageCode, result =>
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
int languageCode = "fr";
var playerStateProxy = bridge.getPlayerStateServiceProxy();

var postResult = playerStateProxy.updateLanguageCode(languageCode);
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
	"operation": "UPDATE_LANGUAGE_CODE",
	"data": {
		"languageCode": "fr"
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
    "status":200,
    "data":
    {
        "languageCode": "fr"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
languageCode | A string-based language code


