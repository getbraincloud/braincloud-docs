# One-Way Match
## Overview



One-Way Offline Multiplayer is our name for Clash of Clans / Boom Beach-style multiplayer.  [And yes, we're looking for a better name – suggest one!]

In this very popular form of multiplayer, an Attacker attacks the settlement (base, camp, fort, etc.) of a Defender that is currently offline.  The Defender's settlement acts in accordance to how it's been configured – defending itself vigorously using guns, turrets, defencemen, etc. in accordance with the game's rules and the choices he/she has previously made in configuring their settlement.

The API's that work together to enable this form of multiplayer include:

- Finding an opponent to attack via MatchMaking or the Friends API
- Performing the attack using the StartMatch(), CompleteMatch() and CancelMatch() APIs described here
- Recording the events of the attack (so that they may be replayed) using the PlaybackStream API
- Finally, fixing up any opponent-related data after the match has completed (i.e. updating leaderboard positions, virtual currency balances, etc.) – using a custom cloud code script.



<DocCardList />