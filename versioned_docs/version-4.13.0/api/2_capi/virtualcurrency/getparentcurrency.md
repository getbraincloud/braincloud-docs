# GetParentCurrency
## Overview
Gets the parent player's currency for the given currency type **or** all currency types if null passed in.

<PartialServop service_name="virtualCurrency" operation_name="GET_PARENT_VC" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string vcId = "coins";
string levelName = "master";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.VirtualCurrencyService.GetParentCurrency(vcId, levelName, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *vcId = "coins";
const char *levelName = "master";
<%= data.branding.codePrefix %>->getVirtualCurrencyService()->getParentCurrency(vcId, levelName, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *vcId = @"coins";
NSString *levelName = @"master";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> virtualCurrencyService] getParentCurrency:vcId
                  levelName:levelName
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String vcId = "coins";
String levelName = "master";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getVirtualCurrencyService().getParentCurrency(vcId, levelName, this);

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
var vcId = "coins";
var levelName = "master";

<%= data.branding.codePrefix %>.virtualCurrency.getParentCurrency(vcId, levelName, result =>
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
var vcId = "coins";
var levelName = "master";
var virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();

var postResult = virtualCurrencyProxy.getParentCurrency(vcId, levelName);
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var vcId = "coins";
var levelName = "master";
var virtualCurrencyProxy = bridge.getVirtualCurrencyServiceProxy();

var postResult = virtualCurrencyProxy.getParentCurrency(vcId, levelName);
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
   "status":200,
   "data":{
      "currencyMap":{
         "credits":{
            "consumed":20,
            "balance":180,
            "purchased":0,
            "awarded":200
         }
      }
   }
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
vcId | The currency type to retrieve or null if all currency types are being requested.
levelName | Name of the parent level.


