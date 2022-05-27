# .MatchesApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**matchesIdCommentaryGet**](MatchesApi.md#matchesIdCommentaryGet) | **GET** /matches/{id}/commentary | 
[**v2MatchesGet**](MatchesApi.md#v2MatchesGet) | **GET** /v2/matches | 
[**v2MatchesIdGet**](MatchesApi.md#v2MatchesIdGet) | **GET** /v2/matches/{id} | 
[**v2MatchesIdPut**](MatchesApi.md#v2MatchesIdPut) | **PUT** /v2/matches/{id} | 
[**v2MatchesLivescoreGet**](MatchesApi.md#v2MatchesLivescoreGet) | **GET** /v2/matches/livescore | 
[**v2MatchesPost**](MatchesApi.md#v2MatchesPost) | **POST** /v2/matches | 


# **matchesIdCommentaryGet**
> Array<LiveCommentaryOutputDto> matchesIdCommentaryGet()

Get a list of live commentaries with specified match id and language

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatchesApi(configuration);

let body:.MatchesApiMatchesIdCommentaryGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Return translations depending on language code
  languageCode: "language_code_example",
};

apiInstance.matchesIdCommentaryGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **languageCode** | [**string**] | Return translations depending on language code | defaults to undefined


### Return type

**Array<LiveCommentaryOutputDto>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Match comentary details |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2MatchesGet**
> Array<V2Match> v2MatchesGet()

Get a list of matches

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatchesApi(configuration);

let body:.MatchesApiV2MatchesGetRequest = {
  // number | Select an upper limit for the matches that would be returned
  limit: 1,
  // number | Select an offset for the matches that would be returned
  offset: 1,
  // Array<number> | Filter matches, which have been played as part of the listed tournaments (optional)
  tournamentIds: [
    1,
  ],
  // Array<number> | Filter matches, which have been played as part of the listed tournament seasons (optional)
  seasonIds: [
    1,
  ],
  // Array<number> | Filter matches, which have been played as part of the listed tournament stages (optional)
  stageIds: [
    1,
  ],
  // Array<number> | Filter matches, which have been played as part of the listed tournament groups (optional)
  groupIds: [
    1,
  ],
  // Array<string> | Filter matches, which have been played as part of the listed tournament rounds (optional)
  roundIds: [
    "round_ids_example",
  ],
  // Array<string> | Filter matches by combinations of stage_id and round_id. Format: {stage_id}:{round_id} (optional)
  roundFilter: [
    "round_filter_example",
  ],
  // Date | Filter matches, which have a start_time after the specified date, format is ISO 8601 (optional)
  fromKickoffTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter matches, which have a start_time before the specified date, format is ISO 8601 (optional)
  toKickoffTime: new Date('1970-01-01T00:00:00.00Z'),
  // Array<number> | Filter matches by teams which have taken part in them (optional)
  teamIds: [
    1,
  ],
  // Array<string> | Filter matches by their status types (optional)
  statusTypes: [
    "status_types_example",
  ],
  // Array<string> | Filter matches by their status codes (optional)
  statusCodes: [
    "status_codes_example",
  ],
  // number | Filter matches by the referee who has taken part in them (optional)
  refereeId: 1,
  // string | Filter matches by the venue that has hosted them (optional)
  venueId: "venue_id_example",
  // string | Sort matches in asc|desc order by start_time (optional)
  sortDirection: "sort_direction_example",
};

apiInstance.v2MatchesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Select an upper limit for the matches that would be returned | defaults to undefined
 **offset** | [**number**] | Select an offset for the matches that would be returned | defaults to undefined
 **tournamentIds** | **Array&lt;number&gt;** | Filter matches, which have been played as part of the listed tournaments | (optional) defaults to undefined
 **seasonIds** | **Array&lt;number&gt;** | Filter matches, which have been played as part of the listed tournament seasons | (optional) defaults to undefined
 **stageIds** | **Array&lt;number&gt;** | Filter matches, which have been played as part of the listed tournament stages | (optional) defaults to undefined
 **groupIds** | **Array&lt;number&gt;** | Filter matches, which have been played as part of the listed tournament groups | (optional) defaults to undefined
 **roundIds** | **Array&lt;string&gt;** | Filter matches, which have been played as part of the listed tournament rounds | (optional) defaults to undefined
 **roundFilter** | **Array&lt;string&gt;** | Filter matches by combinations of stage_id and round_id. Format: {stage_id}:{round_id} | (optional) defaults to undefined
 **fromKickoffTime** | [**Date**] | Filter matches, which have a start_time after the specified date, format is ISO 8601 | (optional) defaults to undefined
 **toKickoffTime** | [**Date**] | Filter matches, which have a start_time before the specified date, format is ISO 8601 | (optional) defaults to undefined
 **teamIds** | **Array&lt;number&gt;** | Filter matches by teams which have taken part in them | (optional) defaults to undefined
 **statusTypes** | **Array&lt;string&gt;** | Filter matches by their status types | (optional) defaults to undefined
 **statusCodes** | **Array&lt;string&gt;** | Filter matches by their status codes | (optional) defaults to undefined
 **refereeId** | [**number**] | Filter matches by the referee who has taken part in them | (optional) defaults to undefined
 **venueId** | [**string**] | Filter matches by the venue that has hosted them | (optional) defaults to undefined
 **sortDirection** | [**string**] | Sort matches in asc|desc order by start_time | (optional) defaults to undefined


### Return type

**Array<V2Match>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of match objects |  -  |
**400** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2MatchesIdGet**
> V2Match v2MatchesIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatchesApi(configuration);

let body:.MatchesApiV2MatchesIdGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2MatchesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2Match**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Match object |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2MatchesIdPut**
> V2Match v2MatchesIdPut(match)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatchesApi(configuration);

let body:.MatchesApiV2MatchesIdPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // V2MatchInput | Match information to save
  match: {
    statusId: "statusId_example",
    kickoffTime: new Date('1970-01-01T00:00:00.00Z'),
    stageId: "stageId_example",
    homeTeamId: "homeTeamId_example",
    awayTeamId: "awayTeamId_example",
    roundKey: "roundKey_example",
    groupId: "groupId_example",
    venueId: "venueId_example",
    referees: [
      {
        refereeId: "refereeId_example",
        role: "REFEREE",
      },
    ],
    score: {
      total: {
        home: 1,
        away: 1,
      },
      halfTime: {
        home: 1,
        away: 1,
      },
      regularTime: {
        home: 1,
        away: 1,
      },
      extraTime: {
        home: 1,
        away: 1,
      },
      penaltyShootout: {
        home: 1,
        away: 1,
      },
      aggregate: {
        home: 1,
        away: 1,
      },
    },
    spectators: 1,
    coverage: "LIVE",
    finishedAt: new Date('1970-01-01T00:00:00.00Z'),
    phaseStartedAt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.v2MatchesIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **match** | **V2MatchInput**| Match information to save |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**V2Match**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Match object |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2MatchesLivescoreGet**
> Array<V2Match> v2MatchesLivescoreGet()

Get a list of matches

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatchesApi(configuration);

let body:.MatchesApiV2MatchesLivescoreGetRequest = {
  // Array<number> | Filter matches by their IDs (optional)
  matchIds: [
    1,
  ],
  // string | Filter matches by the date when they were played, format is ISO 8601 (optional)
  date: new Date('1970-01-01').toISOString().split('T')[0];,
  // number | Filter matches by date and UTC offset, allowed value range: [-12,14] (optional)
  utcOffset: 3.14,
  // string | Filter matches by a tournament group code (optional)
  tournamentGroup: "tournament_group_example",
  // Array<'FINISHED' | 'NOT_STARTED' | 'LIVE' | 'INTERRUPTED' | 'CANCELLED' | 'UNKNOWN'> | Filter matches by status types (optional)
  statusTypes: [
    "FINISHED",
  ],
  // 'ENABLED' | 'DISABLED' | Fetch selected matches for specific date and tournament_group (optional)
  selectionFilter: "ENABLED",
};

apiInstance.v2MatchesLivescoreGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **matchIds** | **Array&lt;number&gt;** | Filter matches by their IDs | (optional) defaults to undefined
 **date** | [**string**] | Filter matches by the date when they were played, format is ISO 8601 | (optional) defaults to undefined
 **utcOffset** | [**number**] | Filter matches by date and UTC offset, allowed value range: [-12,14] | (optional) defaults to undefined
 **tournamentGroup** | [**string**] | Filter matches by a tournament group code | (optional) defaults to undefined
 **statusTypes** | **Array<&#39;FINISHED&#39; &#124; &#39;NOT_STARTED&#39; &#124; &#39;LIVE&#39; &#124; &#39;INTERRUPTED&#39; &#124; &#39;CANCELLED&#39; &#124; &#39;UNKNOWN&#39;>** | Filter matches by status types | (optional) defaults to undefined
 **selectionFilter** | [**&#39;ENABLED&#39; | &#39;DISABLED&#39;**]**Array<&#39;ENABLED&#39; &#124; &#39;DISABLED&#39;>** | Fetch selected matches for specific date and tournament_group | (optional) defaults to 'ENABLED'


### Return type

**Array<V2Match>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of match objects |  -  |
**400** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2MatchesPost**
> V2Match v2MatchesPost(match)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatchesApi(configuration);

let body:.MatchesApiV2MatchesPostRequest = {
  // V2MatchInput | Match information to save
  match: {
    statusId: "statusId_example",
    kickoffTime: new Date('1970-01-01T00:00:00.00Z'),
    stageId: "stageId_example",
    homeTeamId: "homeTeamId_example",
    awayTeamId: "awayTeamId_example",
    roundKey: "roundKey_example",
    groupId: "groupId_example",
    venueId: "venueId_example",
    referees: [
      {
        refereeId: "refereeId_example",
        role: "REFEREE",
      },
    ],
    score: {
      total: {
        home: 1,
        away: 1,
      },
      halfTime: {
        home: 1,
        away: 1,
      },
      regularTime: {
        home: 1,
        away: 1,
      },
      extraTime: {
        home: 1,
        away: 1,
      },
      penaltyShootout: {
        home: 1,
        away: 1,
      },
      aggregate: {
        home: 1,
        away: 1,
      },
    },
    spectators: 1,
    coverage: "LIVE",
    finishedAt: new Date('1970-01-01T00:00:00.00Z'),
    phaseStartedAt: new Date('1970-01-01T00:00:00.00Z'),
  },
};

apiInstance.v2MatchesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **match** | **V2MatchInput**| Match information to save |


### Return type

**V2Match**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Match object |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


