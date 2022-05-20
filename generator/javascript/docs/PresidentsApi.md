# FootballApi.PresidentsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2PresidentsIdPut**](PresidentsApi.md#v2PresidentsIdPut) | **PUT** /v2/presidents/{id} | 
[**v2PresidentsPost**](PresidentsApi.md#v2PresidentsPost) | **POST** /v2/presidents | 

<a name="v2PresidentsIdPut"></a>
# **v2PresidentsIdPut**
> V2President v2PresidentsIdPut(id, opts)



Update president information

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PresidentsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'body': new FootballApi.V2PresidentUpdate() // V2PresidentUpdate | President information to save in persistance
};
apiInstance.v2PresidentsIdPut(id, opts, (error, data, response) => {
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
 **body** | [**V2PresidentUpdate**](V2PresidentUpdate.md)| President information to save in persistance | [optional] 

### Return type

[**V2President**](V2President.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2PresidentsPost"></a>
# **v2PresidentsPost**
> V2President v2PresidentsPost(opts)



Store a newly created president in storage

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PresidentsApi();
let opts = { 
  'body': new FootballApi.V2PresidentInput() // V2PresidentInput | 
};
apiInstance.v2PresidentsPost(opts, (error, data, response) => {
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
 **body** | [**V2PresidentInput**](V2PresidentInput.md)|  | [optional] 

### Return type

[**V2President**](V2President.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

