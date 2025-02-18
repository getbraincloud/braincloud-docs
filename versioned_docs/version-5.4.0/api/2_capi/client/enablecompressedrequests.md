# EnableCompressedRequests

Enables sending Gzip compressed packets of requests from client side. Which can significantely decrease response time for requests with large body content.

## Method Parameters

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| enabled   | True if request packets should be compressed |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.EnableCompressedRequests(true);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->enableCompressedRequests(true);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[<%= data.branding.codePrefix %> enableCompressedRequests:true];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.enableCompressedRequests(true);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.enableCompressedRequests(true);
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
<%= data.branding.codePrefix %>.enableCompressedRequests(true);
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
