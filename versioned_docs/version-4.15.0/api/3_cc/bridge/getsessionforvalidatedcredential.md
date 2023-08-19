# GetSessionForValidatedCredential
## Overview
Creates and returns a session for the credentials provided.

This method is used for when you need a session for a user other than the one calling the script, or validate a crendential,
or when a script does not have a user context by default (ex. S2S or Scheduled).

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var externalId = "example@email.com";
var authenticationType  = "Email";
var externalAuthType = "someAuth";
var authenticationToken = "password";
var session = bridge.getSessionForValidatedCredential(externalId, authenticationType, externalAuthType, authenticationToken);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```cfscript
var externalId = "example@email.com";
var authenticationType  = "Email";
var externalAuthType = "someAuth";
var authenticationToken = "password";
var session = bridge.getSessionForValidatedCredential(externalId, authenticationType, externalAuthType, authenticationToken);
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```json
{
  "data": {
    "json": {
      "response": {
        "session": {
          "cacheObjects": {},
          "systemCreated": true,
          "packetSequenceInvalid": false,
          "languageCode": null,
          "sharedPlayers": {
            "24667": "82cbbbf2-ee44-4279-b5a0-3e9bf04edf25"
          },
          "apiVersion": "VERSION_1_5",
          "playerId": "82cbbbf2-ee44-4279-b5a0-3e9bf04edf25",
          "gameId": "24667",
          "cacheExpiry": 1200,
          "lastPacketReceived": -1,
          "clientLib": null,
          "clientLibVersion": null,
          "gameVersion": null,
          "countryCode": null,
          "loggedOut": false,
          "gameIdSave": "24667",
          "secret": null,
          "platform": null,
          "readTimestamp": null,
          "invalidated": false,
          "lastUploadHTTPCode": 0,
          "lastUploadResponse": null,
          "peerGameId": null,
          "peerClientGameId": null,
          "peerSponsored": null,
          "gameIdOverridden": false,
          "parentLevel": null,
          "eventUpdateTimestamp": null,
          "rttServerId": null,
          "sharedDataSyncedIds": {},
          "dynamicChatChannels": null,
          "lastPacketProcessed": -1,
          "lastPacketResponse": null,
          "sessionId": "scriptSession_7bca7ed1-6b83-4402-98e8-793d046d1a6a",
          "key": {
            "sessionId": "scriptSession_7bca7ed1-6b83-4402-98e8-793d046d1a6a",
            "primaryKey": true
          }
        }
      },
      "success": true
    },
    "statusCode": 200
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
externalId | User ID for the given authenticationType
authenticationType | Type of authentication. Full list of types can be found [here](/api/appendix/authtypes).
externalAuthType | Optional parameter to specify the external authenticationType to use for the passed in credentials
authenticationToken | Password or client side token


