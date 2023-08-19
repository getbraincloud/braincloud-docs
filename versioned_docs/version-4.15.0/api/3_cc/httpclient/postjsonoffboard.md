# PostJsonOffboard
## Overview
Queues a JSON formatted document to be posted via HTTP, but does not wait for it to complete. This is useful for calls that you assume will succeed, but you don't want to take the time to wait for them to complete.

Note - if the far-end service returns anything other than a 200 response, an error will be written to the **Monitoring | Global Monitoring | Recent Errors** log.



### Error reason codes
Parameter | Description
--------- | -----------
40443 | Processing exception (message): Invalid service code. Ensure the Web Service has been configured

<PartialServop service_name="httpClient" operation_name="POST_JSON_OFFBOARD" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
//Switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
//Switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
//Switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
//Switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
//Switch to CC tab
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

var postResult = httpClientProxy.postJsonOffboard(serviceCode, path, query, headers, json);
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

var postResult = httpClientProxy.postJsonOffboard(serviceCode, path, query, headers, json);
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
  "data": null,
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
serviceCode | Service code of the external service configured in the Cloud Code - Web Services section of the portal
path | Path to append to the Base URL of the service
query | Map of query parameters
headers | Map of extra headers
json | JSON formatted data to post


