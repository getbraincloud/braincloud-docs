# SysDeleteUser

Delete user with option to also delete user's children.

<PartialServop service_name="user" operation_name="SYS_DELETE_USER" />

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var profileId = "a-profiled-id";
var optionsJson = {
    "deleteChildren": true
};
var userProxy = bridge.getUserServiceProxy();

var postResult = userProxy.SysDeleteUser(profileId, optionsJson);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
    "service":"user",
    "operation":"SYS_DELETE_USER",
    "data":{
        "profileId":"a-profiled-id",
        "optionsJson":{
            "deleteChildren":true
        }
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
  "status" : 200,
  "data" : {}
}
```

</details>

## Method Parameters
Parameter | Description
--------- | -----------
profileId | Profile ID of the user.
optionsJson | Additional options, including 'deleteChildren' flag to also delete children of the user. Defaults to false if not specified.
