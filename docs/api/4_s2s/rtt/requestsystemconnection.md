# RequestSystemConnection
Request a system RTT connection.

<PartialServop service_name="rttRegistration" operation_name="REQUEST_SYSTEM_CONNECTION" />

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
<TabItem value="r" label="Raw">
```

```r
{
    "service":"rttRegistration",
    "operation":"REQUEST_SYSTEM_CONNECTION"
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
  "data": {
    "endpoints": [
      {
        "protocol": "ws",
        "port": 443,
        "host": "evsweba-baas.braincloudservers.com",
        "ssl": true,
        "ca": "GoDaddy"
      }
    ],
    "auth": {
      "X-APPID": "13229",
      "X-RTT-SECRET": "N@n@n@N@n@n@N@n@n@N@n@n@B@tm@n!"
    }
  },
  "status": 200
}
```

</details>

