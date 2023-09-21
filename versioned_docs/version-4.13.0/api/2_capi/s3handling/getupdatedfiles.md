# GetUpdatedFiles
## Overview
Using the array of file details sent, returns the current details of any of those files as well as an indication as to whether the file has changed via the "updated" flag.

<PartialServop service_name="s3Handling" operation_name="GET_UPDATED_FILES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string category = "Tuning";
string fileDetails = "[{\"fileId\":\"hjvfsghguhuhrtghgh\",\"shortName\":\"short\",\"fileName\":\"fname\",\"relativeUrl\":\"http://\",\"absoluteUrl\":\"http://\",\"category\":\"Tuning\",\"date\":100000000000,\"md5Hash\":\"njf8ehg8tr7htgheguhh\"}]";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.S3HandlingService.GetUpdatedFiles(category, fileDetails, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *category = "Tuning";
const char *fileDetails = "[{\"fileId\":\"hjvfsghguhuhrtghgh\",\"shortName\":\"short\",\"fileName\":\"fname\",\"relativeUrl\":\"http://\",\"absoluteUrl\":\"http://\",\"category\":\"Tuning\",\"date\":100000000000,\"md5Hash\":\"njf8ehg8tr7htgheguhh\"}]";
<%= data.branding.codePrefix %>->getS3HandlingService()->getUpdatedFiles(category, fileDetails, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *category = @"Tuning";
NSString *fileDetails = @"[{\"fileId\":\"hjvfsghguhuhrtghgh\",\"shortName\":\"short\",\"fileName\":\"fname\",\"relativeUrl\":\"http://\",\"absoluteUrl\":\"http://\",\"category\":\"Tuning\",\"date\":100000000000,\"md5Hash\":\"njf8ehg8tr7htgheguhh\"}]";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> s3HandlingService] getUpdatedFiles:category
                fileDetails:fileDetails
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String category = "Tuning";
String fileDetails = "[{\"fileId\":\"hjvfsghguhuhrtghgh\",\"shortName\":\"short\",\"fileName\":\"fname\",\"relativeUrl\":\"http://\",\"absoluteUrl\":\"http://\",\"category\":\"Tuning\",\"date\":100000000000,\"md5Hash\":\"njf8ehg8tr7htgheguhh\"}]";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getS3HandlingService().getUpdatedFiles(category, fileDetails, this);

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
var category = "Tuning";
var fileDetails = [
    {
        "fileId": "hjvfsghguhuhrtghgh",
        "shortName": "short",
        "fileName": "fname",
        "relativeUrl": "http://",
        "absoluteUrl": "http://",
        "category": "Tuning",
        "date": 100000000000,
        "md5Hash": "njf8ehg8tr7htgheguhh"
    }
];

<%= data.branding.codePrefix %>.s3Handling.getUpdatedFiles(category, fileDetails, result =>
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
var category = "Tuning";
var fileDetails = [
    {
        "fileId": "hjvfsghguhuhrtghgh",
        "shortName": "short",
        "fileName": "fname",
        "relativeUrl": "http://",
        "absoluteUrl": "http://",
        "category": "Tuning",
        "date": 100000000000,
        "md5Hash": "njf8ehg8tr7htgheguhh"
    }
];
var s3HandlingProxy = bridge.getS3HandlingServiceProxy();

var postResult = s3HandlingProxy.getUpdatedFiles(category, fileDetails);
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
	"operation": "GET_UPDATED_FILES",
	"data": {
		"category": "Tuning",
		"fileDetails": [
			{
				"fileId": "hjvfsghguhuhrtghgh",
				"shortName": "short",
				"fileName": "fname",
				"relativeUrl": "http://",
				"absoluteUrl": "http://",
				"category": "Tuning",
				"date": 100000000000,
				"md5Hash": "njf8ehg8tr7htgheguhh"
			}
		]
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
        "fileDetails": [{
            "gameId": "20001",
            "fileId": "3780516b-14f8-4055-8899-8eaab6ac7e82",
            "shortName": "TestDoc1",
            "fileName": "testDoc1.txt",
            "type": "g",
            "subType": "cust",
            "category": null,
            "fileSize": 4,
            "dateUploaded": 1437154770000,
            "relativeUrl": "/cust/testDoc1.txt",
            "absoluteUrl": "http://api.braincloudservers.com/s3/portal/g/20001/cust/testDoc1.txt",
            "md5Hash": "d41d8cd98f00b204e9800998ecf8427e",
            "md5HashHex" : "b895454d7210f7cb84aab76289ffd39c",
            "updated" : false
        },
        {
            "gameId": "20001",
            "fileId": "f6e516b-14f8-4055-8899-8eaabefd7e82",
            "shortName": "TestDoc2",
            "fileName": "testDoc2.txt",
            "type": "g",
            "subType": "cust",
            "category": null,
            "fileSize": 4,
            "dateUploaded": 1437154770000,
            "relativeUrl": "/cust/testDoc2.txt",
            "absoluteUrl": "http://api.braincloudservers.com/s3/portal/g/20001/cust/testDoc2.txt",
            "md5Hash": "d41d8cd98f00b204e9800998ecf8427e",
            "md5HashHex" : "b895454d7210f7cb84aab76289ffd39c",
            "updated" : true
        }]
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
category | Category of files on server to compare against
fileDetails | An array of file details


