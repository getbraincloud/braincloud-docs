# MatchMaking
## Overview




The MatchMaking Service is used for locating players to play against when using our Async or One-Way multiplayer features.

:::tip"
A player must be enabled via the <a href="#capi-matchmaking-enablematchmaking">EnableMatchMaking</a> method call in order to participate in a match. This is so that you may exclude players from matchmaking while they are in an introductory tutorial for your game.
:::

To use the matchMaking service matchMaking must be enabled from your app on the
[Multiplayer - MatchMaking page](https://portal.braincloudservers.com/admin/dashboard#/development/matchmaking) of the <%= data.branding.productName %> portal.

The starting Player Rating is also set on this page.


### API Summary

### MatchMaking
* [EnableMatchMaking](/api/capi/matchmaking/enablematchmaking) - Enables match making for player.
* [DisableMatchMaking](/api/capi/matchmaking/disablematchmaking) - Disables match making for player.
* [Read](/api/capi/matchmaking/read) - Read player match making data.

### Finding Matches
* [FindPlayers](/api/capi/matchmaking/findplayers) - Finds one or more match candidates.
* [FindPlayersWithAttributes](/api/capi/matchmaking/findplayerswithattributes) - Finds one or more match candidates.
* [FindPlayersUsingFilter](/api/capi/matchmaking/findplayersusingfilter) - Finds one or more match candidates with script filter.
* [FindPlayersUsingScript](/api/capi/matchmaking/findplayersusingscript) - Finds one or more match candidates with provided script filter and player rating override.
* [FindPlayersWithAttributesUsingFilter](/api/capi/matchmaking/findplayerswithattributesusingfilter) - Finds one or more match candidates with script filter.
* [FindPlayersWithAttributesUsingScript](/api/capi/matchmaking/findplayerswithattributesusingscript) - Finds one or more match candidates with provided script filter and player rating override.

## MatchMaking Filters

Players found via matching can be filtered, to ensure players only get matched with certain other players.

### Writing and Configuring the Filter

```cfscript
public exampleMatchMakingFilter( data )
{
    // This method examines the proposed player, and
    // returns true if the match is acceptable.
    // For purposes of this demo, we will only accept players
    // whose name matches the name provided.

    var result = false;

    var matchName = data.extraParms.matchPlayerName;
    var candidateName = data.matchCandidate.playerName;

    if (matchName == candidateName) {
        result = true;
    }

    result;
}
```

> Example filter script parameters

```json-doc
{
    "extraParms": {
        "matchPlayerName": "Romundo"
    },
    "matchCandidate": {
        "pictureUrl": null,
        "playerName": "Romundo",
        "playerId": "<profile id>",
        "playerRating": 100,
        "summaryFriendData": null
    }
}
```

The filter logic must be written in a Cloud Code script, and configured for usage via the **Design | Multiplayer | MatchMaking** portal page.

The filter script will be invoked individually for each potential candidate. The script will be passed two parameters:

### Method Parameters
Parameter | Description
--------- | -----------
matchCandidate | Information about the candidate being considered
extraParms | Additional parameters that were passed into the original matchMaking request

The matchCandidate parameter contains all the same data that is ultimately returned in the `FindPlayersUsingFilter()` call for each match candidate.

The script should return `true` to allow the candidate to match, or `false` to reject it.

### Filter vs. Attributes

A new parameter, `attributes`,  can be added to these calls - that can be optionally used to pre-filter candidates *before* they are passed to the cloud code filter for evaluation.

As you'd expect, this causes the matchMaking service to examine the `attributes` associated with a candidate, and only consider candidates that match the specified attribute values for further consideration.

This facility should be used with caution, as attributes are not indexed for this purpose, and *can* slow down matchMaking performance. This feature is therefore mean only for cases where the conditions being sought are so rare, that we might need to evaluate *thousands of candidates* without finding one that satisfies the prescribed conditions (which would be very inefficient to do one-by-one via a filter).

A typical usage of this capability is when looking for *cheaters*. If you system attempts to match cheaters with cheaters, it would be wise to add this attribute **only** for those cases when the current player is a *cheater*, and thus filter the results to only other cheaters.  *(Since hopefully only a very small portion of your user population will be cheaters.)*

Player attributes can optionally be viewed on the dashboard on the [**Monitoring | User Monitoring | Attributes**](https://portal.braincloudservers.com/admin/dashboard#/monitoring/player-attributes) page.

### Player Rating
* [SetPlayerRating](/api/capi/matchmaking/setplayerrating) - Sets player match rating.
* [IncrementPlayerRating](/api/capi/matchmaking/incrementplayerrating) - Increments player match rating.
* [DecrementPlayerRating](/api/capi/matchmaking/decrementplayerrating) - Decrements player match rating.
* [ResetPlayerRating](/api/capi/matchmaking/resetplayerrating) - Resets player match rating.

### Multiplayer Protection
* [TurnShieldOff](/api/capi/matchmaking/turnshieldoff) - Turns player shield off.
* [TurnShieldOn](/api/capi/matchmaking/turnshieldon) - Turns player shield on.
* [TurnShieldOnFor](/api/capi/matchmaking/turnshieldonfor) - Turns player shield on for specified minutes.
* [GetShieldExpiry](/api/capi/matchmaking/getshieldexpiry) - Retrieves shield expiry time.
* [IncrementShieldOnFor](/api/capi/matchmaking/incrementshieldonfor) - Increment shield on for 'X' minutes.




<DocCardList />