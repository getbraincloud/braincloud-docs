# TriggerStatsEvent
## Overview
Trigger an event server side that will increase the users statistics. This may cause one or more awards to be sent back to the player - could be achievements, experience, etc. Achievements will be sent by this client library to the appropriate awards service (Apple Game Center, etc).

This mechanism supersedes the [<code>PlayerStatisticsService</code>](/api/capi/playerstats) API methods, since PlayerStatisticsService API method only update the raw statistics without triggering the rewards.

<PartialServop service_name="playerStatisticsEvent" operation_name="TRIGGER" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string eventName = "GrantExperience";
int eventMultiplier = 100;
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerStatisticsEventService.TriggerStatsEvent(eventName, eventMultiplier, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *eventName = "GrantExperience";
int eventMultiplier = 100;

<%= data.branding.codePrefix %>->getPlayerStatisticsEventService()->triggerStatsEvent(eventName, eventMultiplier, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *eventName = "GrantExperience";
int eventMultiplier = 100;
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> playerStatisticsEventService] triggerStatsEvent:eventName
            eventMultiplier:eventMultiplier
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String eventName = "GrantExperience";
int eventMultiplier = 100;
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getPlayerStatisticsEventService().triggerStatsEvent(eventName, eventMultiplier, this);

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
var eventName = "GrantExperience";
var eventMultiplier = 100;

<%= data.branding.codePrefix %>.playerStatisticsEvent.triggerStatsEvent(eventName, eventMultiplier, result =>
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
var eventName = "GrantExperience";
var eventMultiplier = 100;
var playerStatisticsEventProxy = bridge.getPlayerStatisticsEventServiceProxy();

var postResult = playerStatisticsEventProxy.triggerStatsEvent(eventName, eventMultiplier);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var eventName = "GrantExperience";
var eventMultiplier = 100;
var playerStatisticsEventProxy = bridge.getPlayerStatisticsEventServiceProxy();

var postResult = playerStatisticsEventProxy.triggerStatsEvent(eventName, eventMultiplier);
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
    "data": {
        "currency": {},
        "rewardDetails": {},
        "rewards": {}
    },
    "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
eventName | The name of the event configured through the <%= data.branding.productName %> portal
multiplier | The multiplier to apply to the event


