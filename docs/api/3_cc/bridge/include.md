# Include

Use for including a share script into the current script. The included script is pre-rendered and combined into the current script.

```
"use strict";
bridge.include(“path/to/scriptname.ccjs”); // put the bridge.include()call as the first line in your script.
...
```

:::caution
Make sure to put the bridge.include()call as the first line in your script. This is a necessary requirement, as any other lines preceding the bridge.include()call must be blank lines, //comments, or the ”use strict” declaration.
:::

:::tip
The path of the included script is a relative path, ff without specifying the script path in include operation, the system will only search the scripts in the same folder as the current script located in.
:::

## Method Parameters

| Parameter  | Description                                                                           |
| ---------- | ------------------------------------------------------------------------------------- |
| scriptName | The name of the script with its path (the relative path to the included script file). |

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
// This is a script that includes MathFunctions script
"use strict";

bridge.include("path/to/MathFunctions.ccjs");

function main() {
    var response = {};
    response.answer = sumNums(data.number1, data.number2);
    return response;
}
main();


// This is MathFunctions script which will be included from the script above.
function sumNums( num1, num2 ) {
    return (num1 + num2);
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```
