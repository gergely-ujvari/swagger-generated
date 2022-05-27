# .VenuesApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2VenuesGet**](VenuesApi.md#v2VenuesGet) | **GET** /v2/venues | 
[**v2VenuesIdGet**](VenuesApi.md#v2VenuesIdGet) | **GET** /v2/venues/{id} | 
[**v2VenuesIdPut**](VenuesApi.md#v2VenuesIdPut) | **PUT** /v2/venues/{id} | 
[**v2VenuesPost**](VenuesApi.md#v2VenuesPost) | **POST** /v2/venues | 


# **v2VenuesGet**
> V2VenuesList v2VenuesGet()

List venues with offset and limit parameters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VenuesApi(configuration);

let body:.VenuesApiV2VenuesGetRequest = {
  // number | The number of items to skip before starting to collect the result set
  offset: 1,
  // number | Limit the number of results returned
  limit: 1,
  // string | Filter venues which have hosted matches in the specified CSV season_ids (optional)
  seasonIds: "season_ids_example",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2VenuesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | [**number**] | The number of items to skip before starting to collect the result set | defaults to undefined
 **limit** | [**number**] | Limit the number of results returned | defaults to undefined
 **seasonIds** | [**string**] | Filter venues which have hosted matches in the specified CSV season_ids | (optional) defaults to undefined
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2VenuesList**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of venues |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2VenuesIdGet**
> V2VenuesGetId v2VenuesIdGet()

Get venue by id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VenuesApi(configuration);

let body:.VenuesApiV2VenuesIdGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2VenuesIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2VenuesGetId**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Venue data |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2VenuesIdPut**
> V2VenuesPut v2VenuesIdPut()

Update venue information

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VenuesApi(configuration);

let body:.VenuesApiV2VenuesIdPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // V2PutVenues | Venue information to save in persistance (optional)
  venue: {
    id: "id_example",
    name: "name_example",
    countryId: "countryId_example",
    cityId: "cityId_example",
    profile: {
      lat: 3.14,
      lng: 3.14,
      capacity: 1,
    },
  },
};

apiInstance.v2VenuesIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **venue** | **V2PutVenues**| Venue information to save in persistance |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**V2VenuesPut**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Venue successfuly saved, returns venue information |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2VenuesPost**
> V2Venues v2VenuesPost()

Store a newly created venue in storage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .VenuesApi(configuration);

let body:.VenuesApiV2VenuesPostRequest = {
  // V2PostVenues (optional)
  venue: {
    name: "name_example",
    countryId: "countryId_example",
    cityId: "cityId_example",
    profile: {
      lat: 3.14,
      lng: 3.14,
      capacity: 1,
    },
  },
};

apiInstance.v2VenuesPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **venue** | **V2PostVenues**|  |


### Return type

**V2Venues**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Venue successfuly saved, returns venue information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


