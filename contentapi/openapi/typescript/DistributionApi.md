# .DistributionApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionChannelsGet**](DistributionApi.md#distributionChannelsGet) | **GET** /distribution/channels | 
[**distributionChannelsIdDelete**](DistributionApi.md#distributionChannelsIdDelete) | **DELETE** /distribution/channels/{id} | Delete Channel
[**distributionChannelsIdGet**](DistributionApi.md#distributionChannelsIdGet) | **GET** /distribution/channels/{id} | Get Single Channel
[**distributionChannelsIdPatch**](DistributionApi.md#distributionChannelsIdPatch) | **PATCH** /distribution/channels/{id} | Update a Channel
[**distributionChannelsPost**](DistributionApi.md#distributionChannelsPost) | **POST** /distribution/channels | Add Channel
[**distributionRegionsGet**](DistributionApi.md#distributionRegionsGet) | **GET** /distribution/regions | 
[**distributionRegionsIdDelete**](DistributionApi.md#distributionRegionsIdDelete) | **DELETE** /distribution/regions/{id} | Delete Region
[**distributionRegionsIdGet**](DistributionApi.md#distributionRegionsIdGet) | **GET** /distribution/regions/{id} | Get Single Region
[**distributionRegionsIdPatch**](DistributionApi.md#distributionRegionsIdPatch) | **PATCH** /distribution/regions/{id} | Update a Region
[**distributionRegionsPost**](DistributionApi.md#distributionRegionsPost) | **POST** /distribution/regions | Add Region


# **distributionChannelsGet**
> ChannelsCollection distributionChannelsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DistributionApi(configuration);

let body:any = {};

apiInstance.distributionChannelsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**ChannelsCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All available channels for this project |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **distributionChannelsIdDelete**
> void distributionChannelsIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DistributionApi(configuration);

let body:.DistributionApiDistributionChannelsIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.distributionChannelsIdDelete(body).then((data:any) => {
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
**200** | Channel Deleted |  -  |
**404** | Channel not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **distributionChannelsIdGet**
> DistributionChannelsIdDelete200Response distributionChannelsIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DistributionApi(configuration);

let body:.DistributionApiDistributionChannelsIdGetRequest = {
  // number
  id: 1,
};

apiInstance.distributionChannelsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**DistributionChannelsIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Channel |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **distributionChannelsIdPatch**
> DistributionChannelsIdDelete200Response distributionChannelsIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DistributionApi(configuration);

let body:.DistributionApiDistributionChannelsIdPatchRequest = {
  // number
  id: 1,
  // ChannelRequest | Update Channel (optional)
  channelRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.distributionChannelsIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelRequest** | **ChannelRequest**| Update Channel |
 **id** | [**number**] |  | defaults to undefined


### Return type

**DistributionChannelsIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Channel |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **distributionChannelsPost**
> ChannelResponse distributionChannelsPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DistributionApi(configuration);

let body:.DistributionApiDistributionChannelsPostRequest = {
  // ChannelRequest | Add Channel (optional)
  channelRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.distributionChannelsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelRequest** | **ChannelRequest**| Add Channel |


### Return type

**ChannelResponse**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Channel |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **distributionRegionsGet**
> RegionsCollection distributionRegionsGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DistributionApi(configuration);

let body:any = {};

apiInstance.distributionRegionsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**RegionsCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All available regions for this project |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **distributionRegionsIdDelete**
> void distributionRegionsIdDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DistributionApi(configuration);

let body:.DistributionApiDistributionRegionsIdDeleteRequest = {
  // number
  id: 1,
};

apiInstance.distributionRegionsIdDelete(body).then((data:any) => {
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
**200** | Region Deleted |  -  |
**404** | Region not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **distributionRegionsIdGet**
> DistributionRegionsIdDelete200Response distributionRegionsIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DistributionApi(configuration);

let body:.DistributionApiDistributionRegionsIdGetRequest = {
  // number
  id: 1,
};

apiInstance.distributionRegionsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] |  | defaults to undefined


### Return type

**DistributionRegionsIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Region |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **distributionRegionsIdPatch**
> DistributionRegionsIdDelete200Response distributionRegionsIdPatch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DistributionApi(configuration);

let body:.DistributionApiDistributionRegionsIdPatchRequest = {
  // number
  id: 1,
  // RegionRequest | Update Region (optional)
  regionRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.distributionRegionsIdPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **regionRequest** | **RegionRequest**| Update Region |
 **id** | [**number**] |  | defaults to undefined


### Return type

**DistributionRegionsIdDelete200Response**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated Region |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **distributionRegionsPost**
> RegionResponse distributionRegionsPost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DistributionApi(configuration);

let body:.DistributionApiDistributionRegionsPostRequest = {
  // RegionRequest | Add Region (optional)
  regionRequest: {
    slug: "slug_example",
    name: "name_example",
    _default: true,
    description: "description_example",
  },
};

apiInstance.distributionRegionsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **regionRequest** | **RegionRequest**| Add Region |


### Return type

**RegionResponse**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Region |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


