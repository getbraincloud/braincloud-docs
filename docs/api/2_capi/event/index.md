# Event
## Overview



<%= data.branding.productName %> Events allow communication of custom messages between <%= data.branding.productName %> users. By using the <%= data.branding.productName %> **Event API** you are able to send and receive event objects. These events can encapsulate anything you want by using the custom JSON data payload.

When an Event is sent to a user, they can receive it in one of two ways:

1. By calling [GetEvents](/api/capi/event/getevents) which returns a list of all events sent to the authenticated user.
2. Through the registered event callback*. When executing any API call in <%= data.branding.productName %>, the returned JSON from the server may contain new events for the user. By registering for notification of these events using the callback, you can be informed when these "piggybacked" events arrive. See the <%= data.branding.codeClient %> [<code>RegisterEventCallback</code>](/api/capi/client/registereventcallback) method for more details.

\* *Note requires a <%= data.branding.productName %> Plus Plan. Additional bulk API counts apply. To enable Event callbacks for all API calls, enable the "Enable checking for Incoming Events with each API message" compatibility flag.*

### API Summary

#### Retrieving Event
* [GetEvents](/api/capi/event/getevents) - Get the events currently queued for the user.

#### Sending Event
* [SendEvent](/api/capi/event/sendevent) - Sends an event to the designated user ID with the attached json data.
* [SysSendEventRTTOnly](/api/capi/event/syssendeventrttonly) - Sends an event to the designated user ID with the attached json data. Will only deliver the event via RTT. Will not persist the event.
* [SysSendEventToProfiles](/api/capi/event/syssendeventtoprofiles) - Sends an event to multiple users.

#### Deleting Event
* [DeleteIncomingEvent](/api/capi/event/deleteincomingevent) - Delete an event out of the user's incoming mailbox.
* [DeleteIncomingEventsBy](/api/capi/event/deleteincomingevents) - Delete a list of events out of the user's incoming mailbox.
* [DeleteIncomingEvents](/api/capi/event/deleteincomingevents) - Delete a list of events out of the user's incoming mailbox.
* [DeleteIncomingEventsOlderThan](/api/capi/event/deleteincomingeventsolderthan) - Delete any events older than the given date out of the user's incoming mailbox.
* [DeleteIncomingEventsByTypeOlderThan](/api/capi/event/deleteincomingeventsbytypeolderthan) - Delete any events of the given type older than the given date out of the user's incoming mailbox.

#### Updating Event
* [UpdateIncomingEventData](/api/capi/event/updateincomingeventdata) - Updates an event in the user's incoming event mailbox.


<DocCardList />