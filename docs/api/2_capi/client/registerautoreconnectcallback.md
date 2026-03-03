# RegisterAutoReconnectCallback

Registers a callback handler that is invoked whenever the client automatically re-authenticates due to session expiration. The callback receives a JSON string describing the result of the re-authentication attempt, whether successful or failed.

This callback is used in conjunction with [EnableAutoReconnect](/api/wrapper/enableautoreconnect) on the wrapper (or `EnableAutoReconnect` on the comms layer directly).

## Method Parameters

| Parameter | Description                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| callback  | A `LongSessionCallback` delegate that takes a JSON response string as its only parameter. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
void autoReconnectCallback(string jsonResponse)
{
    // handle re-authentication result
}

<%= data.branding.codePrefix %>.RegisterAutoReconnectCallback(autoReconnectCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->registerAutoReconnectCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
BCLongSessionCompletionBlock autoReconnectBlock = ^(NSString *jsonResponse) {
    // handle re-authentication result
};

[<%= data.branding.codePrefix %> registerAutoReconnectCallback:autoReconnectBlock];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.registerAutoReconnectCallback(callback);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.registerAutoReconnectCallback(autoReconnectCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
void autoReconnectCallback(String jsonResponse) {
    // handle re-authentication result
}

<%= data.branding.codePrefix %>.registerAutoReconnectCallback(autoReconnectCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local function autoReconnectCallback(jsonResponse)
    -- handle re-authentication result
end

<%= data.branding.codePrefix %>:registerAutoReconnectCallback(autoReconnectCallback)
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

```r
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```json
// On success - authentication response JSON
{
    "status": 200,
    "data": {
        "profileId": "1234-1234-1234-1234",
        "newUser": false
    }
}

// On failure - error response JSON
{
    "status": 403,
    "reason_code": 40300,
    "status_message": "Message describing failure",
    "severity": "ERROR"
}
```

</details>
