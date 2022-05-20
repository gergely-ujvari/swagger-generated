# FootballApi.CountriesApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesGet**](CountriesApi.md#countriesGet) | **GET** /countries | 

<a name="countriesGet"></a>
# **countriesGet**
> [Country] countriesGet(opts)



Get a list of available Country resources

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.CountriesApi();
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.countriesGet(opts, (error, data, response) => {
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
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**[Country]**](Country.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

