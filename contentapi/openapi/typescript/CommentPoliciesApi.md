# .CommentPoliciesApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contentTypeCommentsPoliciesGet**](CommentPoliciesApi.md#contentTypeCommentsPoliciesGet) | **GET** /{contentType}/comments/policies | 
[**contentTypeCommentsPoliciesIdDelete**](CommentPoliciesApi.md#contentTypeCommentsPoliciesIdDelete) | **DELETE** /{contentType}/comments/policies/{id} | Delete Comment Policy
[**contentTypeCommentsPoliciesIdGet**](CommentPoliciesApi.md#contentTypeCommentsPoliciesIdGet) | **GET** /{contentType}/comments/policies/{id} | Get Single Comment Policy
[**contentTypeCommentsPoliciesIdPatch**](CommentPoliciesApi.md#contentTypeCommentsPoliciesIdPatch) | **PATCH** /{contentType}/comments/policies/{id} | Update a Comment Policy
[**contentTypeCommentsPoliciesPost**](CommentPoliciesApi.md#contentTypeCommentsPoliciesPost) | **POST** /{contentType}/comments/policies | Add Comment Policy for content type


# **contentTypeCommentsPoliciesGet**
> CommentPoliciesCollection contentTypeCommentsPoliciesGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentPoliciesApi(configuration);

let body:.CommentPoliciesApiContentTypeCommentsPoliciesGetRequest = {
  // 'articles' | 'videos' | 'polls' | 'galleries'
  contentType: "articles",
};

apiInstance.contentTypeCommentsPoliciesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;polls&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined


### Return type

**CommentPoliciesCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All available comment policies, scoped per this content type |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeCommentsPoliciesIdDelete**
> void contentTypeCommentsPoliciesIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentPoliciesApi(configuration);

let body:.CommentPoliciesApiContentTypeCommentsPoliciesIdDeleteRequest = {
  // 'articles' | 'videos' | 'polls' | 'galleries'
  contentType: "articles",
  // number
  id: 1,
};

apiInstance.contentTypeCommentsPoliciesIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;polls&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined
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
**200** | Comment Policy Deleted |  -  |
**404** | Comment Policy not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeCommentsPoliciesIdGet**
> ContentTypeCommentsPoliciesIdDelete200Response contentTypeCommentsPoliciesIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentPoliciesApi(configuration);

let body:.CommentPoliciesApiContentTypeCommentsPoliciesIdGetRequest = {
  // 'articles' | 'videos' | 'polls' | 'galleries'
  contentType: "articles",
  // number
  id: 1,
};

apiInstance.contentTypeCommentsPoliciesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;polls&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined


### Return type

**ContentTypeCommentsPoliciesIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | CommentPolicy |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeCommentsPoliciesIdPatch**
> ContentTypeCommentsPoliciesIdDelete200Response contentTypeCommentsPoliciesIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentPoliciesApi(configuration);

let body:.CommentPoliciesApiContentTypeCommentsPoliciesIdPatchRequest = {
  // 'articles' | 'videos' | 'polls' | 'galleries'
  contentType: "articles",
  // number
  id: 1,
  // CommentPolicyRequest | Update Comment Policy (optional)
  commentPolicyRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.contentTypeCommentsPoliciesIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentPolicyRequest** | **CommentPolicyRequest**| Update Comment Policy |
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;polls&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined
 **id** | [**number**] |  | defaults to undefined


### Return type

**ContentTypeCommentsPoliciesIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Comment Policy |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **contentTypeCommentsPoliciesPost**
> CommentPolicyResponse contentTypeCommentsPoliciesPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CommentPoliciesApi(configuration);

let body:.CommentPoliciesApiContentTypeCommentsPoliciesPostRequest = {
  // 'articles' | 'videos' | 'polls' | 'galleries'
  contentType: "articles",
  // CommentPolicyRequest | Add Comment Policy (optional)
  commentPolicyRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.contentTypeCommentsPoliciesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentPolicyRequest** | **CommentPolicyRequest**| Add Comment Policy |
 **contentType** | [**&#39;articles&#39; | &#39;videos&#39; | &#39;polls&#39; | &#39;galleries&#39;**]**Array<&#39;articles&#39; &#124; &#39;videos&#39; &#124; &#39;polls&#39; &#124; &#39;galleries&#39;>** |  | defaults to undefined


### Return type

**CommentPolicyResponse**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment Policy |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


