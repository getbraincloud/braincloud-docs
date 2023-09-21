# GetIdentityData
## Overview
:::tip
Currently, this method is available in Cloud Code scripts and for Ultra authentication type only.
:::

Retrieves identity data for given identity type for this profile.

<PartialServop service_name="identity" operation_name="GET_IDENTITY_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
//cloud code only
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var authenticationType = "Ultra";
var externalAuthName = "";
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.getIdentityData(authenticationType, externalAuthName);
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
  "operation": "GET_IDENTITY_DATA",
  "data":
  {
    "authenticationType": "Ultra",
    "externalAuthName": ""
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
    "identityData": {
      "blockchain_id": "-a-blockchain-id-"
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
authenticationType | Type of authentication.
externalAuthName | The name of the external authentication mechanism (optional, used for custom authentication types)


