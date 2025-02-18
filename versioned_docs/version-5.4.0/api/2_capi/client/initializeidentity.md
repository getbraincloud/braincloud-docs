# InitializeIdentity

Initializes the authentication service with an anonymous installation ID and most recently used profile ID.
You will need to call this method before authenticating anonymously.

Note that calling this is the same as calling [<code>Initialize</code>](/api/capi/authentication/initialize) in the BrainCloudAuthentication service.

:::caution
InitializeIdentity must be called before you can authenticate a user anonymously.
:::

## Method Parameters

| Parameter   | Description                  |
| ----------- | ---------------------------- |
| profileId   | The profile id of the user   |
| anonymousId | The anonymous id of the user |

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.InitializeIdentity("myProfileId", "myAnonymousId");
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->initializeIdentity("myProfileId", "myAnonymousId");
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[<%= data.branding.codePrefix %> initializeIdentity:@"myProfileId", anonymousId:@"myAnonymousId"];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.initializeIdentity("myProfileId", "myAnonymousId");
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.initializeIdentity(profileId, anonymousId)
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
<%= data.branding.codePrefix %>.initializeIdentity( profileId:"myProfileId", anonymousId:"myAnonymousId");
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
