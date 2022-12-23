# GetUniqs
## Overview
Retrieves the uniqs owned by the caller.

<PartialServop service_name="blockchain" operation_name="GET_UNIQS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string integrationId = "default";
string contextJson = "{}";
SuccessCallback successCallback = (response, cbObject) =>
{
  Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
  Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.BlockchainService.GetUniqs(integrationId, contextJson, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *integrationId = "default";
const char *contextJson = "{}";

<%= data.branding.codePrefix %>->getBlockchainService()->getUniqs(integrationId, contextJson, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *integrationId = @"default";
NSString *contextJson = "{}";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> blockchainService] getUniqs:
                 integrationId:integrationId
                   contextJson:contextJson
               completionBlock:successBlock
          errorCompletionBlock:failureBlock
                      cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String integrationId = "default";
String contextJson = "{}";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getBlockchainService().getUniqs(integrationId, contextJson, this);

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
var integrationId = "default";
var contextJson = {};

<%= data.branding.codePrefix %>.blockchain.getUniqs(integrationId, contextJson, result =>
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
var integrationId = "default";
var contextJson = {};
var blockchainProxy = bridge.getBlockchainServiceProxy();

var postResult = blockchainProxy.getUniqs(integrationId, contextJson);
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
  "service": "blockchain",
  "operation": "GET_UNIQS",
  "data":
  {
    "integrationId": "default",
    "contextJson": {}
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
    "success": true,
    "response": {
      "uniqs": [
        {
          "key": "...........m2",
          "payer": "eosio.nftram",
          "json": {
            "id": 290,
            "mint_date": "2022-10-19T13:03:10",
            "serial_number": 17,
            "token_factory_id": 22
          }
        }
      ]
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
integrationId | The blockchain integration id. Currently only 'default' is supported.
contextJson | Optional. Reserved for future use.


