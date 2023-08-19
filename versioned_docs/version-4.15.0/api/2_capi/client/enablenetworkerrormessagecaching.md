# EnableNetworkErrorMessageCaching
## Overview
Enables the timeout message caching which is disabled by default. Once enabled, if a client side timeout is encountered (i.e. <%= data.branding.productName %> server is unreachable presumably due to the client network being down) the SDK will do the following:

1. cache the currently queued messages to <%= data.branding.productName %>
2. call the network error callback
3. then expect the app to call either:
    - RetryCachedMessages() to retry sending to <%= data.branding.productName %>
    - FlushCachedMessages() to dump all messages in the queue.

Between steps 2 & 3, the app can prompt the user to retry connecting to <%= data.branding.productName %> to determine whether to follow path 3a or 3b.

Note that if path 3a is followed, and another timeout is encountered, the process will begin all over again from step 1.

:::caution
The <%= data.branding.productName %> SDK will cache *all* API calls sent when a timeout is encountered if this mechanism is enabled.
This effectively freezes all communication with <%= data.branding.productName %>. Apps must call either RetryCachedMessages() or FlushCachedMessages() for the <%= data.branding.productName %> SDK to resume sending messages.
ResetCommunication() will also clear the message cache.
:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.EnableNetworkErrorMessageCaching(true);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->enableNetworkErrorMessageCaching(true);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[<%= data.branding.codePrefix %> enableNetworkErrorMessageCaching:true];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.enableNetworkErrorMessageCaching(true);
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
enabled | True if message should be cached on timeout


