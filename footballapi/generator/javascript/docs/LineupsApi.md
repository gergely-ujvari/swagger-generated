# FootballApi.LineupsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lineupsGet**](LineupsApi.md#lineupsGet) | **GET** /lineups | 
[**v2MatchesIdLineupsGet**](LineupsApi.md#v2MatchesIdLineupsGet) | **GET** /v2/matches/{id}/lineups | 
[**v2MatchesIdLineupsPut**](LineupsApi.md#v2MatchesIdLineupsPut) | **PUT** /v2/matches/{id}/lineups | 

<a name="lineupsGet"></a>
# **lineupsGet**
> [Lineup] lineupsGet(opts)



Get lineup information. Includes players, formation and coach

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.LineupsApi();
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'lastUpdate': new Date("2013-10-20T19:20:30+01:00") // Date | Filter lineups which have updates only after the specified time
};
apiInstance.lineupsGet(opts, (error, data, response) => {
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
 **lastUpdate** | **Date**| Filter lineups which have updates only after the specified time | [optional] 

### Return type

[**[Lineup]**](Lineup.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2MatchesIdLineupsGet"></a>
# **v2MatchesIdLineupsGet**
> V2Lineup v2MatchesIdLineupsGet(id, opts)



Get lineups by match id

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.LineupsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2MatchesIdLineupsGet(id, opts, (error, data, response) => {
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

[**V2Lineup**](V2Lineup.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2MatchesIdLineupsPut"></a>
# **v2MatchesIdLineupsPut**
> V2Lineup v2MatchesIdLineupsPut(body, id)



Update Lineup information

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.LineupsApi();
let body = new FootballApi.V2LineupInput(); // V2LineupInput | Lineup information to save in persistance
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2MatchesIdLineupsPut(body, id, (error, data, response) => {
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
 **body** | [**V2LineupInput**](V2LineupInput.md)| Lineup information to save in persistance | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

[**V2Lineup**](V2Lineup.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

