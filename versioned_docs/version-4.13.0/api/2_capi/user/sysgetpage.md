# SysGetPage
## Overview
Retrieves first page of users from server based on the specified query context.

_Note that for apps with > 10,000 users, it is recommended that `doCount` be set to false for better performance._

<PartialServop service_name="user" operation_name="SYS_GET_PAGE" / >

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
var context = {
  "pagination": {
    "rowsPerPage": 20,
    "pageNumber": 1,
    "doCount": false
  },
  "searchCriteria": {
    "playerName": {
      "$regex": "^Bat"
    }
  },
  "sortCriteria": {
  }
}

var userProxy = bridge.getUserServiceProxy();

var postResult = userProxy.sysGetPage( context );
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// Cloud Code only. To view example, switch to the Cloud Code tab
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
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIyMTc3NCxxx...",
    "results": {
      "count": 1,
      "page": 1,
      "items": [
        {
          "profileId": "0b53155b-1fc8-4916-XXXX-298379efc67a",
          "playerName": "Bats",
          "countryCode": "CA",
          "timeZoneOffset": -5,
          "summaryFriendData": {
            "favColor": "black"
          },
          "emailAddress": "bruce@wayneent.com"
        }
      ],
      "moreAfter": false,
      "moreBefore": false
    }
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | A context JSON object describing the pagination, searchCriteria and sortCriteria options


