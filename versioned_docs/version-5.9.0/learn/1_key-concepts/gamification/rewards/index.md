---
title: "Rewards Handling"
date: "2015-11-05"
---

Rewards are awarded as a result of server events triggered by the client application.

In general, a reward can consist of any or all of the following:

- experience points
- virtual currency
- player statistics
- global game statistics
- an achievement

The valid components of a reward are dictated by the server design of the reference data entities. Of the reward components above, all except global game statistics are awarded directly to the player. The global game statistics component is applied to the statistics tracked by the game itself and can affect the entire game and all players in the game.

Rewards are awarded as a result of the client application triggering certain server events. Awarding the rewards associated with the server event may result in new player accomplishments (milestone achievements, quest completions, and higher experience levels).

Accomplishments can also have rewards associated with them. When rewards are awarded by the server, the player’s state is iteratively evaluated to see if the reward has resulted in any further rewards. These rewards are processed until no further rewards result.

## How to handle rewards

Several brainCloud APIs can return rewards to the user. App developers can choose to present the rewards to the player as they occur. In order to do this, rewards can be handled in two ways:

1. Parsed directly in the API callback return JSON
2. Using the RewardsCallback interface

### Handling Rewards in the API callback

To handle rewards in the API callback, you first need to know which API calls will generate rewards. The list of APIs is as follows:

- [BrainCloudAuthentication - all of the "Authenticate" APIs](/api/capi/authentication)
- [BrainCloudPlayerStatistics.IncrementPlayerStats()](/api/capi/playerstats/incrementuserstats)
- [BrainCloudPlayerStatistics.IncrementExperiencePoints()](/api/capi/playerstats/incrementexperiencepoints)
- [BrainCloudPlayerStatisticsEvent.TriggerPlayerStatisticsEvent()](/api/capi/playerstatsevent/triggerstatsevent)
- [BrainCloudPlayerStatisticsEvent.TriggerPlayerStatisticsEvents()](/api/capi/playerstatsevent/triggerstatsevents)

Note that although normally you wouldn't expect to get rewards in an Authenticate call, there are situations where rewards may be present. For instance, rewards may trigger on a global statistic which has incremented since the last time the user logged in. Or perhaps a cloud script on the server has modified the player's data in some way. In these cases, the rewards are returned in the authenticate call.

#### Rewards JSON format

The general (quasi-json) output of a method that returns rewards is as follows:

- experiencePoints - The user's current number of experience points
- xpCapped - Whether their XP is capped
- **rewardDetails** - complex structure that contains metadata about the rewards that have been triggered. This gives you the structured rewards as they've been configured in brainCloud.
    - milestones -  array of milestones that were awarded (metadata)
        - rewards - rewards that are given to the player when this milestone is awarded
            - achievement
            - experiencePoints
            - currency
            - globalStatistics
            - statistics
        - questId - Either the quest id this milestone is attached to or null if it's a global (non-quest) milestone
        - milestoneId - The id of the milestone
    - quests - array of quests that were awarded (metadata)
        - rewards - similar to the milestone structure above
        - questId - The id of the quest
    - xp
        - **experiencePoints - ???**
        - experienceLevels - array of the experience levels that were awarded (metadata)
            - level - the experience level
            - reward - similar to the milestone structure above
- **rewards** - complex structure that contains the amalgamated rewards that have been triggered. For instance if two milestones are awarded which each pay out 50 gold currency, the rewards field will contain just one entry for currency of 100 gold.

_Note that the Authenticate API JSON puts all of the above information into a "rewards" element._

Below is an example JSON return that rewards one milestone, one quest, one xp level, and some stats/xp/currency.
```js
{
 "status": 200,
 "data": {
  "experiencePoints": 1000,
  "xpCapped": false,
  "rewardDetails": {
   "milestones": [
    {
     "rewards": {
      "achievement": "testAchievement02"
     },
     "questId": "quest100",
     "milestoneId": "2"
    }
   ],
   "quests": [
    {
     "rewards": {
      "experiencePoints": 1000,
      "achievement": "testAchievement01"
     },
     "questId": "quest100"
    }
   ],
   "xp": {
    "experiencePoints": 1000,
    "experienceLevels": [
     {
      "level": 2,
      "reward": {
       "currency": {
        "gold": 1500
       }
      }
     }
    ]
   }
  },
  "rewards": {
   "experiencePoints": 1000,
   "experienceLevels": [
    2
   ],
   "milestonesAchieved": [
    "2"
   ],
   "questsCompleted": [
    "quest100"
   ],
   "playerAchievements": [
    "testAchievement02",
    "testAchievement01"
   ],
   "statistics": {
    "completeQuest100": 1
   },
   "currency": {
    "gold": 1555
   }
  },
  "experienceLevel": 2,
  "currency": {
   "credits": {
    "purchased": 0,
    "balance": 90,
    "consumed": 0,
    "awarded": 90
   },
   "gold": {
    "purchased": 0,
    "balance": 8225,
    "consumed": 0,
    "awarded": 8225
   }
  },
  "statistics": {
   "completeQuest100": 1
  }
 }
}
```
### Handling Rewards in the RewardsCallback interface

An alternative to handling rewards directly in the API callback is to attach a rewards callback to the brainCloudClient. By attaching a rewards callback handler, you will receive callbacks whenever a reward is returned in any of the above API methods.

#### Attaching The Rewards Callback

See the [RegisterRewardCallback](/api/capi/client/registerrewardcallback) and [DeregisterRewardCallback](/api/capi/client/deregisterrewardcallback) methods in the BrainCloudClient class.

#### Reward Callback JSON format

The Reward Callback JSON contains extra information that allows you to determine from which API call a reward has been issued. Note that the apiRewards member is an array - it's possible to receive multiple rewards in a single message bundle from the server.
```js
{
  "apiRewards": [
    "service": "playerStatistics",
    "operation": "UPDATE",
    "rewards": {
      // the reward JSON information as defined above
      // so for instance "rewards" and "rewardDetails"
      // members would be at this level
    } 
  ] 
}
```