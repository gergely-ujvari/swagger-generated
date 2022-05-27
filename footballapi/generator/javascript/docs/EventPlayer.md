# FootballApi.EventPlayer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier | 
**player** | [**PartialPerson**](PartialPerson.md) |  | 
**eventPlayerType** | [**EventPlayerType**](EventPlayerType.md) |  | 
**homeTeam** | **Boolean** | Whether the player is from the home or the away team | 
**positionX** | **Number** | Number indicating the player&#x27;s vertical position on the field. 1 &#x3D; Goalkeeper, 2-5 &#x3D; Defender, 6-9 &#x3D; Midfielder, 10-11 &#x3D; Forward, where 5 is an offensive defender, 9 is an offensive midfielder, etc. | [optional] 
**positionY** | **Number** | Number indicating the player&#x27;s horizontal position on the field. Ranges from 1-9, where 1 &#x3D; furthest right, 9 &#x3D; furthest left. | [optional] 
**positionNumber** | **Number** | Number 1-11 indicating the player&#x27;s position in the lineup. 1 &#x3D; goalkeeper, 2 &#x3D; defender furthest right. | [optional] 
**shirtNumber** | **Number** | The shirt number the player is wearing | [optional] 
