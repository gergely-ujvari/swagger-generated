# .ContentTypesApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentTypeTypesGet**](ContentTypesApi.md#contentTypeTypesGet) | **GET** /{contentType}/types | 
[**contentTypeTypesIdGet**](ContentTypesApi.md#contentTypeTypesIdGet) | **GET** /{contentType}/types/{id} | Get Single Type
[**contentTypeTypesIdPatch**](ContentTypesApi.md#contentTypeTypesIdPatch) | **PATCH** /{contentType}/types/{id} | Update a Type
[**contentTypeTypesPost**](ContentTypesApi.md#contentTypeTypesPost) | **POST** /{contentType}/types | Add Type for content type


# **contentTypeTypesGet**
> TypesCollection contentTypeTypesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentTypesApi(configuration);

let body:.ContentTypesApiContentTypeTypesGetRequest = {
  // 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners'
  contentType: "articles",
};

apiInstance.contentTypeTypesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;tags&#39; | &#39;lists&#39; | &#39;galleries&#39; | &#39;banners&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;images&#39; &#124; &#39;tags&#39; &#124; &#39;lists&#39; &#124; &#39;galleries&#39; &#124; &#39;banners&#39;>** |  | defaults to undefined


### Return type

**TypesCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All available types, scoped per content type |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeTypesIdGet**
> ContentTypeTypesIdGet200Response contentTypeTypesIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentTypesApi(configuration);

let body:.ContentTypesApiContentTypeTypesIdGetRequest = {
  // 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners'
  contentType: "articles",
  // number
  id: 1,
};

apiInstance.contentTypeTypesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;tags&#39; | &#39;lists&#39; | &#39;galleries&#39; | &#39;banners&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;images&#39; &#124; &#39;tags&#39; &#124; &#39;lists&#39; &#124; &#39;galleries&#39; &#124; &#39;banners&#39;>** |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined


### Return type

**ContentTypeTypesIdGet200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Type |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeTypesIdPatch**
> ContentTypeTypesIdGet200Response contentTypeTypesIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentTypesApi(configuration);

let body:.ContentTypesApiContentTypeTypesIdPatchRequest = {
  // 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners'
  contentType: "articles",
  // number
  id: 1,
  // TypeRequest | Update Type (optional)
  typeRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.contentTypeTypesIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeRequest** | **TypeRequest**| Update Type |
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;tags&#39; | &#39;lists&#39; | &#39;galleries&#39; | &#39;banners&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;images&#39; &#124; &#39;tags&#39; &#124; &#39;lists&#39; &#124; &#39;galleries&#39; &#124; &#39;banners&#39;>** |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined


### Return type

**ContentTypeTypesIdGet200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Type |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeTypesPost**
> TypeResponse contentTypeTypesPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContentTypesApi(configuration);

let body:.ContentTypesApiContentTypeTypesPostRequest = {
  // 'articles' | 'videos' | 'images' | 'tags' | 'lists' | 'galleries' | 'banners'
  contentType: "articles",
  // TypeRequest | Add Type (optional)
  typeRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.contentTypeTypesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **typeRequest** | **TypeRequest**| Add Type |
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;images&#39; | &#39;tags&#39; | &#39;lists&#39; | &#39;galleries&#39; | &#39;banners&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;images&#39; &#124; &#39;tags&#39; &#124; &#39;lists&#39; &#124; &#39;galleries&#39; &#124; &#39;banners&#39;>** |  | defaults to undefined


### Return type

**TypeResponse**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Type |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


