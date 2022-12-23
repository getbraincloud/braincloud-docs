# GetSessionId
## Overview
Returns the session id if a connection with <%= data.branding.productName %> has been established.

<PartialServop service_name="event" operation_name="UPDATE_EVENT_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string sessionId = <%= data.branding.codePrefix %>.GetSessionId();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char * sessionId = <%= data.branding.codePrefix %>->getSessionId();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
const char * sessionId = [<%= data.branding.codePrefix %> sessionId];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String sessionId = <%= data.branding.codePrefix %>.getSessionId();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var sessionId = <%= data.branding.codePrefix %>.getSessionId();
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
var sessionId = <%= data.branding.codePrefix %>.getSessionId();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
var sessionId = <%= data.branding.codePrefix %>.getSessionId();
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


