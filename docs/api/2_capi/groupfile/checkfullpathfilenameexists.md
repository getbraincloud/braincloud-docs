# CheckFullpathFilenameExists

Check if filename exists for provided full path name.

<PartialServop service_name="groupFile" operation_name="CHECK_FULLPATH_FILENAME_EXISTS" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
fullPathFilename | The full file name with path.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "dfsfsffsd";
string fullPathFilename = "cccc";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupFileService.CheckFullpathFilenameExists(groupId, fullPathFilename, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "dfsfsffsd";
const char *fullPathFilename = "cccc";

<%= data.branding.codePrefix %>->getGroupFileService()->checkFullpathFilenameExists(groupId, fullPathFilename, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"dfsfsffsd";
NSString *fullPathFilename = @"cccc";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupFileService] checkFullpathFilenameExists:groupId
              fullPathFilename:fullPathFilename
               completionBlock:successBlock
          errorCompletionBlock:failureBlock
                      cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String groupId = "dfsfsffsd";
String fullPathFilename = "cccc";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupFileService().checkFullpathFilenameExists(groupId, fullPathFilename, this);

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
var groupId = "dfsfsffsd";
var fullPathFilename = "cccc";

<%= data.branding.codePrefix %>.groupFile.checkFullpathFilenameExists(groupId, fullPathFilename, result =>
{
  var status = result.status;
  console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
var  groupId = "dfsfsffsd";
var  fullPathFilename = "cccc";

ServerResponse result = await <%= data.branding.codePrefix %>.groupFileService.checkFullpathFilenameExists(groupId:groupId, fullPathFilename:fullPathFilename);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "dfsfsffsd";
var fullPathFilename = "cccc";
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.checkFullpathFilenameExists(groupId, fullPathFilename);
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
  "service": "groupFile",
  "operation": "CHECK_FULLPATH_FILENAME_EXISTS",
  "data":
  {
    "groupId": "dfsfsffsd",
    "fullPathFilename": "cccc"
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
    "data": {
        "fileDetails": {
            "treeId": "d9e937cc-750f-4414-962c-838f1af3f34a",
            "fileName": "glog.json",
            "fileSize": 7051,
            "dateUploaded": 1677183768000,
            "etag": "08c580b36ee79773bfec4a3c51bd1b64",
            "acl": {
                "member": 2,
                "other": 0
            },
            "version": 1,
            "url": "https://api.internal.braincloudservers.com/groupfiles/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/d9e937cc-750f-4414-962c-838f1af3f34a/6d938c22-3b8c-4b99-a913-2edafed71a83/V1/glog.json",
            "fileId": "6d938c22-3b8c-4b99-a913-2edafed71a83"
        },
        "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
        "exists": true
    },
    "status": 200
}
```
</details>

