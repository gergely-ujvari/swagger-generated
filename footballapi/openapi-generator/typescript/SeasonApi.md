# .SeasonApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2SeasonsDetailsGet**](SeasonApi.md#v2SeasonsDetailsGet) | **GET** /v2/seasons/details | 
[**v2SeasonsGet**](SeasonApi.md#v2SeasonsGet) | **GET** /v2/seasons | 
[**v2SeasonsIdPut**](SeasonApi.md#v2SeasonsIdPut) | **PUT** /v2/seasons/{id} | 
[**v2SeasonsIdStagesGet**](SeasonApi.md#v2SeasonsIdStagesGet) | **GET** /v2/seasons/{id}/stages | 
[**v2SeasonsIdStagesPost**](SeasonApi.md#v2SeasonsIdStagesPost) | **POST** /v2/seasons/{id}/stages | 
[**v2SeasonsPost**](SeasonApi.md#v2SeasonsPost) | **POST** /v2/seasons | 
[**v2StagesIdDelete**](SeasonApi.md#v2StagesIdDelete) | **DELETE** /v2/stages/{id} | 
[**v2TournamentsIdSeasonsCurrentPatch**](SeasonApi.md#v2TournamentsIdSeasonsCurrentPatch) | **PATCH** /v2/tournaments/{id}/seasons/current | 


# **v2SeasonsDetailsGet**
> V2SeasonDetails v2SeasonsDetailsGet()

Get the details of a season by season_id, or by tournament_id and active status

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeasonApi(configuration);

let body:.SeasonApiV2SeasonsDetailsGetRequest = {
  // string | The ID of the season of interest (optional)
  seasonId: "season_id_example",
  // string | The ID of the tournament whose active season is of interest (optional)
  tournamentId: "tournament_id_example",
  // 'CURRENT' | Required only when the tournament_id parameter is provided (optional)
  status: "CURRENT",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2SeasonsDetailsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seasonId** | [**string**] | The ID of the season of interest | (optional) defaults to undefined
 **tournamentId** | [**string**] | The ID of the tournament whose active season is of interest | (optional) defaults to undefined
 **status** | [**&#39;CURRENT&#39;**]**Array<&#39;CURRENT&#39;>** | Required only when the tournament_id parameter is provided | (optional) defaults to undefined
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2SeasonDetails**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Seasons details |  -  |
**404** | Resource not found |  -  |
**422** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2SeasonsGet**
> V2SeasonList v2SeasonsGet()

Get seasons by tournament_id, team_id and status

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeasonApi(configuration);

let body:.SeasonApiV2SeasonsGetRequest = {
  // string | Required only if no other parameters are provided (optional)
  tournamentId: "tournament_id_example",
  // string | Required only if no other paramenters are provided (optional)
  teamId: "team_id_example",
  // 'ACTIVE' | Required only if no other parameters are provided (optional)
  status: "ACTIVE",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2SeasonsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tournamentId** | [**string**] | Required only if no other parameters are provided | (optional) defaults to undefined
 **teamId** | [**string**] | Required only if no other paramenters are provided | (optional) defaults to undefined
 **status** | [**&#39;ACTIVE&#39;**]**Array<&#39;ACTIVE&#39;>** | Required only if no other parameters are provided | (optional) defaults to undefined
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2SeasonList**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Seasons details |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2SeasonsIdPut**
> V2Season v2SeasonsIdPut(name)

Update an existing season

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeasonApi(configuration);

let body:.SeasonApiV2SeasonsIdPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // V2TournamentSeasonUpdateInput | Season name
  name: {
    name: "name_example",
  },
};

apiInstance.v2SeasonsIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **V2TournamentSeasonUpdateInput**| Season name |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**V2Season**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Seasons details |  -  |
**404** | Resource not found |  -  |
**400** | Resource already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2SeasonsIdStagesGet**
> V2SeasonStageCollection v2SeasonsIdStagesGet()

List all stages for specific season

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeasonApi(configuration);

let body:.SeasonApiV2SeasonsIdStagesGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2SeasonsIdStagesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2SeasonStageCollection**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stages successfully retrieved |  -  |
**404** | Season not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2SeasonsIdStagesPost**
> V2SeasonStageCollection v2SeasonsIdStagesPost(stages)

Create or update multiple stages

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeasonApi(configuration);

let body:.SeasonApiV2SeasonsIdStagesPostRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // Array<V2SeasonStage> | List of stages to be updated or created
  stages: [
    {
      id: "id_example",
      name: "name_example",
      type: "GROUP",
      startDate: new Date('1970-01-01').toISOString().split('T')[0];,
      endDate: new Date('1970-01-01').toISOString().split('T')[0];,
      orderInSeason: 1,
      coverage: "coverage_example",
    },
  ],
};

apiInstance.v2SeasonsIdStagesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stages** | **Array<V2SeasonStage>**| List of stages to be updated or created |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**V2SeasonStageCollection**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stages successfully created/updated |  -  |
**404** | Season or stage not found |  -  |
**400** | Season has enetpulse mapping | Duplicate parameter (name, order_in_season) | Duplicate item |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2SeasonsPost**
> V2Season v2SeasonsPost(season)

Create a new season

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeasonApi(configuration);

let body:.SeasonApiV2SeasonsPostRequest = {
  // V2TournamentSeasonInsertInput | Season information
  season: {
    tournamentId: "tournamentId_example",
    name: "name_example",
  },
};

apiInstance.v2SeasonsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **season** | **V2TournamentSeasonInsertInput**| Season information |


### Return type

**V2Season**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Seasons details |  -  |
**404** | Resource not found |  -  |
**400** | Resource already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2StagesIdDelete**
> void v2StagesIdDelete()

Permanently delete stage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeasonApi(configuration);

let body:.SeasonApiV2StagesIdDeleteRequest = {
  // string | Unique identifier of the resource.
  id: "1",
};

apiInstance.v2StagesIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Stage successfully deleted |  -  |
**400** | Stage has enetpulse mapping | Stage has match link |  -  |
**404** | Stage not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TournamentsIdSeasonsCurrentPatch**
> V2Season v2TournamentsIdSeasonsCurrentPatch(seasonId)

Set the current season as active and change all other seasons in the tournament to inactive

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .SeasonApi(configuration);

let body:.SeasonApiV2TournamentsIdSeasonsCurrentPatchRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // V2TournamentSeasonStatusInput | Season unique identifier
  seasonId: {
    seasonId: "seasonId_example",
  },
};

apiInstance.v2TournamentsIdSeasonsCurrentPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **seasonId** | **V2TournamentSeasonStatusInput**| Season unique identifier |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**V2Season**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Seasons details |  -  |
**404** | Resource not found |  -  |
**400** | Season not part of tournament |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


