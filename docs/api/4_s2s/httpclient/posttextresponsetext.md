# PostTextResponseText
## Overview
```
{
    "packetId": 1,
    "messages": [
        {
            "service": "httpClient",
            "operation": "POST_TEXT_RESPONSE_TEXT",
            "data": {
                "serviceCode": 1,
                "path": "path/to/resource",
                "headers": {
                    "1": "Player Name",
                    "2": 2235
                },
                "text": "Text doc"
            }
        }
    ]
}
```

This operation posts a Text document and expects a Text document in response.




### Results
Name | Description
--------- | -----------
response | Text response

<PartialServop service_name="httpClient" operation_name="POST_TEXT_RESPONSE_TEXT" / >

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
var headers = {
	"headerName": "value"
};
var text = "text string";
var httpClientProxy = bridge.getHttpClientServiceProxy();

var postResult = httpClientProxy.postTextResponseText(serviceCode, path, headers, text);
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
	"operation": "POST_TEXT_RESPONSE_TEXT",
	"data": {
		"serviceCode": "webService",
		"path": "resource/dir",
		"headers": {
			"headerName": "value"
		},
		"text": "text string"
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
                "response": "Text response"
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
headers | Optional map of extra headers. 
text | A text document. 


