# FootballApi.CoachesApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2CoachesGet**](CoachesApi.md#v2CoachesGet) | **GET** /v2/coaches | 
[**v2CoachesIdGet**](CoachesApi.md#v2CoachesIdGet) | **GET** /v2/coaches/{id} | 
[**v2CoachesIdPut**](CoachesApi.md#v2CoachesIdPut) | **PUT** /v2/coaches/{id} | 
[**v2CoachesPost**](CoachesApi.md#v2CoachesPost) | **POST** /v2/coaches | 

<a name="v2CoachesGet"></a>
# **v2CoachesGet**
> CoachPageDto v2CoachesGet(offset, limit, opts)



List coaches with offset and limit parameters

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.CoachesApi();
let offset = 56; // Number | The number of items to skip before starting to collect the result set
let limit = 56; // Number | Limit the number of results returned
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2CoachesGet(offset, limit, opts, (error, data, response) => {
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
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**CoachPageDto**](CoachPageDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2CoachesIdGet"></a>
# **v2CoachesIdGet**
> [CoachDto] v2CoachesIdGet(id, opts)



Find coach by id

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.CoachesApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2CoachesIdGet(id, opts, (error, data, response) => {
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

[**[CoachDto]**](CoachDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2CoachesIdPut"></a>
# **v2CoachesIdPut**
> CoachDto v2CoachesIdPut(id, opts)



Update coach information

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.CoachesApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'body': new FootballApi.CoachEditDto() // CoachEditDto | Coach information to save in persistance
};
apiInstance.v2CoachesIdPut(id, opts, (error, data, response) => {
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
 **body** | [**CoachEditDto**](CoachEditDto.md)| Coach information to save in persistance | [optional] 

### Return type

[**CoachDto**](CoachDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2CoachesPost"></a>
# **v2CoachesPost**
> CoachDto v2CoachesPost(opts)



Store a newly created coach in storage

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.CoachesApi();
let opts = { 
  'body': new FootballApi.CoachEditDto() // CoachEditDto | 
};
apiInstance.v2CoachesPost(opts, (error, data, response) => {
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
 **body** | [**CoachEditDto**](CoachEditDto.md)|  | [optional] 

### Return type

[**CoachDto**](CoachDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

