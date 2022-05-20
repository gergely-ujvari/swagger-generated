# FootballApi.Tournament

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique Resource identifier of the Tournament | 
**name** | **String** | Human readable name of the Tournament | 
**country** | [**Country**](Country.md) |  | 
**regionalLeague** | **Boolean** | Whether or not the Tournament is a regional league such as the La Liga, A PFG, EPL. | [optional] 
**clientSortorder** | **Number** | Represents the order position in a custom client based sorted list | [optional] 
**urlLogo** | **String** |  | [optional] 
**type** | **String** | Shows if the tournament is Cup or a League | [optional] 
**gender** | **String** | Shows if the the teams in the tournament are Male or Female | [optional] 
**region** | **String** | Shows if the tournament is Regional or International | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `CUP` (value: `"CUP"`)
* `LEAGUE` (value: `"LEAGUE"`)


<a name="GenderEnum"></a>
## Enum: GenderEnum

* `MALE` (value: `"MALE"`)
* `FEMALE` (value: `"FEMALE"`)


<a name="RegionEnum"></a>
## Enum: RegionEnum

* `DOMESTIC` (value: `"DOMESTIC"`)
* `INTERNATIONAL` (value: `"INTERNATIONAL"`)

