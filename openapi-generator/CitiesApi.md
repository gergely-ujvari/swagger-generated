# .CitiesApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2CitiesIdPut**](CitiesApi.md#v2CitiesIdPut) | **PUT** /v2/cities/{id} | 
[**v2CitiesPost**](CitiesApi.md#v2CitiesPost) | **POST** /v2/cities | 


# **v2CitiesIdPut**
> CityDto v2CitiesIdPut()

Update city information

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CitiesApi(configuration);

let body:.CitiesApiV2CitiesIdPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // CityEditDto | City information to save in persistance (optional)
  city: {
    name: "name_example",
    countryId: "countryId_example",
  },
};

apiInstance.v2CitiesIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **CityEditDto**| City information to save in persistance |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**CityDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated city object |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2CitiesPost**
> CityDto v2CitiesPost()

Store a newly created city in storage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CitiesApi(configuration);

let body:.CitiesApiV2CitiesPostRequest = {
  // CityEditDto (optional)
  city: {
    name: "name_example",
    countryId: "countryId_example",
  },
};

apiInstance.v2CitiesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **city** | **CityEditDto**|  |


### Return type

**CityDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | City successfuly saved, returns city information |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


