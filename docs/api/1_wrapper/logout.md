# Logout

Logs user out of server. It's basically just a wrapper version for `logout` method of `playerState` service and `ResetStoredProfileId` method

## Method Parameters

Parameter | Description
--------- | -----------
forgetUser | Boolean, whether to reset the stored profile id for the user.

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
<%= data.branding.codePrefix %>.Logout(true);
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %>->logout(true);
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
<%= data.branding.codePrefix %>.storedProfileId = @true;
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %>.logout(true);
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %>.logout(true);
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
<%= data.branding.codePrefix %>.logout(true);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
<%= data.branding.codePrefix %>.logout(true);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Return Value

None
