# Segment
## Overview




**Segment** is a new service that Allows devs to retrieve the current segments that a user (i.e. player) is in. Devs can also retrieve the master list of segments.

### API Summary

### Segment
* [GetMySegmentsLegacy](/api/capi/segment/getmysegmentslegacy) - Returns the segments for the current user - in legacy format (i.e. using the existing, numeric segment ids). Available via cloud-code only.
* [RefreshMySegments](/api/capi/segment/refreshmysegments) - Refreshes the segments for the current user. Available via cloud-code only.
* [SysGetSegmentList](/api/capi/segment/sysgetsegmentlist) - Returns a list of all segments with basic meta-data. i.e. does not include the criteria details.


<DocCardList />