# RegisterServer
## Overview
Register a new server.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// S2S call: to view example, switch to the Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "rttRegistration",
	"operation": "REGISTER_SERVER",
	"data": {
		"serverType": "evs",
		"internalIp": "127.0.0.1",
		"externalEndpoints": [
			{
				"protocol": "http",
				"sslEnabled": true,
				"port": 6666
			}
		],
		"rttServerId": "",
		"clusterId": ""
	}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

