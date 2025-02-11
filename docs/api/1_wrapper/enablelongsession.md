# EnableLongSession

Maintains the user's session alive by calling the reconnect method upon detecting the expiration of the user's session.

## Method Parameters

| Parameter | Description                           |
| --------- | ------------------------------------- |
| enabled   | True if long-sesson should be enabled |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.EnableLongSession(true);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->enableLongSession(true);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> enableLongSession:true
                        completionBlock:successBlock
                   errorCompletionBlock:failureBlock
                               cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.enableLongSession(true);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.enableLongSession(true);
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
<%= data.branding.codePrefix %>.enableLongSession(true);
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

<details>
<summary>JSON Response</summary>

```json
// N/A
```

</details>
