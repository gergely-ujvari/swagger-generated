# FootballApi.V2TeamProfile

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**threeLetterCode** | **String** |  | [optional] 
**shortName** | **String** |  | [optional] 
**type** | **String** |  | [optional] 
**founded** | **Number** |  | [optional] 
**country** | [**V2Country**](V2Country.md) |  | [optional] 
**venue** | [**V2VenuesGetId**](V2VenuesGetId.md) |  | [optional] 
**social** | [**TeamSocialDto**](TeamSocialDto.md) |  | [optional] 
**coach** | [**V2Coach**](V2Coach.md) |  | [optional] 
**president** | [**V2President**](V2President.md) |  | [optional] 
**gender** | **String** |  | [optional] 
**activeSeasons** | [**[V2Season]**](V2Season.md) |  | [optional] 
**shirtColors** | [**[V2TeamColorsColors]**](V2TeamColorsColors.md) |  | [optional] 

<a name="GenderEnum"></a>
## Enum: GenderEnum

* `MALE` (value: `"MALE"`)
* `FEMALE` (value: `"FEMALE"`)

