# GetCurrentTimezoneOffset
## Overview
Get the timezone offset from UTC.

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
var timeZoneId = "Etc/GMT+12";
var response = {};

response.currentTimeZoneOffset = bridge.utils().getCurrentTimeZoneOffset(timeZoneId);
response;
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var timeZoneId = "Etc/GMT+12";
var response = {};

response.currentTimeZoneOffset = bridge.utils().getCurrentTimeZoneOffset(timeZoneId);
response;
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
  "response": {
   "time": -12
  },
  "success": true
 },
 "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
timeZoneId | The timezone id to compare against UTC.


