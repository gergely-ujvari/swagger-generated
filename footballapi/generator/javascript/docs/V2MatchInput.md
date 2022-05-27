# FootballApi.V2MatchInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**statusId** | **String** |  | [optional] 
**kickoffTime** | **Date** |  | [optional] 
**stageId** | **String** |  | [optional] 
**homeTeamId** | **String** |  | [optional] 
**awayTeamId** | **String** |  | [optional] 
**roundKey** | **String** |  | [optional] 
**groupId** | **String** |  | [optional] 
**venueId** | **String** |  | [optional] 
**referees** | [**[V2MatchRefereeInput]**](V2MatchRefereeInput.md) |  | [optional] 
**score** | [**V2MatchScoreInput**](V2MatchScoreInput.md) |  | [optional] 
**spectators** | **Number** |  | [optional] 
**coverage** | **String** |  | [optional] 
**finishedAt** | **Date** |  | [optional] 
**phaseStartedAt** | **Date** |  | [optional] 

<a name="CoverageEnum"></a>
## Enum: CoverageEnum

* `LIVE` (value: `"LIVE"`)
* `NOT_LIVE` (value: `"NOT_LIVE"`)
* `UNKNOWN` (value: `"UNKNOWN"`)

