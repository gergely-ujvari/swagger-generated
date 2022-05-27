# .BlacklistApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2BlacklistIdDelete**](BlacklistApi.md#v2BlacklistIdDelete) | **DELETE** /v2/blacklist/{id} | Remove the specified resource from storage.
[**v2BlacklistSearchPost**](BlacklistApi.md#v2BlacklistSearchPost) | **POST** /v2/blacklist/search | 


# **v2BlacklistIdDelete**
> void v2BlacklistIdDelete()

Remove blacklist record by id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BlacklistApi(configuration);

let body:.BlacklistApiV2BlacklistIdDeleteRequest = {
  // string | Unique identifier of the resource.
  id: "1",
};

apiInstance.v2BlacklistIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Blacklist deleted |  -  |
**404** | No Blacklist with id found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2BlacklistSearchPost**
> Array<BlacklistDto> v2BlacklistSearchPost()

Bulk find in blacklist table and return matching entries by the unique blacklist key.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BlacklistApi(configuration);

let body:.BlacklistApiV2BlacklistSearchPostRequest = {
  // Array<BlacklistKeyDto> | Array of blacklistsKeys (optional)
  blacklistKeys: [
    {
      type: "TRANSLATION",
      entity: "TEAM",
      entityId: "entityId_example",
      context: "context_example",
    },
  ],
};

apiInstance.v2BlacklistSearchPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blacklistKeys** | **Array<BlacklistKeyDto>**| Array of blacklistsKeys |


### Return type

**Array<BlacklistDto>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of blacklist objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


