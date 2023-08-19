# RegisterRTTEventCallback
## Overview
Registers a real-time (RTT) callback for Events. Allows the standard [<code>SendEvent</code>](/api/capi/event/sendevent) call to push updates in real-time if the recipient is online.

> **RTT Event Format**
```
{
    "service": "event",
    "operation": "GET_EVENTS",
    "data": {
        "evId": "5b44f50fe3adc1594bb09c94",
        "eventType": "testEvent",        
        "fromPlayerId": "c3a455de-27f5-4126-a051-0effb1c75fd3",
        "toPlayerId": "44afc271-4e7a-430d-91cc-bca38c76acd0",
        "createdAt": 1531245839578,
        "eventData": {
            "customKey": "customValue"
        },
    }
}
```

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
<%= data.branding.codePrefix %>.RTTService.RegisterRTTEventCallback(rttCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>.RTTService.registerRTTEventCallback(rttCallback);
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
<%= data.branding.codePrefix %>.RTTService.registerRTTEventCallback(rttCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.rttService.registerRTTEventCallback(rttCallback);
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

## Method Parameters
Parameter | Description
--------- | -----------
rttCallback | The RTT Event callback handler.


