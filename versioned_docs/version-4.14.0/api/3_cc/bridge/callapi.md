# CallAPI
## Overview
A generic method for calling client API services. Useful in some circumstances.

Field | Description
-------------- | -----------
service | The name of the service
operation | The name of the operation to call on the service
serviceData | The parameters to send to the operation

*Note - the API Explorer is a great reference to determine the JSON format of the parameters.*

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
// Construct the parameters
var serviceData = {};
serviceData.leaderboardId = "weekly";
serviceData.score = 100000;
serviceData.data = {};
serviceData.data.nickname = "batdude";

// Make the API Call
var res = bridge.callAPI("leaderboard", "POST_SCORE", serviceData);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
// Construct the parameters
var serviceData = {};
serviceData.leaderboardId = "weekly";
serviceData.score = 100000;
serviceData.data = {};
serviceData.data.nickname = "batdude";

// Make the API Call
var res = bridge.callAPI("leaderboard", "POST_SCORE", serviceData);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

