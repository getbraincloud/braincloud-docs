# ExtendUserStatusWithMax
Stack user's status times with optional maximum active duration (in seconds)

<PartialServop service_name="playerState" operation_name="EXTEND_USER_STATUS_WITH_MAX" />

## Method Parameters
Parameter | Description
--------- | -----------
statusName | Name of the status.
additionalSecs | Add time to existing expiry time.
maxActiveSecs | Maximum duration the status can be active (in seconds). Optional.
details | JSON object to add additional details.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string statusName = "theStatusName";
int additionalSecs = 60;
int maxActiveSecs = 600;
string details = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerstateService.ExtendUserStatusWithMax(statusName, additionalSecs, maxActiveSecs, details, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *statusName = "theStatusName";
int additionalSecs = 60;
int maxActiveSecs = 600;
const char *details = "{}";
<%= data.branding.codePrefix %>.getPlayerstateService().extendUserStatusWithMax(statusName, additionalSecs, maxActiveSecs, details, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *statusName = @"theStatusName";
int additionalSecs = 60;
int maxActiveSecs = 600;
NSString *details = @"{}";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> playerStateService] extendUserStatusWithMax:
                   statusName:statusName
               additionalSecs:additionalSecs
                maxActiveSecs:maxActiveSecs
                      details:details
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String statusName = "theStatusName";
int additionalSecs = 60;
int maxActiveSecs = 600;
String details = "{}";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getPlayerstateService.extendUserStatusWithMax(statusName, additionalSecs, maxActiveSecs, details, this);

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
var statusName = "theStatusName";
var additionalSecs = 60;
var maxActiveSecs = 600;
var details = {};
<%= data.branding.codePrefix %>.playerState.extendUserStatusWithMax(statusName, additionalSecs, maxActiveSecs, details, result =>
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
var statusName = "theStatusName";
var additionalSecs = 60;
var maxActiveSecs = 600;
var details = {};
ServerResponse result = await <%= data.branding.codePrefix %>.playerStateService.extendUserStatusWithMax(statusName:statusName, additionalSecs:additionalSecs, maxActiveSecs:maxActiveSecs, details:details);

if (result.statusCode == 200) {
    print("Success");
} else {
    print("Failed ${result.error['status_message'] ?? result.error}");
}
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Roblox">
```

```lua
local statusName = "theStatusName"
local additionalSecs = 60
local maxActiveSecs = 600
local details = {}
local callback = function(result)
    if result.statusCode == 200 then
        print("Success")
    else
        print("Failed | " .. tostring(result.status))
    end
end
<%= data.branding.codePrefix %>:getPlayerStateService():extendUserStatusWithMax(statusName, additionalSecs, maxActiveSecs, details, callback)
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var statusName = "theStatusName";
var additionalSecs = 60;
var maxActiveSecs = 600;
var details = {};
var playerStateProxy = bridge.getPlayerstateServiceProxy();

var postResult = playerStateProxy.extendUserStatusWithMax(statusName, additionalSecs, maxActiveSecs, details);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"playerState",
    "operation":"EXTEND_USER_STATUS_WITH_MAX",
    "data":{
        "statusName":"theStatusName",
        "additionalSecs":60,
        "maxActiveSecs":600,
        "details":{}
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
    "theStatusName": {
      "activeStart": 1772655961660,
      "statusName": "theStatusName",
      "details": {},
      "activeUntil": 1772656593283
    }
  },
  "status": 200
}
```

</details>
