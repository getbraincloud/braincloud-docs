# Scheduled Scripts

<%= data.branding.productName %> includes a scheduling system that allows you to defer running a script until a later time. You can schedule scripts via the [<code>ScheduleRunScriptUTC()</code>](/api/capi/script/schedulerunscriptutc) and [<code>ScheduleRunScriptMinutes()</code>](/api/capi/script/schedulerunscriptminutes) API calls.

Scheduling a script adds a *job* to the <%= data.branding.productName %> *job queue*. You can view the list of current jobs in the queue via the **Monitoring | Global Monitoring | Job Queue** page of the portal.

:::caution
Like S2S scripts, scheduled scripts do not have a user session associated with them. Use the same techniques described above to create one if necessary.
:::