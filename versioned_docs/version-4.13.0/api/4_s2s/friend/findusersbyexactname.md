# FindUsersByExactName
## Overview
Retrieves profile information for the exact matches of the specified text.

If there are more results than the maximum requested, then maximum requested results are returned.

Does not require the calling user to be a friend of the retrieved users.

<PartialServop service_name="friend" operation_name="FIND_USERS_BY_EXACT_NAME" / >

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
var searchText = "someText";
var maxResults = 5;
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.findUsersByExactName(searchText, maxResults);
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
	"service": "friend",
	"operation": "FIND_USERS_BY_EXACT_NAME",
	"data": {
		"searchText": "someText",
		"maxResults": 5
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
        "matches": [
            {
                "profileId": "4f2edc69-b3c3-458b-8b4b-6bbd7259b55f",
                "profileName": "Test2",
                "playerSummaryData": null,
                "pictureUrl": "http://somesite.com/test/picture.jpg"
            }
        ],
        "matchedCount": 1
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
searchText | The exact string to search for.
maxResults | Maximum number of results to return.


