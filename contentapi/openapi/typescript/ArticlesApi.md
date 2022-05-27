# .ArticlesApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**articlesGet**](ArticlesApi.md#articlesGet) | **GET** /articles | List of all articles
[**articlesIdDelete**](ArticlesApi.md#articlesIdDelete) | **DELETE** /articles/{id} | Delete Article
[**articlesIdGet**](ArticlesApi.md#articlesIdGet) | **GET** /articles/{id} | Get Single Article
[**articlesIdPatch**](ArticlesApi.md#articlesIdPatch) | **PATCH** /articles/{id} | Update Article
[**articlesIdRelatedGet**](ArticlesApi.md#articlesIdRelatedGet) | **GET** /articles/{id}/related | Get Related Content
[**articlesIdRelatedPost**](ArticlesApi.md#articlesIdRelatedPost) | **POST** /articles/{id}/related | Add Related Content
[**articlesPost**](ArticlesApi.md#articlesPost) | **POST** /articles | Add Article
[**articlesSearchGet**](ArticlesApi.md#articlesSearchGet) | **GET** /articles/search | 


# **articlesGet**
> ArticlesCollection articlesGet()

List of all articles

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArticlesApi(configuration);

let body:.ArticlesApiArticlesGetRequest = {
  // 'sports_related' | Get sports_related data (optional)
  optionalData: "sports_related",
  // number | Pagination (optional)
  page: 1,
  // number | Items per page (optional)
  limit: 20,
  // string | Sort (optional)
  sort: "created_at:desc",
};

apiInstance.articlesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **optionalData** | [**&#39;sports_related&#39;**]**Array<&#39;sports_related&#39;>** | Get sports_related data | (optional) defaults to undefined
 **page** | [**number**] | Pagination | (optional) defaults to 1
 **limit** | [**number**] | Items per page | (optional) defaults to 20
 **sort** | [**string**] | Sort | (optional) defaults to 'created_at:desc'


### Return type

**ArticlesCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection of Articles |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **articlesIdDelete**
> void articlesIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArticlesApi(configuration);

let body:.ArticlesApiArticlesIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.articlesIdDelete(body).then((data:any) => {
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
**200** | Article Deleted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **articlesIdGet**
> ArticlesIdDelete200Response articlesIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArticlesApi(configuration);

let body:.ArticlesApiArticlesIdGetRequest = {
  // number
  id: 1,
};

apiInstance.articlesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**ArticlesIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Article |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **articlesIdPatch**
> ArticlesIdDelete200Response articlesIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArticlesApi(configuration);

let body:.ArticlesApiArticlesIdPatchRequest = {
  // number
  id: 1,
  // ArticleUpdateRequest | Update Article (optional)
  articleUpdateRequest: {
    title: "title_example",
    subtitle: "subtitle_example",
    strapline: "strapline_example",
    footer: "footer_example",
    body: [
      {},
    ],
    categoryId: "categoryId_example",
    commentPolicyId: 1,
    publishedAt: "publishedAt_example",
    publishedUntil: "publishedUntil_example",
    publishedChannels: [
      1,
    ],
    publishedRegions: [
      1,
    ],
    createdAt: "createdAt_example",
    updatedAt: "updatedAt_example",
    status: "status_example",
    type: "type_example",
    originId: 1,
    live: true,
    important: true,
    runAds: true,
    authors: [
      1,
    ],
    customAuthor: "customAuthor_example",
    imageId: "imageId_example",
    imageDescription: "imageDescription_example",
    additionalCategories: [
      1,
    ],
    isAdultContent: true,
    isSensitiveContent: true,
    generic: {},
    externalUrl: "externalUrl_example",
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

apiInstance.articlesIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleUpdateRequest** | **ArticleUpdateRequest**| Update Article |
 **id** | [**number**] |  | defaults to undefined


### Return type

**ArticlesIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Article |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **articlesIdRelatedGet**
> Array<RelatedResponseInner> articlesIdRelatedGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArticlesApi(configuration);

let body:.ArticlesApiArticlesIdRelatedGetRequest = {
  // number
  id: 1,
};

apiInstance.articlesIdRelatedGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**Array<RelatedResponseInner>**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **articlesIdRelatedPost**
> Array<RelatedResponseInner> articlesIdRelatedPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArticlesApi(configuration);

let body:.ArticlesApiArticlesIdRelatedPostRequest = {
  // number
  id: 1,
  // Array<RelatedResponseInner> | Add related content (optional)
  relatedResponseInner: [
    {
      type: "article",
      provider: "undefined",
      data: {},
    },
  ],
};

apiInstance.articlesIdRelatedPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relatedResponseInner** | **Array<RelatedResponseInner>**| Add related content |
 **id** | [**number**] |  | defaults to undefined


### Return type

**Array<RelatedResponseInner>**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Related Content |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **articlesPost**
> ArticleResponse articlesPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArticlesApi(configuration);

let body:.ArticlesApiArticlesPostRequest = {
  // ArticleRequest | Add Article (optional)
  articleRequest: {
    title: "title_example",
    subtitle: "subtitle_example",
    strapline: "strapline_example",
    footer: "footer_example",
    body: [
      {},
    ],
    categoryId: "categoryId_example",
    commentPolicyId: 1,
    publishedAt: "publishedAt_example",
    publishedUntil: "publishedUntil_example",
    publishedChannels: [
      1,
    ],
    publishedRegions: [
      1,
    ],
    createdAt: "createdAt_example",
    updatedAt: "updatedAt_example",
    status: "status_example",
    type: "type_example",
    originId: 1,
    live: true,
    important: true,
    runAds: true,
    authors: [
      1,
    ],
    customAuthor: "customAuthor_example",
    imageId: "imageId_example",
    imageDescription: "imageDescription_example",
    additionalCategories: [
      1,
    ],
    isAdultContent: true,
    isSensitiveContent: true,
    generic: {},
    externalUrl: "externalUrl_example",
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
    language: "language_example",
    translationGroupId: "translationGroupId_example",
  },
};

apiInstance.articlesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **articleRequest** | **ArticleRequest**| Add Article |


### Return type

**ArticleResponse**

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

# **articlesSearchGet**
> ArticlesCollection articlesSearchGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ArticlesApi(configuration);

let body:.ArticlesApiArticlesSearchGetRequest = {
  // string | Search string
  query: "*",
  // 'sports_related' | Get sports_related data (optional)
  optionalData: "sports_related",
  // string | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 (optional)
  ids: "1,2,3",
  // number | Valid ID of category (optional)
  category: 2,
  // number | Valid ID of admin (optional)
  createdBy: 2,
  // number | Valid ID of article origin (optional)
  originId: 2,
  // string | Valid slug of article status (optional)
  status: "active",
  // string | Valid slug of article type (optional)
  type: "news",
  // string | CSV of valid content channel IDs (optional)
  publishedChannels: "1,2,3",
  // string | CSV of valid content region IDs (optional)
  publishedRegions: "1,2,3",
  // string | CSV of Team IDs (optional)
  teamIds: "1,2,3",
  // string | CSV of Player IDs (optional)
  playerIds: "1,2,3",
  // string | CSV of Tag IDs (optional)
  tagIds: "1,2,3",
  // number | Match ID (optional)
  matchId: 1,
  // number | Tournament ID (optional)
  tournamentId: 1,
  // string (optional)
  tournamentIds: "1,2,3",
  // number | Championship ID (optional)
  championshipId: 1,
  // number | Round ID (optional)
  roundId: 1,
  // string | Filter by language (optional)
  language: "language_example",
  // number | Category tree ID. Performs search by parent and sub category IDs. Cannot be used together with category parameter. (optional)
  categoryTreeId: 1,
  // string | CSV of author IDs (optional)
  authorIds: "1,2,3",
  // number | Items per page (optional)
  limit: 20,
};

apiInstance.articlesSearchGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Search string | defaults to '*'
 **optionalData** | [**&#39;sports_related&#39;**]**Array<&#39;sports_related&#39;>** | Get sports_related data | (optional) defaults to undefined
 **ids** | [**string**] | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 | (optional) defaults to '1,2,3'
 **category** | [**number**] | Valid ID of category | (optional) defaults to 2
 **createdBy** | [**number**] | Valid ID of admin | (optional) defaults to 2
 **originId** | [**number**] | Valid ID of article origin | (optional) defaults to 2
 **status** | [**string**] | Valid slug of article status | (optional) defaults to 'active'
 **type** | [**string**] | Valid slug of article type | (optional) defaults to 'news'
 **publishedChannels** | [**string**] | CSV of valid content channel IDs | (optional) defaults to '1,2,3'
 **publishedRegions** | [**string**] | CSV of valid content region IDs | (optional) defaults to '1,2,3'
 **teamIds** | [**string**] | CSV of Team IDs | (optional) defaults to '1,2,3'
 **playerIds** | [**string**] | CSV of Player IDs | (optional) defaults to '1,2,3'
 **tagIds** | [**string**] | CSV of Tag IDs | (optional) defaults to '1,2,3'
 **matchId** | [**number**] | Match ID | (optional) defaults to 1
 **tournamentId** | [**number**] | Tournament ID | (optional) defaults to 1
 **tournamentIds** | [**string**] |  | (optional) defaults to '1,2,3'
 **championshipId** | [**number**] | Championship ID | (optional) defaults to 1
 **roundId** | [**number**] | Round ID | (optional) defaults to 1
 **language** | [**string**] | Filter by language | (optional) defaults to undefined
 **categoryTreeId** | [**number**] | Category tree ID. Performs search by parent and sub category IDs. Cannot be used together with category parameter. | (optional) defaults to 1
 **authorIds** | [**string**] | CSV of author IDs | (optional) defaults to '1,2,3'
 **limit** | [**number**] | Items per page | (optional) defaults to 20


### Return type

**ArticlesCollection**

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


