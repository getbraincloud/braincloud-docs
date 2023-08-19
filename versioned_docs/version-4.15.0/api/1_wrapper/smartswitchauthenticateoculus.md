# SmartSwitchAuthenticateOculus
## Overview
Smart Switch Authenticate will logout of the current profile, and switch to the new authentication type.
In event the current session was previously an anonymous account, the smart switch will delete that profile.
Use this function to keep a clean designflow from anonymous to signed profiles.

Authenticate the user with <%= data.branding.productName %> using their Oculus Credentials.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string userId = "userId";
string nonce = "nonce";
bool forceCreate = true;

<%= data.branding.codePrefix %>.SmartSwitchAuthenticateOculus(
    userId, nonce, forceCreate, SuccessCallback, FailureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char* userId = "userId";
const char* nonce = "nonce";
bool forceCreate = true;

<%= data.branding.codePrefix %>->smartSwitchAuthenticateOculus(
    userId,
    nonce,
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
String userId = "userId";
String nonce = "nonce";
boolean forceCreate = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.smartSwitchAuthenticateOculus(userId, nonce, forceCreate, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
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
userId | The Oculus ID of the user
nonce | The returned nonce from the Oculus Platform SDK
forceCreate | Should a new profile be created for this user if the account does not exist?


