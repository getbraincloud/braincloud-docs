# SysGenerateAzureADAccessToken

Generates an Azure AD access token.

<PartialServop service_name="appStore" operation_name="SYS_GENERATE_AZURE_AD_ACCESS_TOKEN" />

## Method Parameters

| Parameter | Description         |
| --------- | ------------------- |
| resource  | Resource to access. |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var resource = "https://onestore.microsoft.com";
var appStoreProxy = bridge.getAppStoreServiceProxy();

var postResult = appStoreProxy.sysGenerateAzureADAccessToken(resource);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"appStore",
    "operation":"SYS_GENERATE_AZURE_AD_ACCESS_TOKEN",
    "data":{
        "resource":"https://onestore.microsoft.com"
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
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImltaTBZMnowZFlLeEJ0dEFxS19UdDVoYUJUayIsImtpZCI6ImltaTBZMnowZFlLeEJ0dEFxS19UdDVoWUJUayJ9.eyJhdWQiOiJodHRwczovL29uZXN0b3JlLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mOTYzMTQ5NS0yN2Y4LTQyZjUtYTA5Zi04MzIxZWExYTllOTIvIiwiaWF0IjoxNzM5NDg2MTYxLCJuYmYiOjE3Mzk0ODYxNjEsImV4cCI6MTczOTQ5MDA2MSwiYWlvIjoiazJSZ1lEQ2NWcatjL1hpSTMvY2ZmamMzWHVEVUJ3QT0iLCJhcHBpZCI6IjU2ZGQ3YWRjLTFiMTAtNGI3OS1hZThjLTk2MDk1OTk5Y2I1YiIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2Y5NjMxNDk1LTI3ZjgtNDJmNS1hMDlmLTgzMjFlYTFhOWU5Mi8iLCJpZHR5cCI6ImFwcCIsIm9pZCI6IjhkOWZmMzhhLWI3OGYtNDY5My1hMGJlLWJkYjc0NjRkODA5YSIsInJoIjoiMS5BWEVCbFJSai1mZ245VUtnbjRNaDZocWVrckV3bzBYc3NjRk1rV0dmQTVrcXBKOXhBUUJ4QVEuIiwic3ViIjoiOGQ5ZmYzOGEtYjc4Zi00NjkzLWEwYmUtYmRiNzQ2NGQ4MDlhIiwidGlkIjoiZjk2MzE0OTUtMjdmOC00MmY1LWEwOWYtODMyMWVhMWE5ZTkyIiwidXRpIjoiZDVxT2MwYmZxMGUxcjIzaU1zaEZBQSIsInZlcvI6IjEuMCIsInhtc19pZHJlbCI6IjEwIDcifQ.VPudrDRYDe9WSm6btNtY5WTYgnJcoUXIQtBNFwDVkX3qjoGuhd8ZHdIvlghc5Y1rYeEp5_6Tu7Bn0Anrq7Cqv7pq2v0avdCfCLm1fxdl19-q2lcNS068m3gIjgjwc7m8V68rNdCWB2kRNIoALTh3gsrXn5xPK7xbxlIGIKTNh4Tx3sKQoo4_MYOS6IMj06AyhAK-KrqbLScsJqpZRntXe4O2dCN-UOH6QRprE-LqTE7gDsD3JFctiq9An3bUvoSEcez6-r2FH8uA2Xb5AscjOZ3M0c7CT-UVS44PVlam7UM04XJWgU5k4Mn3J1Em12tic_w5hLqY8Eg4zJUdo5oBSw"
    },
    "status": 200
}
```

</details>
