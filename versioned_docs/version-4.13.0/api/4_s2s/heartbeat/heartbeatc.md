# Client Heartbeat
## Overview
This service allows you to send no-op packets to the server to keep the session alive. The default session will expire after 20 minutes.



```
{
    "packetId": 1,
    "messages": [
        {
            "service": "heartbeat",
            "operation": "HEARTBEAT",
            "data": null
        }
    ]
}
```

<PartialServop service_name="heartbeat" operation_name="HEARTBEAT" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```json
{
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": null            
        }
    ]
}
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```json
{
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": null            
        }
    ]
}
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```json
{
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": null            
        }
    ]
}
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```json
{
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": null            
        }
    ]
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```json
{
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": null            
        }
    ]
}
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```json
{
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": null            
        }
    ]
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```json
{
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": null            
        }
    ]
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
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": null            
        }
    ]
}
```
</details>

