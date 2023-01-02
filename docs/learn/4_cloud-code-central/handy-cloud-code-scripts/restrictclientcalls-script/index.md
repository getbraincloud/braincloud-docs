---
title: "RestrictClientCalls script"
date: "2019-01-07"
---

## Purpose

Allows an app to severely restrict access to brainCloud Client APIs. Very useful if your app has significant security requirements.

The script can be configured in one of two ways:

- whitelist - all services and operations specified are \*allowed\*. Any API calls not specified are not allowed.
- blacklist - disallow access to the services and operations specified. All other API calls allowed.

## Script

Click [RestrictClientCalls.ccjs.zip](script/RestrictClientCalls.ccjs.zip) to download the file.

## Usage / Setup

To configure this script, you must first import it into your app.

Then go to the **Design | Cloud Code | API Hooks** screen, and click the **\[+ Create\]** button to configure the script.

On the configuration dialog that displays, choose:

- Service: "Dispatcher"
- Operation: "ProcessMessage"
- Pre/Post: "Pre"
- Script: "RestrictClientCalls"

And then in the _Params_ section, you can configure a whitelist or blacklist of services and operations to enable or restrict. Here is an example:
```js
{
    "listtype": "whitelist",
    "services": {
        "entity": { "READ": 1 },
        "globalEntity": { "GET\_LIST": 1, "GET\_LIST\_COUNT": 1 },
        "heartbeat": { "READ": 1 },
        "playerState": {},
        "script": {}
    }
}
```
The example above allows calls to:

- "entity" service, "READ" operation only
- "globalEntitity" service, "GET\_LIST" and "GET\_LIST\_COUNT" operations
- "heartbeat" service, "READ" operation only <- important - heartbeats are used to keep your client sessions alive!
- "playerState" service - any operation
- "script" service - any operation... <- note, individual script permissions still apply

## Notes

- _Calls to the "authenticationV2" service are always allowed._
- Rejected API calls will return an HTTP status of 500 with a 40639 `reason_code`.

Warning

This approach is complete and secure - but does result in a lot of additional API calls being incurred by your app. For a more targeted approach, see [this](http://help.getbraincloud.com/en/articles/1852058-is-there-a-way-to-prevent-a-client-apps-from-making-certain-api-calls) knowledge base article.
