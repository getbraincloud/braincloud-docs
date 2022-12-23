# UpdateUserPictureUrl
## Overview
Update User picture URL.

<PartialServop service_name="playerState" operation_name="UPDATE_PICTURE_URL" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string userPictureUrl = "someURL";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStateService.UpdateUserPictureUrl(userPictureUrl, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *userPictureUrl = "someURL";
<%= data.branding.codePrefix %>->getPlayerStateService()->updateUserPictureUrl(userPictureUrl, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *userPictureUrl = @"someURL";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStateService] updateUserPictureUrl:userPictureUrl
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String userPictureUrl = "someURL";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStateService().updateUserPictureUrl(userPictureUrl, this);

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
var userPictureUrl = "someURL";

<%= data.branding.codePrefix %>.playerState.updateUserPictureUrl(userPictureUrl, result =>
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
var userPictureUrl = "someURL";
var playerStateProxy = bridge.getPlayerStateServiceProxy();

var postResult = playerStateProxy.updateUserPictureUrl(userPictureUrl);
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
	"operation": "UPDATE_PICTURE_URL",
	"data": {
		"userPictureUrl": "someURL"
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
        "playerPictureUrl": "https://some.domain.com/mypicture.jpg"
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
pictureUrl | URL to apply


