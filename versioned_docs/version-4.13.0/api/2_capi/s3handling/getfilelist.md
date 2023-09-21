# GetFileList
## Overview
Retrieves the details of custom files stored on the server.

<PartialServop service_name="s3Handling" operation_name="GET_FILE_LIST" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.S3HandlingService.GetFileList(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getS3HandlingService()->getFileList(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> s3HandlingService] getFileList:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getS3HandlingService().getFileList(this);

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

<%= data.branding.codePrefix %>.s3Handling.getFileList(result =>
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
var s3HandlingProxy = bridge.getS3HandlingServiceProxy();

var postResult = s3HandlingProxy.getFileList();
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
	"service": "s3Handling",
	"operation": "GET_FILE_LIST",
	"data": {}
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
        "fileDetails": [{
            "gameId": "12311331",
            "fileId": "3780516b-14f8-4055-8899-8eaab6ac7e82",
            "shortName": "Test Doc",
            "fileName": "testDoc.txt",
            "type": "g",
            "subType": "cust",
            "category": null,
            "fileSize": 4,
            "dateUploaded": 1437154770000,
            "relativeUrl": "/cust/testDoc.txt",
            "absoluteUrl": "http://api.braincloudservers.com/s3/portal/g/12311331/cust/testDoc.txt",
            "md5Hash": "d41d8cd98f00b204e9800998ecf8427e",
            "md5HashHex" : "b895454d7210f7cb84aab76289ffd39c"
        }]
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
category | Category of files to retrieve


