---
title: "CC Tutorial - Background"
date: "2016-02-16"
---

## Background

brainCloud uses the [Mozilla Rhino](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino) engine to allow user-developed _JavaScript_\-based scripts to be run on brainCloud's servers. Cloud Code scripts run within a secure sandbox that provides access to brainCloud's API methods, while at the same time ensuring that the scripts are limited to accessing the app's own private data, and cannot affect the processing of other brainCloud-based applications.

## Key Concepts

- _**Script parameters are sent via a global "data" JSON object.**_ You retrieve the value of the parameter by simply retrieving it from the data object - i.e. `myParm = data\["myParm"\]`;
- _**You don't technically "return" from a Cloud Code script.**_ The last line of the script will instead simply declare the final object to be evaluated as the script's return -- _this will be clearer after you view an example or two._
- _**The portal includes a built-in cloud editor.**_ We're working to make it more convenient to write and manage your Cloud Code scripts from your desktop, but for now, the simplest is to write it in our editor. The good news is that the editor is syntax-aware and really does help you to write good JavaScript. (Note - the editor does allow import/export from the desktop)
- _**Scripts can be quickly tested via the API Explorer.**_ The API and S2S Explorers make it very easy to test your Cloud Code. Simply go to **Design | Cloud Code | API Explorer**, then authenticate a session, and then call your script using the _**Script**_ service and the appropriate _**Run Script**_ operation. The explorer will even pull your example parameters from the script definitions, so it's pretty quick and simple to execute.
- _**Scripts are versioned.**_ Every time you save a new copy of a script we backup the older version. You can revert to an older script at any time.
- _**Scripts have a "watchdog timer" that ensures that they don't run too long.**_ This is essential to protect the performance of the overall system from run-away scripts. The timeouts for scripts are set individually. The default timeout for a script is 10 seconds but can be set to up to 60 seconds in the timeout dropdown. _Note, brainCloud does allow for running longer-term background scripts - just reach-out to us to enable the setting of longer timeouts._

## Current Limitations

When writing Cloud Code scripts, there are some key limitations to keep in mind:

- _**Each script is limited to a single entry point**_.  This means that essentially the "mainline" of a script is run whenever the script is called.
- _**Access to external libraries is limited.**_ We're looking to add access to popular libraries like Moment.js in the future.
