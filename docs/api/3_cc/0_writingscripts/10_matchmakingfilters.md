# Matchmaking Filters


> Example matchmaking filter parameters.
> The system identifies a potential match and passes in the candidate info.
> ExtraParms are sent as a parameter to the `FindPlayersUsingFilter()` method.


```json
{
    "matchCandidate": {
        "playerId": "aProfileId",
        "playerName": "John Smith",
        "playerRating": 100,
        "pictureUrl": null,
        "summaryFriendData": {
        }
    },
    "extraParms": {
        "excludedPlayerIds": ["xxx", "yyy"]
    }
}
```


> Example matchmaking script - filters out cheaters.

```cfscript

var thePlayer = data.matchCandidate.playerId;
var cheaters = data.extraParms.excludedPlayerIds;
var result = true;

for (var i = 0; i < cheaters.length; i++)
{
    if (cheaters[i] == thePlayer) {
        result = false;
        break;
    }
}

result;

```


<%= data.branding.productName %> allows you to use Cloud Code scripts to filter matchmaking candidates.

The `data` object passed to matchmaking scripts contain the following elements:

Data Element | Description
-------------- | -----------
matchCandidate | Candidate object for the player being considered
extraParms | The jsonExtraParms parameter sent to FindPlayersUsingFilter()

The matchCandidate object contains the following:

Data Element | Description
-------------- | -----------
playerId | Profile id of the player being considered
playerName | Name of the player being considered
playerRating | The rating of this player, as assigned by the game
pictureUrl | A profile picture of the player, if available
summaryFriendData | The custom summary data assigned to the player by the game

The script should return `true` if the candidate is acceptable, `false` otherwise

## Configuring the filter

The filter is configured via the **Design | Multiplayer | Matchmaking** page of the portal.