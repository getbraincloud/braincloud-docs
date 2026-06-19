# RegisterGlobalErrorCallback

Registers the Global Error callbacks.

Useful for tracking and logging all errors.

## Method Parameters

| Parameter       | Description                 |
| --------------- | --------------------------- |
| failureCallback | The error callback handler. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.RegisterGlobalErrorCallback(failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->registerGlobalErrorCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
errorCompletionBlock  = ^(NSString *serviceName, NSString *serviceOperation, NSInteger statusCode, NSInteger reasonCode, NSString *jsonError, BCCallbackObject cbObject) { };

[<%= data.branding.codePrefix %> registerGlobalErrorCallback:errorCompletionBlock];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.registerGlobalErrorCallback(callback);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.setErrorCallback(errorCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
void errorCallback(String serviceName, String serviceOperation, int statusCode, int reasonCode, dynamic statusMessage) {
  // ...
}
​
<%= data.branding.codePrefix %>.setErrorCallback(errorCallback);
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
// FAILURE JSON
{
    "status": 403,
    "reason_code": 40300,
    "status_message": "Message describing failure",
    "severity": "ERROR"
}
```

</details>
