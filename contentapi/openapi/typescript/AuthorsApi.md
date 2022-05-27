# .AuthorsApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorsGet**](AuthorsApi.md#authorsGet) | **GET** /authors | List of all authors
[**authorsIdDelete**](AuthorsApi.md#authorsIdDelete) | **DELETE** /authors/{id} | Delete Author
[**authorsIdGet**](AuthorsApi.md#authorsIdGet) | **GET** /authors/{id} | Get Single Author
[**authorsIdPatch**](AuthorsApi.md#authorsIdPatch) | **PATCH** /authors/{id} | Update Author
[**authorsPost**](AuthorsApi.md#authorsPost) | **POST** /authors | Add Author


# **authorsGet**
> AuthorsCollection authorsGet()

List of all authors

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorsApi(configuration);

let body:.AuthorsApiAuthorsGetRequest = {
  // number | Pagination (optional)
  page: 1,
  // number | Items per page (optional)
  limit: 20,
};

apiInstance.authorsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Pagination | (optional) defaults to 1
 **limit** | [**number**] | Items per page | (optional) defaults to 20


### Return type

**AuthorsCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection of Authors |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authorsIdDelete**
> void authorsIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorsApi(configuration);

let body:.AuthorsApiAuthorsIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.authorsIdDelete(body).then((data:any) => {
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
**200** | Author Deleted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authorsIdGet**
> AuthorsIdDelete200Response authorsIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorsApi(configuration);

let body:.AuthorsApiAuthorsIdGetRequest = {
  // number
  id: 1,
};

apiInstance.authorsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**AuthorsIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Author |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authorsIdPatch**
> AuthorsIdDelete200Response authorsIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorsApi(configuration);

let body:.AuthorsApiAuthorsIdPatchRequest = {
  // number
  id: 1,
  // AuthorRequest | Update Author (optional)
  authorRequest: {
    name: "name_example",
    bio: "bio_example",
    active: true,
    _default: true,
    avatarUrl: "avatarUrl_example",
    generic: {},
    previousId: "previousId_example",
  },
};

apiInstance.authorsIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorRequest** | **AuthorRequest**| Update Author |
 **id** | [**number**] |  | defaults to undefined


### Return type

**AuthorsIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Author |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authorsPost**
> AuthorResponse authorsPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthorsApi(configuration);

let body:.AuthorsApiAuthorsPostRequest = {
  // AuthorRequest | Add Author (optional)
  authorRequest: {
    name: "name_example",
    bio: "bio_example",
    active: true,
    _default: true,
    avatarUrl: "avatarUrl_example",
    generic: {},
    previousId: "previousId_example",
  },
};

apiInstance.authorsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorRequest** | **AuthorRequest**| Add Author |


### Return type

**AuthorResponse**

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


