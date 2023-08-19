# SmartSwitchAuthenticatePlaystation5
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles.

Authenticate the user with <%= data.branding.productName %> using their Playstation5 Credentials.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string accountId = "accountId";
string authToken = "authToken";
bool forceCreate = true;

<%= data.branding.codePrefix %>.SmartSwitchAuthenticatePlaystation5(
    accountId, authToken, forceCreate, SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* accountId = "accountId";
const char* authToken = "authToken";
bool forceCreate = true;

<%= data.branding.codePrefix %>->smartSwitchAuthenticatePlaystation5(
    accountId,
    authToken,
    forceCreate,
    this);
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

<details>
<summary>JSON Response</summary>

```cfscript
// N/A
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
accountId | The Playstation5 ID of the user
authToken | The validated token from the Playstation5 SDK
forceCreate | Should a new profile be created for this user if the account does not exist?


