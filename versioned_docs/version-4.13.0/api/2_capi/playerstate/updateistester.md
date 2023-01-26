# UpdateIsTester
## Overview
Set a user's IsTester flag.

<PartialServop service_name="playerState" operation_name="UPDATE_IS_TESTER" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code Only
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code Only
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code Only
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code Only
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code Only
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var isTester = true;
var playerStateProxy = bridge.getPlayerStateServiceProxy();

var postResult = playerStateProxy.updateIsTester(isTester);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "playerState",
	"operation": "UPDATE_IS_TESTER",
	"data": {
		"isTester": true
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
    "status": 200,
    "data": {
      "isTester": false
     }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
isTester | Boolean flag to indicate if the profile belongs to a test account.


