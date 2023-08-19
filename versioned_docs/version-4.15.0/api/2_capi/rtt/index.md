# RTT
## Overview





<%= data.branding.productName %> is built upon a high performance request/response architecture.
This means that its APIs are REST-like -- essentially you only received data from
<%= data.branding.productName %> servers by directly requesting it (i.e. request/reponse).


<%= data.branding.productName %>'s new Real-Time Tech (RTT) featureset expands upon these capabilities -
adding the ability for <%= data.branding.productName %> to push information and updates to clients
that need it.

![RTT](@site/docs/img/api-img/rtt_architecture.png)

Services that require RTT include:

* Chat
* Lobbies
* Online Matchmaking
* Presence

In addition, the following services have been enhanced to take advantage of RTT (if enabled):

* Async Multiplayer
* Events
* Messaging


### API Summary


### Realtime Tech (RTT)

* [EnableRTT](/api/capi/rtt/enablertt)
* [DisableRTT](/api/capi/rtt/disablertt)


### RTT Callbacks
Getting data from RTT events.

* [RegisterBlockchainCallback](/api/capi/rtt/registerblockchaincallback)
* [DeregisterBlockchainCallback](/api/capi/rtt/deregisterblockchaincallback)
* [RegisterRTTChatCallback](/api/capi/rtt/registerrttchatcallback)
* [DeregisterRTTChatCallback](/api/capi/rtt/deregisterrttchatcallback)
* [RegisterRTTEventCallback](/api/capi/rtt/registerrtteventcallback)
* [DeregisterRTTEventCallback](/api/capi/rtt/deregisterrtteventcallback)
* [RegisterRTTLobbyCallback](/api/capi/rtt/registerrttlobbycallback)
* [DeregisterRTTLobbyCallback](/api/capi/rtt/deregisterrttlobbycallback)
* [RegisterRTTMessagingCallback](/api/capi/rtt/registerrttmessagingcallback)
* [DeregisterRTTMessagingCallback](/api/capi/rtt/deregisterrttmessagingcallback)
* [RegisterRTTPresenceCallback](/api/capi/rtt/registerrttpresencecallback)
* [DeregisterRTTPresenceCallback](/api/capi/rtt/deregisterrttpresencecallback)
* [DeregisterAllRTTCallbacks](/api/capi/rtt/deregisterallrttcallbacks)



<DocCardList />