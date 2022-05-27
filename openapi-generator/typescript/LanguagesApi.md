# .LanguagesApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2LanguagesGet**](LanguagesApi.md#v2LanguagesGet) | **GET** /v2/languages | 


# **v2LanguagesGet**
> Array<LanguageDto> v2LanguagesGet()

Get all possible languages.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LanguagesApi(configuration);

let body:any = {};

apiInstance.v2LanguagesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<LanguageDto>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of language objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


