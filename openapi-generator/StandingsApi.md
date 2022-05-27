# .StandingsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2StandingsLeagueEntityIdPut**](StandingsApi.md#v2StandingsLeagueEntityIdPut) | **PUT** /v2/standings/league/{entity}/{id} | 
[**v2StandingsLeagueEntityIdRulesPut**](StandingsApi.md#v2StandingsLeagueEntityIdRulesPut) | **PUT** /v2/standings/league/{entity}/{id}/rules | 
[**v2StandingsTopscorerEntityIdPut**](StandingsApi.md#v2StandingsTopscorerEntityIdPut) | **PUT** /v2/standings/topscorer/{entity}/{id} | 


# **v2StandingsLeagueEntityIdPut**
> void v2StandingsLeagueEntityIdPut(standingEntries)

Update a league standing table

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StandingsApi(configuration);

let body:.StandingsApiV2StandingsLeagueEntityIdPutRequest = {
  // 'season' | 'stage' | 'group' | type of entity to attach standing to
  entity: "season",
  // string | Unique identifier of the resource.
  id: "1",
  // V2LeagueStandingInput | List of all entries for the standing
  standingEntries: {
    entries: [
      {
        rank: 1,
        teamId: "teamId_example",
        played: 1,
        wins: 1,
        draws: 1,
        losses: 1,
        points: 1,
        goalsFor: 1,
        goalsAgainst: 1,
      },
    ],
  },
};

apiInstance.v2StandingsLeagueEntityIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standingEntries** | **V2LeagueStandingInput**| List of all entries for the standing |
 **entity** | [**&#39;season&#39; | &#39;stage&#39; | &#39;group&#39;**]**Array<&#39;season&#39; &#124; &#39;stage&#39; &#124; &#39;group&#39;>** | type of entity to attach standing to | defaults to undefined
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Standing saved |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2StandingsLeagueEntityIdRulesPut**
> void v2StandingsLeagueEntityIdRulesPut(standingRules)

Attach standing rules to a league standing

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StandingsApi(configuration);

let body:.StandingsApiV2StandingsLeagueEntityIdRulesPutRequest = {
  // 'season' | 'stage' | 'group' | type of entity to attach standing to
  entity: "season",
  // string | Unique identifier of the resource.
  id: "1",
  // V2StandingEntryRuleWrapper | list of rules for every rank
  standingRules: {
    rules: [
      {
        standingRuleId: "standingRuleId_example",
        rank: 1,
      },
    ],
  },
};

apiInstance.v2StandingsLeagueEntityIdRulesPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standingRules** | **V2StandingEntryRuleWrapper**| list of rules for every rank |
 **entity** | [**&#39;season&#39; | &#39;stage&#39; | &#39;group&#39;**]**Array<&#39;season&#39; &#124; &#39;stage&#39; &#124; &#39;group&#39;>** | type of entity to attach standing to | defaults to undefined
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Standing rules saved |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2StandingsTopscorerEntityIdPut**
> void v2StandingsTopscorerEntityIdPut(standingEntries)

Update a topscorer standing table

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StandingsApi(configuration);

let body:.StandingsApiV2StandingsTopscorerEntityIdPutRequest = {
  // 'season' | 'stage' | 'group' | type of entity to attach standing to
  entity: "season",
  // string | Unique identifier of the resource.
  id: "1",
  // V2TopScorerStandingInput | List of all entries for the standing
  standingEntries: {
    entries: [
      {
        teamId: "teamId_example",
        playerId: "playerId_example",
        rank: 1,
        goals: 1,
        played: 1,
        assists: 1,
        scoredFirst: 1,
        minutes: 1,
        penalties: 1,
        yellowCards: 1,
        redCards: 1,
      },
    ],
  },
};

apiInstance.v2StandingsTopscorerEntityIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **standingEntries** | **V2TopScorerStandingInput**| List of all entries for the standing |
 **entity** | [**&#39;season&#39; | &#39;stage&#39; | &#39;group&#39;**]**Array<&#39;season&#39; &#124; &#39;stage&#39; &#124; &#39;group&#39;>** | type of entity to attach standing to | defaults to undefined
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Standing saved |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


