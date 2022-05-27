# FootballApi.SeasonApi

All URIs are relative to *https://false/*

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

<a name="v2SeasonsDetailsGet"></a>
# **v2SeasonsDetailsGet**
> V2SeasonDetails v2SeasonsDetailsGet(opts)



Get the details of a season by season_id, or by tournament_id and active status

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.SeasonApi();
let opts = { 
  'seasonId': "seasonId_example", // String | The ID of the season of interest
  'tournamentId': "tournamentId_example", // String | The ID of the tournament whose active season is of interest
  'status': "status_example", // String | Required only when the tournament_id parameter is provided
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2SeasonsDetailsGet(opts, (error, data, response) => {
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
 **seasonId** | **String**| The ID of the season of interest | [optional] 
 **tournamentId** | **String**| The ID of the tournament whose active season is of interest | [optional] 
 **status** | **String**| Required only when the tournament_id parameter is provided | [optional] 
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**V2SeasonDetails**](V2SeasonDetails.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2SeasonsGet"></a>
# **v2SeasonsGet**
> V2SeasonList v2SeasonsGet(opts)



Get seasons by tournament_id, team_id and status

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.SeasonApi();
let opts = { 
  'tournamentId': "tournamentId_example", // String | Required only if no other parameters are provided
  'teamId': "teamId_example", // String | Required only if no other paramenters are provided
  'status': "status_example", // String | Required only if no other parameters are provided
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2SeasonsGet(opts, (error, data, response) => {
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
 **tournamentId** | **String**| Required only if no other parameters are provided | [optional] 
 **teamId** | **String**| Required only if no other paramenters are provided | [optional] 
 **status** | **String**| Required only if no other parameters are provided | [optional] 
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**V2SeasonList**](V2SeasonList.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2SeasonsIdPut"></a>
# **v2SeasonsIdPut**
> V2Season v2SeasonsIdPut(body, id)



Update an existing season

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.SeasonApi();
let body = new FootballApi.V2TournamentSeasonUpdateInput(); // V2TournamentSeasonUpdateInput | Season name
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2SeasonsIdPut(body, id, (error, data, response) => {
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
 **body** | [**V2TournamentSeasonUpdateInput**](V2TournamentSeasonUpdateInput.md)| Season name | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

[**V2Season**](V2Season.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="v2SeasonsIdStagesGet"></a>
# **v2SeasonsIdStagesGet**
> V2SeasonStageCollection v2SeasonsIdStagesGet(id, opts)



List all stages for specific season

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.SeasonApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2SeasonsIdStagesGet(id, opts, (error, data, response) => {
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

[**V2SeasonStageCollection**](V2SeasonStageCollection.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v2SeasonsIdStagesPost"></a>
# **v2SeasonsIdStagesPost**
> V2SeasonStageCollection v2SeasonsIdStagesPost(body, id)



Create or update multiple stages

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.SeasonApi();
let body = [new FootballApi.V2SeasonStage()]; // [V2SeasonStage] | List of stages to be updated or created
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2SeasonsIdStagesPost(body, id, (error, data, response) => {
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
 **body** | [**[V2SeasonStage]**](V2SeasonStage.md)| List of stages to be updated or created | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

[**V2SeasonStageCollection**](V2SeasonStageCollection.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2SeasonsPost"></a>
# **v2SeasonsPost**
> V2Season v2SeasonsPost(body)



Create a new season

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.SeasonApi();
let body = new FootballApi.V2TournamentSeasonInsertInput(); // V2TournamentSeasonInsertInput | Season information

apiInstance.v2SeasonsPost(body, (error, data, response) => {
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
 **body** | [**V2TournamentSeasonInsertInput**](V2TournamentSeasonInsertInput.md)| Season information | 

### Return type

[**V2Season**](V2Season.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="v2StagesIdDelete"></a>
# **v2StagesIdDelete**
> v2StagesIdDelete(id)



Permanently delete stage

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.SeasonApi();
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2StagesIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2TournamentsIdSeasonsCurrentPatch"></a>
# **v2TournamentsIdSeasonsCurrentPatch**
> V2Season v2TournamentsIdSeasonsCurrentPatch(body, id)



Set the current season as active and change all other seasons in the tournament to inactive

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.SeasonApi();
let body = new FootballApi.V2TournamentSeasonStatusInput(); // V2TournamentSeasonStatusInput | Season unique identifier
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2TournamentsIdSeasonsCurrentPatch(body, id, (error, data, response) => {
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
 **body** | [**V2TournamentSeasonStatusInput**](V2TournamentSeasonStatusInput.md)| Season unique identifier | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

[**V2Season**](V2Season.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

