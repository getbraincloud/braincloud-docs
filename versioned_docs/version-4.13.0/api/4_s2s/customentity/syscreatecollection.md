# SysCreateCollection
## Overview
Creates configuration for new custom entity collection.

<PartialServop service_name="customEntity" operation_name="SYS_CREATE_COLLECTION" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var entityType = "athletes";
var collectionOptsJson = {
    "isOwned": false,
    "migrate": true,
    "identifier": "playerName",
    "dataTemplateJson": {
      "playerName": "Randy Traywick",
      "playerId": 123456,
      "teamName": "Super Stars",
      "jerseyNum": 44
    },
    "dataTemplateText": "**Important** notes go here..."
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysCreateCollection(entityType, collectionOptsJson);
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
	"service": "customEntity",
	"operation": "SYS_CREATE_COLLECTION",
	"data": {
		"entityType": "athletes",
		"collectionOptsJson": {
			"isOwned": false,
			"migrate": true,
			"identifier": "playerName",
			"dataTemplateJson": {
			  "playerName": "Randy Traywick",
			  "playerId": 123456,
			  "teamName": "Super Stars",
			  "jerseyNum": 44
			},
			"dataTemplateText": "**Important** notes go here..."
		}
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
  "data": {
    "collection": {
      "options": {
        "isOwned": false,
        "migrate": true,
        "identifier": "playerName",
        "dataTemplateJson": {
          "playerName": "Randy Traywick",
          "playerId": 123456,
          "teamName": "Super Stars",
          "jerseyNum": 44
        },
        "dataTemplateText": "**Important** notes go here..."
      },
      "name": "athletes",
      "customIndexes": {}
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of custom entity collection to be created. 
collectionOptsJson | The collection options, as JSON object. 


