# .PlayerStatisticApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statisticsPlayersGet**](PlayerStatisticApi.md#statisticsPlayersGet) | **GET** /statistics/players | 
[**v2StatisticsPlayersMatchPut**](PlayerStatisticApi.md#v2StatisticsPlayersMatchPut) | **PUT** /v2/statistics/players/match | 
[**v2StatisticsPlayersSeasonGet**](PlayerStatisticApi.md#v2StatisticsPlayersSeasonGet) | **GET** /v2/statistics/players/season | 


# **statisticsPlayersGet**
> Array<OutputDto> statisticsPlayersGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayerStatisticApi(configuration);

let body:.PlayerStatisticApiStatisticsPlayersGetRequest = {
  // string | Return translations depending on language code
  languageCode: "language_code_example",
  // string | List for player IDs separated by commas. (optional)
  playerIds: "player_ids_example",
  // string | List for season IDs separated by commas. (optional)
  seasonIds: "season_ids_example",
  // number | Return only statistics for players which are currently in the specified team's squad (optional)
  teamId: 1,
};

apiInstance.statisticsPlayersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **languageCode** | [**string**] | Return translations depending on language code | defaults to undefined
 **playerIds** | [**string**] | List for player IDs separated by commas. | (optional) defaults to undefined
 **seasonIds** | [**string**] | List for season IDs separated by commas. | (optional) defaults to undefined
 **teamId** | [**number**] | Return only statistics for players which are currently in the specified team&#39;s squad | (optional) defaults to undefined


### Return type

**Array<OutputDto>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of player statistics |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2StatisticsPlayersMatchPut**
> Array<V2PlayerStatisticOutput> v2StatisticsPlayersMatchPut()

Bulk Upsert player statistics

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayerStatisticApi(configuration);

let body:.PlayerStatisticApiV2StatisticsPlayersMatchPutRequest = {
  // Array<V2PlayerStatisticInput> | Array of player match statistics (optional)
  playerStatistics: [
    {
      playerId: "playerId_example",
      matchId: "matchId_example",
      teamId: "teamId_example",
      statistics: [
        {
          name: "name_example",
          value: "value_example",
        },
      ],
      origin: "origin_example",
    },
  ],
};

apiInstance.v2StatisticsPlayersMatchPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerStatistics** | **Array<V2PlayerStatisticInput>**| Array of player match statistics |


### Return type

**Array<V2PlayerStatisticOutput>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Player Statistics successfuly saved |  -  |
**404** | No entity with id found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2StatisticsPlayersSeasonGet**
> Array<V2PlayerSeasonStatisticOutputCollection> v2StatisticsPlayersSeasonGet()

Retrieve player statistics, grouped by player and season

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayerStatisticApi(configuration);

let body:.PlayerStatisticApiV2StatisticsPlayersSeasonGetRequest = {
  // string | CSV list of player id values (optional)
  playerIds: "player_ids_example",
  // string | CSV list of tournament season id values (optional)
  seasonIds: "season_ids_example",
  // number | Team unique identifier (optional)
  teamId: 1,
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2StatisticsPlayersSeasonGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerIds** | [**string**] | CSV list of player id values | (optional) defaults to undefined
 **seasonIds** | [**string**] | CSV list of tournament season id values | (optional) defaults to undefined
 **teamId** | [**number**] | Team unique identifier | (optional) defaults to undefined
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**Array<V2PlayerSeasonStatisticOutputCollection>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Player Statistics successfuly retrieved |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


