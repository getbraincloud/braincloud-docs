# Async Match
## Overview



Many mobile games today feature a type of multiplayer game capability known as asynchronous or turn-based gaming. This is where player #1 would take a turn, then player #2 is notified that it is their turn (via push notification). Player #2 would then take their turn and player #1 is then notified it is again their turn and so on until the game is completed (think of playing a game of chess via mail).

This page describes the design used to facilitate this type of multiplayer game within <%= data.branding.productName %>.

### Match Lifecycle

An Async Match can exist in four states that define where it is in its lifecycle.  Certain operations are only supported in specific states.

The current state is returned in the "status" field of the match data.

### NOT_STARTED
A match has been created but has not had any turns submitted.  A match in this state cannot be completed (status set to COMPLETE).

### PENDING
The match has had at least one turn submitted.

### COMPLETE
A match that has been explicitly completed via the [CompleteMatch](/api/capi/asyncmatch/completematch) API. A match cannot be completed if its current status is NOT_STARTED.

### EXPIRED
A match that has been explicitly abandoned via the [AbandonMatch](/api/capi/asyncmatch/abandonmatch) API. A match cannot be abandoned if its current status is COMPLETE.

### Data Model

The following diagram illustrates the data model implemented in <%= data.branding.productName %> to support this feature:

![Async Match Data Model](@site/docs/img/api-img/asyncmatch.png)

### Match Entity

The Match entity represents a single asynchronous match between two or more players (for example a single game of chess or tic-tac-toe).

- The "gameId", "ownerId" and "matchId" uniquely identify a particular match, where "gameId" is the internal id of the game, "ownerId" is the internal player id of the player who created the match and "matchId" is an id that uniquely identifies the match within the context of a player.
- The "players" attribute represents a list of players that are part of the match. This consists of the match owner plus one or more opponents.
- The "status" attribute indicates the current status of the match. The status is made up of both an enumerated "status" (NOT_STARTED, PENDING, EXPIRED, COMPLETE) and an optional "currentPlayer" (which indicates whose "turn" it currently is).
- The "summary" attribute represents a client defined data structure that represents a high level summary of the match (i.e. current score).
- The "statistics" attribute represents a map of client defined statistics that are specific to a particular match.
- The "version" attribute is used to implement locking and concurrency of the match "state". If the current version stored in the database is greater then the version being submitted by a client, the submitted state will not be applied and an error will be returned.
- The "matchState" attribute is a client defined data structure that represents the actual current "state" of a particular match.
- The "createdAt" and "updatedAt" attributes are used to record when the match was created and when it was last modified/updated.

### MatchHistory Entity

The MatchHistory entity represents the turn-by-turn history of the state related to a particular match.

- The "gameId", "ownerId" and "matchId" uniquely identify a particular match, where "gameId" is the internal id of the game, "ownerId" is the internal player id of the player who created the match and "matchId" is an id that uniquely identifies the match within the context of a player.
- The "turns" attribute is a list of MatchTurn instances (each one a snapshot of the game state over time).
- The "createdAt" attribute of a MatchTurn indicates when the state was added to the history. This allows us to see what the match state was over time.
- The "matchState" attribute of a MatchTurn is the client defined data structure that represents the actual "state" of a particular match.

### Player Entity

The Player entity represents the actual player. We are simply using the "lastLogin" attribute to identify those Player's that have been pre-created by the AsyncMatchService (by checking if the "lastLogin" field is NULL).

### API Summary

### Match Management

* [CreateMatch](/api/capi/asyncmatch/creatematch)
* [CreateMatchWithInitialTurn](/api/capi/asyncmatch/creatematchwithinitialturn)
* [AbandonMatch](/api/capi/asyncmatch/abandonmatch)
* [CompleteMatch](/api/capi/asyncmatch/completematch)
* [DeleteMatch](/api/capi/asyncmatch/deletematch)

### Turns

* [SubmitTurn](/api/capi/asyncmatch/submitturn)

### Match Data

* [ReadMatch](/api/capi/asyncmatch/readmatch)
* [ReadMatchHistory](/api/capi/asyncmatch/readmatchhistory)
* [UpdateMatchSummaryData](/api/capi/asyncmatch/updatematchsummarydata)
* [FindMatches](/api/capi/asyncmatch/findmatches)
* [FindCompleteMatches](/api/capi/asyncmatch/findcompletematches)



<DocCardList />