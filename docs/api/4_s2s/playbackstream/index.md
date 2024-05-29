# Playback Stream

The **PlaybackStreamService** allows for the creation and replay of a series of events. A Stream can be created using the StartStream call.

One-Way Matches use Playback Streams to track the events of the One-Way Match.

### API Summary

### PlaybackStream

-   [SysStartStream](/api/capi/playbackstream/sysstartstream) - Start a playback stream.
-   [SysReadStream](/api/capi/playbackstream/sysreadstream) - Read a playback stream.
-   [SysEndStream](/api/capi/playbackstream/sysendstream) - End a playback stream.
-   [SysDeleteStream](/api/capi/playbackstream/sysdeletestream) - Delete a playback stream.
-   [SysAddEvent](/api/capi/playbackstream/sysaddevent) - Add event to stream.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S.
For the usages of the S2S playbackStream APIs (if they are not listed at this section),
refer to <%= data.branding.productName %> client [playbackStream](/api/capi/playbackStream) APIs.
:::

<DocCardList />
