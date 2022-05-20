# FootballApi.PlayerStatisticApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statisticsPlayersGet**](PlayerStatisticApi.md#statisticsPlayersGet) | **GET** /statistics/players | 
[**v2StatisticsPlayersMatchPut**](PlayerStatisticApi.md#v2StatisticsPlayersMatchPut) | **PUT** /v2/statistics/players/match | 
[**v2StatisticsPlayersSeasonGet**](PlayerStatisticApi.md#v2StatisticsPlayersSeasonGet) | **GET** /v2/statistics/players/season | 

<a name="statisticsPlayersGet"></a>
# **statisticsPlayersGet**
> [OutputDto] statisticsPlayersGet(languageCode, opts)



### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayerStatisticApi();
let languageCode = "languageCode_example"; // String | Return translations depending on language code
let opts = { 
  'playerIds': "playerIds_example", // String | List for player IDs separated by commas.
  'seasonIds': "seasonIds_example", // String | List for season IDs separated by commas.
  'teamId': 56 // Number | Return only statistics for players which are currently in the specified team's squad
};
apiInstance.statisticsPlayersGet(languageCode, opts, (error, data, response) => {
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
 **languageCode** | **String**| Return translations depending on language code | 
 **playerIds** | **String**| List for player IDs separated by commas. | [optional] 
 **seasonIds** | **String**| List for season IDs separated by commas. | [optional] 
 **teamId** | **Number**| Return only statistics for players which are currently in the specified team&#x27;s squad | [optional] 

### Return type

[**[OutputDto]**](OutputDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2StatisticsPlayersMatchPut"></a>
# **v2StatisticsPlayersMatchPut**
> [V2PlayerStatisticOutput] v2StatisticsPlayersMatchPut(opts)



Bulk Upsert player statistics

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayerStatisticApi();
let opts = { 
  'body': [new FootballApi.V2PlayerStatisticInput()] // [V2PlayerStatisticInput] | Array of player match statistics
};
apiInstance.v2StatisticsPlayersMatchPut(opts, (error, data, response) => {
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
 **body** | [**[V2PlayerStatisticInput]**](V2PlayerStatisticInput.md)| Array of player match statistics | [optional] 

### Return type

[**[V2PlayerStatisticOutput]**](V2PlayerStatisticOutput.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2StatisticsPlayersSeasonGet"></a>
# **v2StatisticsPlayersSeasonGet**
> [V2PlayerSeasonStatisticOutputCollection] v2StatisticsPlayersSeasonGet(opts)



Retrieve player statistics, grouped by player and season

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayerStatisticApi();
let opts = { 
  'playerIds': "playerIds_example", // String | CSV list of player id values
  'seasonIds': "seasonIds_example", // String | CSV list of tournament season id values
  'teamId': 56, // Number | Team unique identifier
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2StatisticsPlayersSeasonGet(opts, (error, data, response) => {
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
 **playerIds** | **String**| CSV list of player id values | [optional] 
 **seasonIds** | **String**| CSV list of tournament season id values | [optional] 
 **teamId** | **Number**| Team unique identifier | [optional] 
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**[V2PlayerSeasonStatisticOutputCollection]**](V2PlayerSeasonStatisticOutputCollection.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

