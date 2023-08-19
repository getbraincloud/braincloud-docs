# InsertEndOfMessageBundleMarker
## Overview
Inserts a marker which will tell the <%= data.branding.productName %> comms layer to close the message bundle off at this point. Any messages queued before this method was called will likely be bundled together in the next send to the server.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.InsertEndOfMessageBundleMarker();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->insertEndOfMessageBundleMarker();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[<%= data.branding.codePrefix %> insertEndOfMessageBundleMarker];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.insertEndOfMessageBundleMarker();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.insertEndOfMessageBundleMarker();
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
<%= data.branding.codePrefix %>.insertEndOfMessageBundleMarker();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
<%= data.branding.codePrefix %>.insertEndOfMessageBundleMarker();
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

