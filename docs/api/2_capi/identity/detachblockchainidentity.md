# DetachBlockchainIdentity
## Overview
Detaches the blockchain identity to the current profile.

<PartialServop service_name="identity" operation_name="DETACH_BLOCKCHAIN_IDENTITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string blockchainConfig = "config";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.IdentityService.DetachBlockchainIdentity(blockchainConfig, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *blockchainConfig = "config";
<%= data.branding.codePrefix %>->getIdentityService()->detachBlockchainIdentity(blockchainConfig, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *blockchainConfig = @"config";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService] detachBlockchainIdentity:blockchainConfig
            completionBlock:successBlock
       errorCompletionBlock:failureBlock
                   cbObject:nil];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String blockchainConfig = "config";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().detachBlockchainIdentity(blockchainConfig, this);

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
var blockchainConfig = "config";

<%= data.branding.codePrefix %>.identity.detachBlockchainIdentity(blockchainConfig, result =>
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
var blockchainConfig = "config";
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.detachBlockchainIdentity(blockchainConfig);
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
	"service": "identity",
	"operation": "DETACH_BLOCKCHAIN_IDENTITY",
	"data": {
		"blockchainConfig": "config"
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
blockchainConfig | Identifies the block chain. 


