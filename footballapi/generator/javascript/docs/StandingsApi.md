# FootballApi.StandingsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2StandingsLeagueEntityIdPut**](StandingsApi.md#v2StandingsLeagueEntityIdPut) | **PUT** /v2/standings/league/{entity}/{id} | 
[**v2StandingsLeagueEntityIdRulesPut**](StandingsApi.md#v2StandingsLeagueEntityIdRulesPut) | **PUT** /v2/standings/league/{entity}/{id}/rules | 
[**v2StandingsTopscorerEntityIdPut**](StandingsApi.md#v2StandingsTopscorerEntityIdPut) | **PUT** /v2/standings/topscorer/{entity}/{id} | 

<a name="v2StandingsLeagueEntityIdPut"></a>
# **v2StandingsLeagueEntityIdPut**
> v2StandingsLeagueEntityIdPut(body, entity, id)



Update a league standing table

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.StandingsApi();
let body = new FootballApi.V2LeagueStandingInput(); // V2LeagueStandingInput | List of all entries for the standing
let entity = "entity_example"; // String | type of entity to attach standing to
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2StandingsLeagueEntityIdPut(body, entity, id, (error, data, response) => {
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
 **body** | [**V2LeagueStandingInput**](V2LeagueStandingInput.md)| List of all entries for the standing | 
 **entity** | **String**| type of entity to attach standing to | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="v2StandingsLeagueEntityIdRulesPut"></a>
# **v2StandingsLeagueEntityIdRulesPut**
> v2StandingsLeagueEntityIdRulesPut(body, entity, id)



Attach standing rules to a league standing

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.StandingsApi();
let body = new FootballApi.V2StandingEntryRuleWrapper(); // V2StandingEntryRuleWrapper | list of rules for every rank
let entity = "entity_example"; // String | type of entity to attach standing to
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2StandingsLeagueEntityIdRulesPut(body, entity, id, (error, data, response) => {
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
 **body** | [**V2StandingEntryRuleWrapper**](V2StandingEntryRuleWrapper.md)| list of rules for every rank | 
 **entity** | **String**| type of entity to attach standing to | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="v2StandingsTopscorerEntityIdPut"></a>
# **v2StandingsTopscorerEntityIdPut**
> v2StandingsTopscorerEntityIdPut(body, entity, id)



Update a topscorer standing table

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.StandingsApi();
let body = new FootballApi.V2TopScorerStandingInput(); // V2TopScorerStandingInput | List of all entries for the standing
let entity = "entity_example"; // String | type of entity to attach standing to
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2StandingsTopscorerEntityIdPut(body, entity, id, (error, data, response) => {
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
 **body** | [**V2TopScorerStandingInput**](V2TopScorerStandingInput.md)| List of all entries for the standing | 
 **entity** | **String**| type of entity to attach standing to | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

