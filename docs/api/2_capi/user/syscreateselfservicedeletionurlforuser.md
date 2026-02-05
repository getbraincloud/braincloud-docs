# SysCreateSelfServiceDeletionUrlForUser

Returns self-service delete account URL that can be used to delete the specified user.

<PartialServop service_name="user" operation_name="SYS_CREATE_SELF_SERVICE_DELETION_URL_FOR_USER" />

## Method Parameters

Parameter | Description
--------- | -----------
profileId | The profile ID of the target user for whom the delete account URL is intended.

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
var profileId = "a-profile-id";
var userProxy = bridge.getUserServiceProxy();

var postResult = userProxy.sysCreateSelfServiceDeletionUrlForUser(profileId);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"user",
    "operation":"SYS_CREATE_SELF_SERVICE_DELETION_URL_FOR_USER",
    "data":{
        "profileId":"a-profile-id"
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
        "url": "https://api.braincloudservers.com/self-service/delete-account?appId=13229&deletionToken=45b66a3b-84b1-4a81-9d18-ff14d9e97f8d&profileId=93293c42-7a8e-47b4-954e-553916193687"
    },
    "status": 200
}
```

</details>
