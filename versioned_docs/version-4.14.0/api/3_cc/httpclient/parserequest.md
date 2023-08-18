# ParseRequest
## Overview
Makes a Parse HTTP get.

<PartialServop service_name="httpClient" operation_name="PARSE_REQUEST" / >

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
var path = "1/users/";
var query = {
    "where": "{\"email\":{\"$regex\":\"test.com$\"}}"
};
var sessionToken = "r:jKjIHF8y9eDIKAixXpeaoUTlj";
var httpClientProxy = bridge.getHttpClientServiceProxy();

var postResult = httpClientProxy.parseRequest(path, query, sessionToken);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var path = "1/users/";
var query = {
    "where": "{\"email\":{\"$regex\":\"test.com$\"}}"
};
var sessionToken = "r:jKjIHF8y9eDIKAixXpeaoUTlj";
var httpClientProxy = bridge.getHttpClientServiceProxy();

var postResult = httpClientProxy.parseRequest(path, query, sessionToken);
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
        "statusCode": 200,
        "json": {
            "key": "value"
        }
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
path | Path to append to the Base URL of the service
query | Map of query parameters
sessionToken | Parse session token


