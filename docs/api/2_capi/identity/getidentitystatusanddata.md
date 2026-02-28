# GetIdentityStatusAndData

Retrieves identity status and data for given identity type for this profile.

<PartialServop service_name="identity" operation_name="GET_IDENTITY_STATUS_AND_DATA" />

## Method Parameters

| Parameter          | Description                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------- |
| authenticationType | Type of authentication.                                                                            |
| externalAuthName   | The name of the external authentication mechanism (optional, used for custom authentication types) |

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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var authenticationType = "Facebook";
var externalAuthName = "";
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.getIdentityStatusAndData(authenticationType, externalAuthName);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"identity",
    "operation":"GET_IDENTITY_STATUS_AND_DATA",
    "data":{
        "authenticationType":"Facebook",
        "externalAuthName":""
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
        "identities": {
            "Facebook": {
                "tokenExpired": true,
                "externalId": "111234914143270",
                "loginAuthType": "FacebookLimited",
                "identityData": null
            }
        }
    },
    "status": 200
}
```

</details>
