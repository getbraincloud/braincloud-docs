# ListAllLeaderboards
## Overview
```
{
    "packetId": 1,
    "messages": [
        {
            "service": "leaderboard",
            "operation": "LIST_ALL_LEADERBOARDS",
            "data": { }            
        }
    ]
}
```





Method returns list of all the leaderboards from the server based on gameId of the user.

<PartialServop service_name="leaderboard" operation_name="LIST_ALL_LEADERBOARDS" / >

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
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.listAllLeaderboards();
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var leaderboardProxy = bridge.getLeaderboardServiceProxy();

var postResult = leaderboardProxy.listAllLeaderboards();
if (postResult.status == 200) {
    // Success!
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
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": {
                "leaderboardListCount": 3,
                "leaderboardList": [
                    {
                        "leaderboardId": "default",
                        "leaderboardType": "HIGH_VALUE",
                        "resetAt": 1473793200000,
                        "rotationType": "WEEKLY",
                        "currentVersionId": 1,
                        "maxRetainedCount": 5,
                        "retainedVersionsCount": 1,
                        "data": {}
                    },
                    {
                        "leaderboardId": "default1",
                        "leaderboardType": "HIGH_VALUE",
                        "resetAt": 1517428800000,
                        "rotationType": "WEEKLY",
                        "currentVersionId": 1,
                        "maxRetainedCount": 2,
                        "retainedVersionsCount": 1,
                        "data": {
                            "retainedCount": 7
                        }
                    }
                ]
            }
        }
    ]
}
```
</details>

