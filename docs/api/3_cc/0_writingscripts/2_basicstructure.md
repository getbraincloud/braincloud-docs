# Basic Structure


The simplest scripts are composed of the following elements:

* Parameters - arguments passed to the scripts
* Inline code
* Returned results

> CalculateArea - A simple cloud code script

```cfscript
// First get our parameters
var width = data.width;
var height = data.height;

// Calculate the area
var result = width * height;

// Return the result
result;
```

## Parameters (Arguments)

For most types of scripts, arguments are passed to a <%= data.branding.productName %> script via a `data` json object accessible from within the script.

*For example:*
```
var width = data.width;
var height = data.height;
```

> CalculateArea - example parameters

```json
{
    "width": 5,
    "height": 6
}
```

## Inline Code

Since it is inherently a *script*, your Cloud Code method doesn't need to have much structure.

Simply enter the statements to execute, one after another. No need for functions (unless you want them), a main() routine, etc.

## Results

> CalculateArea - expected results

```json
{
    "status": 200,
    "data": {
        "response": 30,
        "success": true
    }
}
```

Speaking of *"not much structure"*, Cloud Code scripts return results by simply "stating" the object to be returned by the Rhino engine.

So while you are undoubtably used to `return`-ing values, and you will in Javascript functions *within* the script, for the final exit of your script, you simply state the resulting object.

Note how the `CalculateArea` script is returning its result.

## Try it!

As a test, try entering and running the `CalculateArea` script:

* Log into the *Design Portal*
* Create or select an *App* to test with
* Go to **Design | Cloud Code | Scripts**, and click the **[Create Folder]** option from the **[Action]** dropdown menu to create a folder (skip this step if you want to put new script in root or an existing folder)
* Click the folder you just created to get into it (or stay in root folder), then click the **[Create Script]** option from the **[Action]** dropdown menu to create a script
* Give the script a name (i.e. "CalculateArea")
* Set the test parameters similar to those in the example parameters shown
* Go to the **Editor** page, and copy and paste the script code
* Click **[Save]**, then go to the **Run** page
* Click **[Quick Authenticate]** to authenticate a user, and then **[Run]** to run your script

*Congratulations! You've written your first Cloud Code Script!*

:::success
For further detail of creating a script be sure to check out our knowledge base article [<b>bridge</b>](/api/cc/bridge)
:::