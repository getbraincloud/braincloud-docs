# Relay

### Generic Relay Server

<%= data.branding.productName %> Relay Server is updated to a new Version 2 Protocol in our 4.5.6 release -- which are more reliable, more feature-rich, and faster to launch than our original Relay Servers.

### Purpose

The brainCloud relay server's only purpose is to relay packet data between peer. It is not meant to be an authoritative server, except for the owner migration part.

It is designed to handle clients from various connection types: UDP, TCP or WS. So if I client plays in a webgl version of a game, using WS, he can communicate with a client that plays in UDP on desktop.

The maximum number of players supported by the relay server is 40. But it is highly recommended to keep it low, around 8 players. Peer to Peer generates a lot of traffic.

### Packets

A client that wishes to talk to the relay server is required to follow the brainCloud Relay-Server (BCRS) base protocol.

All the integer values in the following tables are unsigned and in network byte order (Big Endian).

![Relay-Server Packets](@site/docs/img/api-img/packets_5_5_0.png)

#### Ping

Pings will be immediately responded by PONG. The client uses this to calculate their ping. Should send frequently, like every second or so. It is important to pass valid previous ping number because this is used to guess the next best lobby owner, should the original owner leave the game.

The first PING sent should be accompanied with a round trip time (RTT) of 999ms. A common mistake would be to send zero first. The server will use the lowest value to transfer ownership. Someone that just joined should initialize high.

If the PING or PONG packets are dropped, make sure to mark your RTT value in the next PING as high as possible, or 999, instead of the previously known RTT. That is a packet drop, and it should hurt the player's ping.

#### RSMG Acknowledge

This is only used by UDP connections. If a Relay-Server Message (RSMG) is sent to the client, it should be responded with an RSMG Ack. Including the packet id that was sent in the original message. RSMG packets need to be reliable. The Relay-Server will resend those every 200ms until acknowledged.

#### Connection request

<%= data.branding.productName %> gave the information about the lobby to the relay server. So it knows who should connect, and each client was given a passcode to use to connect. This should be the first packet sent. A UDP client needs to resend that until a confirmation is received that they are connected. A subsequent connection request will just be ignored if already connected. Re-transmission doesn't need to be high frequency. A suitable interval could be 500ms.

#### Disconnection

This is a clean way to disconnect from the server. If possible, clients should always send this to properly leave a game. Of course, if a game crashes or the browser's tab is killed, it can't do this. There is a timeout in place for those situations.

#### Relay-Server Messages (RSMG)

The relay server will sometimes communicate important system messages to the clients. Those are in json string format. Relay server will keep resending that packet to UDP clients every 200 milliseconds until client acknowledge.

#### Owner migration

If the owner left or never connected in a timely manner, the relay-server will migrate the role to the next member with the best ping. If no one else is currently connected yet, it will be transferred to the next member in the lobby members' list. This last scenario can only occur if the owner connected first, then quickly disconnected. Leaving only unconnected lobby members.

#### End Match

Normal procedure for match termination is to wait for all the participants to disconnect before terminating the instance. This is insufficient however in the case of long-lived lobbies because when a client disconnects from an instance associated with a long-running lobby we send a notification to the brainCloud API servers that said client has prematurely left and the API servers will remove them from any lobbies they are currently a member of. This is not ideal for a long-lived lobby since the clients are meant to stay in it even after the relay server instance has terminated. For this scenario, in release 4.14.0 we have introduced a new END_MATCH message that the instance owner can use to signal that the match is over and can be safely terminated leaving all the clients joined to the lobby instance.

#### UDP Reliables

-   1 bit to specify if the packet is reliable.
-   1 bit to specify if the packet should be in order.
-   2 bit for channel id. 0-3.

Channels are used to define retransmission speed of reliable packets. Also, each channel will have its own retransmission queue. Packet Ids are unique within a channel only. You can receive/send a packet with id=133 on channel 0, and also another one with the same id=133 but on channel 1.

