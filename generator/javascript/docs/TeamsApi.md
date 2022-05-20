# FootballApi.TeamsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesIdTeamsGet**](TeamsApi.md#countriesIdTeamsGet) | **GET** /countries/{id}/teams | 
[**teamsGet**](TeamsApi.md#teamsGet) | **GET** /teams | 
[**teamsIdEventsGet**](TeamsApi.md#teamsIdEventsGet) | **GET** /teams/{id}/events | 
[**teamsIdFormGet**](TeamsApi.md#teamsIdFormGet) | **GET** /teams/{id}/form | 
[**teamsIdGet**](TeamsApi.md#teamsIdGet) | **GET** /teams/{id} | 
[**teamsIdPlayersGet**](TeamsApi.md#teamsIdPlayersGet) | **GET** /teams/{id}/players | 
[**teamsIdPlayersStatisticsGet**](TeamsApi.md#teamsIdPlayersStatisticsGet) | **GET** /teams/{id}/players/statistics | 
[**teamsIdPlayersStatisticsSeasonsGet**](TeamsApi.md#teamsIdPlayersStatisticsSeasonsGet) | **GET** /teams/{id}/players/statistics/seasons | 
[**teamsIdPlayersStatisticsSeasonsSeasonIdGet**](TeamsApi.md#teamsIdPlayersStatisticsSeasonsSeasonIdGet) | **GET** /teams/{id}/players/statistics/seasons/{seasonId} | 
[**teamsIdStatisticsLeagueGet**](TeamsApi.md#teamsIdStatisticsLeagueGet) | **GET** /teams/{id}/statistics/league | 
[**tournamentsSeasonsIdTeamsGet**](TeamsApi.md#tournamentsSeasonsIdTeamsGet) | **GET** /tournaments/seasons/{id}/teams | 
[**tournamentsSeasonsStagesIdTeamsGet**](TeamsApi.md#tournamentsSeasonsStagesIdTeamsGet) | **GET** /tournaments/seasons/stages/{id}/teams | 
[**v2TeamsColorsPost**](TeamsApi.md#v2TeamsColorsPost) | **POST** /v2/teams/colors | 
[**v2TeamsGet**](TeamsApi.md#v2TeamsGet) | **GET** /v2/teams | 
[**v2TeamsIdGet**](TeamsApi.md#v2TeamsIdGet) | **GET** /v2/teams/{id} | 
[**v2TeamsIdPut**](TeamsApi.md#v2TeamsIdPut) | **PUT** /v2/teams/{id} | 
[**v2TeamsPost**](TeamsApi.md#v2TeamsPost) | **POST** /v2/teams | 

<a name="countriesIdTeamsGet"></a>
# **countriesIdTeamsGet**
> [Team] countriesIdTeamsGet(id, opts)



Get Teams for a specific Country.id

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'national': "national_example" // String | Filter teams for different types of national and non national
};
apiInstance.countriesIdTeamsGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **national** | **String**| Filter teams for different types of national and non national | [optional] 

### Return type

[**[Team]**](Team.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="teamsGet"></a>
# **teamsGet**
> [Team] teamsGet(name, opts)



Search all teams by parameters

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let name = "name_example"; // String | Filter by team. Length must be >= 4. The filter matches on a per word basis. If you query for 'United' it will match both 'West Ham United' and 'Newcastle United'
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'maxResults': 100, // Number | Limit the number of results returned
  'countryId': 56 // Number | Filter teams just from the specified country
};
apiInstance.teamsGet(name, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filter by team. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#x27;United&#x27; it will match both &#x27;West Ham United&#x27; and &#x27;Newcastle United&#x27; | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **maxResults** | **Number**| Limit the number of results returned | [optional] [default to 100]
 **countryId** | **Number**| Filter teams just from the specified country | [optional] 

### Return type

[**[Team]**](Team.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="teamsIdEventsGet"></a>
# **teamsIdEventsGet**
> [Event] teamsIdEventsGet(id, opts)



Get a list of events in which a team with a specified id has participated

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'fromTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter events, which have a start_time after the specified date, format is RFC 3339
  'toTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter events, which have a start_time before the specified date, format is RFC 3339
  'direction': "direction_example", // String | Whether to sort the results by ascending or descending order
  'tournamentSeasonStageId': 56 // Number | Filter events for a specific tournament_season_stage.id
};
apiInstance.teamsIdEventsGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **fromTime** | **Date**| Filter events, which have a start_time after the specified date, format is RFC 3339 | [optional] 
 **toTime** | **Date**| Filter events, which have a start_time before the specified date, format is RFC 3339 | [optional] 
 **direction** | **String**| Whether to sort the results by ascending or descending order | [optional] 
 **tournamentSeasonStageId** | **Number**| Filter events for a specific tournament_season_stage.id | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="teamsIdFormGet"></a>
# **teamsIdFormGet**
> [TeamForm] teamsIdFormGet(id, opts)



Get Team form information accross all tournaments

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'expand': "expand_example" // String | Whether to include information about every event in the TeamForm response
};
apiInstance.teamsIdFormGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **expand** | **String**| Whether to include information about every event in the TeamForm response | [optional] 

### Return type

[**[TeamForm]**](TeamForm.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="teamsIdGet"></a>
# **teamsIdGet**
> Team teamsIdGet(id, opts)



Get information about a specific Team

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'expand': "expand_example" // String | Specifies additional information to include with the Team response
};
apiInstance.teamsIdGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **expand** | **String**| Specifies additional information to include with the Team response | [optional] 

### Return type

[**Team**](Team.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="teamsIdPlayersGet"></a>
# **teamsIdPlayersGet**
> [TeamPlayer] teamsIdPlayersGet(id, opts)



Get the current squad for a Team

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'groupBy': "groupBy_example" // String | Group players by a specific property
};
apiInstance.teamsIdPlayersGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **groupBy** | **String**| Group players by a specific property | [optional] 

### Return type

[**[TeamPlayer]**](TeamPlayer.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="teamsIdPlayersStatisticsGet"></a>
# **teamsIdPlayersStatisticsGet**
> TeamPlayerSeasonStatistics teamsIdPlayersStatisticsGet(id, opts)



Get player statistics for the current season in the Team&#x27;s League

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'groupBy': "groupBy_example" // String | Group the response by a specific property
};
apiInstance.teamsIdPlayersStatisticsGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **groupBy** | **String**| Group the response by a specific property | [optional] 

### Return type

[**TeamPlayerSeasonStatistics**](TeamPlayerSeasonStatistics.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="teamsIdPlayersStatisticsSeasonsGet"></a>
# **teamsIdPlayersStatisticsSeasonsGet**
> [TournamentSeasonWithTournament] teamsIdPlayersStatisticsSeasonsGet(id, opts)



Get a list of TournamentSeasons for which Player Statistics are available

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.teamsIdPlayersStatisticsSeasonsGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**[TournamentSeasonWithTournament]**](TournamentSeasonWithTournament.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="teamsIdPlayersStatisticsSeasonsSeasonIdGet"></a>
# **teamsIdPlayersStatisticsSeasonsSeasonIdGet**
> TeamPlayerSeasonStatistics teamsIdPlayersStatisticsSeasonsSeasonIdGet(seasonId, id, opts)



Get player statistics for the current season in the Team&#x27;s League

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let seasonId = 56; // Number | Unique identifier of the TournamentSeason resource
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'groupBy': "groupBy_example" // String | Group the response by a specific property
};
apiInstance.teamsIdPlayersStatisticsSeasonsSeasonIdGet(seasonId, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seasonId** | **Number**| Unique identifier of the TournamentSeason resource | 
 **id** | **String**| Unique identifier of the resource. | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **groupBy** | **String**| Group the response by a specific property | [optional] 

### Return type

[**TeamPlayerSeasonStatistics**](TeamPlayerSeasonStatistics.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="teamsIdStatisticsLeagueGet"></a>
# **teamsIdStatisticsLeagueGet**
> TeamSeasonStatistics teamsIdStatisticsLeagueGet(id, opts)



Get the statistics for the latest League the team participates in

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'standing': "full" // String | Select whether to include a full league standing or just the team's position
};
apiInstance.teamsIdStatisticsLeagueGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **standing** | **String**| Select whether to include a full league standing or just the team&#x27;s position | [optional] [default to full]

### Return type

[**TeamSeasonStatistics**](TeamSeasonStatistics.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsIdTeamsGet"></a>
# **tournamentsSeasonsIdTeamsGet**
> [PartialTeam] tournamentsSeasonsIdTeamsGet(id, opts)



Get a list of Teams, which are participating in a given TournamentSeason

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let id = 56; // Number | Unique identifier of the TournamentSeason resource
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsSeasonsIdTeamsGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Unique identifier of the TournamentSeason resource | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**[PartialTeam]**](PartialTeam.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsStagesIdTeamsGet"></a>
# **tournamentsSeasonsStagesIdTeamsGet**
> [PartialTeam] tournamentsSeasonsStagesIdTeamsGet(id, opts)



Get a list of Teams, which are participating in a given TournamentSeasonStage

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let id = 56; // Number | Unique identifier of the TournamentSeasonStage resource
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsSeasonsStagesIdTeamsGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Unique identifier of the TournamentSeasonStage resource | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**[PartialTeam]**](PartialTeam.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2TeamsColorsPost"></a>
# **v2TeamsColorsPost**
> V2TeamColors v2TeamsColorsPost(opts)



Manually insert team colors by team or event.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let opts = { 
  'body': new FootballApi.V2TeamColors() // V2TeamColors | Team shirt colors data
};
apiInstance.v2TeamsColorsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V2TeamColors**](V2TeamColors.md)| Team shirt colors data | [optional] 

### Return type

[**V2TeamColors**](V2TeamColors.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="v2TeamsGet"></a>
# **v2TeamsGet**
> TeamPageDto v2TeamsGet(offset, limit, opts)



Get teams list

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let offset = 56; // Number | The number of items to skip before starting to collect the result set
let limit = 56; // Number | Limit the number of results returned
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2TeamsGet(offset, limit, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| The number of items to skip before starting to collect the result set | 
 **limit** | **Number**| Limit the number of results returned | 
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**TeamPageDto**](TeamPageDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2TeamsIdGet"></a>
# **v2TeamsIdGet**
> V2TeamProfile v2TeamsIdGet(id, opts)



Get team by id

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2TeamsIdGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**V2TeamProfile**](V2TeamProfile.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2TeamsIdPut"></a>
# **v2TeamsIdPut**
> V2TeamProfile v2TeamsIdPut(body, id)



Update Team information

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let body = new FootballApi.TeamEditDto(); // TeamEditDto | Team information to save in persistance
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2TeamsIdPut(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TeamEditDto**](TeamEditDto.md)| Team information to save in persistance | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

[**V2TeamProfile**](V2TeamProfile.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2TeamsPost"></a>
# **v2TeamsPost**
> V2TeamProfile v2TeamsPost(opts)



Manually insert team.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamsApi();
let opts = { 
  'body': new FootballApi.TeamEditDto() // TeamEditDto | TeamEditDto object
};
apiInstance.v2TeamsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TeamEditDto**](TeamEditDto.md)| TeamEditDto object | [optional] 

### Return type

[**V2TeamProfile**](V2TeamProfile.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

