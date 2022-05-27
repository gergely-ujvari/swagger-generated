# .EventIncidentsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventIncidentsGet**](EventIncidentsApi.md#eventIncidentsGet) | **GET** /event_incidents | 


# **eventIncidentsGet**
> Array<EventIncident> eventIncidentsGet()

Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventIncidentsApi(configuration);

let body:.EventIncidentsApiEventIncidentsGetRequest = {
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // Date | Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours (optional)
  lastUpdate: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.eventIncidentsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **lastUpdate** | [**Date**] | Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours | (optional) defaults to undefined


### Return type

**Array<EventIncident>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of EventIncident which have been updated after a specified time |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


