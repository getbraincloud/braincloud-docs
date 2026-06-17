# CanReconnect

Returns true if there is a stored profile id and anonymous id on the device.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.CanReconnect();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->canReconnect();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[<%= data.branding.codePrefix %> canReconnect:successBlock
                   errorCompletionBlock:failureBlock
                               cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.canReconnect();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.canReconnect();
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
<%= data.branding.codePrefix %>.canReconnect();
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
<%= data.branding.codePrefix %>:canReconnect()
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
N/A
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

## Return Value

boolean
