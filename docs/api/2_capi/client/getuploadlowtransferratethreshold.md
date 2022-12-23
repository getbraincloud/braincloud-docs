# GetUploadLowTransferRateThreshold
## Overview
Returns the low transfer rate threshold in bytes/sec.

<PartialServop service_name="event" operation_name="UPDATE_EVENT_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
int bytesPerSecThreshold = <%= data.branding.codePrefix %>.GetUploadLowTransferRateThreshold();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int bytesPerSecThreshold = <%= data.branding.codePrefix %>->getUploadLowTransferRateThreshold();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int bytesPerSecThreshold = [<%= data.branding.codePrefix %> getUploadLowTransferRateThreshold];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```javascript
var sessionId = <%= data.branding.codePrefix %>.getSessionId();
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
sendApiErrorCallbacks | If set to true API error callbacks will be called for every cached message with statusCode CLIENT_NETWORK_ERROR and reasonCode CLIENT_NETWORK_ERROR_TIMEOUT.


