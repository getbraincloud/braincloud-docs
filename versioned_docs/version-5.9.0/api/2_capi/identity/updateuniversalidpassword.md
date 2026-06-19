# UpdateUniversalIdPassword

Updates the password for the universal id of the current profile.

<PartialServop service_name="identity" operation_name="UPDATE_UNIVERSAL_PASSWORD" />

## Method Parameters
Parameter | Description
--------- | -----------
oldPassword | The current password associated with the user's universal id.
newPassword | The new password to associate with the user's universal id.

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
var oldPassword = "my-old-password";
var newPassword = "my-new-password";
var identityProxy = bridge.getIdentityServiceProxy();

var postResult = identityProxy.updateUniversalIdPassword(oldPassword, newPassword);
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
  "operation": "UPDATE_UNIVERSAL_PASSWORD",
  "data":
  {
    "oldPassword": "my-old-password",
    "newPassword": "my-new-password"
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

