# .TagsApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsGet**](TagsApi.md#tagsGet) | **GET** /tags | List of all Tags
[**tagsIdDelete**](TagsApi.md#tagsIdDelete) | **DELETE** /tags/{id} | Delete Tag.
[**tagsIdGet**](TagsApi.md#tagsIdGet) | **GET** /tags/{id} | Get Single Tag
[**tagsIdPatch**](TagsApi.md#tagsIdPatch) | **PATCH** /tags/{id} | Update Tag
[**tagsPost**](TagsApi.md#tagsPost) | **POST** /tags | Add Tag
[**tagsSearchGet**](TagsApi.md#tagsSearchGet) | **GET** /tags/search | 


# **tagsGet**
> TagsCollection tagsGet()

List of all Tags

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagsApi(configuration);

let body:.TagsApiTagsGetRequest = {
  // number | Pagination (optional)
  page: 1,
  // number | Items per page (optional)
  limit: 20,
  // 'ordered' | 'unordered' | Filter tags by order type (optional)
  orderType: "ordered",
};

apiInstance.tagsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Pagination | (optional) defaults to 1
 **limit** | [**number**] | Items per page | (optional) defaults to 20
 **orderType** | [**&#39;ordered&#39; | &#39;unordered&#39;**]**Array<&#39;ordered&#39; &#124; &#39;unordered&#39;>** | Filter tags by order type | (optional) defaults to undefined


### Return type

**TagsCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection of Tags |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tagsIdDelete**
> void tagsIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagsApi(configuration);

let body:.TagsApiTagsIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.tagsIdDelete(body).then((data:any) => {
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
**200** | Tag Deleted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tagsIdGet**
> TagsIdDelete200Response tagsIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagsApi(configuration);

let body:.TagsApiTagsIdGetRequest = {
  // number
  id: 1,
};

apiInstance.tagsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**TagsIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tagsIdPatch**
> TagsIdDelete200Response tagsIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagsApi(configuration);

let body:.TagsApiTagsIdPatchRequest = {
  // number
  id: 1,
  // TagsRequest | Update Tag (optional)
  tagsRequest: {
    title: "title_example",
    description: "description_example",
    type: "type_example",
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
    previousId: "previousId_example",
    orderType: "ordered",
  },
};

apiInstance.tagsIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagsRequest** | **TagsRequest**| Update Tag |
 **id** | [**number**] |  | defaults to undefined


### Return type

**TagsIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Tag |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tagsPost**
> TagsResponse tagsPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagsApi(configuration);

let body:.TagsApiTagsPostRequest = {
  // TagsRequest | Add Tag (optional)
  tagsRequest: {
    title: "title_example",
    description: "description_example",
    type: "type_example",
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
    previousId: "previousId_example",
    orderType: "ordered",
  },
};

apiInstance.tagsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagsRequest** | **TagsRequest**| Add Tag |


### Return type

**TagsResponse**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Article |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tagsSearchGet**
> TagsCollection tagsSearchGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TagsApi(configuration);

let body:.TagsApiTagsSearchGetRequest = {
  // string | Search string
  query: "*",
  // string | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 (optional)
  ids: "1,2,3",
  // number | Items per page (optional)
  limit: 20,
  // 'ordered' | 'unordered' | Filter tags by order type (optional)
  orderType: "ordered",
};

apiInstance.tagsSearchGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Search string | defaults to '*'
 **ids** | [**string**] | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 | (optional) defaults to '1,2,3'
 **limit** | [**number**] | Items per page | (optional) defaults to 20
 **orderType** | [**&#39;ordered&#39; | &#39;unordered&#39;**]**Array<&#39;ordered&#39; &#124; &#39;unordered&#39;>** | Filter tags by order type | (optional) defaults to undefined


### Return type

**TagsCollection**

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


