# SetAuthenticationPacketTimeout
## Overview
Sets the authentication packet timeout which is tracked separately from all other packets. Note that authentication packets are never retried and so this value represents the total time a client would
wait to receive a reply to an authentication API call.

By default this timeout is set to 15 seconds.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
int timeoutInSeconds = 30;
<%= data.branding.codePrefix %>.SetAuthenticationPacketTimeout(timeoutInSeconds);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int timeoutInSeconds = 30;
<%= data.branding.codePrefix %>->setAuthenticationPacketTimeout(timeoutInSeconds);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int timeoutInSeconds = 30;
[<%= data.branding.codePrefix %> setAuthenticationPacketTimeout:timeoutInSeconds];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
int timeoutInSeconds = 30;
<%= data.branding.codePrefix %>.setAuthenticationPacketTimeout(timeoutInSeconds);
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

## Method Parameters
Parameter | Description
--------- | -----------
timeoutSecs | The timeout in seconds.


