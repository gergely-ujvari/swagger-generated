# FootballApi.ProviderMappingsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2MappingsSearchPost**](ProviderMappingsApi.md#v2MappingsSearchPost) | **POST** /v2/mappings/search | 

<a name="v2MappingsSearchPost"></a>
# **v2MappingsSearchPost**
> [V2MappingDto] v2MappingsSearchPost(opts)



Bulk find provider to internal ID mappings by their provider ID and entity type.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.ProviderMappingsApi();
let opts = { 
  'body': new FootballApi.MappingsSearchBody() // MappingsSearchBody | Data entity provider name and array of mapping requests
};
apiInstance.v2MappingsSearchPost(opts, (error, data, response) => {
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
 **body** | [**MappingsSearchBody**](MappingsSearchBody.md)| Data entity provider name and array of mapping requests | [optional] 

### Return type

[**[V2MappingDto]**](V2MappingDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

