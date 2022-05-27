# FootballApi.TranslationsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2TranslationsEntitiesGet**](TranslationsApi.md#v2TranslationsEntitiesGet) | **GET** /v2/translations/entities | 
[**v2TranslationsPost**](TranslationsApi.md#v2TranslationsPost) | **POST** /v2/translations | 
[**v2TranslationsSearchPost**](TranslationsApi.md#v2TranslationsSearchPost) | **POST** /v2/translations/search | 

<a name="v2TranslationsEntitiesGet"></a>
# **v2TranslationsEntitiesGet**
> [TranslationEntityDto] v2TranslationsEntitiesGet()



Get all possible translation entities.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TranslationsApi();
apiInstance.v2TranslationsEntitiesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[TranslationEntityDto]**](TranslationEntityDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2TranslationsPost"></a>
# **v2TranslationsPost**
> TranslationDto v2TranslationsPost(opts)



Bulk Upsert translations by primary key

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TranslationsApi();
let opts = { 
  'body': [new FootballApi.TranslationDto()] // [TranslationDto] | Array of translations
};
apiInstance.v2TranslationsPost(opts, (error, data, response) => {
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
 **body** | [**[TranslationDto]**](TranslationDto.md)| Array of translations | [optional] 

### Return type

[**TranslationDto**](TranslationDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2TranslationsSearchPost"></a>
# **v2TranslationsSearchPost**
> [TranslationDto] v2TranslationsSearchPost(opts)



Bulk find in translations table and return matching entries by the unique translation key.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TranslationsApi();
let opts = { 
  'body': [new FootballApi.TranslationKeyDto()] // [TranslationKeyDto] | Array of translationKeys
};
apiInstance.v2TranslationsSearchPost(opts, (error, data, response) => {
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
 **body** | [**[TranslationKeyDto]**](TranslationKeyDto.md)| Array of translationKeys | [optional] 

### Return type

[**[TranslationDto]**](TranslationDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

