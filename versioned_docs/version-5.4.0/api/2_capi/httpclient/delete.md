# Delete

Deletes a document.

<PartialServop service_name="httpClient" operation_name="DELETE" / >

## Method Parameters
Parameter | Description
--------- | -----------
serviceCode | Service code of the external service configured in the Cloud Code - Web Services section of the portal
path | Path to append to the Base URL of the service
query | Map of query parameters
headers | Map of extra headers
json | JSON formatted data to send

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var serviceCode = "webService";
var path = "resource/dir";
var query = {
    "parmName": "value"
};
var headers = {
    "headerName": "value"
};
var json = {
    "key": "value"
};
var httpClientProxy = bridge.getHttpClientServiceProxy();

var postResult = httpClientProxy.delete(serviceCode, path, query, headers, json);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var serviceCode = "webService";
var path = "resource/dir";
var query = {
    "parmName": "value"
};
var headers = {
    "headerName": "value"
};
var json = {
    "key": "value"
};
var httpClientProxy = bridge.getHttpClientServiceProxy();

var postResult = httpClientProxy.delete(serviceCode, path, query, headers, json);
if (postResult.status == 200) {
    // Success!
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
    "text": "text message",
    "statusCode": 200
  },
  "status": 200
}
```
</details>

