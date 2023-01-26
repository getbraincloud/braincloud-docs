# Logging
## Overview



The logging service is only available in Cloud Code.  It allows you to log messages to your app's Error Logs which can be found
via the [Monitoring | Global Monitoring | Recent Errors](https://portal.braincloudservers.com/admin/dashboard#/monitoring/globallogs) page of the <%= data.branding.productName %> portal.

 
### API Summary

### Log Messages

Standard info, warning, and error logging APIs:

* [LogInfo](/api/cc/log/loginfo) - Logs an info message with string-based context.
* [LogInfoJson](/api/cc/log/loginfojson) - Logs an info message with string-based context.
* [LogWarning](/api/cc/log/logwarning) - Logs an warning with string-based context.
* [LogWarningJson](/api/cc/log/logwarningjson) - Logs an warning with json context.
* [LogError](/api/cc/log/logerror) - Logs an error with string-based context.
* [LogErrorJson](/api/cc/log/logerrorjson) - Logs an error with json context.

:::info
As of Release 3.11 these methods have been added to the bridge for convenience.
:::


### Debugging

<%= data.branding.productName %> now supports debug-level log messages, which display only in the *activity pane* of the **Cloud Code Editor** and **API Explorers**. They are not written to the logging database.

The debug-level log APIs are only available from the [<code>bridge</code>](/api/cc/bridge).



<DocCardList />