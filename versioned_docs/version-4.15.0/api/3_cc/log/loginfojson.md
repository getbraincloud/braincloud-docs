# LogInfoJson
## Overview
Logs an App Info message to the error log.

<PartialServop service_name="log" operation_name="LOG_INFO" / >

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
var errorMessage = "Test info message";
var context = { "example": "json" };
var logProxy = bridge.getLogServiceProxy();

logProxy.logInfoJson(errorMessage, context);

```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var errorMessage = "Test info message";
var context = { "example": "json" };
var logProxy = bridge.getLogServiceProxy();

logProxy.logInfoJson(errorMessage, context);

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
errorMessage | The error message.
context | Additional JSON-format information to include with the message.  


