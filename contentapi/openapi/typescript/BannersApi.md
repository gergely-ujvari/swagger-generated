# .BannersApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bannersGet**](BannersApi.md#bannersGet) | **GET** /banners/ | List of all Banners
[**bannersIdDelete**](BannersApi.md#bannersIdDelete) | **DELETE** /banners/{id} | Delete Banner.
[**bannersIdGet**](BannersApi.md#bannersIdGet) | **GET** /banners/{id} | Get Single Banner
[**bannersIdPatch**](BannersApi.md#bannersIdPatch) | **PATCH** /banners/{id} | Update Banner
[**bannersPost**](BannersApi.md#bannersPost) | **POST** /banners/ | Add Banner
[**bannersSearchGet**](BannersApi.md#bannersSearchGet) | **GET** /banners/search | 


# **bannersGet**
> BannersCollection bannersGet()

List of all Banners

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BannersApi(configuration);

let body:.BannersApiBannersGetRequest = {
  // number | Pagination (optional)
  page: 1,
  // number | Items per page (optional)
  limit: 20,
};

apiInstance.bannersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Pagination | (optional) defaults to 1
 **limit** | [**number**] | Items per page | (optional) defaults to 20


### Return type

**BannersCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection of Banners |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bannersIdDelete**
> void bannersIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BannersApi(configuration);

let body:.BannersApiBannersIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.bannersIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**void**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Banner Deleted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bannersIdGet**
> BannersIdDelete200Response bannersIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BannersApi(configuration);

let body:.BannersApiBannersIdGetRequest = {
  // number
  id: 1,
};

apiInstance.bannersIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**BannersIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Banner |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bannersIdPatch**
> BannersIdDelete200Response bannersIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BannersApi(configuration);

let body:.BannersApiBannersIdPatchRequest = {
  // number
  id: 1,
  // BannersRequest | Update Banner (optional)
  bannersRequest: {
    id: "id_example",
    title: "title_example",
    code: "code_example",
    isPreferred: true,
    type: "type_example",
    createdAt: "createdAt_example",
    updatedAt: "updatedAt_example",
  },
};

apiInstance.bannersIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bannersRequest** | **BannersRequest**| Update Banner |
 **id** | [**number**] |  | defaults to undefined


### Return type

**BannersIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Banner |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bannersPost**
> BannersResponse bannersPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BannersApi(configuration);

let body:.BannersApiBannersPostRequest = {
  // BannersRequest | Add Banner (optional)
  bannersRequest: {
    id: "id_example",
    title: "title_example",
    code: "code_example",
    isPreferred: true,
    type: "type_example",
    createdAt: "createdAt_example",
    updatedAt: "updatedAt_example",
  },
};

apiInstance.bannersPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bannersRequest** | **BannersRequest**| Add Banner |


### Return type

**BannersResponse**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Banners |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **bannersSearchGet**
> BannersCollection bannersSearchGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BannersApi(configuration);

let body:.BannersApiBannersSearchGetRequest = {
  // string | Search string
  query: "*",
  // string | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 (optional)
  ids: "1,2,3",
  // string | Valid slug of banner type (optional)
  type: "static-html",
  // number | Items per page (optional)
  limit: 20,
};

apiInstance.bannersSearchGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Search string | defaults to '*'
 **ids** | [**string**] | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 | (optional) defaults to '1,2,3'
 **type** | [**string**] | Valid slug of banner type | (optional) defaults to 'static-html'
 **limit** | [**number**] | Items per page | (optional) defaults to 20


### Return type

**BannersCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Results |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


