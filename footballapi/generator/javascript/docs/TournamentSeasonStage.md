# FootballApi.TournamentSeasonStage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **Date** | Date when the first game of the stage is held | [optional] 
**endDate** | **Date** | Date when the final game of the stage is held | [optional] 
**qualification** | **Boolean** | Whether the stage is a qualification stage to a main Tournrament (Champions League Qualification) | [optional] 
**live** | **Boolean** | Whether the API has live scores for the stage | [optional] 
**stageGroups** | **Number** | Number of groups in the stage. Only available if the stage has groups (Champions League Group Stage) | [optional] 
**standing** | [**[LeagueStandingData]**](LeagueStandingData.md) | League standing data if available and if cup &#x3D; false | [optional] 
**rounds** | [**[Round]**](Round.md) | List of rounds in the Stage if cup &#x3D; true | [optional] 
**id** | **Number** | Unique identifier | 
**name** | **String** | Human readable name of the TournamentSeasonStage | 
**cup** | **Boolean** | Whether the stage is a cup such as Champions League Knockout stage, World Cup Final stages, etc | 
**tournamentSeasonId** | **Number** | Id of the TournamentSeason in which the stage is part of | 
**tournamentId** | **Number** | Id of the Tournament in whicth the stage is part of | 
**country** | [**Country**](Country.md) |  | 
**confederation** | **String** | Indicates which confederation the stage is part of (for World Cup qualif.) | [optional] 
