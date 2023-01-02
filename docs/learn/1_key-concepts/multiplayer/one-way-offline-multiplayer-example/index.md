---
title: "One Way Offline Example"
date: "2016-09-02"
---

_This example describes an approach for implementing a Clash of Clans, Boom Beach, etc. type of game._

There are many ways to solve this functionality, but in the following example, the player creates **Read Only** User Entities to define their defense information.  All player data manipulation is done on the server via Cloud Code.  In this tutorial, we represent the entire map in just one entity, but the same theory would apply if you represented each defense _in a separate entity (which would definitely be more efficient for larger maps)._

## Shared Entity Data

The following is an example of the type of data that might be created and shared in a One Way match.  It defines a grid of defenses set up beforehand by the defender that will be constructed for the attacking player to attempt to defeat.  This data is created and managed via the [User Entity APIs](/api/capi/entity).

Note that this data has an ACL of Read-Only.  This ensures that it cannot be edited by anyone except the owner of the data (in this case the defender).  This is not necessary but recommended to increase the security of the data.

The example below is the data portion of the shared user entity.
```js
{
    "grid": {
        "gridType": "field",
        "dimesionX": 14,
        "dimensionY": 10,
        "background": "image.png"
    },
    "defenses": [
        {
            "type": "Turret",
            "x": 3,
            "y": 3,
            "dmg": 3.5,
            "hp": 100,
            "state": "active"
        }, {
            "type": "Catapult",
            "x": 9,
            "y": 9,
            "dmg": 7,
            "hp": 215,
            "state": "active"
        }
    ]
}
```
## Match Lifecycle

To start a match all that is required is the target player's profileId to call [StartMatch()](/api/capi/onewaymatch/startmatch) with.

All read-only and read-write data shared by the opponent will be returned within the “entities” section of the StartMatch response.  In this case, our example entity from above would be returned, so that the attacker can set up the defense that they are about to attack.

It is important at this time to store the `playbackStreamId` returned from `StartMatch` as you will need it to add events as the attack occurs.

Here is an example response to StartMatch:
```js
{
    "status": 200,
    "data": {
        "playbackStreamId": "56fa4fce-6df1-4c74-8b71-81bdc17166a3",
        "initiatingPlayerId": "b67b2d73-1e8c-42e9-9be5-9c1879a48555",
        "targetPlayerId": "0da5ad24-2341-42f8-acb5-57aa2dd4ae94",
        "status": "STARTED",
        "summary": {},
        "initialSharedData": {
            "entities": [
                {
                    "playerId": "0da5ad24-2341-42f8-acb5-57aa2dd4ae94",
                    "gameId": "20484",
                    "entityId": "017ad242-62c9-47d0-ad60-626cb649571b",
                    "entityType": "defenseData",
                    "version": 1,
                    "data": {
                        "grid": {
                            "gridType": "field",
                            "dimesionX": 14,
                            "dimensionY": 10,
                            "background": "image.png"
                        },
                        "defenses": [
                            {
                                "type": "Turret",
                                "x": 3,
                                "y": 3,
                                "dmg": 3.5,
                                "hp": 100,
                                "state": "active"
                            },
                            {
                                "type": "Catapult",
                                "x": 9,
                                "y": 9,
                                "dmg": 7,
                                "hp": 215,
                                "state": "active"
                            }
                        ]
                    },
                    "acl": {
                        "other": 1
                    },
                    "createdAt": 1472760716905,
                    "updatedAt": 1472760716905
                }
            ],
            "statistics": {}
        },
        "events": [],
        "expiryTime": 1472761351046,
        "createdAt": 1472760751058,
        "updatedAt": 1472760751058
    }
}
```
Now that the match has started its time to update the Playback Stream of the match with the events that occur while the attacker is playing.  This is done via the [Playback Stream APIs](/api/capi/playbackstream).

Use the [AddEvent()](/api/capi/playbackstream/addevent) API to save events like _Initial Attackers_, _Unit Attacked_, _User Tapped_, _Boost Used_, _Match Complete_, etc.  Data for the event being added should go in `eventData`, whereas the summary data should be used to store information about the completion of the attack, so that we can modify items in the cloud script on completion of the match.

Here is an example of an `AddEvent()` call's summary data:
```js
{
    "unitsDestroyedAtIndex": [
        "entity1",
        "entity2"
    ],
    "goldStolen": 100,
    "ratingChange": 5
}
```
Once the attack is complete its time to finalize the match result with [CompleteMatch()](/api/capi/onewaymatch/completematch).  We will do this using a cloud code script to limit how much control the App has over sensitive data.

Since we were keeping our Playback Stream updated all we need to pass our Cloud Code script is the `playbackStreamId` and it can retrieve all the data it needs.

Here is the example script:
```js
// data is the incoming json object
sStreamId = data.streamId;      // string: match to Complete

// active players services
oneWayMatchService = bridge.getOneWayMatchServiceProxy(); // grab the One way match service
playbackService = bridge.getPlaybackStreamServiceProxy(); // grab the playback stream service
productService = bridge.getProductServiceProxy();         // grab the product service
matchMakingService = bridge.getMatchMakingServiceProxy(); // grab the matchmaking service

// get the match info
matchData = playbackService.ReadStream(sStreamId);      // read the stream data, to get the summary data

// get the target player id, as well as create a bridge to create its target versions of its services
sTargetPlayerId = matchData.targetPlayerId;     
targetSession = bridge.getSessionForProfile(sProfileId); 
targetEntityService = bridge.getEntityServiceProxy(); 
targetMatchMakingService = bridge.getMatchMakingServiceProxy(targetSession);
targetProductService = bridge.getProductServiceProxy(targetSession); 

pSummaryData = matchData.data.summary;
aUnitsDestroyed = pSummaryData.unitsDestroyedAtIndex;

// set the units to be destroyed, and update them
for (var i = 0; i < aUnitsDestroyed.Length; ++i) { 
    entToDestroy = targetEntityService.getEntity(aUnitsDestroyed[i]); 
    entToDestroy.hp = 0; entToDestroy.state = "destroyed"; 
    targetEntityService.updateEntity(entToDestroy.entityId, entToDestroy.entityType, 
    entToDestroy, entToDestroy.acl, entToDestroy.version + 1); 
} 

// steal and award the currency 
iGoldStolen = pSummaryData.goldStolen; 
targetProductService.consumeCurrency("gold", iGoldStolen); 
productService.awardCurrency("gold", iGoldStolen); 

// update the player ratings 
iRatingChange = pSummaryData.ratingChange; 
if (iRatingChange > 0)
{
    matchMakingService.incrementPlayerRating(iRatingChange);
    targetMatchMakingService.decrementPlayerRating(iRatingChange);
}
else
{
    matchMakingService.decrementPlayerRating(iRatingChange);
    targetMatchMakingService.incrementPlayerRating(iRatingChange);
}

oneWayMatchService.CompleteMatch(sStreamId);                       // complete the match

true;
```
Use the Playback Stream Service ReadStream() API in order to read all the events associated with a One Way Offline Multiplayer match. All events are returned in sequential order, thus you will be able to replay all the events that occurred in the match. These streams are accessible by all, if the client can get the ID of the Playback Stream, they will be able to replay it.

Now the one-way match is complete, and both users’ information has been updated via cloud code. This helps prevent client-side manipulation or user's data.

For more information:

- [One-Way Match API](/api/capi/onewaymatch)
- [PlaybackStream API](/api/capi/playbackstream)
- [Matchmaking API](/api/capi/matchmaking)
