# GetGlobalCDNUrl
## Overview
:::tip
This method was added to support clients (like very old versions of Unity - i.e. circa 2016) that cannot handle HTTP Redirects. This method allows clients to <em>pre-resolve</em> the CDN endpoint for the file to download.<br />
<br />
This call is not required in the great majority of cases. Just use the regular file download URL and the platform will automatically re-direct the client to the appropriate CDN URL.
:::

Returns the CDN URL for the specified file.

<PartialServop service_name="globalFileV3" operation_name="GET_GLOBAL_CDN_URL" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string fileId = "hjvfsghguhuhrtghgh";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GlobalFileService.GetGlobalCDNUrl(fileId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *fileId = "hjvfsghguhuhrtghgh";
<%= data.branding.codePrefix %>->getGlobalFileService()->getGlobalCDNUrl(fileId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *fileId = @"hjvfsghguhuhrtghgh";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> globalFileService] getGlobalCDNUrl:fileId
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String fileId = "hjvfsghguhuhrtghgh";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGlobalFileService().getGlobalCDNUrl(fileId, this);

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
var fileId = "hjvfsghguhuhrtghgh";

<%= data.branding.codePrefix %>.globalFile.getGlobalCDNUrl(fileId, result =>
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
var fileId = "hjvfsghguhuhrtghgh";
var globalFileProxy = bridge.getGlobalFileV3ServiceProxy();

var postResult = globalFileProxy.getGlobalCDNUrl(fileId);

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
	"service": "globalFileV3",
	"operation": "GET_GLOBAL_CDN_URL",
	"data": {
		"fileId": "hjvfsghguhuhrtghgh"
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
        "appServerUrl": "https://api.braincloudservers.com/...f434b1db538b/f/uploadsimplefile.txt",
        "cdnUrl": "https://d2b6zwnvr1nyug.cloudfront.net/bc/g/20001/u/107b3aa9-0d9f-4e90-af..."
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
fileId | File ID


