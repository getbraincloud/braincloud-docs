# SysGetCDNUrl

Return CDN url for file for clients that cannot handle redirect.

<PartialServop service_name="groupFile" operation_name="SYS_GET_CDN_URL" />

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
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var groupId = "dfsfsffsd";
var fileId = "fdsgfg";
var groupFileProxy = bridge.getGroupFileServiceProxy();

var postResult = groupFileProxy.sysGetCDNUrl(groupId, fileId);
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
  "operation": "SYS_GET_CDN_URL",
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

