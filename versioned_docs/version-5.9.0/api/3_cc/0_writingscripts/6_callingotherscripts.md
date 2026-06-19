# Calling Other Scripts

To invoke a script from within another script, simply call the `bridge.callScript()` method, specifying the name and parameters for the script to call.

```
var parameters = { "arg1": 5, "arg2": 10 };
var scriptResults = bridge.callScript( "anotherScript", parameters );
if (scriptResults.status == 200 && scriptResults.data.success === true) {
    // process scriptResults.data.response appropriately
    // ...
}
```

For more advanced scenarios (i.e. scheduled scripts, etc.), call the appropriate [<code>`Script` service</code>](/api/capi/script/runscript) method, as you would any other API call.
