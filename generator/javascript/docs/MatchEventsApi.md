# FootballApi.MatchEventsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2MatchesIdEventsGet**](MatchEventsApi.md#v2MatchesIdEventsGet) | **GET** /v2/matches/{id}/events | 
[**v2MatchesIdEventsPut**](MatchEventsApi.md#v2MatchesIdEventsPut) | **PUT** /v2/matches/{id}/events | 

<a name="v2MatchesIdEventsGet"></a>
# **v2MatchesIdEventsGet**
> V2MatchEventProfile v2MatchesIdEventsGet(id, opts)



Get match events by match id

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.MatchEventsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2MatchesIdEventsGet(id, opts, (error, data, response) => {
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

[**V2MatchEventProfile**](V2MatchEventProfile.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2MatchesIdEventsPut"></a>
# **v2MatchesIdEventsPut**
> V2MatchEventProfile v2MatchesIdEventsPut(body, id)



Replaces all match events with the given input

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.MatchEventsApi();
let body = new FootballApi.V2MatchEventInputWrapper(); // V2MatchEventInputWrapper | Match event information to save
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2MatchesIdEventsPut(body, id, (error, data, response) => {
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
 **body** | [**V2MatchEventInputWrapper**](V2MatchEventInputWrapper.md)| Match event information to save | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

[**V2MatchEventProfile**](V2MatchEventProfile.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

