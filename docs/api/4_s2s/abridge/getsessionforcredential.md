# GetSessionForCredential

Creates and returns a session for the credentials provided.

## Method Parameters
Parameter | Description
--------- | -----------
externalId | User ID for the given authenticationType
authenticationType | Type of authentication. Full list of types can be found [here](/api/appendix/authtypes).
externalAuthType | Optional parameter to specify the external authenticationType to use for the passed in credentials

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
//Switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
//Switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
//Switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
//Switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
//Switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
//Switch to CC tab
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var externalId = "example@email.com";
var authenticationType  = "Email";
var externalAuthType = "someAuth";
var session = bridge.getSessionForCredential(externalId, authenticationType, externalAuthType);
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

