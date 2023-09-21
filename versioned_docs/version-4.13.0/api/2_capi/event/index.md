# Event
## Overview



<%= data.branding.productName %> Events allow communication of custom messages between <%= data.branding.productName %> users. By using the <%= data.branding.productName %> **Event API** you are able to send and receive event objects. These events can encapsulate anything you want by using the custom JSON data payload.

When an Event is sent to a user, they can receive it in one of two ways:

1. By calling [GetEvents](/api/capi/event/getevents) which returns a list of all events sent to the authenticated user.
2. Through the registered event callback*. When executing any API call in <%= data.branding.productName %>, the returned JSON from the server may contain new events for the user. By registering for notification of these events using the callback, you can be informed when these "piggybacked" events arrive. See the <%= data.branding.codeClient %> [<code>RegisterEventCallback</code>](/api/capi/client/registereventcallback) method for more details.

\* *Note requires a <%= data.branding.productName %> Plus Plan. Additional bulk API counts apply. To enable Event callbacks for all API calls, enable the "Enable checking for Incoming Events with each API message" compatibility flag.*

### API Summary

### Event

* [SendEvent](/api/capi/event/sendevent) - Sends an event to the designated user ID with the attached json data.
* [UpdateIncomingEventData](/api/capi/event/updateincomingeventdata) - Updates an event in the user's incoming event mailbox.
* [DeleteIncomingEvent](/api/capi/event/deleteincomingevent) - Delete an event out of the user's incoming mailbox.
* [GetEvents](/api/capi/event/getevents) - Get the events currently queued for the user.


<DocCardList />