# FindUserByExactUniversalId
## Overview
Retrieves profile information for the partial Universal ID matches of the specified text.

Does not require the calling user to be a friend of the retrieved users.

<PartialServop service_name="friend" operation_name="FIND_PLAYER_BY_EXACT_UNIVERSAL_ID" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string searchText = "someUniversalId";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.FriendService.FindUserByExactUniversalId(searchText, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *searchText = "someUniversalId";
<%= data.branding.codePrefix %>->getFriendService()->findUserByExactUniversalId(searchText, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *searchText = @"someUniversalId";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> friendService] findUserByExactUniversalId:searchText
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String searchText = "someUniversalId";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getFriendService().findUserByExactUniversalId(searchText, this);

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
var searchText = "someUniversalId";

<%= data.branding.codePrefix %>.friend.findUserByExactUniversalId(searchText, result =>
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
var searchText = "someUniversalId";
var friendProxy = bridge.getFriendServiceProxy();

var postResult = friendProxy.findUserByExactUniversalId(searchText);
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
  "searchText": "someUniversalId"
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
   "status":200,
   "data":{  
      "matchedCount":1,
      "matches":[  
         {  
            "profileId":"111-222-333",
            "profileName":"UserA",
            "summaryFriendData":null,
            "pictureUrl":null
         }
      ]
   }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
searchText | The universalId to search for


