# Event
## Overview


<%= data.branding.productName %> Events allow communication of custom messages between <%= data.branding.productName %> users. By using the <%= data.branding.productName %> **Event API** you are able to send and receive event objects. These events can encapsulate anything you want by using the custom JSON data payload.
### API Summary

### Messaging
* [SendEvent](/api/s2s/event/sendevent) - This service allows you to send events to specified players.
* [SysSendEventRTTOnly](/api/capi/event/syssendeventrttonly) - Sends an event to the designated user ID with the attached json data. Will only deliver the event via RTT. Will not persist the event.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S messaging APIs (if they are not listed at this section below),
refer to <%= data.branding.productName %> client [event](/api/capi/event) APIs.
:::

<DocCardList />