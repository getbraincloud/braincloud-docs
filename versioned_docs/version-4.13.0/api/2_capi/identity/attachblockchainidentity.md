# AttachBlockchainIdentity
## Overview
Attaches the given block chain public key identity to the current profile.

<PartialServop service_name="identity" operation_name="ATTACH_BLOCKCHAIN_IDENTITY" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
string blockchainConfig = "config";
string publicKey = "xxx";
SuccessCallback successCallback = (response, cbObject) =>
{
    Debug.Log(string.Format("Success | {0}", response));
};
FailureCallback failureCallback = (status, code, error, cbObject) =>
{
    Debug.Log(string.Format("Failed | {0}  {1}  {2}", status, code, error));
};

<%= data.branding.codePrefix %>.IdentityService.AttachBlockchainIdentity(blockchainConfig, publicKey, successCallback, failureCallback);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
const char *blockchainConfig = "config";
const char *publicKey = "xxx";
<%= data.branding.codePrefix %>->getIdentityService()->attachBlockchainIdentity(blockchainConfig, publicKey, this);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSString *blockchainConfig = @"config";
NSString *publicKey = @"xxx";
BCCompletionBlock successBlock;      // define callback
BCErrorCompletionBlock failureBlock; // define callback

[[<%= data.branding.codePrefix %> identityService] attachBlockchainIdentity:blockchainConfig
                  publicKey:publicKey
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
String publicKey = "xxx";
this; // implements IServerCallback

<%= data.branding.codePrefix %>.getIdentityService().attachBlockchainIdentity(blockchainConfig, publicKey, this);

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
var publicKey = "xxx";

<%= data.branding.codePrefix %>.identity.attachBlockchainIdentity(blockchainConfig, publicKey, result =>
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
var publicKey = "xxx";
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.attachBlockchainIdentity(blockchainConfig, publicKey);
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
	"operation": "ATTACH_BLOCKCHAIN_IDENTITY",
	"data": {
		"blockchainConfig": "config",
		"publicKey": "xxx"
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
publicKey | Block chain public key. 


