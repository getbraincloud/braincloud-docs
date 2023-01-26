# RegisterRewardCallback
## Overview
Sets a reward handler for any API call results that return rewards.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.RegisterRewardCallback(callbackFunction);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->registerRewardCallback(this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
rewardBlock = ^(NSString *rewardsJson) {  };

[<%= data.branding.codePrefix %> registerRewardCallback:rewardBlock];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.registerRewardCallback(callback);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.registerRewardCallback(rewardCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
<%= data.branding.codePrefix %>.registerRewardCallback(rewardCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
<%= data.branding.codePrefix %>.registerRewardCallback(rewardCallback);
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
	"apiRewards": [{
		"service": "authenticationV2",
		"operation": "AUTHENTICATE",
		"rewards": {
			"rewardDetails": {
				// the reward depending on type (see docs)
			}
		}
	}]
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
rewardCallback | The reward callback handler.


