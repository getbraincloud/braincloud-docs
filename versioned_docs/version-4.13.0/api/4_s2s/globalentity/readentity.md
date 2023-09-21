# ReadEntity
## Overview
Method reads an existing entity on the server. It must have public read access.

<PartialServop service_name="globalEntity" operation_name="READ" / >

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
var entityId = "the-entity-id";
var globalEntityProxy = bridge.getGlobalEntityServiceProxy();

var postResult = globalEntityProxy.readEntity(entityId);
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
	"service": "globalEntity",
	"operation": "READ",
	"data": {
		"entityId": "the-entity-id"
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
        "gameId": "22198",
        "entityIndexedId": null,
        "timeToLive": 0,
        "createdAt": 1498850247510,
        "entityType": "address",
        "entityId": "4b2f1cba-cc52-4d3c-8663-ff540ee48a38",
        "acl": {
        "other": 2
        },
        "ownerId": "khfskhfh-nfsfjjdl-shfdhdsfh-hjhdfhf",
        "version": 2,
        "expiresAt": 9223372036854776000,
        "updatedAt": 1498850536733,
        "_serverTime": 1637946319239
    },
    "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityId | The id of the entity to read. 


