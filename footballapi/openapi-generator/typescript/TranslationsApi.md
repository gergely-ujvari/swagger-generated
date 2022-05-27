# .TranslationsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2TranslationsEntitiesGet**](TranslationsApi.md#v2TranslationsEntitiesGet) | **GET** /v2/translations/entities | 
[**v2TranslationsPost**](TranslationsApi.md#v2TranslationsPost) | **POST** /v2/translations | 
[**v2TranslationsSearchPost**](TranslationsApi.md#v2TranslationsSearchPost) | **POST** /v2/translations/search | 


# **v2TranslationsEntitiesGet**
> Array<TranslationEntityDto> v2TranslationsEntitiesGet()

Get all possible translation entities.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslationsApi(configuration);

let body:any = {};

apiInstance.v2TranslationsEntitiesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<TranslationEntityDto>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of translation entities objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TranslationsPost**
> TranslationDto v2TranslationsPost()

Bulk Upsert translations by primary key

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslationsApi(configuration);

let body:.TranslationsApiV2TranslationsPostRequest = {
  // Array<TranslationDto> | Array of translations (optional)
  translations: [
    {
      key: {
        entity: "LINEUP_PLAYER_TYPE",
        entityId: "entityId_example",
        language: "language_example",
      },
      content: {
        name: "name_example",
        threeLetterCode: "threeLetterCode_example",
        shortName: "shortName_example",
      },
    },
  ],
};

apiInstance.v2TranslationsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translations** | **Array<TranslationDto>**| Array of translations |


### Return type

**TranslationDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Translations successfuly saved, returns translations information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TranslationsSearchPost**
> Array<TranslationDto> v2TranslationsSearchPost()

Bulk find in translations table and return matching entries by the unique translation key.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TranslationsApi(configuration);

let body:.TranslationsApiV2TranslationsSearchPostRequest = {
  // Array<TranslationKeyDto> | Array of translationKeys (optional)
  translationKeys: [
    {
      entity: "LINEUP_PLAYER_TYPE",
      entityId: "entityId_example",
      language: "language_example",
    },
  ],
};

apiInstance.v2TranslationsSearchPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **translationKeys** | **Array<TranslationKeyDto>**| Array of translationKeys |


### Return type

**Array<TranslationDto>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of translation objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


