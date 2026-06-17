# GetStoredProfileId

Returns the stored profile ID

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp


string profileId = <%= data.branding.codePrefix %>.GetStoredProfileId();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::string profileId = <%= data.branding.codePrefix %>->getStoredProfileId();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objectivec
NSString* profileId = [<%= data.branding.codePrefix %> getStoredProfileId];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
String id = <%= data.branding.codePrefix %>.getStoredProfileId();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
var profileId = <%= data.branding.codePrefix %>.getStoredProfileId();
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
String profileId = <%= data.branding.codePrefix %>.getStoredProfileId();
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
local profileId = <%= data.branding.codePrefix %>:getStoredProfileId()
```

```mdx-code-block
</TabItem>
<TabItem value="gdscript" label="GDScript">
```

```gdscript
var result = await <%= data.branding.codePrefix %>.get_stored_profile_id()

if result.status == 200:
	print("Success")
else:
	print("Failed: %s" % result.status_message)
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
var profileId = <%= data.branding.codePrefix %>.getStoredProfileId();
```
</details>

