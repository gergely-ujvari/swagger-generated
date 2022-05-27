# .GalleriesApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**galleriesGet**](GalleriesApi.md#galleriesGet) | **GET** /galleries | List of all galleries
[**galleriesIdDelete**](GalleriesApi.md#galleriesIdDelete) | **DELETE** /galleries/{id} | Delete Gallery
[**galleriesIdGet**](GalleriesApi.md#galleriesIdGet) | **GET** /galleries/{id} | Get Single Gallery
[**galleriesIdPatch**](GalleriesApi.md#galleriesIdPatch) | **PATCH** /galleries/{id} | Update Gallery
[**galleriesIdRelatedGet**](GalleriesApi.md#galleriesIdRelatedGet) | **GET** /galleries/{id}/related | Get Related Content
[**galleriesIdRelatedPost**](GalleriesApi.md#galleriesIdRelatedPost) | **POST** /galleries/{id}/related | Add Related Content
[**galleriesPost**](GalleriesApi.md#galleriesPost) | **POST** /galleries | Add Gallery
[**galleriesSearchGet**](GalleriesApi.md#galleriesSearchGet) | **GET** /galleries/search | 


# **galleriesGet**
> GalleriesCollection galleriesGet()

List of all galleries

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GalleriesApi(configuration);

let body:.GalleriesApiGalleriesGetRequest = {
  // number | Pagination (optional)
  page: 1,
  // number | Items per page (optional)
  limit: 20,
  // string | Sort (optional)
  sort: "created_at:desc",
};

apiInstance.galleriesGet(body).then((data:any) => {
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

**GalleriesCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection of Galleries |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **galleriesIdDelete**
> void galleriesIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GalleriesApi(configuration);

let body:.GalleriesApiGalleriesIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.galleriesIdDelete(body).then((data:any) => {
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
**200** | Gallery Deleted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **galleriesIdGet**
> GalleriesIdDelete200Response galleriesIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GalleriesApi(configuration);

let body:.GalleriesApiGalleriesIdGetRequest = {
  // number
  id: 1,
};

apiInstance.galleriesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**GalleriesIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gallery |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **galleriesIdPatch**
> GalleriesIdDelete200Response galleriesIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GalleriesApi(configuration);

let body:.GalleriesApiGalleriesIdPatchRequest = {
  // number
  id: 1,
  // GalleryUpdateRequest | Update Gallery (optional)
  galleryUpdateRequest: {
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
    runAds: true,
    authors: [
      1,
    ],
    customAuthor: "customAuthor_example",
    imageId: "imageId_example",
    originId: 1,
    imageDescription: "imageDescription_example",
    additionalCategories: [
      1,
    ],
    items: [
      {
        id: "id_example",
        comment: "comment_example",
        type: "images",
      },
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

apiInstance.galleriesIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **galleryUpdateRequest** | **GalleryUpdateRequest**| Update Gallery |
 **id** | [**number**] |  | defaults to undefined


### Return type

**GalleriesIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Gallery |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **galleriesIdRelatedGet**
> Array<RelatedResponseInner> galleriesIdRelatedGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GalleriesApi(configuration);

let body:.GalleriesApiGalleriesIdRelatedGetRequest = {
  // number
  id: 1,
};

apiInstance.galleriesIdRelatedGet(body).then((data:any) => {
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

# **galleriesIdRelatedPost**
> Array<RelatedResponseInner> galleriesIdRelatedPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GalleriesApi(configuration);

let body:.GalleriesApiGalleriesIdRelatedPostRequest = {
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

apiInstance.galleriesIdRelatedPost(body).then((data:any) => {
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

# **galleriesPost**
> GalleryResponse galleriesPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GalleriesApi(configuration);

let body:.GalleriesApiGalleriesPostRequest = {
  // GalleryRequest | Add Gallery (optional)
  galleryRequest: {
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
    runAds: true,
    authors: [
      1,
    ],
    customAuthor: "customAuthor_example",
    imageId: "imageId_example",
    originId: 1,
    imageDescription: "imageDescription_example",
    additionalCategories: [
      1,
    ],
    items: [
      {
        id: "id_example",
        comment: "comment_example",
        type: "images",
      },
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

apiInstance.galleriesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **galleryRequest** | **GalleryRequest**| Add Gallery |


### Return type

**GalleryResponse**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gallery |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **galleriesSearchGet**
> GalleriesCollection galleriesSearchGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .GalleriesApi(configuration);

let body:.GalleriesApiGalleriesSearchGetRequest = {
  // string | Search string
  query: "*",
  // string | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 (optional)
  ids: "1,2,3",
  // number | Valid ID of category (optional)
  category: 2,
  // number | Valid ID of admin (optional)
  createdBy: 2,
  // number | Valid ID of gallery origin (optional)
  originId: 2,
  // string | Valid slug of gallery status (optional)
  status: "active",
  // string | Valid slug of gallery type (optional)
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

apiInstance.galleriesSearchGet(body).then((data:any) => {
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
 **originId** | [**number**] | Valid ID of gallery origin | (optional) defaults to 2
 **status** | [**string**] | Valid slug of gallery status | (optional) defaults to 'active'
 **type** | [**string**] | Valid slug of gallery type | (optional) defaults to 'news'
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

**GalleriesCollection**

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


