# .PresidentsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2PresidentsIdPut**](PresidentsApi.md#v2PresidentsIdPut) | **PUT** /v2/presidents/{id} | 
[**v2PresidentsPost**](PresidentsApi.md#v2PresidentsPost) | **POST** /v2/presidents | 


# **v2PresidentsIdPut**
> V2President v2PresidentsIdPut()

Update president information

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PresidentsApi(configuration);

let body:.PresidentsApiV2PresidentsIdPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // V2PresidentUpdate | President information to save in persistance (optional)
  president: {
    name: "name_example",
  },
};

apiInstance.v2PresidentsIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **president** | **V2PresidentUpdate**| President information to save in persistance |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**V2President**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated president object |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2PresidentsPost**
> V2President v2PresidentsPost()

Store a newly created president in storage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PresidentsApi(configuration);

let body:.PresidentsApiV2PresidentsPostRequest = {
  // V2PresidentInput (optional)
  president: {
    name: "name_example",
  },
};

apiInstance.v2PresidentsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **president** | **V2PresidentInput**|  |


### Return type

**V2President**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | President successfuly saved, returns president information |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


