# .OddsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsIdLiveoddsGet**](OddsApi.md#eventsIdLiveoddsGet) | **GET** /events/{id}/liveodds | 
[**eventsIdOddsGet**](OddsApi.md#eventsIdOddsGet) | **GET** /events/{id}/odds | 
[**eventsIdPregameoddsGet**](OddsApi.md#eventsIdPregameoddsGet) | **GET** /events/{id}/pregameodds | 
[**liveoddsGet**](OddsApi.md#liveoddsGet) | **GET** /liveodds | 
[**oddProvidersGet**](OddsApi.md#oddProvidersGet) | **GET** /odd_providers | 
[**oddsGet**](OddsApi.md#oddsGet) | **GET** /odds | 
[**pregameoddsGet**](OddsApi.md#pregameoddsGet) | **GET** /pregameodds | 


# **eventsIdLiveoddsGet**
> Array<Odd> eventsIdLiveoddsGet()

Get available liveodds for an event

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OddsApi(configuration);

let body:.OddsApiEventsIdLiveoddsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
  xOddClient: "X-Odd-Client_example",
};

apiInstance.eventsIdLiveoddsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **xOddClient** | [**string**] | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs. | defaults to undefined


### Return type

**Array<Odd>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of liveodds for an event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventsIdOddsGet**
> Array<Odd> eventsIdOddsGet()

Get a list of odds available in the system

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OddsApi(configuration);

let body:.OddsApiEventsIdOddsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
  xOddClient: "X-Odd-Client_example",
};

apiInstance.eventsIdOddsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **xOddClient** | [**string**] | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs. | defaults to undefined


### Return type

**Array<Odd>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of odds grouped by event id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventsIdPregameoddsGet**
> Array<Odd> eventsIdPregameoddsGet()

Get available pre-game odds for an Event

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OddsApi(configuration);

let body:.OddsApiEventsIdPregameoddsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
  xOddClient: "X-Odd-Client_example",
};

apiInstance.eventsIdPregameoddsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **xOddClient** | [**string**] | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs. | defaults to undefined


### Return type

**Array<Odd>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of pre-game odds |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **liveoddsGet**
> Array<Odd> liveoddsGet()

Get a list of liveodds available in the system

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OddsApi(configuration);

let body:.OddsApiLiveoddsGetRequest = {
  // string | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
  xOddClient: "X-Odd-Client_example",
};

apiInstance.liveoddsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xOddClient** | [**string**] | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs. | defaults to undefined


### Return type

**Array<Odd>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of liveodds grouped by event id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **oddProvidersGet**
> Array<OddProvider> oddProvidersGet()

Return a list of OddProviders available in the system. If X-Odd-Client is specified they will be filtered and ordered by the client configuration.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OddsApi(configuration);

let body:.OddsApiOddProvidersGetRequest = {
  // string | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
  xOddClient: "X-Odd-Client_example",
};

apiInstance.oddProvidersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xOddClient** | [**string**] | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs. | defaults to undefined


### Return type

**Array<OddProvider>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of OddProvider objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **oddsGet**
> Array<Odd> oddsGet()

Returns a list of Odds

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OddsApi(configuration);

let body:.OddsApiOddsGetRequest = {
  // string | Odd client code
  oddClient: "odd_client_example",
  // 'football' | Sport type filter
  sportType: "football",
  // 'match' | Event type filter
  eventType: "match",
  // Date | Return odds for Events with start_time >= from_event_start_time. RFC 3339 format (optional)
  fromEventStartTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Return odds for Events with start_time <= to_event_start_time. RFC 3339 format (optional)
  toEventStartTime: new Date('1970-01-01T00:00:00.00Z'),
  // number | Team ID (optional)
  teamId: 1,
  // string | List for team IDs separated by commas. (optional)
  teamIds: "team_ids_example",
  // string | Order matching events for a specific client (optional)
  eventOrder: "event_order_example",
  // string | List for match IDs separated by commas. (optional)
  matchIds: "match_ids_example",
  // string | List for tournament IDs separated by commas. (optional)
  tournamentIds: "tournament_ids_example",
  // string | List for season IDs separated by commas. (optional)
  seasonIds: "season_ids_example",
  // 'prematch' | 'live' | 'all' | Pregame or live odds selector. (optional)
  oddsType: "prematch",
};

apiInstance.oddsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oddClient** | [**string**] | Odd client code | defaults to undefined
 **sportType** | [**&#39;football&#39;**]**Array<&#39;football&#39;>** | Sport type filter | defaults to undefined
 **eventType** | [**&#39;match&#39;**]**Array<&#39;match&#39;>** | Event type filter | defaults to undefined
 **fromEventStartTime** | [**Date**] | Return odds for Events with start_time &gt;&#x3D; from_event_start_time. RFC 3339 format | (optional) defaults to undefined
 **toEventStartTime** | [**Date**] | Return odds for Events with start_time &lt;&#x3D; to_event_start_time. RFC 3339 format | (optional) defaults to undefined
 **teamId** | [**number**] | Team ID | (optional) defaults to undefined
 **teamIds** | [**string**] | List for team IDs separated by commas. | (optional) defaults to undefined
 **eventOrder** | [**string**] | Order matching events for a specific client | (optional) defaults to undefined
 **matchIds** | [**string**] | List for match IDs separated by commas. | (optional) defaults to undefined
 **tournamentIds** | [**string**] | List for tournament IDs separated by commas. | (optional) defaults to undefined
 **seasonIds** | [**string**] | List for season IDs separated by commas. | (optional) defaults to undefined
 **oddsType** | [**&#39;prematch&#39; | &#39;live&#39; | &#39;all&#39;**]**Array<&#39;prematch&#39; &#124; &#39;live&#39; &#124; &#39;all&#39;>** | Pregame or live odds selector. | (optional) defaults to undefined


### Return type

**Array<Odd>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Odds grouped by event id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **pregameoddsGet**
> Array<Odd> pregameoddsGet()

Returns a list of Odd Providers which have odds available for a given Event

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .OddsApi(configuration);

let body:.OddsApiPregameoddsGetRequest = {
  // string | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
  xOddClient: "X-Odd-Client_example",
  // Date | Return odds for Events with start_time >= from_time. RFC 3339 format (optional)
  fromTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Return odds for Events with start_time <= to_time. RFC 3339 format (optional)
  toTime: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.pregameoddsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xOddClient** | [**string**] | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#39;coupon&#39; key with the odds fo building URLs. | defaults to undefined
 **fromTime** | [**Date**] | Return odds for Events with start_time &gt;&#x3D; from_time. RFC 3339 format | (optional) defaults to undefined
 **toTime** | [**Date**] | Return odds for Events with start_time &lt;&#x3D; to_time. RFC 3339 format | (optional) defaults to undefined


### Return type

**Array<Odd>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Odds grouped by event id |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


