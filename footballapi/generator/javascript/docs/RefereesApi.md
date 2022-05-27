# FootballApi.RefereesApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2RefereesGet**](RefereesApi.md#v2RefereesGet) | **GET** /v2/referees | 
[**v2RefereesIdGet**](RefereesApi.md#v2RefereesIdGet) | **GET** /v2/referees/{id} | 
[**v2RefereesIdPut**](RefereesApi.md#v2RefereesIdPut) | **PUT** /v2/referees/{id} | 
[**v2RefereesPost**](RefereesApi.md#v2RefereesPost) | **POST** /v2/referees | 

<a name="v2RefereesGet"></a>
# **v2RefereesGet**
> RefereePageDto v2RefereesGet(offset, limit, opts)



List referees with offset and limit parameters

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.RefereesApi();
let offset = 56; // Number | The number of items to skip before starting to collect the result set
let limit = 56; // Number | Limit the number of results returned
let opts = { 
  'seasonIds': "seasonIds_example", // String | Filter referees which have refereed matches in the specified CSV season_ids
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2RefereesGet(offset, limit, opts, (error, data, response) => {
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
 **offset** | **Number**| The number of items to skip before starting to collect the result set | 
 **limit** | **Number**| Limit the number of results returned | 
 **seasonIds** | **String**| Filter referees which have refereed matches in the specified CSV season_ids | [optional] 
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**RefereePageDto**](RefereePageDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2RefereesIdGet"></a>
# **v2RefereesIdGet**
> RefereeDto v2RefereesIdGet(id, opts)



Get referee by id

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.RefereesApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2RefereesIdGet(id, opts, (error, data, response) => {
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

[**RefereeDto**](RefereeDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2RefereesIdPut"></a>
# **v2RefereesIdPut**
> RefereeDto v2RefereesIdPut(id, opts)



Update referee information

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.RefereesApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'body': new FootballApi.RefereeEditDto() // RefereeEditDto | Referee information to save in persistance
};
apiInstance.v2RefereesIdPut(id, opts, (error, data, response) => {
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
 **body** | [**RefereeEditDto**](RefereeEditDto.md)| Referee information to save in persistance | [optional] 

### Return type

[**RefereeDto**](RefereeDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2RefereesPost"></a>
# **v2RefereesPost**
> RefereeDto v2RefereesPost(opts)



Store a newly created referee in storage

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.RefereesApi();
let opts = { 
  'body': new FootballApi.RefereeEditDto() // RefereeEditDto | 
};
apiInstance.v2RefereesPost(opts, (error, data, response) => {
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
 **body** | [**RefereeEditDto**](RefereeEditDto.md)|  | [optional] 

### Return type

[**RefereeDto**](RefereeDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

