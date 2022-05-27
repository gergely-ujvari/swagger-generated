# .TeamsApi

All URIs are relative to *https://false*

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


# **countriesIdTeamsGet**
> Array<Team> countriesIdTeamsGet()

Get Teams for a specific Country.id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiCountriesIdTeamsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // '1' | '0' | 'true' | 'false' | Filter teams for different types of national and non national (optional)
  national: "1",
};

apiInstance.countriesIdTeamsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **national** | [**&#39;1&#39; | &#39;0&#39; | &#39;true&#39; | &#39;false&#39;**]**Array<&#39;1&#39; &#124; &#39;0&#39; &#124; &#39;true&#39; &#124; &#39;false&#39;>** | Filter teams for different types of national and non national | (optional) defaults to undefined


### Return type

**Array<Team>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Teams from specified Country |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsGet**
> Array<Team> teamsGet()

Search all teams by parameters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiTeamsGetRequest = {
  // string | Filter by team. Length must be >= 4. The filter matches on a per word basis. If you query for 'United' it will match both 'West Ham United' and 'Newcastle United'
  name: "name_example",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // number | Limit the number of results returned (optional)
  maxResults: 100,
  // number | Filter teams just from the specified country (optional)
  countryId: 1,
};

apiInstance.teamsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Filter by team. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#39;United&#39; it will match both &#39;West Ham United&#39; and &#39;Newcastle United&#39; | defaults to undefined
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **maxResults** | [**number**] | Limit the number of results returned | (optional) defaults to 100
 **countryId** | [**number**] | Filter teams just from the specified country | (optional) defaults to undefined


### Return type

**Array<Team>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of matching Teams |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsIdEventsGet**
> Array<Event> teamsIdEventsGet()

Get a list of events in which a team with a specified id has participated

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiTeamsIdEventsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // Date | Filter events, which have a start_time after the specified date, format is RFC 3339 (optional)
  fromTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter events, which have a start_time before the specified date, format is RFC 3339 (optional)
  toTime: new Date('1970-01-01T00:00:00.00Z'),
  // 'asc' | 'desc' | Whether to sort the results by ascending or descending order (optional)
  direction: "asc",
  // number | Filter events for a specific tournament_season_stage.id (optional)
  tournamentSeasonStageId: 1,
};

apiInstance.teamsIdEventsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **fromTime** | [**Date**] | Filter events, which have a start_time after the specified date, format is RFC 3339 | (optional) defaults to undefined
 **toTime** | [**Date**] | Filter events, which have a start_time before the specified date, format is RFC 3339 | (optional) defaults to undefined
 **direction** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Whether to sort the results by ascending or descending order | (optional) defaults to undefined
 **tournamentSeasonStageId** | [**number**] | Filter events for a specific tournament_season_stage.id | (optional) defaults to undefined


### Return type

**Array<Event>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of matching Event objects |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsIdFormGet**
> Array<TeamForm> teamsIdFormGet()

Get Team form information accross all tournaments

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiTeamsIdFormGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'events' | Whether to include information about every event in the TeamForm response (optional)
  expand: "events",
};

apiInstance.teamsIdFormGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **expand** | [**&#39;events&#39;**]**Array<&#39;events&#39;>** | Whether to include information about every event in the TeamForm response | (optional) defaults to undefined


### Return type

**Array<TeamForm>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Team Form information |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsIdGet**
> Team teamsIdGet()

Get information about a specific Team

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiTeamsIdGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'form' | 'form.events' | 'form.events,next_event' | Specifies additional information to include with the Team response (optional)
  expand: "form",
};

apiInstance.teamsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **expand** | [**&#39;form&#39; | &#39;form.events&#39; | &#39;form.events,next_event&#39;**]**Array<&#39;form&#39; &#124; &#39;form.events&#39; &#124; &#39;form.events,next_event&#39;>** | Specifies additional information to include with the Team response | (optional) defaults to undefined


### Return type

**Team**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team object |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsIdPlayersGet**
> Array<TeamPlayer> teamsIdPlayersGet()

Get the current squad for a Team

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiTeamsIdPlayersGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'position' | Group players by a specific property (optional)
  groupBy: "position",
};

apiInstance.teamsIdPlayersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **groupBy** | [**&#39;position&#39;**]**Array<&#39;position&#39;>** | Group players by a specific property | (optional) defaults to undefined


### Return type

**Array<TeamPlayer>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of TeamPlayer objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsIdPlayersStatisticsGet**
> TeamPlayerSeasonStatistics teamsIdPlayersStatisticsGet()

Get player statistics for the current season in the Team's League

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiTeamsIdPlayersStatisticsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'player.position' | Group the response by a specific property (optional)
  groupBy: "player.position",
};

apiInstance.teamsIdPlayersStatisticsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **groupBy** | [**&#39;player.position&#39;**]**Array<&#39;player.position&#39;>** | Group the response by a specific property | (optional) defaults to undefined


### Return type

**TeamPlayerSeasonStatistics**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Player statistics grouped by TournamentSeason |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsIdPlayersStatisticsSeasonsGet**
> Array<TournamentSeasonWithTournament> teamsIdPlayersStatisticsSeasonsGet()

Get a list of TournamentSeasons for which Player Statistics are available

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiTeamsIdPlayersStatisticsSeasonsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.teamsIdPlayersStatisticsSeasonsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<TournamentSeasonWithTournament>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of TournamentSeasons which Player Statistics are available |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsIdPlayersStatisticsSeasonsSeasonIdGet**
> TeamPlayerSeasonStatistics teamsIdPlayersStatisticsSeasonsSeasonIdGet()

Get player statistics for the current season in the Team's League

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiTeamsIdPlayersStatisticsSeasonsSeasonIdGetRequest = {
  // number | Unique identifier of the TournamentSeason resource
  seasonId: 14,
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'player.position' | Group the response by a specific property (optional)
  groupBy: "player.position",
};

apiInstance.teamsIdPlayersStatisticsSeasonsSeasonIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seasonId** | [**number**] | Unique identifier of the TournamentSeason resource | defaults to 14
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **groupBy** | [**&#39;player.position&#39;**]**Array<&#39;player.position&#39;>** | Group the response by a specific property | (optional) defaults to undefined


### Return type

**TeamPlayerSeasonStatistics**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Player statistics grouped by TournamentSeason |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **teamsIdStatisticsLeagueGet**
> TeamSeasonStatistics teamsIdStatisticsLeagueGet()

Get the statistics for the latest League the team participates in

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiTeamsIdStatisticsLeagueGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'team' | 'full' | Select whether to include a full league standing or just the team's position (optional)
  standing: "full",
};

apiInstance.teamsIdStatisticsLeagueGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **standing** | [**&#39;team&#39; | &#39;full&#39;**]**Array<&#39;team&#39; &#124; &#39;full&#39;>** | Select whether to include a full league standing or just the team&#39;s position | (optional) defaults to 'full'


### Return type

**TeamSeasonStatistics**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns relevant team performance stats for the current League season |  -  |
**404** | Current league for the given team not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsIdTeamsGet**
> Array<PartialTeam> tournamentsSeasonsIdTeamsGet()

Get a list of Teams, which are participating in a given TournamentSeason

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiTournamentsSeasonsIdTeamsGetRequest = {
  // number | Unique identifier of the TournamentSeason resource
  id: 52,
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsSeasonsIdTeamsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the TournamentSeason resource | defaults to 52
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<PartialTeam>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of participating Teams |  -  |
**404** | No TournamentSeason with the specified id is found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsStagesIdTeamsGet**
> Array<PartialTeam> tournamentsSeasonsStagesIdTeamsGet()

Get a list of Teams, which are participating in a given TournamentSeasonStage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiTournamentsSeasonsStagesIdTeamsGetRequest = {
  // number | Unique identifier of the TournamentSeasonStage resource
  id: 57,
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsSeasonsStagesIdTeamsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the TournamentSeasonStage resource | defaults to 57
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<PartialTeam>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of participating Teams |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TeamsColorsPost**
> V2TeamColors v2TeamsColorsPost()

Manually insert team colors by team or event.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiV2TeamsColorsPostRequest = {
  // V2TeamColors | Team shirt colors data (optional)
  teamColorsDto: {
    entityType: "entityType_example",
    entityId: "entityId_example",
    colors: [
      {
        type: "type_example",
        colorCode: "colorCode_example",
      },
    ],
  },
};

apiInstance.v2TeamsColorsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamColorsDto** | **V2TeamColors**| Team shirt colors data |


### Return type

**V2TeamColors**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team shirt colors data |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TeamsGet**
> TeamPageDto v2TeamsGet()

Get teams list

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiV2TeamsGetRequest = {
  // number | The number of items to skip before starting to collect the result set
  offset: 1,
  // number | Limit the number of results returned
  limit: 1,
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2TeamsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | [**number**] | The number of items to skip before starting to collect the result set | defaults to undefined
 **limit** | [**number**] | Limit the number of results returned | defaults to undefined
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**TeamPageDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of matching teams and meta data. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TeamsIdGet**
> V2TeamProfile v2TeamsIdGet()

Get team by id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiV2TeamsIdGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2TeamsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2TeamProfile**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team data |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TeamsIdPut**
> V2TeamProfile v2TeamsIdPut(team)

Update Team information

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiV2TeamsIdPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // TeamEditDto | Team information to save in persistance
  team: {
    name: "name_example",
    threeLetterCode: "threeLetterCode_example",
    shortName: "shortName_example",
    type: "type_example",
    countryId: "countryId_example",
    venueId: "venueId_example",
    presidentId: "presidentId_example",
    coachId: "coachId_example",
    social: {
      web: "web_example",
      twitterId: "twitterId_example",
      facebookId: "facebookId_example",
      instagramId: "instagramId_example",
      wikipediaId: "wikipediaId_example",
    },
    founded: 1,
    gender: "gender_example",
  },
};

apiInstance.v2TeamsIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team** | **TeamEditDto**| Team information to save in persistance |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**V2TeamProfile**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team successfuly saved |  -  |
**404** | No Team with id found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TeamsPost**
> V2TeamProfile v2TeamsPost()

Manually insert team.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamsApi(configuration);

let body:.TeamsApiV2TeamsPostRequest = {
  // TeamEditDto | TeamEditDto object (optional)
  teamEditDto: {
    name: "name_example",
    threeLetterCode: "threeLetterCode_example",
    shortName: "shortName_example",
    type: "type_example",
    countryId: "countryId_example",
    venueId: "venueId_example",
    presidentId: "presidentId_example",
    coachId: "coachId_example",
    social: {
      web: "web_example",
      twitterId: "twitterId_example",
      facebookId: "facebookId_example",
      instagramId: "instagramId_example",
      wikipediaId: "wikipediaId_example",
    },
    founded: 1,
    gender: "gender_example",
  },
};

apiInstance.v2TeamsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamEditDto** | **TeamEditDto**| TeamEditDto object |


### Return type

**V2TeamProfile**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team data |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


