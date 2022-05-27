# .AssetsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2AssetsDelete**](AssetsApi.md#v2AssetsDelete) | **DELETE** /v2/assets | 
[**v2AssetsPost**](AssetsApi.md#v2AssetsPost) | **POST** /v2/assets | 


# **v2AssetsDelete**
> void v2AssetsDelete()

Bulk delete assets

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiV2AssetsDeleteRequest = {
  // Array<V2AssetInput> | Array of assets (optional)
  assets: [
    {
      entity: "entity_example",
      entityId: "entityId_example",
      type: "type_example",
      path: "path_example",
      contextType: "contextType_example",
      contextId: "contextId_example",
    },
  ],
};

apiInstance.v2AssetsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | **Array<V2AssetInput>**| Array of assets |


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Assets successfully deleted. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2AssetsPost**
> V2Asset v2AssetsPost()

Bulk Upsert assets

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AssetsApi(configuration);

let body:.AssetsApiV2AssetsPostRequest = {
  // Array<V2AssetInput> | Array of assets (optional)
  assets: [
    {
      entity: "entity_example",
      entityId: "entityId_example",
      type: "type_example",
      path: "path_example",
      contextType: "contextType_example",
      contextId: "contextId_example",
    },
  ],
};

apiInstance.v2AssetsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assets** | **Array<V2AssetInput>**| Array of assets |


### Return type

**V2Asset**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Assets successfuly saved |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