-   **Channel 0**: fastest retransmission rate (Use for things like bullets)
-   **Channel 1**: fastest retransmission rate (Same, but offer the separated channel. So a dropped bullet packet, for example, wouldn't block something else important.)
-   **Channel 2**: medium retransmission rate (Game events that are important, but not crucial. Like player picked up a gun)
-   **Channel 3**: slow retransmission rate (Use for things like chat messages)

Channel is irrelevant for unreliable packets. Ordering is still relevant in that case, but it just means if a packet arrives out of order, it will be dropped.

### Useful Constants

For anyone implementing the protocol, here are the internally defined constants that will be useful:

```
static const auto MAX_RESEND_INTERVAL = 500ms;
static const auto CHANNEL_HIGH_PRIORITY_1      = 0;
static const auto CHANNEL_HIGH_PRIORITY_2      = 1;
static const auto CHANNEL_NORMAL_PRIORITY      = 2;
static const auto CHANNEL_LOW_PRIORITY         = 3;
static const int      MIN_PACKET_SIZE   = 3;
static const int      MAX_PACKET_SIZE   = 1024;
static const uint8_t  MAX_PLAYERS       = 40;
static const uint8_t  INVALID_NET_ID    = MAX_PLAYERS;
static const uint64_t ALL_PLAYERS_MASK  = 0xFFFFFFFFFFFFFFFF;
// Messages send from Client to Relay-Server
static const uint8_t CL2RS_CONNECT      = 0;
static const uint8_t CL2RS_DISCONNECT   = 1;
static const uint8_t CL2RS_RELAY        = 2;
static const uint8_t CL2RS_ACK          = 3;
static const uint8_t CL2RS_PING         = 4;
static const uint8_t CL2RS_RSMG_ACK     = 5;
static const uint8_t CL2RS_END_MATCH    = 6;
// Messages sent from Relay-Server to Client
static const uint8_t RS2CL_RSMG         = 0;
static const uint8_t RS2CL_DISCONNECT   = 1; // CL2RS_DISCONNECT
static const uint8_t RS2CL_RELAY        = 2; // CL2RS_RELAY
static const uint8_t RS2CL_ACK          = 3; // CL2RS_ACK
static const uint8_t RS2CL_PONG         = 4; // CL2RS_PING
static const int ACK_ID_BYTES_SIZE = 8;
```

And channel resends the intervals:

```
static const Duration RELIABLE_RESEND_INTERVALS[] = {
    50ms, 50ms, // High priority 1 and 2
    150ms,      // Normal priority
    500ms       // Low priority
};
static const auto RELIABLE_CHANNEL_HIGH_PRIORITY_1      = 0;
static const auto RELIABLE_CHANNEL_HIGH_PRIORITY_2      = 1;
static const auto RELIABLE_CHANNEL_NORMAL_PRIORITY      = 2;
static const auto RELIABLE_CHANNEL_LOW_PRIORITY         = 3;
```

### Resend Interval Rate

For each reliable packets, the resend rate slows down by 25% each time. This might be tweaked later. So for channel 1, resend at 50ms interface, it will go like this until timeout (10sec):

| interval | total time           | frequency |
| -------- | -------------------- | --------- |
| 50ms     | 0.1s                 | 20        |
| 62ms     | 0.1s                 | 16        |
| 77ms     | 0.2s                 | 13        |
| 96ms     | 0.3s                 | 10        |
| 120ms    | 0.4s                 | 8         |
| 150ms    | 0.5s                 | 7         |
| 187ms    | 0.7s                 | 5         |
| 233ms    | 1.0s                 | 4         |
| 291ms    | 1.3s                 | 3         |
| 363ms    | 1.6s                 | 3         |
| 453ms    | 2.0s                 | 2         |
| 500ms    | 2.5s                 | 2         |
| 500ms    | 3.0s                 | 2         |
| 500ms    | 3.5s                 | 2         |
| 500ms    | 4.0s                 | 2         |
| 500ms    | 4.5s                 | 2         |
| 500ms    | 5.0s                 | 2         |
| 500ms    | 5.5s                 | 2         |
| 500ms    | 6.0s                 | 2         |
| 500ms    | 6.5s                 | 2         |
| 500ms    | 7.0s                 | 2         |
| 500ms    | 7.5s                 | 2         |
| 500ms    | 8.0s                 | 2         |
| 500ms    | 8.5s                 | 2         |
| 500ms    | 9.0s                 | 2         |
| 500ms    | 9.5s                 | 2         |
| 500ms    | 10.0s                | 2         |
| timeout  | too many packet lost |

### Custom Environment Variables

The following environment variables are used by the relay server which can be configured via Relay server settings page in the dashboard.

-   **PACKET_LOG_ENABLED**: Logs packets sent/received. Shouldn't be enabled for production (very spammy). Defaults to false.
-   **MAX_PLAYERS**: Maximum number of players allowed to connect to the server. Defaults to 40.
-   **ALLOW_REJOIN_BY_PROFILE_ID**: Allows players to reconnect to the server instance if their connection drops (even if they have a new RTT connection as well). Only applies for short-lived lobbies (i.e. where "Disband on start" is true). Defaults to false.
-   **CONNECTION_TIMEOUT**: Amount of time in seconds that a player is allowed to be connected to the server without sending a packet before being kicked. Defaults to 10 secs.
-   **MEMBER_TIMEOUT**: Amount of time to wait in seconds for a player to connect to the server before assuming they aren't coming at all. Defaults to 30 secs.
-   **END_MATCH_TIMEOUT**: Amount of time in seconds to stay up before exiting after receiving the END_MATCH packet. Defaults to 2 secs.
-   **PACKET_LOG_ENABLED_WITH_MD5**: Allows for an MD5 hash logging of incoming and outgoing relay packet payloads.
-   **PAYLOAD_LOG_AS_HEX**: Logs the incoming packet payload as a hex dump rather than an ASCII string.

:::info
All the timeout settings are in seconds.
:::

```json
{
    "PACKET_LOG_ENABLED": "true",
    "CONNECTION_TIMEOUT": "240",
    "MEMBER_TIMEOUT": "120",
    "END_MATCH_TIMEOUT": "600",
    "MAX_PLAYERS": "40",
    "ALLOW_REJOIN_BY_PROFILE_ID": "true",
    "PACKET_LOG_ENABLED_WITH_MD5": "true",
    "PAYLOAD_LOG_AS_HEX": "true"
}
```

### Relay Flow

![Relay Flow](@site/docs/img/api-img/relay_flow.png)

### Client Send Implementation

![Client Send Implementation](@site/docs/img/api-img/client_implementation.png)

### Client Receive Implementation

![Client Receive Implementation](@site/docs/img/api-img/client_receive_implementation.png)

### API Summary

### Relay

-   [Connect](/api/capi/relay/connect) - Connect to relay server.
-   [Disconnect](/api/capi/relay/disconnect) - Disconnect from the relay server.
-   [IsConnected](/api/capi/relay/isconnected) - Returns whether or not we have a successful connection with the relay server.
-   [GetPing](/api/capi/relay/getping) - Get the current ping for our user.
-   [SetPingInterval](/api/capi/relay/setpinginterval) - Set the ping interval. Ping allows to keep the connection alive, but also inform the player of his current ping.
-   [GetOwnerProfileId](/api/capi/relay/getownerprofileid) - Get the lobby's owner profile Id.
-   [GetOwnerCxId](/api/capi/relay/getownercxid) - Get the lobby's owner Connection Id.
-   [GetNetIdForProfileId](/api/capi/relay/getnetidforprofileid) - Returns the netId associated with a profileId.
-   [GetCxIdForNetId](/api/capi/relay/getcxidfornetid) - Returns the connection Id associated with a netId.
-   [GetNetIdForCxId](/api/capi/relay/getnetidforcxid) - Returns the netId associated with a connection Id.
-   [Send](/api/capi/relay/send) - Send a packet to peer(s).
-   [SendToPlayers](/api/capi/relay/sendtoplayers) - Send a packet to any players by using a mask.
-   [SendToAll](/api/capi/relay/sendtoall) - Send a packet to all except yourself.
-   [EndMatch](/api/capi/relay/endmatch) - Terminate the match instance by the owner.

### Callbacks

-   [RegisterRelayCallback](/api/capi/relay/registerrelaycallback) - Register callback for relay messages coming from peers.
-   [DeregisterRelayCallback](/api/capi/relay/deregisterrelaycallback) - Deregisters callback for relay messages coming from peers.
-   [RegisterSystemCallback](/api/capi/relay/registersystemcallback) - Register callback for RelayServer system messages.
-   [DeregisterSystemCallback](/api/capi/relay/deregistersystemcallback) - Deregister callback for RelayServer system messages.

<DocCardList />
