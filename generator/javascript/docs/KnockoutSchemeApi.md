# FootballApi.KnockoutSchemeApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2KnockoutSchemesStageIdGet**](KnockoutSchemeApi.md#v2KnockoutSchemesStageIdGet) | **GET** /v2/knockout-schemes/{stage_id} | 

<a name="v2KnockoutSchemesStageIdGet"></a>
# **v2KnockoutSchemesStageIdGet**
> [V2KnockoutScheme] v2KnockoutSchemesStageIdGet(stageId, opts)



### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.KnockoutSchemeApi();
let stageId = "stageId_example"; // String | Get knockout schemes for given stage id
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2KnockoutSchemesStageIdGet(stageId, opts, (error, data, response) => {
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
 **stageId** | **String**| Get knockout schemes for given stage id | 
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**[V2KnockoutScheme]**](V2KnockoutScheme.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

