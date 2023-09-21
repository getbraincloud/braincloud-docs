# ListFriends
## Overview
Retrieves a list of user and friend platform information for all friends of the current user.

<PartialServop service_name="friend" operation_name="LIST_FRIENDS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
FriendPlatform friendPlatform = FriendPlatform.Facebook;
bool includeSummaryData = true;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.Friend.ListFriends(friendPlatform, includeSummaryData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
FriendPlatform friendPlatform = FriendPlatform::Facebook;
bool includeSummaryData = true;

<%= data.branding.codePrefix %>->getFriend()->listFriends(friendPlatform, includeSummaryData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
FriendPlatformObjc friendPlatform = [FriendPlatformObjc Facebook];
bool includeSummaryData = true;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] listFriends:friendPlatform
         includeSummaryData:includeSummaryData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
FriendPlatform friendPlatform = FriendPlatform.Facebook;
boolean includeSummaryData = true;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriend().listFriends(friendPlatform, includeSummaryData, this);

public void serverCallback(ServiceName serviceName, ServiceOperation serviceOperation, JSONObject jsonData)
{
    System.out.print(String.format("Success | %s", jsonData.toString()));
}
public void serverError(ServiceName serviceName, ServiceOperation serviceOperation, int statusCode, int reasonCode, String jsonError)
{
    System.out.print(String.format("Failed | %d %d %s", statusCode,  reasonCode, jsonError.toString()));
}
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var friendPlatform = <%= data.branding.codePrefix %>.friend.friendPlatform.Facebook;
var includeSummaryData = true;

<%= data.branding.codePrefix %>.friend.listFriends(friendPlatform, includeSummaryData, result =>
{
	var status = result.status;
	console.log(status + " : " + JSON.stringify(result, null, 2));
});
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var friendPlatform = "Facebook";
var includeSummaryData = true;
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.listFriends(friendPlatform, includeSummaryData);
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
	"operation": "LIST_FRIENDS",
	"data": {
		"friendPlatform": "brainCloud",
		"includeSummaryData": true
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
// Example 1: for friendPlatform = All
{
    "status": 200,
    "data": {
        "friends": [
            {
                "externalData": {
                    "Facebook": {
                        "pictureUrl": "https://scontent.xx.fbcdn.net/hprofile-xfp1/v/t1.0-1/p50x50/XXX.jpg?oh=YYY&oe=ZZZ",
                        "name": "scientist at large",
                        "externalId": "100003668521730"
                    },
                    "<%= data.branding.productName %>": {}
                },
                "playerId": "1aa3428c-5877-4624-a909-f2b1af931f00",
                "name": "Mr. Peabody",
                "summaryFriendData": {
                    "LEVEL": -4
                },
                "pictureUrl": "www.exampleurl.com"
            },
            {
                "externalData": {
                    "Facebook": {
                        "pictureUrl": "https://scontent.xx.fbcdn.net/hprofile-xfa1/v/t1.0-1/c0.11.50.50/p50x50/3AAA.jpg?oh=BBBa&oe=CCC",
                        "name": "Aquaman",
                        "externalId": "100003509724516"
                    }
                },
                "playerId": "1598c5b6-1b09-431b-96bc-9c2c928cad3b",
                "name": null,
                "summaryFriendData": {
                    "LEVEL": 1
                },
                "pictureUrl": "www.exampleurl.com"
            }
        ],
        "server_time": 1458224807855
    }
}

// Example 2: for friendPlatform = Facebook
{
    "status": 200,
    "data": {
        "friends": [
            {
                "externalData": {
                    "Facebook": {
                        "pictureUrl": "https://scontent.xx.fbcdn.net/hprofile-xfp1/v/t1.0-1/p50x50/XXX.jpg?oh=YYY&oe=ZZZ",
                        "name": "scientist at large",
                        "externalId": "100003668521730"
                    }
                },
                "playerId": "1aa3428c-5877-4624-a909-f2b1af931f00",
                "name": "Mr. Peabody",
                "summaryFriendData": {
                    "LEVEL": -4
                }
            },
            {
                "externalData": {
                    "Facebook": {
                        "pictureUrl": "https://scontent.xx.fbcdn.net/hprofile-xfa1/v/t1.0-1/c0.11.50.50/p50x50/3AAA.jpg?oh=BBBa&oe=CCC",
                        "name": "Aquaman",
                        "externalId": "100003509724516"
                    }
                },
                "playerId": "1598c5b6-1b09-431b-96bc-9c2c928cad3b",
                "name": null,
                "summaryFriendData": {
                    "LEVEL": 1
                }
            }
        ],
        "server_time": 1458224807855
    }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
friendPlatform | Friend platform to query. Valid values are "Facebook", "<%= data.branding.productName %>" and "All".
includeSummaryData | True if including summary data; false otherwise.


