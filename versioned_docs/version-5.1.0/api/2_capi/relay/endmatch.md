# EndMatch

Terminate the match instance by the owner.

## Method Parameters
Parameter | Description
--------- | -----------
payloadJson | payload data sent in JSON format. It will be relayed to other connnected players.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string payloadJson = "{\"key\":\"value\"}";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.RelayService.EndMatch(payloadJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* payloadJson = "{\"key\":\"value\"}";
<%= data.branding.codePrefix %>->getRelayService()->endMatch(payloadJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```cpp
const char* payloadJson = "{\"key\":\"value\"}";
<%= data.branding.codePrefix %>->getRelayService()->endMatch(payloadJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```cpp
const char* payloadJson = "{\"key\":\"value\"}";
<%= data.branding.codePrefix %>->getRelayService()->endMatch(payloadJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```cpp
const char* payloadJson = "{\"key\":\"value\"}";
<%= data.branding.codePrefix %>->getRelayService()->endMatch(payloadJson, this);
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

