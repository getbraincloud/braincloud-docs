# GetTeamInfo
## Overview
Retrieves the team info for the current assocaited session as a JSON.

:::tip
For the Peer bridge call, the <em>getTeamInfo()</em> call will return the team info for the app id associated with the server session. The <em>getClientTeamInfo()</em> call will return the team info for the app id associated with the client session IF the client session exists. If it doesn’t exist, the team info for the app id associated with the server session.<br />
For the standard bridge call, both versions return the team info for the app id associated with the player’s session.<br />
For the S2S bridge call, both versions return the team info for the app id associated with the server session.
:::

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var teamInfo = bridge.getTeamInfo();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var teamInfo = bridge.getTeamInfo();
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```json
{
  "teamName": "deployteam",
  "teamId": "b35d984b-7c88-4a00-a632-49c207053dab"
}
```
</details>

