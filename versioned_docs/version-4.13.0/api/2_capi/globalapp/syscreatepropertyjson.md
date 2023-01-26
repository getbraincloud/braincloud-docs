# SysCreatePropertyJson
## Overview
Creates the named global property with the given json value.

<PartialServop service_name="globalApp" operation_name="SYS_CREATE_PROPERTY_JSON" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var globalAppProxy = bridge.getGlobalAppServiceProxy();

var propertyName = "my_property";
var value = {
    "a": 1,
    "b": "two"
};
var category = "my-category";
var description = "this is a description";
var optionsJson = {
    "preserveValue": true
};

var postResult = globalAppProxy.sysCreatePropertyJson(propertyName, value, category, description, optionsJson);
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
	"service": "globalApp",
	"operation": "SYS_CREATE_PROPERTY_JSON",
	"data": {
        "name": "my_property",
        "value": {
            "a": 1,
            "b": "two"
        },
        "category": "my-category",
        "description": "this is a description",
        "optionsJson": {
            "preserveValue": true
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
  "data": {
    "name": "my_property",
    "description": "this is a description",
    "category": "my-category",
    "value": "{\"a\":1,\"b\":\"two\"}",
    "type": "JSON",
    "preserveValue": true
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
name | Name of the global property being created.
value | Property value as JSON
category | Category of the new property
description | Description of the new property
optionsJson | Optional boolean property preserveValue to indicate whether to preserve value during deploy, defaults to false


