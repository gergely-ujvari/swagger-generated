# .CoachesApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2CoachesGet**](CoachesApi.md#v2CoachesGet) | **GET** /v2/coaches | 
[**v2CoachesIdGet**](CoachesApi.md#v2CoachesIdGet) | **GET** /v2/coaches/{id} | 
[**v2CoachesIdPut**](CoachesApi.md#v2CoachesIdPut) | **PUT** /v2/coaches/{id} | 
[**v2CoachesPost**](CoachesApi.md#v2CoachesPost) | **POST** /v2/coaches | 


# **v2CoachesGet**
> CoachPageDto v2CoachesGet()

List coaches with offset and limit parameters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CoachesApi(configuration);

let body:.CoachesApiV2CoachesGetRequest = {
  // number | The number of items to skip before starting to collect the result set
  offset: 1,
  // number | Limit the number of results returned
  limit: 1,
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2CoachesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | [**number**] | The number of items to skip before starting to collect the result set | defaults to undefined
 **limit** | [**number**] | Limit the number of results returned | defaults to undefined
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**CoachPageDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of coaches |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2CoachesIdGet**
> Array<CoachDto> v2CoachesIdGet()

Find coach by id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CoachesApi(configuration);

let body:.CoachesApiV2CoachesIdGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2CoachesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**Array<CoachDto>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Coach data |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2CoachesIdPut**
> CoachDto v2CoachesIdPut()

Update coach information

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CoachesApi(configuration);

let body:.CoachesApiV2CoachesIdPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // CoachEditDto | Coach information to save in persistance (optional)
  coach: {
    name: "name_example",
    countryId: "countryId_example",
    birthdate: new Date('1970-01-01').toISOString().split('T')[0];,
  },
};

apiInstance.v2CoachesIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coach** | **CoachEditDto**| Coach information to save in persistance |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**CoachDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated coach object |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2CoachesPost**
> CoachDto v2CoachesPost()

Store a newly created coach in storage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CoachesApi(configuration);

let body:.CoachesApiV2CoachesPostRequest = {
  // CoachEditDto (optional)
  coach: {
    name: "name_example",
    countryId: "countryId_example",
    birthdate: new Date('1970-01-01').toISOString().split('T')[0];,
  },
};

apiInstance.v2CoachesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **coach** | **CoachEditDto**|  |


### Return type

**CoachDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Coach successfuly saved, returns coach information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


