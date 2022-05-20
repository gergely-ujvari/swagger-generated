# FootballApi.RoundsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2RoundsGet**](RoundsApi.md#v2RoundsGet) | **GET** /v2/rounds | 
[**v2StagesIdRoundsGet**](RoundsApi.md#v2StagesIdRoundsGet) | **GET** /v2/stages/{id}/rounds | 

<a name="v2RoundsGet"></a>
# **v2RoundsGet**
> V2RoundTypes v2RoundsGet(seasonId, opts)



Get a list of rounds per season

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.RoundsApi();
let seasonId = 56; // Number | Filter round types per a season ID
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2RoundsGet(seasonId, opts, (error, data, response) => {
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
 **seasonId** | **Number**| Filter round types per a season ID | 
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**V2RoundTypes**](V2RoundTypes.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2StagesIdRoundsGet"></a>
# **v2StagesIdRoundsGet**
> V2RoundTypes v2StagesIdRoundsGet(id, opts)



Get a list of rounds per stage

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.RoundsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2StagesIdRoundsGet(id, opts, (error, data, response) => {
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

[**V2RoundTypes**](V2RoundTypes.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

