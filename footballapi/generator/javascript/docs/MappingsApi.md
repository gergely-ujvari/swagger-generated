# FootballApi.MappingsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mappingsSportalGet**](MappingsApi.md#mappingsSportalGet) | **GET** /mappings/sportal | 
[**mappingsSportalReverseGet**](MappingsApi.md#mappingsSportalReverseGet) | **GET** /mappings/sportal/reverse | 

<a name="mappingsSportalGet"></a>
# **mappingsSportalGet**
> Object mappingsSportalGet(opts)



Get FootballApi ID to Sportal ID maps for various types of objects

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.MappingsApi();
let opts = { 
  '_object': "_object_example", // String | Filter ID maps by a specific object type
  'id': 56 // Number | Return single Sportal ID for the specified FootballAPI 'id'
};
apiInstance.mappingsSportalGet(opts, (error, data, response) => {
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
 **_object** | **String**| Filter ID maps by a specific object type | [optional] 
 **id** | **Number**| Return single Sportal ID for the specified FootballAPI &#x27;id&#x27; | [optional] 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="mappingsSportalReverseGet"></a>
# **mappingsSportalReverseGet**
> Object mappingsSportalReverseGet(opts)



Get Sportal to Football API ID maps for various types of objects

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.MappingsApi();
let opts = { 
  '_object': "_object_example", // String | Filter ID maps by a specific object type
  'id': 56 // Number | Return single FotballApi ID for the specified Sportal 'id'
};
apiInstance.mappingsSportalReverseGet(opts, (error, data, response) => {
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
 **_object** | **String**| Filter ID maps by a specific object type | [optional] 
 **id** | **Number**| Return single FotballApi ID for the specified Sportal &#x27;id&#x27; | [optional] 

### Return type

**Object**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

