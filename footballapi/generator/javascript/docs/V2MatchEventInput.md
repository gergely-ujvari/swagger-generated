# FootballApi.V2MatchEventInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**typeCode** | **String** |  | [optional] 
**teamPosition** | **String** |  | [optional] 
**minute** | **Number** |  | [optional] 
**primaryPlayerId** | **String** |  | [optional] 
**secondaryPlayerId** | **String** |  | [optional] 
**sortOrder** | **Number** | Property is used to determine the order of events, if two or more events have the same minute | [optional] 

<a name="TypeCodeEnum"></a>
## Enum: TypeCodeEnum

* `YELLOW_RED_CARD` (value: `"YELLOW_RED_CARD"`)
* `PENALTY_SHOOTOUT_MISSED` (value: `"PENALTY_SHOOTOUT_MISSED"`)
* `PENALTY_SHOOTOUT_SCORED` (value: `"PENALTY_SHOOTOUT_SCORED"`)
* `SUBSTITUTION` (value: `"SUBSTITUTION"`)
* `GOAL` (value: `"GOAL"`)
* `RED_CARD` (value: `"RED_CARD"`)
* `PENALTY_MISS` (value: `"PENALTY_MISS"`)
* `YELLOW_CARD` (value: `"YELLOW_CARD"`)
* `ASSIST` (value: `"ASSIST"`)
* `PENALTY_GOAL` (value: `"PENALTY_GOAL"`)
* `OWN_GOAL` (value: `"OWN_GOAL"`)


<a name="TeamPositionEnum"></a>
## Enum: TeamPositionEnum

* `HOME` (value: `"HOME"`)
* `AWAY` (value: `"AWAY"`)

