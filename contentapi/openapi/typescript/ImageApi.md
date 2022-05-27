# .ImageApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**imagesGet**](ImageApi.md#imagesGet) | **GET** /images | List of all images
[**imagesIdGet**](ImageApi.md#imagesIdGet) | **GET** /images/{id} | Get Single Image
[**imagesIdPatch**](ImageApi.md#imagesIdPatch) | **PATCH** /images/{id} | Update Image metadata
[**imagesIdRelatedGet**](ImageApi.md#imagesIdRelatedGet) | **GET** /images/{id}/related | Get Related Content
[**imagesIdRelatedPost**](ImageApi.md#imagesIdRelatedPost) | **POST** /images/{id}/related | Add Related Content
[**imagesPost**](ImageApi.md#imagesPost) | **POST** /images | Upload Image
[**imagesSearchGet**](ImageApi.md#imagesSearchGet) | **GET** /images/search | 


# **imagesGet**
> ImagesCollection imagesGet()

List of all available images

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImageApi(configuration);

let body:.ImageApiImagesGetRequest = {
  // number | Pagination (optional)
  page: 1,
  // number | Items per page (optional)
  limit: 20,
};

apiInstance.imagesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] | Pagination | (optional) defaults to 1
 **limit** | [**number**] | Items per page | (optional) defaults to 20


### Return type

**ImagesCollection**

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

# **imagesIdGet**
> ImagesIdGet200Response imagesIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImageApi(configuration);

let body:.ImageApiImagesIdGetRequest = {
  // number
  id: 1,
};

apiInstance.imagesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**ImagesIdGet200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagesIdPatch**
> ImagesIdGet200Response imagesIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImageApi(configuration);

let body:.ImageApiImagesIdPatchRequest = {
  // number
  id: 1,
  // ImageUpdateRequest | Change Uploaded Image (optional)
  imageUpdateRequest: {
    description: "description_example",
    authors: [
      1,
    ],
    customAuthor: "customAuthor_example",
    owner: "owner_example",
    type: "type_example",
    originId: 1,
    generic: {},
    mainCrop: "mainCrop_example",
    alt: "alt_example",
    caption: "caption_example",
  },
};

apiInstance.imagesIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageUpdateRequest** | **ImageUpdateRequest**| Change Uploaded Image |
 **id** | [**number**] |  | defaults to undefined


### Return type

**ImagesIdGet200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Image |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagesIdRelatedGet**
> Array<RelatedResponseInner> imagesIdRelatedGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImageApi(configuration);

let body:.ImageApiImagesIdRelatedGetRequest = {
  // number
  id: 1,
};

apiInstance.imagesIdRelatedGet(body).then((data:any) => {
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
**200** | Image Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagesIdRelatedPost**
> Array<RelatedResponseInner> imagesIdRelatedPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImageApi(configuration);

let body:.ImageApiImagesIdRelatedPostRequest = {
  // number
  id: 1,
  // Array<RelatedResponseInner> | Add related content. (optional)
  relatedResponseInner: [
    {
      type: "article",
      provider: "undefined",
      data: {},
    },
  ],
};

apiInstance.imagesIdRelatedPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **relatedResponseInner** | **Array<RelatedResponseInner>**| Add related content. |
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
**200** | Image Response |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagesPost**
> void imagesPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImageApi(configuration);

let body:.ImageApiImagesPostRequest = {
  // ImageRequest | Upload Image (optional)
  imageRequest: {
    description: "description_example",
    authors: [
      1,
    ],
    customAuthor: "customAuthor_example",
    footer: "footer_example",
    owner: "owner_example",
    type: "type_example",
    imageData: "imageData_example",
    urls: {
      _16x9: {},
      copped: "copped_example",
      uploaded: {
        embed: "embed_example",
        gallery: "gallery_example",
        original: "original_example",
        thumbnail: "thumbnail_example",
      },
    },
    isSensitiveContent: true,
    originId: 1,
    generic: {},
    mainCrop: "mainCrop_example",
    alt: "alt_example",
    caption: "caption_example",
  },
};

apiInstance.imagesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageRequest** | **ImageRequest**| Upload Image |


### Return type

**void**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **imagesSearchGet**
> ImagesCollection imagesSearchGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ImageApi(configuration);

let body:.ImageApiImagesSearchGetRequest = {
  // string | Search string
  query: "*",
  // string | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 (optional)
  ids: "1,2,3",
  // number | Valid ID of admin (optional)
  createdBy: 2,
  // number | Valid ID of images origin (optional)
  originId: 2,
  // string | Valid slug of image type (optional)
  type: "eyecatcher",
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
  // number | Items per page (optional)
  limit: 20,
};

apiInstance.imagesSearchGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | [**string**] | Search string | defaults to '*'
 **ids** | [**string**] | CSV of valid content IDs. OR filter. Content ID is 1 or 2 or 3 | (optional) defaults to '1,2,3'
 **createdBy** | [**number**] | Valid ID of admin | (optional) defaults to 2
 **originId** | [**number**] | Valid ID of images origin | (optional) defaults to 2
 **type** | [**string**] | Valid slug of image type | (optional) defaults to 'eyecatcher'
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
 **limit** | [**number**] | Items per page | (optional) defaults to 20


### Return type

**ImagesCollection**

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


