# .RefereesApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2RefereesGet**](RefereesApi.md#v2RefereesGet) | **GET** /v2/referees | 
[**v2RefereesIdGet**](RefereesApi.md#v2RefereesIdGet) | **GET** /v2/referees/{id} | 
[**v2RefereesIdPut**](RefereesApi.md#v2RefereesIdPut) | **PUT** /v2/referees/{id} | 
[**v2RefereesPost**](RefereesApi.md#v2RefereesPost) | **POST** /v2/referees | 


# **v2RefereesGet**
> RefereePageDto v2RefereesGet()

List referees with offset and limit parameters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RefereesApi(configuration);

let body:.RefereesApiV2RefereesGetRequest = {
  // number | The number of items to skip before starting to collect the result set
  offset: 1,
  // number | Limit the number of results returned
  limit: 1,
  // string | Filter referees which have refereed matches in the specified CSV season_ids (optional)
  seasonIds: "season_ids_example",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2RefereesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | [**number**] | The number of items to skip before starting to collect the result set | defaults to undefined
 **limit** | [**number**] | Limit the number of results returned | defaults to undefined
 **seasonIds** | [**string**] | Filter referees which have refereed matches in the specified CSV season_ids | (optional) defaults to undefined
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**RefereePageDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of referees |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2RefereesIdGet**
> RefereeDto v2RefereesIdGet()

Get referee by id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RefereesApi(configuration);

let body:.RefereesApiV2RefereesIdGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2RefereesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**RefereeDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Referee data |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2RefereesIdPut**
> RefereeDto v2RefereesIdPut()

Update referee information

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RefereesApi(configuration);

let body:.RefereesApiV2RefereesIdPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // RefereeEditDto | Referee information to save in persistance (optional)
  referee: {
    name: "name_example",
    countryId: "countryId_example",
    birthdate: new Date('1970-01-01T00:00:00.00Z'),
    active: true,
  },
};

apiInstance.v2RefereesIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referee** | **RefereeEditDto**| Referee information to save in persistance |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**RefereeDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated referee object |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2RefereesPost**
> RefereeDto v2RefereesPost()

Store a newly created referee in storage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RefereesApi(configuration);

let body:.RefereesApiV2RefereesPostRequest = {
  // RefereeEditDto (optional)
  referee: {
    name: "name_example",
    countryId: "countryId_example",
    birthdate: new Date('1970-01-01T00:00:00.00Z'),
    active: true,
  },
};

apiInstance.v2RefereesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **referee** | **RefereeEditDto**|  |


### Return type

**RefereeDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Referee successfuly saved, returns referee information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


