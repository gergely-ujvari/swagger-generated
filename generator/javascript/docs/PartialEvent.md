# FootballApi.PartialEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier | 
**eventStatus** | [**EventStatus**](EventStatus.md) |  | 
**startTime** | **Date** | Timestamp when the event is scheduled to start | 
**goalHome** | **Number** | Goals scored by the home team | 
**goalAway** | **Number** | Goals scored by the away team | 
**penaltyHome** | **Number** | Penalties scored by the home team. Available only if the game goes to penalty shootouts | [optional] 
**penaltyAway** | **Number** | Penalties scored by the away team. Available only if the game goes to penalty shootouts | [optional] 
**aggHome** | **Number** | Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs | [optional] 
**aggAway** | **Number** | Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs | [optional] 
**homeTeam** | [**PartialTeam**](PartialTeam.md) |  | 
**awayTeam** | [**PartialTeam**](PartialTeam.md) |  | 
