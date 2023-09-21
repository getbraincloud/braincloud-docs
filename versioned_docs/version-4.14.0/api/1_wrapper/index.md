# BrainCloudWrapper
## Overview


```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Unity

//Note: Ensure of have selected your app using the <%= data.branding.productName %> Unity Plugin

using UnityEngine;

public class BCConfig : MonoBehaviour {

	private <%= data.branding.codeWrapper %> <%= data.branding.codePrefix %>;

	public <%= data.branding.codeWrapper %> Get()
	{
		return <%= data.branding.codePrefix %>;
	}	
	
	void Awake ()
	{
		DontDestroyOnLoad(gameObject);
		<%= data.branding.codePrefix %> = gameObject.AddComponent<<%= data.branding.codeWrapper %>>();
		
		<%= data.branding.codePrefix %>.WrapperName = gameObject.name;    // Optional: Set a wrapper name
		<%= data.branding.codePrefix %>.Init();      // Init data is taken from the <%= data.branding.productName %> Unity Plugin		
	}
}


// C#
<%= data.branding.codePrefix %> = new <%= data.branding.codeWrapper %>("_mainWrapper");
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %> = new <%= data.branding.codeWrapper %>("_mainWrapper");
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objective_c
<%= data.branding.codePrefix %> = [[<%= data.branding.codeWrapper %> alloc] init: @"_mainWrapper"]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %> = new <%= data.branding.codeWrapper %>("_mainWrapper");
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %> = new <%= data.branding.codeWrapper %>("_mainWrapper");
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

The <%= data.branding.codeWrapper %> class provides an easier way for developers to handle user authentication when they are getting started with the authentication system. This includes persisting authentication data between application runs.

By using the wrapper authentication methods, the anonymous and profile IDs will be automatically persisted upon successful authentication. When authenticating, any stored anonymous/profile IDs will be sent to the server. This strategy is useful when using Anonymous authentication.

*Note - you should [initialize the wrapper](/api/wrapper/initialize) before using it. It will in turn initialize the <%= data.branding.productName %> client for you* - **don't do both!**

### Method Parameters
Parameter | Description
--------- | -----------
wrapperName | Distincts saved wrapper data. Use when using more than one instance of <%= data.branding.productName %>
    


<DocCardList />