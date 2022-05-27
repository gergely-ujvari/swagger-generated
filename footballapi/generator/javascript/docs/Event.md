# FootballApi.Event

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**spectators** | **Number** | Number of spectators at the event | [optional] 
**tournamentSeasonStage** | [**PartialTournamentSeasonStage**](PartialTournamentSeasonStage.md) |  | 
**minute** | **Number** | Live minute ticker. Only available if the event_status.type is &#x27;inprogress&#x27; | [optional] 
**stageGroup** | [**StageGroup**](StageGroup.md) |  | [optional] 
**referee** | [**PartialPerson**](PartialPerson.md) |  | [optional] 
**venue** | [**Venue**](Venue.md) |  | [optional] 
**incidents** | **Number** | Number of incidents which have occured in the Event (goals, red cards, yellow cards, etc). | [optional] 
**lineupAvailable** | **Boolean** | Indicates whether player lineup information is available or not | [optional] 
**liveUpdates** | **Boolean** | Indicates whether the event has livescore updates. If false the event will be updated after FT. | [optional] 
**teamstatsAvailable** | **Boolean** | Indicates whether teamstats are available for this event | [optional] 
**homeScore** | [**TeamScore**](TeamScore.md) |  | [optional] 
**awayScore** | [**TeamScore**](TeamScore.md) |  | [optional] 
**startedAt** | **Date** | timestamp when the current phase (1st_half, 2nd_half, et, etc) has started. Can be used for calculating the minute ticker | [optional] 
**id** | **Number** | Unique identifier | 
**eventStatus** | [**EventStatus**](EventStatus.md) |  | 
**startTime** | **Date** | Timestamp when the event is scheduled to start | 
**goalHome** | **Number** | Goals scored by the home team | [optional] 
**goalAway** | **Number** | Goals scored by the away team | [optional] 
**penaltyHome** | **Number** | Penalties scored by the home team. Available only if the game goes to penalty shootouts | [optional] 
**penaltyAway** | **Number** | Penalties scored by the away team. Available only if the game goes to penalty shootouts | [optional] 
**aggHome** | **Number** | Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs | [optional] 
**aggAway** | **Number** | Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs | [optional] 
**homeTeam** | [**PartialTeam**](PartialTeam.md) |  | 
**awayTeam** | [**PartialTeam**](PartialTeam.md) |  | 
