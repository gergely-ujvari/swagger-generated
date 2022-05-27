# .MiscellaneousApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mappingsDelete**](MiscellaneousApi.md#mappingsDelete) | **DELETE** /mappings | Delete ID Mapping by content_id/content_type key
[**mappingsGet**](MiscellaneousApi.md#mappingsGet) | **GET** /mappings | Get ID mappings according to various filters
[**mappingsPut**](MiscellaneousApi.md#mappingsPut) | **PUT** /mappings | Add or replace ID Mapping entry. The unique identificator of ID Mapping is content_id/content_type key


# **mappingsDelete**
> void mappingsDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MiscellaneousApi(configuration);

let body:.MiscellaneousApiMappingsDeleteRequest = {
  // string
  contentId: "content_id_example",
  // string
  contentType: "content_type_example",
};

apiInstance.mappingsDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | [**string**] |  | defaults to undefined
 **contentType** | [**string**] |  | defaults to undefined


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
**200** | ID Mapping Deleted |  -  |
**404** | ID Mapping not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mappingsGet**
> MappingsDelete200Response mappingsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MiscellaneousApi(configuration);

let body:.MiscellaneousApiMappingsGetRequest = {
  // string (optional)
  contentId: "content_id_example",
  // 'article' | 'video' | 'gallery' | 'image' | 'tag' | 'category' | 'banner' | 'list' | 'poll' | 'author' | 'type' | 'status' | 'region' | 'custom' (optional)
  contentType: "article",
  // string (optional)
  sourceName: "AFP",
  // string (optional)
  sourceType: "newsarticle",
  // string (optional)
  sourceId: "afp123",
};

apiInstance.mappingsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contentId** | [**string**] |  | (optional) defaults to undefined
 **contentType** | [**&#39;article&#39; | &#39;video&#39; | &#39;gallery&#39; | &#39;image&#39; | &#39;tag&#39; | &#39;category&#39; | &#39;banner&#39; | &#39;list&#39; | &#39;poll&#39; | &#39;author&#39; | &#39;type&#39; | &#39;status&#39; | &#39;region&#39; | &#39;custom&#39;**]**Array<&#39;article&#39; &#124; &#39;video&#39; &#124; &#39;gallery&#39; &#124; &#39;image&#39; &#124; &#39;tag&#39; &#124; &#39;category&#39; &#124; &#39;banner&#39; &#124; &#39;list&#39; &#124; &#39;poll&#39; &#124; &#39;author&#39; &#124; &#39;type&#39; &#124; &#39;status&#39; &#124; &#39;region&#39; &#124; &#39;custom&#39;>** |  | (optional) defaults to undefined
 **sourceName** | [**string**] |  | (optional) defaults to 'AFP'
 **sourceType** | [**string**] |  | (optional) defaults to 'newsarticle'
 **sourceId** | [**string**] |  | (optional) defaults to 'afp123'


### Return type

**MappingsDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ID Mapping |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mappingsPut**
> IdMapping mappingsPut()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MiscellaneousApi(configuration);

let body:.MiscellaneousApiMappingsPutRequest = {
  // IdMapping | Add ID Mapping entry (optional)
  idMapping: {
    contentId: "contentId_example",
    contentType: "article",
    sourceName: "sourceName_example",
    sourceType: true,
    sourceId: "sourceId_example",
  },
};

apiInstance.mappingsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idMapping** | **IdMapping**| Add ID Mapping entry |


### Return type

**IdMapping**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ID Mapping |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


