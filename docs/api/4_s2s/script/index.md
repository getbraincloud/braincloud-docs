# Script
## Overview


This service allows you to execute cloud code scripts

### API Summary

### Script
* [ScheduleCloudScript](/api/s2s/script/schedulecloudscript) - Schedules a script to run on the server at a later date.
* [RunBatchUserScript](/api/s2s/script/runbatchuserscript) - Runs a script against every user in the provided segments or all.
* [RunBatchUserScriptAndCompletionScript](/api/s2s/script/runbatchuserscriptandcompletionscript) - Runs a script against every user in the app and then a completion script at the end.
* [RunBatchUserScriptForProfilesAndCompletionScript](/api/s2s/script/runbatchuserscriptforprofilesandcompletionscript) - Runs a script against the specified users and then a completion script at the end.
* [RunBatchUserScriptForSegmentsAndCompletionScript](/api/s2s/script/runbatchuserscriptforsegmentsandcompletionscript) - Runs a script against the users in the specified segments and then a completion script at the end.
* [RunScript](/api/s2s/script/runscript) - Executes a script on the server.
* [ScheduleBatchUserScript](/api/s2s/script/schedulebatchuserscript) - Schedules a script to run on the server at a later date.
* [CancelScheduledScript](/api/s2s/script/cancelscheduledscript) - Cancels a previously scheduled script.
* [GetScheduledCloudScripts](/api/s2s/script/getscheduledcloudscripts) - Retrieves scripts scheduled to run up to and including the specified start time (UTC in ms).
* [GetRunningOrQueuedCloudScripts](/api/s2s/script/getrunningorqueuedcloudscripts) - Retrieves scripts are running up and queued by server.
* [ScheduleRunScriptUTC](/api/capi/script/schedulerunscriptutc) - Schedules a script to run on the server at a later time in UTC format.
* [ScheduleRunScriptUTCv2](/api/capi/script/schedulerunscriptutcv2) - Schedules a script to run on the server at a later time in UTC format.
* [SysCancelScheduledScriptIfExists](/api/capi/script/syscancelscheduledscriptifexists) - Cancels a previously scheduled script, if it exists and is still in Scheduled state.
* [SysCancelUserScriptBatchIfExists](/api/capi/script/syscanceluserscriptbatchifexists) - Cancels a user script batch, if it exists and is in Scheduled, Queued or Running state.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S script APIs (if they are not listed at this section below),
refer to <%= data.branding.productName %> client [script](/api/capi/script) APIs.
:::

<DocCardList />