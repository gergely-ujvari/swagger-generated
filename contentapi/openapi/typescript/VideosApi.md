# .VideosApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**videosGet**](VideosApi.md#videosGet) | **GET** /videos | List of all videos
[**videosIdDelete**](VideosApi.md#videosIdDelete) | **DELETE** /videos/{id} | Delete Video.
[**videosIdGet**](VideosApi.md#videosIdGet) | **GET** /videos/{id} | Get Single Video
[**videosIdPatch**](VideosApi.md#videosIdPatch) | **PATCH** /videos/{id} | Update Video
[**videosIdRelatedGet**](VideosApi.md#videosIdRelatedGet) | **GET** /videos/{id}/related | Get Related Content
[**videosIdRelatedPost**](VideosApi.md#videosIdRelatedPost) | **POST** /videos/{id}/related | Add Related Content
[**videosPost**](VideosApi.md#videosPost) | **POST** /videos | Add Video
[**videosSearchGet**](VideosApi.md#videosSearchGet) | **GET** /videos/search | 


# **videosGet**
> VideosCollection videosGet()

List of all videos

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VideosApi(configuration);

let body:.VideosApiVideosGetRequest = {
  // number | Pagination (optional)
  page: 1,
  // number | Items per page (optional)
  limit: 20,
  // string | Sort (optional)
  sort: "created_at:desc",
};

apiInstance.videosGet(body).then((data:any) => {
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

**VideosCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection of Videos |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videosIdDelete**
> void videosIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VideosApi(configuration);

let body:.VideosApiVideosIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.videosIdDelete(body).then((data:any) => {
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
**200** | Video Deleted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videosIdGet**
> VideosIdDelete200Response videosIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VideosApi(configuration);

let body:.VideosApiVideosIdGetRequest = {
  // number
  id: 1,
};

apiInstance.videosIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**VideosIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Video |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videosIdPatch**
> VideosIdDelete200Response videosIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VideosApi(configuration);

let body:.VideosApiVideosIdPatchRequest = {
  // number
  id: 1,
  // VideoUpdateRequest | Update Video (optional)
  videoUpdateRequest: {
    title: "title_example",
    subtitle: "subtitle_example",
    strapline: "strapline_example",
    footer: "footer_example",
    body: [
      {},
    ],
    categoryId: "categoryId_example",
    commentPolicyId: 1,
    authors: [
      1,
    ],
    owner: "owner_example",
    originId: 1,
    important: true,
    imageId: "imageId_example",
    imageDescription: "imageDescription_example",
    additionalCategories: [
      1,
    ],
    runAds: true,
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
    customAuthor: "customAuthor_example",
    externalUrl: "externalUrl_example",
    liveUrl: "liveUrl_example",
    videoFiles: [
      {
        type: "type_example",
        url: "url_example",
      },
    ],
    isAdultContent: true,
    isSensitiveContent: true,
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

apiInstance.videosIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoUpdateRequest** | **VideoUpdateRequest**| Update Video |
 **id** | [**number**] |  | defaults to undefined


### Return type

**VideosIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Video |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videosIdRelatedGet**
> Array<RelatedResponseInner> videosIdRelatedGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VideosApi(configuration);

let body:.VideosApiVideosIdRelatedGetRequest = {
  // number
  id: 1,
};

apiInstance.videosIdRelatedGet(body).then((data:any) => {
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
**200** | Related Content. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **videosIdRelatedPost**
> Array<RelatedResponseInner> videosIdRelatedPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VideosApi(configuration);

let body:.VideosApiVideosIdRelatedPostRequest = {
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

apiInstance.videosIdRelatedPost(body).then((data:any) => {
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

# **videosPost**
> VideoResponse videosPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VideosApi(configuration);

let body:.VideosApiVideosPostRequest = {
  // VideoRequest | Add Video (optional)
  videoRequest: {
    title: "title_example",
    subtitle: "subtitle_example",
    strapline: "strapline_example",
    footer: "footer_example",
    body: [
      {},
    ],
    categoryId: "categoryId_example",
    commentPolicyId: 1,
    authors: [
      1,
    ],
    owner: "owner_example",
    originId: 1,
    important: true,
    imageId: "imageId_example",
    imageDescription: "imageDescription_example",
    additionalCategories: [
      1,
    ],
    runAds: true,
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
    customAuthor: "customAuthor_example",
    externalUrl: "externalUrl_example",
    liveUrl: "liveUrl_example",
    videoFiles: [
      {
        type: "type_example",
        url: "url_example",
      },
    ],
    isAdultContent: true,
    isSensitiveContent: true,
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
    language: "language_example",
    translationGroupId: "translationGroupId_example",
  },
};

apiInstance.videosPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoRequest** | **VideoRequest**| Add Video |


### Return type

**VideoResponse**

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

# **videosSearchGet**
> ArticlesCollection videosSearchGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VideosApi(configuration);

let body:.VideosApiVideosSearchGetRequest = {
  // string | Search string
  query: "*",
  // string | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 (optional)
  ids: "1,2,3",
  // number | Valid ID of category (optional)
  category: 2,
  // number | Valid ID of admin (optional)
  createdBy: 2,
  // number | Valid ID of video origin (optional)
  originId: 2,
  // string | Valid slug of video status (optional)
  status: "active",
  // string | Valid slug of video type (optional)
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

apiInstance.videosSearchGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Search string | defaults to '*'
 **ids** | [**string**] | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 | (optional) defaults to '1,2,3'
 **category** | [**number**] | Valid ID of category | (optional) defaults to 2
 **createdBy** | [**number**] | Valid ID of admin | (optional) defaults to 2
 **originId** | [**number**] | Valid ID of video origin | (optional) defaults to 2
 **status** | [**string**] | Valid slug of video status | (optional) defaults to 'active'
 **type** | [**string**] | Valid slug of video type | (optional) defaults to 'news'
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


