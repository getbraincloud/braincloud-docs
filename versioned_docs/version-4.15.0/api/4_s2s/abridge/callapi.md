# CallAPI
## Overview
Generic method for calling S2S API services.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var service = "event";
var operation = "SEND";
var serviceData = {};
serviceData.toId = "02d4e872-d848-4bbe-3a69-137639909b31";
serviceData.eventType = "etype";
serviceData.eventData = {};
var res = bridge.callAPI(service, operation, serviceData);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var service = "event";
var operation = "SEND";
var serviceData = {};
serviceData.toId = "02d4e872-d848-4bbe-3a69-137639909b31";
serviceData.eventType = "etype";
serviceData.eventData = {};
var res = bridge.callAPI(service, operation, serviceData);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

