# RegisterRTTMessagingCallback
## Overview
Registers a callback for RTT Message updates.

<PartialServop service_name="" operation_name="" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
RTTCallback rttCallback = response =>
{
   Debug.Log(response);
};
<%= data.branding.codePrefix %>.RTTService.RegisterRTTMessagingCallback(rttCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>.RTTService.registerRTTMessagingCallback(rttCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
Coming soon!
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.RTTService.registerRTTMessagingCallback(rttCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.rttService.registerRTTMessagingCallback(rttCallback);
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


</details>

## Method Parameters
Parameter | Description
--------- | -----------
rttCallback | The RTT Chat callback handler.


