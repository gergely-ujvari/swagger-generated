# .ContentStatusesApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentTypeStatusesGet**](ContentStatusesApi.md#contentTypeStatusesGet) | **GET** /{contentType}/statuses | 
[**contentTypeStatusesIdGet**](ContentStatusesApi.md#contentTypeStatusesIdGet) | **GET** /{contentType}/statuses/{id} | Get Single Status
[**contentTypeStatusesIdPatch**](ContentStatusesApi.md#contentTypeStatusesIdPatch) | **PATCH** /{contentType}/statuses/{id} | Update a Status
[**contentTypeStatusesPost**](ContentStatusesApi.md#contentTypeStatusesPost) | **POST** /{contentType}/statuses | Add Status for content type


# **contentTypeStatusesGet**
> StatusesCollection contentTypeStatusesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentStatusesApi(configuration);

let body:.ContentStatusesApiContentTypeStatusesGetRequest = {
  // 'articles' | 'videos' | 'polls' | 'lists' | 'galleries'
  contentType: "articles",
};

apiInstance.contentTypeStatusesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;lists&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;polls&#39; &#124; &#39;lists&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined


### Return type

**StatusesCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All available statuses, scoped percontent type |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeStatusesIdGet**
> ContentTypeStatusesIdGet200Response contentTypeStatusesIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentStatusesApi(configuration);

let body:.ContentStatusesApiContentTypeStatusesIdGetRequest = {
  // 'articles' | 'videos' | 'polls' | 'lists' | 'galleries'
  contentType: "articles",
  // number
  id: 1,
};

apiInstance.contentTypeStatusesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;lists&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;polls&#39; &#124; &#39;lists&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined


### Return type

**ContentTypeStatusesIdGet200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeStatusesIdPatch**
> ContentTypeStatusesIdGet200Response contentTypeStatusesIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentStatusesApi(configuration);

let body:.ContentStatusesApiContentTypeStatusesIdPatchRequest = {
  // 'articles' | 'videos' | 'polls' | 'lists' | 'galleries'
  contentType: "articles",
  // number
  id: 1,
  // StatusRequest | Update Status (optional)
  statusRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.contentTypeStatusesIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statusRequest** | **StatusRequest**| Update Status |
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;lists&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;polls&#39; &#124; &#39;lists&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined


### Return type

**ContentTypeStatusesIdGet200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Status |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeStatusesPost**
> StatusResponse contentTypeStatusesPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentStatusesApi(configuration);

let body:.ContentStatusesApiContentTypeStatusesPostRequest = {
  // 'articles' | 'videos' | 'polls' | 'lists' | 'galleries'
  contentType: "articles",
  // StatusRequest | Add Status (optional)
  statusRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.contentTypeStatusesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statusRequest** | **StatusRequest**| Add Status |
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;lists&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;polls&#39; &#124; &#39;lists&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined


### Return type

**StatusResponse**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Status |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


