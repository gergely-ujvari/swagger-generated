# FootballApi.TournamentsApi

All URIs are relative to *https://false/*

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

<a name="tournamentsGet"></a>
# **tournamentsGet**
> [Tournament] tournamentsGet(opts)



Get a list of available Tournament resources

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'countryId': 56, // Number | Get Tournaments from a specific Country.id
  'clientOrder': "clientOrder_example", // String | Get Tournaments ordered for a specific client
  'expandClientSortorder': "expandClientSortorder_example" // String | Include extra information with Tournament response
};
apiInstance.tournamentsGet(opts, (error, data, response) => {
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
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **countryId** | **Number**| Get Tournaments from a specific Country.id | [optional] 
 **clientOrder** | **String**| Get Tournaments ordered for a specific client | [optional] 
 **expandClientSortorder** | **String**| Include extra information with Tournament response | [optional] 

### Return type

[**[Tournament]**](Tournament.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsIdGet"></a>
# **tournamentsIdGet**
> TournamentWithSeasons tournamentsIdGet(id, opts)



### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsIdGet(id, opts, (error, data, response) => {
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

[**TournamentWithSeasons**](TournamentWithSeasons.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsIdSeasonsGet"></a>
# **tournamentsIdSeasonsGet**
> [TournamentSeason] tournamentsIdSeasonsGet(id, opts)



Get a list of seasons for a given Tournament id

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsIdSeasonsGet(id, opts, (error, data, response) => {
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

[**[TournamentSeason]**](TournamentSeason.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsIdSeasonsLatestGet"></a>
# **tournamentsIdSeasonsLatestGet**
> TournamentSeasonWithStages tournamentsIdSeasonsLatestGet(id, opts)



Get information for the latest season for a given Tournament. This is an alias to whatever resource is first in /tournaments/{id}/seasons

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = 56; // Number | Unique identifier of the Tournament resource
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsIdSeasonsLatestGet(id, opts, (error, data, response) => {
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
 **id** | **Number**| Unique identifier of the Tournament resource | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**TournamentSeasonWithStages**](TournamentSeasonWithStages.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsIdCardlistGet"></a>
# **tournamentsSeasonsIdCardlistGet**
> [CardlistStandingData] tournamentsSeasonsIdCardlistGet(id, opts)



Get a standing by red,yellow cards for a specific TournamentSeason resource.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = 56; // Number | Unique identifier of the TournamentSeason resource
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsSeasonsIdCardlistGet(id, opts, (error, data, response) => {
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

[**[CardlistStandingData]**](CardlistStandingData.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsIdEventsGet"></a>
# **tournamentsSeasonsIdEventsGet**
> [Event] tournamentsSeasonsIdEventsGet(id, opts)



Get a list of Events, for a given TournamentSeason

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = 56; // Number | Unique identifier of the TournamentSeason resource
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'groupBy': "groupBy_example" // String | Whether to group events by date
};
apiInstance.tournamentsSeasonsIdEventsGet(id, opts, (error, data, response) => {
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
 **groupBy** | **String**| Whether to group events by date | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsIdGet"></a>
# **tournamentsSeasonsIdGet**
> TournamentSeasonWithStages tournamentsSeasonsIdGet(id, opts)



Get information for a given TournamentSeason resource id.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = 56; // Number | Unique identifier of the TournamentSeason resource
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsSeasonsIdGet(id, opts, (error, data, response) => {
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

[**TournamentSeasonWithStages**](TournamentSeasonWithStages.md)

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

let apiInstance = new FootballApi.TournamentsApi();
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

<a name="tournamentsSeasonsIdTopscorerGet"></a>
# **tournamentsSeasonsIdTopscorerGet**
> [TopscorerStandingData] tournamentsSeasonsIdTopscorerGet(id, opts)



Get a list of topscorers for a specific TournamentSeason resource.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = 56; // Number | Unique identifier of the TournamentSeason resource
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsSeasonsIdTopscorerGet(id, opts, (error, data, response) => {
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

[**[TopscorerStandingData]**](TopscorerStandingData.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsStagesActiveGet"></a>
# **tournamentsSeasonsStagesActiveGet**
> [TournamentSeasonStage] tournamentsSeasonsStagesActiveGet()



Get all currently active tournament season stages

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
apiInstance.tournamentsSeasonsStagesActiveGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[TournamentSeasonStage]**](TournamentSeasonStage.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsStagesGroupsIdGet"></a>
# **tournamentsSeasonsStagesGroupsIdGet**
> StageGroupWithStandingTournamentSeasonStage tournamentsSeasonsStagesGroupsIdGet(id, opts)



Get information for a StageGroup Resource

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = 56; // Number | Unique identifier of the StageGroup resource
let opts = { 
  'expand': "expand_example", // String | Specify additional information to include with the response
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsSeasonsStagesGroupsIdGet(id, opts, (error, data, response) => {
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
 **id** | **Number**| Unique identifier of the StageGroup resource | 
 **expand** | **String**| Specify additional information to include with the response | [optional] 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**StageGroupWithStandingTournamentSeasonStage**](StageGroupWithStandingTournamentSeasonStage.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsStagesGroupsIdStandingGet"></a>
# **tournamentsSeasonsStagesGroupsIdStandingGet**
> [LeagueStandingData] tournamentsSeasonsStagesGroupsIdStandingGet(id, opts)



Get Standing for a StageGroup Resource

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = 56; // Number | Unique identifier of the StageGroup resource
let opts = { 
  'expand': "expand_example", // String | Specify additional information to include with the response
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsSeasonsStagesGroupsIdStandingGet(id, opts, (error, data, response) => {
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
 **id** | **Number**| Unique identifier of the StageGroup resource | 
 **expand** | **String**| Specify additional information to include with the response | [optional] 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**[LeagueStandingData]**](LeagueStandingData.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsStagesIdEventsGet"></a>
# **tournamentsSeasonsStagesIdEventsGet**
> [EventsByDate] tournamentsSeasonsStagesIdEventsGet(id, opts)



Get a list of events which are fixtures in a given TournamentSeasonStage resource

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = 56; // Number | Unique identifier of the TournamentSeasonStage resource
let opts = { 
  'round': "round_example", // String | Filter the event list by a specific round
  'sortDirection': "asc", // String | Sort results by date in ascending or descending order
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsSeasonsStagesIdEventsGet(id, opts, (error, data, response) => {
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
 **round** | **String**| Filter the event list by a specific round | [optional] 
 **sortDirection** | **String**| Sort results by date in ascending or descending order | [optional] [default to asc]
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**[EventsByDate]**](EventsByDate.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsStagesIdGet"></a>
# **tournamentsSeasonsStagesIdGet**
> TournamentSeasonStageWithStandingGroups tournamentsSeasonsStagesIdGet(id, opts)



Get information for a TournamentSeasonStage Resource

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = 56; // Number | Unique identifier of the TournamentSeasonStage resource
let opts = { 
  'expand': "expand_example", // String | Specify additional information to include with the response
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsSeasonsStagesIdGet(id, opts, (error, data, response) => {
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
 **expand** | **String**| Specify additional information to include with the response | [optional] 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**TournamentSeasonStageWithStandingGroups**](TournamentSeasonStageWithStandingGroups.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsStagesIdRoundsGet"></a>
# **tournamentsSeasonsStagesIdRoundsGet**
> [Round] tournamentsSeasonsStagesIdRoundsGet(id, opts)



Get a list of rounds for a specific TournamentSeasonStage

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = 56; // Number | Unique identifier of the TournamentSeasonStage resource
let opts = { 
  'expand': "expand_example" // String | Specify what additional information to include with the response
};
apiInstance.tournamentsSeasonsStagesIdRoundsGet(id, opts, (error, data, response) => {
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
 **expand** | **String**| Specify what additional information to include with the response | [optional] 

### Return type

[**[Round]**](Round.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsStagesIdStandingGet"></a>
# **tournamentsSeasonsStagesIdStandingGet**
> [LeagueStandingData] tournamentsSeasonsStagesIdStandingGet(id, opts)



Get Standing for a TournamentSeasonStage Resource

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentsApi();
let id = 56; // Number | Unique identifier of the TournamentSeasonStage resource
let opts = { 
  'expand': "expand_example", // String | Specify additional information to include with the response
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsSeasonsStagesIdStandingGet(id, opts, (error, data, response) => {
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
 **expand** | **String**| Specify additional information to include with the response | [optional] 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**[LeagueStandingData]**](LeagueStandingData.md)

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

let apiInstance = new FootballApi.TournamentsApi();
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

