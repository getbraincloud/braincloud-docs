# HeadRequest
## Overview
Executes a HEAD request.

<PartialServop service_name="httpClient" operation_name="HEAD" / >

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
var query = {"parmName": "value"};
var headers = {"headerName": "value"};
var httpClientProxy = bridge.getHttpClientServiceProxy();

var postResult = httpClientProxy.headRequest(serviceCode, path, query, headers);
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
var query = {"parmName": "value"};
var headers = {"headerName": "value"};
var httpClientProxy = bridge.getHttpClientServiceProxy();

var postResult = httpClientProxy.headRequest(serviceCode, path, query, headers);
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
    "status": 200,
    "data": {
        "statusCode": 200
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
serviceCode | Service code of the external service configured in the Cloud Code - Web Services section of the portal
path | Path to append to the Base URL of the service
query |	Map of query parameters
headers | Required headers


