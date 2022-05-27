# .ProviderMappingsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2MappingsSearchPost**](ProviderMappingsApi.md#v2MappingsSearchPost) | **POST** /v2/mappings/search | 


# **v2MappingsSearchPost**
> Array<V2MappingDto> v2MappingsSearchPost()

Bulk find provider to internal ID mappings by their provider ID and entity type.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProviderMappingsApi(configuration);

let body:.ProviderMappingsApiV2MappingsSearchPostRequest = {
  // V2MappingsSearchPostRequest | Data entity provider name and array of mapping requests (optional)
  mappingRequest: {
    provider: "provider_example",
    mappingRequests: [
      {
        entityType: "PLAYER",
        providerId: "providerId_example",
      },
    ],
  },
};

apiInstance.v2MappingsSearchPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mappingRequest** | **V2MappingsSearchPostRequest**| Data entity provider name and array of mapping requests |


### Return type

**Array<V2MappingDto>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of mapping objects |  -  |
**400** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


