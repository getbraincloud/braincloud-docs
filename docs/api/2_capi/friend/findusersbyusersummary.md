# FindUsersByUserSummary

Retrieves profile information based on the search criteria of the user summary data.

If there are more results than the maximum requested, then maximum requested results are returned.

Does not require the calling user to be a friend of the retrieved users.


:::tip
Due to the custom data fields are not indexed, this call is not recommended for apps with more than 
10,000 players, consider using Owned Custom Entity with a custom index for efficient lookups instead.
:::

## Searchable fields

The `where` clause may only reference the following fields:

- `playerName`, `countryCode`, `languageCode`, `playerRating`, `amountSpent`, `isTester`, `ab_testing_id`
- Any user summary data field, as `summaryFriendData.<field>`
- The logical operators `$and`, `$or` and `$nor`

Any other field is rejected with an `INVALID_WHERE` error. This list is fixed and cannot be extended per app.

:::note
User attributes (`attributes.*`) cannot be searched with this call. To find users by an attribute value, also write the value to the user's summary data with [UpdateSummaryFriendData](/api/capi/playerstate/updatesummaryfrienddata) and search on `summaryFriendData.<field>` instead. Keep in mind that summary friend data is visible to other users (e.g. in friend lists, search results and leaderboards), whereas attributes are private — only mirror values that are safe to expose.
:::

The number of results is also capped by the app's maximum friend search results setting; if `maxResults` exceeds it, the system maximum is used.

<PartialServop service_name="friend" operation_name="FIND_USERS_BY_USER_SUMMARY" />

## Method Parameters
Parameter | Description
--------- | -----------
where | Mongo style query string
maxResults | Maximum number of results to return.

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
<TabItem value="objectivec" label="Obj-C">
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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
-- N/A
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
N/A
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Lua">
```

```lua
-- Cloud Code only. To view example, switch to the Cloud Code tab
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
    },
    "status": 200
}
```
</details>

