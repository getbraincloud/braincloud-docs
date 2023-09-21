# Global Statistics
## Overview



The Global Statistics service allows you to retrieve and update your app's predefined statistics defined on the
[Global Statistics](https://portal.braincloudservers.com/admin/dashboard#/development/stats-game) page of the <%= data.branding.productName %> portal.

Global Statistics must be pre-defined from the [Statistics Rules - Global Statistics page](https://portal.braincloudservers.com/admin/dashboard#/development/stats-game)
of the <%= data.branding.productName %> portal.  If instead you need to create them dynamically at runtime, you can enable the Generate App Statistic Rule Enabled setting on the
[Advanced Settings page](https://portal.braincloudservers.com/admin/dashboard#/development/core-settings-advanced-settings) of your app in the <%= data.branding.productName %> portal.

Global (or App) Statistics are similar to User Stats, except that they are stored centrally across all of an app's users.

### API Summary

### Global Statistics

* [ReadAllGlobalStats](/api/s2s/globalstats/readallglobalstats) - Returns all of the global statistics.
* [ReadGlobalStatsForCategory](/api/s2s/globalstats/readglobalstatsforcategory) - Reads a subset of global statistics belonging to the specified category (all if omitted).
* [ReadGlobalStatsSubset](/api/s2s/globalstats/readglobalstatssubset) - Reads a subset of global statistics as defined by the input JSON.
* [IncrementGlobalStats](/api/s2s/globalstats/incrementglobalstats) - Atomically increment (or decrement) global statistics.
* [ProcessStatistics](/api/s2s/globalstats/processstatistics) - Apply statistics grammar to a partial set of statistics.


<DocCardList />