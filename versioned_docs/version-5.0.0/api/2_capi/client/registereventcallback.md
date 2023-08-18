# RegisterEventCallback
## Overview
:::caution
This method is now deprecated. For real-time events, you should use the RTT API method,  <strong>RegisterRTTEventCallback()</strong>, instead.
:::

Sets a callback handler for any out of band event messages that come from <%= data.branding.productName %>.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.RegisterEventCallback(callbackFunction);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->registerEventCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
eventBlock = ^(NSString *eventsJson) {  };

[<%= data.branding.codePrefix %> registerEventCallback:eventBlock];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.registerEventCallback(callback);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.registerEventCallback(eventCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
<%= data.branding.codePrefix %>.registerEventCallback(eventCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
<%= data.branding.codePrefix %>.registerEventCallback(eventCallback);
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
    "events": [
        {
            "fromPlayerId": "178ed06a-d575-4591-8970-e23a5d35f9df",
            "eventId": 3967,
            "createdAt": 1441742105908,
            "gameId": "123",
            "toPlayerId": "178ed06a-d575-4591-8970-e23a5d35f9df",
            "eventType": "test",
            "eventData": {
                "testData": 117
            }
        }
    ]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
eventCallback | A function which takes a JSON string as it's only parameter.


