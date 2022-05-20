# FootballApi.BlacklistApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2BlacklistIdDelete**](BlacklistApi.md#v2BlacklistIdDelete) | **DELETE** /v2/blacklist/{id} | Remove the specified resource from storage.
[**v2BlacklistSearchPost**](BlacklistApi.md#v2BlacklistSearchPost) | **POST** /v2/blacklist/search | 

<a name="v2BlacklistIdDelete"></a>
# **v2BlacklistIdDelete**
> v2BlacklistIdDelete(id)

Remove the specified resource from storage.

Remove blacklist record by id.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.BlacklistApi();
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2BlacklistIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2BlacklistSearchPost"></a>
# **v2BlacklistSearchPost**
> [BlacklistDto] v2BlacklistSearchPost(opts)



Bulk find in blacklist table and return matching entries by the unique blacklist key.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.BlacklistApi();
let opts = { 
  'body': [new FootballApi.BlacklistKeyDto()] // [BlacklistKeyDto] | Array of blacklistsKeys
};
apiInstance.v2BlacklistSearchPost(opts, (error, data, response) => {
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
 **body** | [**[BlacklistKeyDto]**](BlacklistKeyDto.md)| Array of blacklistsKeys | [optional] 

### Return type

[**[BlacklistDto]**](BlacklistDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

