# .CountriesApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countriesGet**](CountriesApi.md#countriesGet) | **GET** /countries | 


# **countriesGet**
> Array<Country> countriesGet()

Get a list of available Country resources

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CountriesApi(configuration);

let body:.CountriesApiCountriesGetRequest = {
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.countriesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<Country>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of available Country objects in the system |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


