# .TournamentsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tournamentsGet**](TournamentsApi.md#tournamentsGet) | **GET** /tournaments | 
[**tournamentsIdGet**](TournamentsApi.md#tournamentsIdGet) | **GET** /tournaments/{id} | 
[**tournamentsIdSeasonsGet**](TournamentsApi.md#tournamentsIdSeasonsGet) | **GET** /tournaments/{id}/seasons | 
[**tournamentsIdSeasonsLatestGet**](TournamentsApi.md#tournamentsIdSeasonsLatestGet) | **GET** /tournaments/{id}/seasons/latest | 
[**tournamentsSeasonsIdCardlistGet**](TournamentsApi.md#tournamentsSeasonsIdCardlistGet) | **GET** /tournaments/seasons/{id}/cardlist | 
[**tournamentsSeasonsIdEventsGet**](TournamentsApi.md#tournamentsSeasonsIdEventsGet) | **GET** /tournaments/seasons/{id}/events | 
[**tournamentsSeasonsIdGet**](TournamentsApi.md#tournamentsSeasonsIdGet) | **GET** /tournaments/seasons/{id} | 
[**tournamentsSeasonsIdTeamsGet**](TournamentsApi.md#tournamentsSeasonsIdTeamsGet) | **GET** /tournaments/seasons/{id}/teams | 
[**tournamentsSeasonsIdTopscorerGet**](TournamentsApi.md#tournamentsSeasonsIdTopscorerGet) | **GET** /tournaments/seasons/{id}/topscorer | 
[**tournamentsSeasonsStagesActiveGet**](TournamentsApi.md#tournamentsSeasonsStagesActiveGet) | **GET** /tournaments/seasons/stages/active | 
[**tournamentsSeasonsStagesGroupsIdGet**](TournamentsApi.md#tournamentsSeasonsStagesGroupsIdGet) | **GET** /tournaments/seasons/stages/groups/{id} | 
[**tournamentsSeasonsStagesGroupsIdStandingGet**](TournamentsApi.md#tournamentsSeasonsStagesGroupsIdStandingGet) | **GET** /tournaments/seasons/stages/groups/{id}/standing | 
[**tournamentsSeasonsStagesIdEventsGet**](TournamentsApi.md#tournamentsSeasonsStagesIdEventsGet) | **GET** /tournaments/seasons/stages/{id}/events | 
[**tournamentsSeasonsStagesIdGet**](TournamentsApi.md#tournamentsSeasonsStagesIdGet) | **GET** /tournaments/seasons/stages/{id} | 
[**tournamentsSeasonsStagesIdRoundsGet**](TournamentsApi.md#tournamentsSeasonsStagesIdRoundsGet) | **GET** /tournaments/seasons/stages/{id}/rounds | 
[**tournamentsSeasonsStagesIdStandingGet**](TournamentsApi.md#tournamentsSeasonsStagesIdStandingGet) | **GET** /tournaments/seasons/stages/{id}/standing | 
[**tournamentsSeasonsStagesIdTeamsGet**](TournamentsApi.md#tournamentsSeasonsStagesIdTeamsGet) | **GET** /tournaments/seasons/stages/{id}/teams | 


# **tournamentsGet**
> Array<Tournament> tournamentsGet()

Get a list of available Tournament resources

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsGetRequest = {
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // number | Get Tournaments from a specific Country.id (optional)
  countryId: 1,
  // 'sportalios' | Get Tournaments ordered for a specific client (optional)
  clientOrder: "sportalios",
  // 'sportalios' | Include extra information with Tournament response (optional)
  expandClientSortorder: "sportalios",
};

apiInstance.tournamentsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **countryId** | [**number**] | Get Tournaments from a specific Country.id | (optional) defaults to undefined
 **clientOrder** | [**&#39;sportalios&#39;**]**Array<&#39;sportalios&#39;>** | Get Tournaments ordered for a specific client | (optional) defaults to undefined
 **expandClientSortorder** | [**&#39;sportalios&#39;**]**Array<&#39;sportalios&#39;>** | Include extra information with Tournament response | (optional) defaults to undefined


### Return type

**Array<Tournament>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Tournament objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsIdGet**
> TournamentWithSeasons tournamentsIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsIdGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**TournamentWithSeasons**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tournament object |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsIdSeasonsGet**
> Array<TournamentSeason> tournamentsIdSeasonsGet()

Get a list of seasons for a given Tournament id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsIdSeasonsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsIdSeasonsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<TournamentSeason>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of TournamentSeason objects which are part of the Tournament |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsIdSeasonsLatestGet**
> TournamentSeasonWithStages tournamentsIdSeasonsLatestGet()

Get information for the latest season for a given Tournament. This is an alias to whatever resource is first in /tournaments/{id}/seasons

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsIdSeasonsLatestGetRequest = {
  // number | Unique identifier of the Tournament resource
  id: 27,
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsIdSeasonsLatestGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the Tournament resource | defaults to 27
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**TournamentSeasonWithStages**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Object giving information for the latest season of the specified Tournament id |  -  |
**404** | Indicates that the specified Tournament id does not exist or the Tournament has no seasons |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsIdCardlistGet**
> Array<CardlistStandingData> tournamentsSeasonsIdCardlistGet()

Get a standing by red,yellow cards for a specific TournamentSeason resource.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsIdCardlistGetRequest = {
  // number | Unique identifier of the TournamentSeason resource
  id: 52,
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsSeasonsIdCardlistGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the TournamentSeason resource | defaults to 52
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<CardlistStandingData>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standing of Players based on red,yellow cards |  -  |
**404** | Indicates no TournamentSeason resource with the specified id is found or no card ranking is currently not available for this Resource |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsIdEventsGet**
> Array<Event> tournamentsSeasonsIdEventsGet()

Get a list of Events, for a given TournamentSeason

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsIdEventsGetRequest = {
  // number | Unique identifier of the TournamentSeason resource
  id: 52,
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'date' | Whether to group events by date (optional)
  groupBy: "date",
};

apiInstance.tournamentsSeasonsIdEventsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the TournamentSeason resource | defaults to 52
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **groupBy** | [**&#39;date&#39;**]**Array<&#39;date&#39;>** | Whether to group events by date | (optional) defaults to undefined


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
**200** | List of events in the season |  -  |
**404** | No TournamentSeason with the specified id is found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsIdGet**
> TournamentSeasonWithStages tournamentsSeasonsIdGet()

Get information for a given TournamentSeason resource id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsIdGetRequest = {
  // number | Unique identifier of the TournamentSeason resource
  id: 52,
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsSeasonsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the TournamentSeason resource | defaults to 52
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**TournamentSeasonWithStages**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the specified TournamentSeason resource |  -  |
**404** | Indicates no TournamentSeason resource with the specified id is found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsIdTeamsGet**
> Array<PartialTeam> tournamentsSeasonsIdTeamsGet()

Get a list of Teams, which are participating in a given TournamentSeason

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsIdTeamsGetRequest = {
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

# **tournamentsSeasonsIdTopscorerGet**
> Array<TopscorerStandingData> tournamentsSeasonsIdTopscorerGet()

Get a list of topscorers for a specific TournamentSeason resource.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsIdTopscorerGetRequest = {
  // number | Unique identifier of the TournamentSeason resource
  id: 52,
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsSeasonsIdTopscorerGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the TournamentSeason resource | defaults to 52
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<TopscorerStandingData>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of topscorers |  -  |
**404** | Indicates no TournamentSeason resource with the specified id is found or a topscorer list is currently not available for this Resource |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsStagesActiveGet**
> Array<TournamentSeasonStage> tournamentsSeasonsStagesActiveGet()

Get all currently active tournament season stages

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:any = {};

apiInstance.tournamentsSeasonsStagesActiveGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TournamentSeasonStage>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsStagesGroupsIdGet**
> StageGroupWithStandingTournamentSeasonStage tournamentsSeasonsStagesGroupsIdGet()

Get information for a StageGroup Resource

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsStagesGroupsIdGetRequest = {
  // number | Unique identifier of the StageGroup resource
  id: 313,
  // 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events' | Specify additional information to include with the response (optional)
  expand: "standing",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsSeasonsStagesGroupsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the StageGroup resource | defaults to 313
 **expand** | [**&#39;standing&#39; | &#39;standing.rules&#39; | &#39;standing.rules,standing.form&#39; | &#39;standing.rules,standing.form.events&#39; | &#39;standing.form&#39; | &#39;standing.form.events&#39;**]**Array<&#39;standing&#39; &#124; &#39;standing.rules&#39; &#124; &#39;standing.rules,standing.form&#39; &#124; &#39;standing.rules,standing.form.events&#39; &#124; &#39;standing.form&#39; &#124; &#39;standing.form.events&#39;>** | Specify additional information to include with the response | (optional) defaults to undefined
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**StageGroupWithStandingTournamentSeasonStage**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the given StageGroup and Standing information (if available and requested) |  -  |
**404** | A StageGroup resource with the specified id is not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsStagesGroupsIdStandingGet**
> Array<LeagueStandingData> tournamentsSeasonsStagesGroupsIdStandingGet()

Get Standing for a StageGroup Resource

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsStagesGroupsIdStandingGetRequest = {
  // number | Unique identifier of the StageGroup resource
  id: 313,
  // 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events' | Specify additional information to include with the response (optional)
  expand: "rules",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsSeasonsStagesGroupsIdStandingGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the StageGroup resource | defaults to 313
 **expand** | [**&#39;rules&#39; | &#39;rules,form&#39; | &#39;rules,form.events&#39; | &#39;form&#39; | &#39;form.events&#39;**]**Array<&#39;rules&#39; &#124; &#39;rules,form&#39; &#124; &#39;rules,form.events&#39; &#124; &#39;form&#39; &#124; &#39;form.events&#39;>** | Specify additional information to include with the response | (optional) defaults to undefined
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<LeagueStandingData>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standing information for the given StageGroup resource if available |  -  |
**404** | A StageGroup resource with the specified id is not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsStagesIdEventsGet**
> Array<EventsByDate> tournamentsSeasonsStagesIdEventsGet()

Get a list of events which are fixtures in a given TournamentSeasonStage resource

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsStagesIdEventsGetRequest = {
  // number | Unique identifier of the TournamentSeasonStage resource
  id: 57,
  // string | Filter the event list by a specific round (optional)
  round: "round_example",
  // 'asc' | 'desc' | Sort results by date in ascending or descending order (optional)
  sortDirection: "asc",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsSeasonsStagesIdEventsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the TournamentSeasonStage resource | defaults to 57
 **round** | [**string**] | Filter the event list by a specific round | (optional) defaults to undefined
 **sortDirection** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort results by date in ascending or descending order | (optional) defaults to 'asc'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<EventsByDate>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events which are fixtures in a TournamentSeasonStage |  -  |
**404** | A TournamentSeasonStage resource with the specified id is not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsStagesIdGet**
> TournamentSeasonStageWithStandingGroups tournamentsSeasonsStagesIdGet()

Get information for a TournamentSeasonStage Resource

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsStagesIdGetRequest = {
  // number | Unique identifier of the TournamentSeasonStage resource
  id: 57,
  // 'standing' | 'standing.rules' | 'standing.rules,standing.form' | 'standing.rules,standing.form.events' | 'standing.form' | 'standing.form.events' | Specify additional information to include with the response (optional)
  expand: "standing",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsSeasonsStagesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the TournamentSeasonStage resource | defaults to 57
 **expand** | [**&#39;standing&#39; | &#39;standing.rules&#39; | &#39;standing.rules,standing.form&#39; | &#39;standing.rules,standing.form.events&#39; | &#39;standing.form&#39; | &#39;standing.form.events&#39;**]**Array<&#39;standing&#39; &#124; &#39;standing.rules&#39; &#124; &#39;standing.rules,standing.form&#39; &#124; &#39;standing.rules,standing.form.events&#39; &#124; &#39;standing.form&#39; &#124; &#39;standing.form.events&#39;>** | Specify additional information to include with the response | (optional) defaults to undefined
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**TournamentSeasonStageWithStandingGroups**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the given TournamentSeasonStage and Standing information (if available and requested) |  -  |
**404** | A TournamentSeasonStage resource with the specified id is not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsStagesIdRoundsGet**
> Array<Round> tournamentsSeasonsStagesIdRoundsGet()

Get a list of rounds for a specific TournamentSeasonStage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsStagesIdRoundsGetRequest = {
  // number | Unique identifier of the TournamentSeasonStage resource
  id: 57,
  // 'events' | Specify what additional information to include with the response (optional)
  expand: "events",
};

apiInstance.tournamentsSeasonsStagesIdRoundsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the TournamentSeasonStage resource | defaults to 57
 **expand** | [**&#39;events&#39;**]**Array<&#39;events&#39;>** | Specify what additional information to include with the response | (optional) defaults to undefined


### Return type

**Array<Round>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of rounds, their start and end times for a TournamentSeasonStage |  -  |
**404** | A TournamentSeasonStage resource with the specified id is not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsStagesIdStandingGet**
> Array<LeagueStandingData> tournamentsSeasonsStagesIdStandingGet()

Get Standing for a TournamentSeasonStage Resource

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsStagesIdStandingGetRequest = {
  // number | Unique identifier of the TournamentSeasonStage resource
  id: 57,
  // 'rules' | 'rules,form' | 'rules,form.events' | 'form' | 'form.events' | Specify additional information to include with the response (optional)
  expand: "rules",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsSeasonsStagesIdStandingGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the TournamentSeasonStage resource | defaults to 57
 **expand** | [**&#39;rules&#39; | &#39;rules,form&#39; | &#39;rules,form.events&#39; | &#39;form&#39; | &#39;form.events&#39;**]**Array<&#39;rules&#39; &#124; &#39;rules,form&#39; &#124; &#39;rules,form.events&#39; &#124; &#39;form&#39; &#124; &#39;form.events&#39;>** | Specify additional information to include with the response | (optional) defaults to undefined
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<LeagueStandingData>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standing information for the given TournamentSeaonStage resource if available |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsStagesIdTeamsGet**
> Array<PartialTeam> tournamentsSeasonsStagesIdTeamsGet()

Get a list of Teams, which are participating in a given TournamentSeasonStage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentsApi(configuration);

let body:.TournamentsApiTournamentsSeasonsStagesIdTeamsGetRequest = {
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


