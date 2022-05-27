# .MatchEventsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2MatchesIdEventsGet**](MatchEventsApi.md#v2MatchesIdEventsGet) | **GET** /v2/matches/{id}/events | 
[**v2MatchesIdEventsPut**](MatchEventsApi.md#v2MatchesIdEventsPut) | **PUT** /v2/matches/{id}/events | 


# **v2MatchesIdEventsGet**
> V2MatchEventProfile v2MatchesIdEventsGet()

Get match events by match id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatchEventsApi(configuration);

let body:.MatchEventsApiV2MatchesIdEventsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2MatchesIdEventsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2MatchEventProfile**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of events for given match |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2MatchesIdEventsPut**
> V2MatchEventProfile v2MatchesIdEventsPut(matchEvents)

Replaces all match events with the given input

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MatchEventsApi(configuration);

let body:.MatchEventsApiV2MatchesIdEventsPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // V2MatchEventInputWrapper | Match event information to save
  matchEvents: {
    events: [
      {
        id: "id_example",
        typeCode: "YELLOW_RED_CARD",
        teamPosition: "HOME",
        minute: 1,
        primaryPlayerId: "primaryPlayerId_example",
        secondaryPlayerId: "secondaryPlayerId_example",
        sortOrder: 1,
      },
    ],
  },
};

apiInstance.v2MatchesIdEventsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **matchEvents** | **V2MatchEventInputWrapper**| Match event information to save |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**V2MatchEventProfile**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | list of events for given match |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


