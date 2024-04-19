# UpdateCountryCode
Update user's country code preference on their profile.

<PartialServop service_name="playerState" operation_name="UPDATE_COUNTRY_CODE" />

## Method Parameters
Parameter | Description
--------- | -----------
countryCode | New country code

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string countryCode = "CA";

SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.PlayerstateService.UpdateCountryCode(countryCode, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *countryCode = "CA";
<%= data.branding.codePrefix %>.getPlayerstateService().updateCountryCode(countryCode, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *countryCode = @"CA";
BCCompletionBlock successBlock; // define callback
BCErrorCompletionBlock failureBlock; // define callback
[[<%= data.branding.codePrefix %> playerStateService] updateCountryCode:
                  countryCode:countryCode
              completionBlock:successBlock
         errorCompletionBlock:failureBlock
                     cbObject:nil]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String countryCode = "CA";
this; // implements IServerCallback
<%= data.branding.codePrefix %>.getPlayerstateService.updateCountryCode(countryCode, this);

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
var countryCode = "CA";
<%= data.branding.codePrefix %>.playerState.updateCountryCode(countryCode, result =>
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
var countryCode = "CA";
var playerStateProxy = bridge.getPlayerstateServiceProxy();

var postResult = playerStateProxy.updateCountryCode(countryCode);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"playerState",
    "operation":"UPDATE_COUNTRY_CODE",
    "data":{
        "countryCode":"CA"
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
    "countryCode": "CA"
  },
  "status": 200
}
```

</details>

