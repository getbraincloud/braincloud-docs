# PingRegions
## Overview
Retrieves associated PingData averages to be used with all associated WithPingData APIs.
Call anytime after GetRegionsForLobbies before proceeding.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.PingRegions(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.PingRegions(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.PingRegions(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.PingRegions(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.PingRegions(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.PingRegions(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```csharp
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.LobbyService.PingRegions(successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

