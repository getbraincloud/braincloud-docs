# SysGetPageOffset
## Overview
Retrieves next/prev page of users from server based on the specified query context.

<PartialServop service_name="user" operation_name="SYS_GET_PAGE_OFFSET" / >

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
var context = 

var userProxy = bridge.getUserServiceProxy();

// Use context from previous sysGetPage calls
var context = getPageResults.data.context;

// +1 to go forward a page, -1 to go back
var postResult = userProxy.sysGetPageOffset( context, 1);
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
      "count": 2,
      "page": 2,
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
      "moreBefore": true
    }
  }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
context | A context JSON object describing the pagination, searchCriteria and sortCriteria options
pageOffset | +1 for next page, -1 for previous page


