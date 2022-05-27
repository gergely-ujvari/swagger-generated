# .CategoriesApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoriesGet**](CategoriesApi.md#categoriesGet) | **GET** /categories | List of all categories
[**categoriesIdDelete**](CategoriesApi.md#categoriesIdDelete) | **DELETE** /categories/{id} | Delete Category.
[**categoriesIdGet**](CategoriesApi.md#categoriesIdGet) | **GET** /categories/{id} | Get Single Category
[**categoriesIdPatch**](CategoriesApi.md#categoriesIdPatch) | **PATCH** /categories/{id} | Update Category. Category title is unique.
[**categoriesPost**](CategoriesApi.md#categoriesPost) | **POST** /categories | Add Category


# **categoriesGet**
> CategoriesCollection categoriesGet()

List of all categories

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiCategoriesGetRequest = {
  // number | Pagination (optional)
  page: 1,
  // number | Items per page (optional)
  limit: 20,
  // string | Sort (optional)
  sort: "created_at:desc",
};

apiInstance.categoriesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Pagination | (optional) defaults to 1
 **limit** | [**number**] | Items per page | (optional) defaults to 20
 **sort** | [**string**] | Sort | (optional) defaults to 'created_at:desc'


### Return type

**CategoriesCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoriesIdDelete**
> void categoriesIdDelete()

Category cannot be deleted until all content is moved to antoher category (move-content).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiCategoriesIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.categoriesIdDelete(body).then((data:any) => {
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
**200** | Category Deleted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoriesIdGet**
> CategoriesIdDelete200Response categoriesIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiCategoriesIdGetRequest = {
  // number
  id: 1,
};

apiInstance.categoriesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**CategoriesIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Category Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoriesIdPatch**
> CategoriesIdDelete200Response categoriesIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiCategoriesIdPatchRequest = {
  // number
  id: 1,
  // CategoryRequest | Update Category (optional)
  categoryRequest: {
    title: "title_example",
    description: "description_example",
    active: true,
    parentId: "parentId_example",
    previousId: "previousId_example",
    generic: {},
    seo: {
      slug: "slug_example",
      title: "title_example",
      description: "description_example",
      keywords: [
        "keywords_example",
      ],
      index: true,
      follow: true,
      redirectType: "temporary",
      jsonld: "jsonld_example",
    },
    mainMedia: [
      {
        resourceId: "resourceId_example",
        resourceType: "image",
        resourceSubtype: "default",
        provider: "smp",
        description: "description_example",
        data: {},
      },
    ],
  },
};

apiInstance.categoriesIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryRequest** | **CategoryRequest**| Update Category |
 **id** | [**number**] |  | defaults to undefined


### Return type

**CategoriesIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Category |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **categoriesPost**
> CategoryResponse categoriesPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CategoriesApi(configuration);

let body:.CategoriesApiCategoriesPostRequest = {
  // CategoryRequest | Add Category. Category title is unique. (optional)
  categoryRequest: {
    title: "title_example",
    description: "description_example",
    active: true,
    parentId: "parentId_example",
    previousId: "previousId_example",
    generic: {},
    seo: {
      slug: "slug_example",
      title: "title_example",
      description: "description_example",
      keywords: [
        "keywords_example",
      ],
      index: true,
      follow: true,
      redirectType: "temporary",
      jsonld: "jsonld_example",
    },
    mainMedia: [
      {
        resourceId: "resourceId_example",
        resourceType: "image",
        resourceSubtype: "default",
        provider: "smp",
        description: "description_example",
        data: {},
      },
    ],
  },
};

apiInstance.categoriesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryRequest** | **CategoryRequest**| Add Category. Category title is unique. |


### Return type

**CategoryResponse**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


