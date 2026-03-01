# GetCDNUrl

Return CDN url for file for clients that cannot handle redirect.

<PartialServop service_name="groupFile" operation_name="GET_CDN_URL" />

## Method Parameters
Parameter | Description
--------- | -----------
groupId | The id of the group.
fileId | The id of the file.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string groupId = "dfsfsffsd";
string fileId = "fdsgfg";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GroupFileService.GetCDNUrl(groupId, fileId, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *groupId = "dfsfsffsd";
const char *fileId = "fdsgfg";

<%= data.branding.codePrefix %>->getGroupFileService()->getCDNUrl(groupId, fileId, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *groupId = @"dfsfsffsd";
NSString *fileId = @"fdsgfg";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> groupFileService] getCDNUrl:groupId
                        fileId:fileId
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
String fileId = "fdsgfg";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGroupFileService().getCDNUrl(groupId, fileId, this);

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
var fileId = "fdsgfg";

<%= data.branding.codePrefix %>.groupFile.getCDNUrl(groupId, fileId, result =>
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
var  fileId = "fdsgfg";

ServerResponse result = await <%= data.branding.codePrefix %>.groupFileService.getCDNUrl(groupId:groupId, fileId:fileId);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local groupId = "dfsfsffsd"
local fileId = "fdsgfg"

local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end

<%= data.branding.codePrefix %>:getGroupFileService():getCDNUrl(groupId, fileId, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "dfsfsffsd";
var fileId = "fdsgfg";
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.getCDNUrl(groupId, fileId);
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
  "operation": "GET_CDN_URL",
  "data":
  {
    "groupId": "dfsfsffsd",
    "fileId": "fdsgfg"
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
        "cdnUrl": "https://cdn-2022-internal.braincloudservers.com/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/d9e937cc-750f-4414-962c-838f1af3f34a/6d938c22-3b8c-4b99-a913-2edafed71a83/V1/glog.json?Expires=1677524402&Signature=Cymd~D94yLPZy4CKyn7FwRxmIvOY9YaHGqL6sMoGCkK8EmZOxXcKAztYZPZRFZdyHlWMhF8lpwasJFxiq6oOAwSEsjtQrHzs4tzO17QBzoLHabqH37H1Rre2LybmdIgVu5h7k3iFuggBvXt5QR1oTMEZPJ1Wn5TAaByj0VywfXkx2eXxKnIBm1JkccjP~IAjC9may22QduZNWivTQuu2jZG5bdjq3x96BWUMbgON2XWfyZCqSV4OFKeIN2LCc-QR2OvL6x-4VJF1nepBXOkvX-oC~WpkbEJ21ARZ9wtKhTubA~UAq0THmmR-PZb070NeSdh4OYsEeDUSXraaob7E6Q__&Key-Pair-Id=KG07XY8JT6H1V",
        "groupId": "2bf538d1-19ea-4e14-9862-f979215e09b7",
        "appServerUrl": "https://api.internal.braincloudservers.com/files/bc/g/23782/gr/2bf538d1-19ea-4e14-9862-f979215e09b7/d9e937cc-750f-4414-962c-838f1af3f34a/6d938c22-3b8c-4b99-a913-2edafed71a83/V1/glog.json"
    },
    "status": 200
}
```
</details>

