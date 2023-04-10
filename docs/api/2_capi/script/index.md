# Script
## Overview



The <code>[RunScript](/api/capi/script/runscript)</code> method is used to invoke cloud code scripts from the client.

Cloud Code scripts can be created, edited, and tested from the [Edit Scripts page](https://portal.braincloudservers.com/admin/dashboard#/development/serverscripts-edit)
of the <%= data.branding.productName %> portal.

:::tip
Scripts must have the “Client Callable” flag set to True to be callable from client apps.
:::

### API Summary

### Script
* [CancelScheduledScript](/api/capi/script/cancelscheduledscript) - Cancels a previously scheduled script.
* [GetRunningOrQueuedCloudScripts](/api/capi/script/getrunningorqueuedcloudscripts) - Retrieves scripts are running up and queued by server.
* [GetScheduledCloudScripts](/api/capi/script/getscheduledcloudscripts) - Retrieves scripts scheduled to run up to and including the specified start time (UTC in ms).
* [RunParentScript](/api/capi/script/runparentscript) - Runs a script against the level of parent from.
* [RunPeerScript](/api/capi/script/runpeerscript) - Runs a script against the level of peer from.
* [RunPeerScriptAsync](/api/capi/script/runpeerscriptasync) - Runs a script against the level of peer from with async way.
* [RunScript](/api/capi/script/runscript) - Executes a script on the server.
* [ScheduleRunScriptMinutes](/api/capi/script/schedulerunscriptminutes) - Schedules a script to run on the server at a later time in minutes from now.
* [ScheduleRunScriptMillisUTC](/api/capi/script/schedulerunscriptmillisutc) - Schedules a script to run on the server at a later time in UTC format.
* [ScheduleRunScriptUTC](/api/capi/script/schedulerunscriptutc) - Schedules a script to run on the server at a later time in UTC format.
* [ScheduleRunScriptUTCv2](/api/capi/script/schedulerunscriptutcv2) - Schedules a script to run on the server at a later time in UTC format.
* [SysCancelScheduledScriptIfExists](/api/capi/script/syscancelscheduledscriptifexists) - Cancels a previously scheduled script, if it exists and is still in Scheduled state.
* [SysCancelUserScriptBatchIfExists](/api/capi/script/syscanceluserscriptbatchifexists) - Cancels a user script batch, if it exists and is in Scheduled, Queued or Running state.

<DocCardList />