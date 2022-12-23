# GetUploadLowTransferRateTimeout
## Overview
Returns the low transfer rate timeout in seconds.

<PartialServop service_name="event" operation_name="UPDATE_EVENT_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
int timeout = <%= data.branding.codePrefix %>.GetUploadLowTransferRateTimeout();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int timeout = <%= data.branding.codePrefix %>->getUploadLowTransferRateTimeout();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int timeout = [<%= data.branding.codePrefix %> getUploadLowTransferRateTimeout];
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
// N/A
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
sendApiErrorCallbacks | If set to true API error callbacks will be called for every cached message with statusCode CLIENT_NETWORK_ERROR and reasonCode CLIENT_NETWORK_ERROR_TIMEOUT.


