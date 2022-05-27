# FootballApi.V2Team

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**name** | **String** |  | 
**threeLetterCode** | **String** |  | [optional] 
**shortName** | **String** |  | [optional] 
**type** | **String** |  | 
**country** | [**V2Country**](V2Country.md) |  | 
**venue** | [**V2VenuesGetId**](V2VenuesGetId.md) |  | [optional] 
**social** | [**TeamSocialDto**](TeamSocialDto.md) |  | [optional] 
**founded** | **Number** |  | [optional] 
**gender** | **String** |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `PLACEHOLDER` (value: `"PLACEHOLDER"`)
* `NATIONAL` (value: `"NATIONAL"`)
* `CLUB` (value: `"CLUB"`)


<a name="GenderEnum"></a>
## Enum: GenderEnum

* `MALE` (value: `"MALE"`)
* `FEMALE` (value: `"FEMALE"`)

