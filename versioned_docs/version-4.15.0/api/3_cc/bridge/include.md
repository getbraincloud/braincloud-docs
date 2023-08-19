# Include
## Overview
Use for including a share script into the current script. The included script is pre-rendered and combined into the current script.

```
bridge.include(“path/to/scriptname.ccjs”); 
```

:::tip
If without specifying the script path in include operation, the system will only search the scripts in the same folder as the current script located in.
:::

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
// MathFunctions script

function sumNums( num1, num2 ) {
    return (num1 + num2);
}


// The script that includes MathFunctions script
"use strict";

bridge.include("path/to/MathFunctions.ccjs");

function main() {
    var response = {};
    response.answer = sumNums(data.number1, data.number2);
    return response;
}
main();
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
// MathFunctions script

function sumNums( num1, num2 ) {
    return (num1 + num2);
}


// The script that includes MathFunctions script
"use strict";

bridge.include("path/to/MathFunctions.ccjs");

function main() {
    var response = {};
    response.answer = sumNums(data.number1, data.number2);
    return response;
}
main();
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

## Method Parameters
Parameter | Description
--------- | -----------
scriptName | The name of the script with its path (the relative path to the included script file).


