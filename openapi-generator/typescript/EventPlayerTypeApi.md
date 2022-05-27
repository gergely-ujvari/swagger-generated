# .EventPlayerTypeApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventPlayerTypesGet**](EventPlayerTypeApi.md#eventPlayerTypesGet) | **GET** /event_player_types | 


# **eventPlayerTypesGet**
> EventPlayerType eventPlayerTypesGet()

Get a list of available EventPlayerType objects in the system

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventPlayerTypeApi(configuration);

let body:.EventPlayerTypeApiEventPlayerTypesGetRequest = {
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.eventPlayerTypesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**EventPlayerType**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of EventPlayerType objects available in the system |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


