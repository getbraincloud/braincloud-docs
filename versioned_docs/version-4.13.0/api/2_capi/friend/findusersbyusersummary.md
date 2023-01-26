# FindUsersByUserSummary
## Overview
Retrieves profile information based on the search criteria of the user summary data.

If there are more results than the maximum requested, then maximum requested results are returned.

Does not require the calling user to be a friend of the retrieved users.


:::tip
Due to the custom data fields are not indexed, this call is not recommended for apps with more than 
10,000 players, consider using Owned Custom Entity with a custom index for efficient lookups instead.
:::

<PartialServop service_name="friend" operation_name="FIND_USERS_BY_USER_SUMMARY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var where = {
    "languageCode": "en",
    "summaryFriendData.previousLocation": "germany"
};
var maxResults = 20;

var friendProxy = bridge.getFriendServiceProxy();
var retVal = friendProxy.findUsersByUserSummary(where, maxResults);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "friend",
	"operation": "FIND_USERS_BY_USER_SUMMARY",
	"data": {
		"where": {
			"languageCode": "en",
			"summaryFriendData.previousLocation": "germany"
		},
		"maxResults": 20
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
            },
            {
                "profileId": "0da5ad24-2341-42f8-acb5-57aa2dd4ae94",
                "profileName": "Test1",
                "playerSummaryData": null,
                "pictureUrl": "http://somesite.com/test/picture.jpg"
            }
        ],
        "matchedCount": 2
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
where | Mongo style query string
maxResults | Maximum number of results to return.


