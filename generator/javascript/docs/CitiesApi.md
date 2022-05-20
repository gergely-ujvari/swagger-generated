# FootballApi.CitiesApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2CitiesIdPut**](CitiesApi.md#v2CitiesIdPut) | **PUT** /v2/cities/{id} | 
[**v2CitiesPost**](CitiesApi.md#v2CitiesPost) | **POST** /v2/cities | 

<a name="v2CitiesIdPut"></a>
# **v2CitiesIdPut**
> CityDto v2CitiesIdPut(id, opts)



Update city information

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.CitiesApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'body': new FootballApi.CityEditDto() // CityEditDto | City information to save in persistance
};
apiInstance.v2CitiesIdPut(id, opts, (error, data, response) => {
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
 **body** | [**CityEditDto**](CityEditDto.md)| City information to save in persistance | [optional] 

### Return type

[**CityDto**](CityDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2CitiesPost"></a>
# **v2CitiesPost**
> CityDto v2CitiesPost(opts)



Store a newly created city in storage

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.CitiesApi();
let opts = { 
  'body': new FootballApi.CityEditDto() // CityEditDto | 
};
apiInstance.v2CitiesPost(opts, (error, data, response) => {
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
 **body** | [**CityEditDto**](CityEditDto.md)|  | [optional] 

### Return type

[**CityDto**](CityDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

