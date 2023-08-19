# CallAPIForSession
## Overview
This is a generic method for calling client API services with a player session context.

Field | Description
-------------- | -----------
session | The sessionId to make the call in the context of
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
serviceData.toId = "aaaa-bbbb-cccc-dddd";
serviceData.eventType = "hearts";
serviceData.eventData = {};
serviceData.eventData.numHearts = 3;

// Retrieve a session for the specified profile
var session = bridge.getSessionForProfile("eeee-ffff-gggg-hhh");

// Call the API in the context of the retrieved session
var res = bridge.callAPIForSession(session, "event", "SEND", serviceData);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
// Construct the parameters
var serviceData = {};
serviceData.toId = "aaaa-bbbb-cccc-dddd";
serviceData.eventType = "hearts";
serviceData.eventData = {};
serviceData.eventData.numHearts = 3;

// Retrieve a session for the specified profile
var session = bridge.getSessionForProfile("eeee-ffff-gggg-hhh");

// Call the API in the context of the retrieved session
var res = bridge.callAPIForSession(session, "event", "SEND", serviceData);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

