# FootballApi.Team

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | [**Country**](Country.md) |  | 
**president** | **String** | Name of the president of the club | [optional] 
**founded** | **Number** | Year the club was founded | [optional] 
**venue** | [**Venue**](Venue.md) |  | [optional] 
**coach** | [**Coach**](Coach.md) |  | [optional] 
**currentLeague** | [**TournamentSeasonWithTournament**](TournamentSeasonWithTournament.md) |  | [optional] 
**nextEvent** | [**Event**](Event.md) |  | [optional] 
**social** | **Object** | Various social links for the team | [optional] 
**urlHomeKit** | **String** |  | [optional] 
**urlAwayKit** | **String** |  | [optional] 
**urlSquadImage** | **String** | Image of the team squad | [optional] 
**national** | **Boolean** | Whether the team is a football club(Barcelona) or national team(Spain) | 
**id** | **Number** | Unique identifier of the Team within the system | 
**name** | **String** | Human readable name of the team | 
**threeLetterCode** | **String** | 3 character name of team | [optional] 
**shortName** | **String** | Manually inserted short name of team | [optional] 
**undecided** | **Boolean** | If present and &#x3D; true, the team can be one of two teams. This occurs in cup competitions when some games are still not played | [optional] 
**gender** | **String** | Team gender, MALE, FEMALE or null | [optional] 
**form** | [**[TeamForm]**](TeamForm.md) | Form guide for the Team if available and requested as an option | [optional] 

<a name="GenderEnum"></a>
## Enum: GenderEnum

* `MALE` (value: `"MALE"`)
* `FEMALE` (value: `"FEMALE"`)

