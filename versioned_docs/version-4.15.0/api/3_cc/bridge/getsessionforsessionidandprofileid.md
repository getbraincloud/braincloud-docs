# GetSessionForSessionIdAndProfileId
## Overview
Retrieves a session object based on the provided sessionId and profileId. Can be passed into the proxy service getter methods.

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
var sessionId = "the-session-id";
var profileId = "the-profile-id";

var session = bridge.getSessionForSessionIdAndProfileId(String sessionId, String profileId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var sessionId = "the-session-id";
var profileId = "the-profile-id";

var session = bridge.getSessionForSessionIdAndProfileId(String sessionId, String profileId);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
sessionId | String that identifies session. Session must be active.
profileId | String that identifies profile. Must match session profile.


