# RegisterNetworkErrorCallback

Registers a callback that is invoked for network errors. Note this is only called if EnableNetworkErrorMessageCaching has been set to true.

## Method Parameters

| Parameter | Description           |
| --------- | --------------------- |
| callback  | The callback handler. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.RegisterNetworkErrorCallback(callback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->registerNetworkErrorCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
networkErrorBlock = ^() {  };

[<%= data.branding.codePrefix %> registerNetworkErrorCallback:networkErrorBlock];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.registerNetworkErrorCallback(callback);
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
<TabItem value="dart" label="Dart">
```

```dart
void networkErrorCallback() {
 // ...
}
​
<%= data.branding.codePrefix %>.registerNetworkErrorCallback(networkErrorCallback);
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
