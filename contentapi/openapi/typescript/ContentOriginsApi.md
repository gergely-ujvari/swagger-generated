# .ContentOriginsApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentTypeOriginsGet**](ContentOriginsApi.md#contentTypeOriginsGet) | **GET** /{contentType}/origins | 
[**contentTypeOriginsIdGet**](ContentOriginsApi.md#contentTypeOriginsIdGet) | **GET** /{contentType}/origins/{id} | Get Single Origin
[**contentTypeOriginsIdPatch**](ContentOriginsApi.md#contentTypeOriginsIdPatch) | **PATCH** /{contentType}/origins/{id} | Update an Origin
[**contentTypeOriginsPost**](ContentOriginsApi.md#contentTypeOriginsPost) | **POST** /{contentType}/origins | Add Origin for content type


# **contentTypeOriginsGet**
> OriginsCollection contentTypeOriginsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentOriginsApi(configuration);

let body:.ContentOriginsApiContentTypeOriginsGetRequest = {
  // 'articles' | 'videos' | 'images' | 'galleries'
  contentType: "articles",
};

apiInstance.contentTypeOriginsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;images&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined


### Return type

**OriginsCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All available origins, scoped per content type |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeOriginsIdGet**
> ContentTypeOriginsIdGet200Response contentTypeOriginsIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentOriginsApi(configuration);

let body:.ContentOriginsApiContentTypeOriginsIdGetRequest = {
  // 'articles' | 'videos' | 'images' | 'galleries'
  contentType: "articles",
  // number
  id: 1,
};

apiInstance.contentTypeOriginsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;images&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined


### Return type

**ContentTypeOriginsIdGet200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Origin |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeOriginsIdPatch**
> ContentTypeOriginsIdGet200Response contentTypeOriginsIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentOriginsApi(configuration);

let body:.ContentOriginsApiContentTypeOriginsIdPatchRequest = {
  // 'articles' | 'videos' | 'images' | 'galleries'
  contentType: "articles",
  // number
  id: 1,
  // OriginRequest | Update Origin (optional)
  originRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.contentTypeOriginsIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originRequest** | **OriginRequest**| Update Origin |
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;images&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined


### Return type

**ContentTypeOriginsIdGet200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Origin |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeOriginsPost**
> OriginResponse contentTypeOriginsPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentOriginsApi(configuration);

let body:.ContentOriginsApiContentTypeOriginsPostRequest = {
  // 'articles' | 'videos' | 'images' | 'galleries'
  contentType: "articles",
  // OriginRequest | Add Origin (optional)
  originRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.contentTypeOriginsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **originRequest** | **OriginRequest**| Add Origin |
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;images&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined


### Return type

**OriginResponse**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Origin |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


