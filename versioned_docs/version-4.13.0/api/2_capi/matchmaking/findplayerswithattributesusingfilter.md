# FindPlayersWithAttributesUsingFilter
## Overview
Finds matchmaking enabled players using a cloud code filter and additional attributes.

Additional information of filters can be found under [Matchmaking Filters](/api/capi/matchmaking/#matchmaking-filters).

<PartialServop service_name="matchMaking" operation_name="FIND_PLAYERS_USING_FILTER" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
int rangeDelta = 10;
int numMatches = 1;
string jsonAttributes = "{\"key\":\"value\"}";
string jsonExtraParms = "{\"parm1\":10}";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.MatchMakingService.FindPlayersWithAttributesUsingFilter(rangeDelta, numMatches, jsonAttributes, jsonExtraParms, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
int rangeDelta = 10;
int numMatches = 1;
const char *jsonAttributes = "{\"key\":\"value\"}";
const char *jsonExtraParms = "{\"parm1\":10}";
<%= data.branding.codePrefix %>->getMatchMakingService()->findPlayersWithAttributesUsingFilter(rangeDelta, numMatches, jsonAttributes, jsonExtraParms, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
int rangeDelta = 10;
int numMatches = 1;
NSString *jsonAttributes = @"{\"key\":\"value\"}";
NSString *jsonExtraParms = @"{\"parm1\":10}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> matchMakingService] findPlayersWithAttributesUsingFilter:rangeDelta
                 numMatches:numMatches
             jsonAttributes:jsonAttributes
             jsonExtraParms:jsonExtraParms
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
int rangeDelta = 10;
int numMatches = 1;
String jsonAttributes = "{\"key\":\"value\"}";
String jsonExtraParms = "{\"parm1\":10}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getMatchMakingService().findPlayersWithAttributesUsingFilter(rangeDelta, numMatches, jsonAttributes, jsonExtraParms, this);

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
var rangeDelta = 10;
var numMatches = 1;
var jsonAttributes = {
    "key": "value"
};
var jsonExtraParms = {
    "parm1": 10
};

<%= data.branding.codePrefix %>.matchMaking.findPlayersWithAttributesUsingFilter(rangeDelta, numMatches, jsonAttributes, jsonExtraParms, result =>
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
var rangeDelta = 10;
var numMatches = 1;
var jsonAttributes = {
    "key": "value"
};
var jsonExtraParms = {
    "parm1": 10
};
var matchMakingProxy = bridge.getMatchMakingServiceProxy();

var postResult = matchMakingProxy.findPlayersWithAttributesUsingFilter(rangeDelta, numMatches, jsonAttributes, jsonExtraParms);
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
  "rangeDelta": 10,
  "numMatches": 1,
  "attributes": {
    "key": "value"
  },
  "extraParms": {
    "parm1": 10
  }
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
rangeDelta | How close an opponents rating must be to yours
numMatches | The maximum number of matches to return
jsonAttributes | Attributes match criteria
jsonExtraParms | Parameters to be passed to the filter


