# GetResponseJson
## Overview
```
{
    "packetId": 1,
    "messages": [
        {
            "service": "httpClient",
            "operation": "GET_RESPONSE_JSON",
            "data": {
                "serviceCode": 1,
                "path": "path/to/resource",
                "query": {
                    "1": "Player Name",
                    "2": 2235
                },
                "headers": {
                    "1": "Player Name",
                    "2": 2235
                }
            }
        }
    ]
}
```

This operation retrieves a JSON document from an external web site.




### Results
Name | Description
--------- | -----------
response | JSON formatted response

<PartialServop service_name="httpClient" operation_name="GET_RESPONSE_JSON" / >

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
var httpClientProxy = bridge.getHttpClientServiceProxy();

var postResult = httpClientProxy.getResponseJson(serviceCode, path, query, headers);
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
	"service": "httpClient",
	"operation": "GET_RESPONSE_JSON",
	"data": {
		"serviceCode": "webService",
		"path": "resource/dir",
		"query": {
			"parmName": "value"
		},
		"headers": {
			"headerName": "value"
		}
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
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": {
                "response": {
                    "result": "Result content"
                }
            }
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
serviceCode | Service code of the external service configured in the Cloud Code - Web Services section of the portal. 
path | Path to append to the Base URL of the service. 
query | Optional map of query values. 
headers | Optional map of extra headers. 


