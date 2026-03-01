# GetServerVersion

Get server version.

<PartialServop service_name="authenticationV2" operation_name="GET_SERVER_VERSION" />

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.AuthenticationService.GetServerVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->getAuthenticationService()->getServerVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
[[<%= data.branding.codePrefix %> authenticationService] getServerVersion];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
public void getServerVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.authentication.getServerVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
<%= data.branding.codePrefix %>.authenticationService.getServerVersion();
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
<%= data.branding.codePrefix %>:getAuthenticationService():getServerVersion()
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

<details>
<summary>JSON Response</summary>

```json
{
    "data": {
        "serverVersion": "R5.4.0-1448"
    },
    "status": 200
}
```

</details>
