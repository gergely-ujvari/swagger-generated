# .TeamStatsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventTeamstatsGet**](TeamStatsApi.md#eventTeamstatsGet) | **GET** /event_teamstats | 
[**eventsIdTeamstatsGet**](TeamStatsApi.md#eventsIdTeamstatsGet) | **GET** /events/{id}/teamstats | 


# **eventTeamstatsGet**
> Array<EventTeamStats> eventTeamstatsGet()

Get statistics for the performance of each team involved in the event

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamStatsApi(configuration);

let body:.TeamStatsApiEventTeamstatsGetRequest = {
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // Date | Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours (optional)
  lastUpdate: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.eventTeamstatsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **lastUpdate** | [**Date**] | Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours | (optional) defaults to undefined


### Return type

**Array<EventTeamStats>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Statistics about each of the teams involved in the event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventsIdTeamstatsGet**
> Array<EventTeamStats> eventsIdTeamstatsGet()

Get statistics for the performance of each team involved in the event

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamStatsApi(configuration);

let body:.TeamStatsApiEventsIdTeamstatsGetRequest = {
  // number | Event.id for which team stats are requested
  id: 835,
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.eventsIdTeamstatsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Event.id for which team stats are requested | defaults to 835
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<EventTeamStats>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Statistics about each of the teams involved in the event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


