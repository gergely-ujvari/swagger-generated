# FootballApi.EventStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Status classification | 
**name** | **String** | Human readable name describing the status, can be translated | 
**shortName** | **String** | Human readable short name describing the status, can be translated | [optional] 
**code** | **String** | Unique string used to identify the status | 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `finished` (value: `"finished"`)
* `cancelled` (value: `"cancelled"`)
* `notstarted` (value: `"notstarted"`)
* `interrupted` (value: `"interrupted"`)
* `inprogress` (value: `"inprogress"`)


<a name="CodeEnum"></a>
## Enum: CodeEnum

* `finished` (value: `"finished"`)
* `notStarted` (value: `"not_started"`)
* `_1stHalf` (value: `"1st_half"`)
* `_2ndHalf` (value: `"2nd_half"`)

