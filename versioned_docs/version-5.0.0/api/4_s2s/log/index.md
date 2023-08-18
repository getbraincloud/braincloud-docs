# Logging
## Overview



The logging service is only available in Cloud Code.  It allows you to log messages to your app's Exception Logs which can be found
on the [Global Monitoring - Recent Errors page](https://portal.braincloudservers.com/admin/dashboard#/monitoring/globallogs) of the <%= data.branding.productName %> portal.

### API Summary

### Log

Standard info, warning, and error logging APIs:

* [LogInfo](/api/s2s/log/loginfo) - Logs an info message with string-based context.
* [LogInfoJson](/api/s2s/log/loginfojson) - Logs an info message with string-based context.
* [LogWarning](/api/s2s/log/logwarning) - Logs an warning with string-based context.
* [LogWarningJson](/api/s2s/log/logwarningjson) - Logs an warning with json context.
* [LogError](/api/s2s/log/logerror) - Logs an error with string-based context.
* [LogErrorJson](/api/s2s/log/logerrorjson) - Logs an error with json context.

:::info
As of Release 3.11 these methods have been added to the bridge for convenience.
:::


### Debugging

<%= data.branding.productName %> now supports debug-level log messages, which display only in the *activity pane* of the **Cloud Code Editor** and **API Explorers**. They are not written to the logging database.

The debug-level log APIs are only available from the [bridge](/api/cc/bridge).



<DocCardList />