# Report

**Report** is a new service that allows devs to retrieve user-analytics-report data programmatically via S2S and cloud-code.

### API Summary

-   [SysGetLatestReport](/api/capi/report/sysgetlatestreport) - Returns the latest report for the given criteria.
-   [SysGetReport](/api/capi/report/sysgetreport) - Returns the full report for the given reportId, if it exists.
-   [SysGetReportForStartDate](/api/capi/report/sysgetreportforstartdate) - Returns the report matching given subject, recurrence and startDate criteria, if it exists.
-   [SysListLatestReports](/api/capi/report/syslistlatestreports) - Returns a list of the metadata for the latest reports for the given report options.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S.
For the usages of the S2S report APIs (if they are not listed at this section),
refer to <%= data.branding.productName %> client [report](/api/capi/report) APIs.
:::

<DocCardList />
