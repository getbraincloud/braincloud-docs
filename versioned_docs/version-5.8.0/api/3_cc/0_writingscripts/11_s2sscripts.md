# S2S Scripts

Server-to-Server (S2S) Scripts are invoked not from the Client API, but rather from our Server-to-Server Interface. These scripts are intended to be called from custom (private) servers - and may be utilized for managing global datafill, content management, triggering engagement events, etc.

The biggest difference between an S2S Script and a regular Cloud Code script is the **absense of a User Session** at runtime.

Normally Cloud Code scripts are always run within the context of a user (client) session - and thus these scripts have full access to the **Client API**.

S2S Scripts are invoked without authenticating an individual end-user, thus do not have a user session associated with them, and **do not have access to the Client API methods** -- by default.

This would seem a significant limitation - and it is - but luckily there is an easy work-around. S2S scripts are able to **create** a temporary **user session** for a specified profile id.  This profile id may be part of the parameters passed into the script, or may be a known **system user profileId** that has been created for the app.

:::caution
Describing how to call the S2S interface is outside-the-scope of this section, but will be coming soon.
:::

> **CreateTournamentS2S** - Creates a tournament entity

```cfscript
var SYSTEM_USER = "3e1de451-3743-462b-8478-be4da44855cb";

// Create a user session for the system user
var userSession = bridge.getSessionForProfile(SYSTEM_USER);

// Use that session to gain access to the Client API
var globalEntityService = bridge.getGlobalEntityServiceProxy(userSession);


// Create the tournament object
globalEntityService.createEntity(
    "tournament",
    0,
    { "other": 1}, // Anyone can read it
    data);

// Return success!
true;
```

> **CreateTournamentS2S** - test parameters

```JSON
{
    "name": "Christmas Chaos",
    "startDate": "2016-12-20",
    "durationDays": 5,
    "firstPrize": 1000,
    "secondPrize": 500,
    "thirdPrize": 100
}
```