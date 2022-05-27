# FootballApi.TournamentSeasonStageWithStandingGroups

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**[StageGroupWithStanding]**](StageGroupWithStanding.md) | List of StageGroup objects in the TournamentSeasonStage. Available if the property stage_groups exists | [optional] 
**id** | **Number** | Unique identifier | [optional] 
**name** | **String** | Human readable name of the TournamentSeasonStage | [optional] 
**cup** | **Boolean** | Whether the stage is a cup such as Champions League Knockout stage, World Cup Final stages, etc | [optional] 
**tournamentSeasonId** | **Number** | Id of the TournamentSeason in which the stage is part of | [optional] 
**tournamentId** | **Number** | Id of the Tournament in whicth the stage is part of | [optional] 
**country** | [**Country**](Country.md) |  | [optional] 
**confederation** | **String** | Indicates which confederation the stage is part of (for World Cup qualif.) | [optional] 
