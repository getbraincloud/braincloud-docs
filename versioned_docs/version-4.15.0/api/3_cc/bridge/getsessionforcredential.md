# GetSessionForCredential
## Overview
Creates and returns a session for the credentials provided.

This method is used for when you need a session for a user other than the one calling the script,
or when a script does not have a user context by default (ex. S2S or Scheduled).

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
var externalId = "example@email.com";
var authenticationType  = "Email";
var externalAuthType = "someAuth";
var session = bridge.getSessionForCredential(externalId, authenticationType, externalAuthType);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var externalId = "example@email.com";
var authenticationType  = "Email";
var externalAuthType = "someAuth";
var session = bridge.getSessionForCredential(externalId, authenticationType, externalAuthType);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
externalId | User ID for the given authenticationType
authenticationType | Type of authentication. Full list of types can be found [here](/api/appendix/authtypes).
externalAuthType | Optional parameter to specify the external authenticationType to use for the passed in credentials


