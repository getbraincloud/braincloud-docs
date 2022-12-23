# DeregisterEventCallback
## Overview
Deregisters the event callback.

<PartialServop service_name="event" operation_name="UPDATE_EVENT_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.DeregisterEventCallback();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->deregisterEventCallback();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[<%= data.branding.codePrefix %> deregisterEventCallback];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.deregisterEventCallback();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.deregisterEventCallback();
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
<%= data.branding.codePrefix %>.deregisterEventCallback();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
<%= data.branding.codePrefix %>.deregisterEventCallback();
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```r
{
	"service": "event",
	"operation": "UPDATE_EVENT_DATA",
	"data": {
		"evId": "hexString",
		"eventData": {
			"someMapAttribute": "someValue"
		}
	}
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
toProfileId | The id of the player who is being sent the event
eventType | The user-defined type of the event.
eventData | The user-defined data for this event encoded in JSON.


