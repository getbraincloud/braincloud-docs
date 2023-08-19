# UpdateStatus
## Overview
Updates the server status.

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
	"operation": "UPDATE_STATUS",
	"data": {
		"serverId": "100",
		"serverType": "evs",
		"status": "Active",
		"clients": 100,
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

