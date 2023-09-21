# Server to Server (S2S)
## Overview



### API Specification

<%= data.branding.productName %> includes a Server to Server (S2S) interface for access from client-operated servers.

Uses for this sort of interface include:

- Secure submission of score data from dedicated multiplayer servers (i.e. prevents cheating)
- Creation of custom administrative tools
- Etc.

> Standard Protocol - example request:

```json-doc
{
    "appId": "10000",
    "serverName": "serverX",
    "serverSecret": "5381505b-72ea-430d-82fe-d91b873ac7a2",
    "service": "globalEntity",
    "operation": "GET_SYSTEM_ENTITY_LIST_COUNT",
    "data": {
        "where": { "entityType": "bot" }
    }
}
```

> Standard Protocol - example response:

```json-doc
{
    "entityListCount": 2
}
```

Security for the interface is implemented via a separate S2S secret and the ability to configure valid source IP addresses. It allows for multiple server configurations to be configured per app.

The interface is implemented as a REST servlet that accepts JSON string POSTs and returns JSON responses. It is similar to the regular client REST interface in that the target API is based on selecting a *service* and *operation*. 

The name of the S2S servlet is "s2sdispatcher" so the URL required for the REST call is `https://api.braincloudservers.com/s2sdispatcher`.

Unlike client-callable cloud scripts, S2S scripts are run in the context of an app rather than a particular user profile – thus no user authentication is required (and hence the need + recommendation for the additional ip-based security).



The schema for the JSON request is as follows:

- `appId` – <%= data.branding.productName %> assigned id when game/app is created.
- `serverName` – Name of the server configured in the <%= data.branding.productName %> portal.
- `serverSecret` – Secret assigned to that particular server configuration.
- `service` – Identifies the service category of the REST call. (Currently only "script" is implemented.)
- `operation` – Identifies the operation within the service to executed. (Currently only "RUN" is implemented.)
- `data` – Service/Operation dependent data parameters.

The JSON response returns the result of the service/operation call.

<div></div>

### Advanced Protocol

> Advanced Protocol - Authentication request

```json-doc
{
    "packetId": 0,
    "messages": [
        {
            "service": "authenticationV2",
            "operation": "AUTHENTICATE",
            "data": {
                "appId": "10000",
                "serverName": "serverX",
                "serverSecret": "5381505b-72ea-430d-82fe-d91b873ac7a2"
            }
        }
    ]
}
```

In addition to the above mentioned standard simple REST protocol, <%= data.branding.productName %> also implements a more complex packet/session based protocol. This protocol is similar to the one used on the normal client interface. It also includes the ability to bundle multiple messages into one REST request.

:::tip
<strong>Why use the advanced S2S protocol?</strong> <p></p>Because it is faster *and* less expensive! Every standard S2S call requires our servers to first *authenticate* your request (using the appId, serverId and secret), and then process the request. This takes time - and we charge you an extra API count for it. With the advanced protocol, the authentication only happens once - so you save an API count for each request that follows! And get faster response times to boot!
:::


Notice the addition of the `packetId` sequence number and array/bundle of messages. The typical response to the above packet:

<div></div>

```json-doc
{
    "packetId": 0,
    "messageResponses": [
        {
            "status": 200,
            "data": {
                "sessionId": "vrunikbkgmu3m9gkeqt78vvkb2"
            }
        }
    ]
}
```

Notice the `packetId` and `sessionId` in the response.

<div></div>
Subsequently you could send:

> Follow-up request, with pre-authenticated session included:

```json-doc
{
    "packetId": 1,
    "sessionId": "vrunikbkgmu3m9gkeqt78vvkb2",
    "messages": [
        {
            "service": "script",
            "operation": "RUN",
            "data": {
                "scriptName": "Add2Numbers",
                "scriptData": {
                    "x": 5,
                    "y": 5
                }
            }
        }
    ]
}
```

Notice the incremented `packetId` and the `sessionId` returned in the previous request.  In this simple case we are only sending one request (i.e. a "messages" array of 1). You can append more requests to this array to perform more than one request. The typical response would be:
<div></div>

```json-doc
{
    "packetId": 1,
    "messageResponses": [
        {
            "status": 200,
            "data": {
                "response": 10
            }
        }
    ]
}
```

The "messageResponses" array is a list of responses corresponding to the "messages" array sent in the request.

In the event that you do not receive a response to this request you can simply resend it, without incrementing the "packetId". If <%= data.branding.productName %> had successfully received this request, executed it, and failed to return a response due to a network failure it will simply return the cached response from the original request to the resend. The `packetId` field is critical to this cached response capability. <%= data.branding.productName %> will only cache the last response.

<DocCardList />