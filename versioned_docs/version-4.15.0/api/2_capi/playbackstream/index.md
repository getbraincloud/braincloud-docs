# Playback Stream
## Overview



The **PlaybackStreamService** allows for the creation and replay of a series of events. A Stream can be created using the StartStream call. 

One-Way Matches use Playback Streams to track the events of the One-Way Match.

### API Summary

### PlaybackStream
* [StartStream](/api/capi/playbackstream/startstream) - Start a playback stream.
* [ReadStream](/api/capi/playbackstream/readstream) - Read a playback stream.
* [EndStream](/api/capi/playbackstream/endstream) - End a playback stream.
* [DeleteStream](/api/capi/playbackstream/deletestream) - Delete a playback stream.
* [GetRecentStreamsForInitiatingPlayer](/api/capi/playbackstream/getrecentstreamsforinitiatingplayer) - Get recent streams for initiating player, optional parameter: initiatingPlayerId.
* [GetRecentStreamsForTargetPlayer](/api/capi/playbackstream/getrecentstreamsfortargetplayer) - Get recent streams for target player, optional parameter: targetPlayerId.
* [AddEvent](/api/capi/playbackstream/addevent) - Add event to stream.


<DocCardList />