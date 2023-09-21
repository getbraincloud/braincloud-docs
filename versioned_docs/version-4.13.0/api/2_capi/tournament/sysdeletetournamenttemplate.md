# SysDeleteTournamentTemplate
## Overview
Deletes the tournament template identified by the tournament code.

<PartialServop service_name="tournament" operation_name="SYS_DELETE_TOURNAMENT_TEMPLATE" / >

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
var tournamentCode = "tournamentCodeForTemplateToDelete";
var version = 10;
var tournamentProxy = bridge.getTournamentServiceProxy();

var postResult = tournamentProxy.sysDeleteTournamentTemplate(tournamentCode, version);
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
	"service": "tournament",
	"operation": "SYS_DELETE_TOURNAMENT_TEMPLATE",
	"data": {
    "tournamentCode": "tournamentCodeForTemplateToDelete"
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
  "data": {},
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
tournamentCode | The tournament code uniquely identifying the tournament template to be deleted.
versionId | Version of the tournament, use -1 for the latest version.


