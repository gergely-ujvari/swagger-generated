# FootballApi.Player

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | **String** | Playing position of the player | [optional] 
**country** | [**Country**](Country.md) |  | 
**birthdate** | **Date** | Date when the person was born | [optional] 
**firstName** | **String** | Human readable first(given) name | [optional] 
**lastName** | **String** | Human readable last(family) name | [optional] 
**active** | **Boolean** | True if currently active, false if retired | [optional] 
**gender** | **String** | Person&#x27;s gender | [optional] 
**id** | **Number** | Unique identifier within the system | 
**name** | **String** | Human readable name of the Person | 
**urlThumb** | **String** | 150x150 face image of Person | [optional] 
**urlImage** | **String** | 277x338 full body image of Person | [optional] 

<a name="PositionEnum"></a>
## Enum: PositionEnum

* `keeper` (value: `"keeper"`)
* `defender` (value: `"defender"`)
* `midfielder` (value: `"midfielder"`)
* `forward` (value: `"forward"`)


<a name="GenderEnum"></a>
## Enum: GenderEnum

* `MALE` (value: `"MALE"`)
* `FEMALE` (value: `"FEMALE"`)

