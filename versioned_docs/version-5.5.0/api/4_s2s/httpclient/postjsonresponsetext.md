# PostJsonResponseText

Posts a JSON document, expects a text response.

<PartialServop service_name="httpClient" operation_name="POSTEXT" />

## Method Parameters

| Parameter   | Description                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| serviceCode | Service code of the external service configured in the Cloud Code - Web Services section of the portal. |
| path        | Path to append to the Base URL of the service.                                                          |
| headers     | A map of extra headers.                                                                                 |
| json        | JSON formatted data to post.                                                                            |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var serviceCode = "webService";
var path = "resource/dir";
var headers = {
	"headerName": "value"
};
var json = {
	"key": "value"
};
var httpClientProxy = bridge.getHttpClientServiceProxy();

var postResult = httpClientProxy.postJsonResponseText(serviceCode, path, headers, json);
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
  "serviceCode": "webService",
  "path": "resource/dir",
  "headers": {
    "headerName": "value"
  },
  "json": {
    "key": "value"
  }
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
