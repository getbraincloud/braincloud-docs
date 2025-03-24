# RunScriptAndLogoutOnApplicationQuit

Execute a script on the server and Logout in one frame, meant to be used when application closes/exits

## Method Parameters

Parameter | Description
--------- | -----------
forgetUser | Set as true to clear profile ID that is saved, false to save it.
scriptName | The name with its full path on the server to be executed.
jsonScriptData | Data to be sent to the script in json format.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
bool forgetUser = true;
string scriptName = "path/to/script1";
string jsonScriptData = "{\"key\":\"value\"}";

<%= data.branding.codePrefix %>.RunScriptAndLogoutOnApplicationQuit(forgetUser, scriptName, jsonScriptData);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// N/A
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

