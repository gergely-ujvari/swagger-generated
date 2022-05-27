# FootballApi.PartialTournamentSeasonStage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier | 
**name** | **String** | Human readable name of the TournamentSeasonStage | 
**cup** | **Boolean** | Whether the stage is a cup such as Champions League Knockout stage, World Cup Final stages, etc | 
**tournamentSeasonId** | **Number** | Id of the TournamentSeason in which the stage is part of | 
**tournamentId** | **Number** | Id of the Tournament in whicth the stage is part of | 
**country** | [**Country**](Country.md) |  | 
**confederation** | **String** | Indicates which confederation the stage is part of (for World Cup qualif.) | [optional] 
