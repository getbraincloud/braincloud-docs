# RegisterSystemCallback

Register callback for RelayServer system messages.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
RSDataCallback rsDataCallback = (response) =>
{
    Debug.Log(string.Format("Success | {0}", response));  
};

<%= data.branding.codePrefix %>.RelayService.RegisterSystemCallback(rsDataCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->registerSystemCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->registerSystemCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->registerSystemCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```cpp
<%= data.branding.codePrefix %>->getRelayService()->registerSystemCallback(this);
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

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

