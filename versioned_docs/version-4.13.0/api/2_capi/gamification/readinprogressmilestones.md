# ReadInProgressMilestones
## Overview
Method retrieves the list of in progress milestones.

<PartialServop service_name="gamification" operation_name="READ_IN_PROGRESS_MILESTONES" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
bool includeMetaData = false;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.GamificationService.ReadInProgressMilestones(includeMetaData, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
bool includeMetaData = false;
<%= data.branding.codePrefix %>->getGamificationService()->readInProgressMilestones(includeMetaData, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
bool includeMetaData = false;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> gamificationService] readInProgressMilestones:includeMetaData
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
boolean includeMetaData = false;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getGamificationService().readInProgressMilestones(includeMetaData, this);

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
var includeMetaData = false;

<%= data.branding.codePrefix %>.gamification.readInProgressMilestones(includeMetaData, result =>
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
var includeMetaData = false;
var gamificationProxy = bridge.getGamificationServiceProxy();

var postResult = gamificationProxy.readInProgressMilestones(includeMetaData);
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
	"service": "gamification",
	"operation": "READ_IN_PROGRESS_MILESTONES",
	"data": {
		"includeMetaData": false
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
   "data":{  
      "milestones":[  
         {  
            "gameId":"11549",
            "questId":null,
            "thresholds":{  
               "playerStatistics":{  
                  "statistics":{  
                     "Plane_Shot_Down":50
                  }
               }
            },
            "extraData":null,
            "description":"Awarded for shooting down 50 enemy planes.",
            "id":"6",
            "title":"Sky Ace",
            "category":"Game_Milestones",
            "status":"IN_PROGRESS"
         }
      ]
   },
   "status":200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
includeMetaData | Whether to return meta data as well


