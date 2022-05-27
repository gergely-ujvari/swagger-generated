# .ListsApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listsGet**](ListsApi.md#listsGet) | **GET** /lists | List of all Lists
[**listsIdDelete**](ListsApi.md#listsIdDelete) | **DELETE** /lists/{id} | Delete List.
[**listsIdGet**](ListsApi.md#listsIdGet) | **GET** /lists/{id} | Get Single List
[**listsIdPatch**](ListsApi.md#listsIdPatch) | **PATCH** /lists/{id} | Update List
[**listsPost**](ListsApi.md#listsPost) | **POST** /lists | Add List
[**listsSearchGet**](ListsApi.md#listsSearchGet) | **GET** /lists/search | 


# **listsGet**
> ListsCollection listsGet()

List of all Lists

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiListsGetRequest = {
  // number | Pagination (optional)
  page: 1,
  // number | Items per page (optional)
  limit: 20,
  // string | Sort (optional)
  sort: "created_at:desc",
};

apiInstance.listsGet(body).then((data:any) => {
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

**ListsCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection of Lists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listsIdDelete**
> void listsIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiListsIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.listsIdDelete(body).then((data:any) => {
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
**200** | List Deleted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listsIdGet**
> ListsIdDelete200Response listsIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiListsIdGetRequest = {
  // number
  id: 1,
};

apiInstance.listsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**ListsIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listsIdPatch**
> ListsIdDelete200Response listsIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiListsIdPatchRequest = {
  // number
  id: 1,
  // ListsUpdateRequest | Update List (optional)
  listsUpdateRequest: {
    title: "title_example",
    slug: "slug_example",
    image: "image_example",
    configuration: {},
    previousId: "previousId_example",
    lockedPositions: [
      1,
    ],
    items: [
      {
        id: "id_example",
        type: "article",
        meta: {},
        weight: 1,
      },
    ],
    status: "status_example",
    generic: {},
  },
};

apiInstance.listsIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listsUpdateRequest** | **ListsUpdateRequest**| Update List |
 **id** | [**number**] |  | defaults to undefined


### Return type

**ListsIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated List |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listsPost**
> ListsResponse listsPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiListsPostRequest = {
  // ListsRequest | Add List (optional)
  listsRequest: {
    title: "title_example",
    slug: "slug_example",
    image: "image_example",
    configuration: {},
    previousId: "previousId_example",
    lockedPositions: [
      1,
    ],
    items: [
      {
        id: "id_example",
        type: "article",
        meta: {},
        weight: 1,
      },
    ],
    status: "status_example",
    generic: {},
    language: "language_example",
  },
};

apiInstance.listsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listsRequest** | **ListsRequest**| Add List |


### Return type

**ListsResponse**

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

# **listsSearchGet**
> ListsCollection listsSearchGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ListsApi(configuration);

let body:.ListsApiListsSearchGetRequest = {
  // string | Search string
  query: "*",
  // string | CSV of valid list IDs. OR filter. List ID is 1 or 2 or 3 (optional)
  ids: "1,2,3",
  // string | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 (optional)
  itemIds: "1,2,3",
  // number | Valid ID of admin (optional)
  createdBy: 2,
  // string | Valid slug of list status (optional)
  status: "active",
  // string | Filter by language (optional)
  language: "language_example",
  // number | Items per page (optional)
  limit: 20,
};

apiInstance.listsSearchGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Search string | defaults to '*'
 **ids** | [**string**] | CSV of valid list IDs. OR filter. List ID is 1 or 2 or 3 | (optional) defaults to '1,2,3'
 **itemIds** | [**string**] | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 | (optional) defaults to '1,2,3'
 **createdBy** | [**number**] | Valid ID of admin | (optional) defaults to 2
 **status** | [**string**] | Valid slug of list status | (optional) defaults to 'active'
 **language** | [**string**] | Filter by language | (optional) defaults to undefined
 **limit** | [**number**] | Items per page | (optional) defaults to 20


### Return type

**ListsCollection**

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


