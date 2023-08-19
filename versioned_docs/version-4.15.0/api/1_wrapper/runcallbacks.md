# RunCallbacks
## Overview
Run callbacks, to be called once per frame from your main thread

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp

//Step 2:   N/A. The <%= data.branding.productName %> Wrapper Updates itself using Unity MonoBehavior Update
//          However, if you are not using Unity or not using the <%= data.branding.codeWrapper %> as a GameObject, call Update in your own update loop
<%= data.branding.codePrefix %>.Update();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->runCallbacks();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[<%= data.branding.codePrefix %> runCallbacks];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.runCallbacks();
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

