# .KnockoutSchemeApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2KnockoutSchemesStageIdGet**](KnockoutSchemeApi.md#v2KnockoutSchemesStageIdGet) | **GET** /v2/knockout-schemes/{stage_id} | 


# **v2KnockoutSchemesStageIdGet**
> Array<V2KnockoutScheme> v2KnockoutSchemesStageIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .KnockoutSchemeApi(configuration);

let body:.KnockoutSchemeApiV2KnockoutSchemesStageIdGetRequest = {
  // string | Get knockout schemes for given stage id
  stageId: "stage_id_example",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2KnockoutSchemesStageIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stageId** | [**string**] | Get knockout schemes for given stage id | defaults to undefined
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**Array<V2KnockoutScheme>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of knockout schemes if any are found for the ID. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


