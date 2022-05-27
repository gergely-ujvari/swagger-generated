# FootballApi.V2Match

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**status** | [**V2MatchStatus**](V2MatchStatus.md) |  | [optional] 
**kickoffTime** | **Date** |  | [optional] 
**stage** | [**V2MatchStage**](V2MatchStage.md) |  | [optional] 
**season** | [**V2Season**](V2Season.md) |  | [optional] 
**group** | [**V2Group**](V2Group.md) |  | [optional] 
**round** | [**V2MatchRound**](V2MatchRound.md) |  | [optional] 
**homeTeam** | [**V2MatchTeamDto**](V2MatchTeamDto.md) |  | [optional] 
**awayTeam** | [**V2MatchTeamDto**](V2MatchTeamDto.md) |  | [optional] 
**referees** | [**[V2MatchReferee]**](V2MatchReferee.md) |  | [optional] 
**venue** | [**V2MatchVenue**](V2MatchVenue.md) |  | [optional] 
**spectators** | **Number** |  | [optional] 
**coverage** | **String** |  | [optional] 
**minute** | [**V2MatchMinute**](V2MatchMinute.md) |  | [optional] 
**phaseStartedAt** | **Date** |  | [optional] 
**finishedAt** | **Date** |  | [optional] 
**score** | [**V2MatchScore**](V2MatchScore.md) |  | [optional] 

<a name="CoverageEnum"></a>
## Enum: CoverageEnum

* `LIVE` (value: `"LIVE"`)
* `NOT_LIVE` (value: `"NOT_LIVE"`)
* `UNKNOWN` (value: `"UNKNOWN"`)

