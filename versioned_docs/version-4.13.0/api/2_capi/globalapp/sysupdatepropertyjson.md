# SysUpdatePropertyJson
## Overview
Updates the named global property with the given json value. Note that the property must already be created for the app.

<PartialServop service_name="globalApp" operation_name="SYS_UPDATE_PROPERTY_JSON" / >

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

var propertyName = "initialHealth";
var jsonValue = {};
jsonValue.health = 6;
jsonValue.regen = 1;

var postResult = globalAppProxy.sysUpdatePropertyJson( propertyName, jsonValue );
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
	"operation": "SYS_UPDATE_PROPERTY_JSON",
	"data": {
        "name": "initialHealth",
        "value": {
            "health": 6,
            "regen": 1
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
    "status": 200,
    "data": null
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
name | The name of the property to update
value | The JSON value to set the property to


