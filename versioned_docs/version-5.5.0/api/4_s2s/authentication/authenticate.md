# Authenticate

This service is used to authenticate the server request for the session based protocol.

### Results

| Name      | Description                                |
| --------- | ------------------------------------------ |
| sessionId | String to pass in with subsequent requests |

<PartialServop service_name="authenticationV2" operation_name="AUTHENTICATE" />

## Method Parameters

| Parameter  | Description                      |
| ---------- | -------------------------------- |
| gameId     | Same usage as for simple request |
| serverName | Same usage as for simple request |
| gameSecret | Same usage as for simple request |

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
<TabItem value="dart" label="Dart">
```

```dart
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// S2S call: to view example, switch to Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "appId": "23783",
    "serverName": "S2SExploer_Server",
    "serverSecret": "ec28be0f-19f9-4d76-972d-89a43ddd970a",
    "service": "authenticationV2",
    "operation": "AUTHENTICATE",
    "data": {
        "appId": "23783",
        "serverName": "S2SExploer_Server",
        "serverSecret": "ec28be0f-19f9-4d76-972d-89a43ddd970a"
    }
}
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
    "packetId": 0,
    "messageResponses": [
        {
            "reasonCode": 0,
            "errorResponse": false,
            "data": {
                "heartbeatSeconds": 1890,
                "sessionId": "57s9trm73b9qeqlmnnvij8l2fn"
            },
            "statusCode": 200,
            "statusMessage": null
        }
    ]
}
```

</details>
