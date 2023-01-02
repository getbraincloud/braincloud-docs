---
title: "Profiles and Identity"
date: "2014-09-08"
---

A cloud-service such as brainCloud is only as flexible as it’s identity system – and brainCloud is very flexible indeed.  brainCloud separates the concepts of a User’s _Profile_ from their _Identity_ **User Profile** _(also known as **Player Profile**)_

- Contains all the information about the user and their state/progress in the app or game
- Includes statistics, entities, attributes, virtual currency balances, the state of milestones, quests, achievements, etc.
- Is local to an App/Game – not shared across games in brainCloud\*

_\* See details on our [Shared Accounts](/apidocs/api-modules/authentication/shared-accounts/) service for ways to share a single user identity across multiple apps._ **User Identity**

- Is used to identify a user in the system, and look up their Profile
- Maybe unauthenticated (anonymous) or authenticated (GameCenter id, Facebook id, E-mail, etc.)
- A player will often have multiple identities associated with their User Profile – just as in real life, your data may be associated with your driver's license, health number, phone number, etc.

brainCloud currently supports the following identity types:

- Anonymous
- E-mail – e-mail address + password
- Facebook id – facebook identity
- Twitter id – twitter identity
- Google Play – Google identity
- GameCenter id – iOS GameCenter identity
- Steam id – steam identity
- Universal – userid + password <- convenient during development

In addition to the above, brainCloud now supports two advanced forms of authentication:

- [External Authentication](/apidocs/api-modules/authentication/external-authentication/) – allows you to authenticate your users using an external (custom) directory service
- [Shared Accounts](/apidocs/api-modules/authentication/shared-accounts/) – allows user accounts to be shared across brainCloud apps

For more information, refer to the **[Authentication API](/apidocs/api-modules/authentication/)** docs.
