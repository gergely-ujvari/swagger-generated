# FootballApi.PartialTeam

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**national** | **Boolean** | Whether the team is a football club(Barcelona) or national team(Spain) | [optional] 
**id** | **Number** | Unique identifier of the Team within the system | 
**name** | **String** | Human readable name of the team | 
**threeLetterCode** | **String** | 3 character name of team | [optional] 
**shortName** | **String** | Manually inserted short name of team | [optional] 
**undecided** | **Boolean** | If present and &#x3D; true, the team can be one of two teams. This occurs in cup competitions when some games are still not played | [optional] 
**gender** | **String** | Team gender, MALE, FEMALE or null | [optional] 
**urlLogo** | **String** |  | [optional] 
**type** | **String** |  | [optional] 

<a name="GenderEnum"></a>
## Enum: GenderEnum

* `MALE` (value: `"MALE"`)
* `FEMALE` (value: `"FEMALE"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `placeholder` (value: `"placeholder"`)
* `club` (value: `"club"`)
* `national` (value: `"national"`)

