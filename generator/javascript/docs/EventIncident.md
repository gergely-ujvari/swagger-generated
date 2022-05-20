# FootballApi.EventIncident

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier | 
**eventId** | **Number** | Identifier of the event during which the incident occurred | 
**type** | **String** | The type of incident | 
**homeTeam** | **Boolean** | Whether the incident is related to the home or away team. true if home team | 
**minute** | **Number** | The minute when the incident occured | 
**teamId** | **Number** | Id of the team for which the incident is related | [optional] 
**goalHome** | **Number** | Updated home team score if the incident changes the scoreline (penalty, goal, own_goal, etc) | [optional] 
**goalAway** | **Number** | Updated away team score  if the incident changes the scoreline (penalty, goal, own_goal, etc) | [optional] 
**player** | [**PartialPerson**](PartialPerson.md) |  | [optional] 
**relPlayer** | [**PartialPerson**](PartialPerson.md) |  | [optional] 
**deleted** | **Boolean** | Whether the incident has been deleted or not - a disallowed goal for example | [optional] 
**sortorder** | **Number** | If there are multiple incidents with the same minute, this indicates how they are sorted | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `penaltyShootoutScored` (value: `"penalty_shootout_scored"`)
* `yellowCardRed` (value: `"yellow_card_red"`)
* `penaltyShootoutMissed` (value: `"penalty_shootout_missed"`)
* `substitution` (value: `"substitution"`)
* `goal` (value: `"goal"`)
* `redCard` (value: `"red_card"`)
* `penaltyMiss` (value: `"penalty_miss"`)
* `yellowCard` (value: `"yellow_card"`)
* `penaltyGoal` (value: `"penalty_goal"`)
* `ownGoal` (value: `"own_goal"`)

