# FootballApi.OddsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsIdLiveoddsGet**](OddsApi.md#eventsIdLiveoddsGet) | **GET** /events/{id}/liveodds | 
[**eventsIdOddsGet**](OddsApi.md#eventsIdOddsGet) | **GET** /events/{id}/odds | 
[**eventsIdPregameoddsGet**](OddsApi.md#eventsIdPregameoddsGet) | **GET** /events/{id}/pregameodds | 
[**liveoddsGet**](OddsApi.md#liveoddsGet) | **GET** /liveodds | 
[**oddProvidersGet**](OddsApi.md#oddProvidersGet) | **GET** /odd_providers | 
[**oddsGet**](OddsApi.md#oddsGet) | **GET** /odds | 
[**pregameoddsGet**](OddsApi.md#pregameoddsGet) | **GET** /pregameodds | 

<a name="eventsIdLiveoddsGet"></a>
# **eventsIdLiveoddsGet**
> [Odd] eventsIdLiveoddsGet(id, xOddClient)



Get available liveodds for an event

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.OddsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let xOddClient = "xOddClient_example"; // String | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.

apiInstance.eventsIdLiveoddsGet(id, xOddClient, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **xOddClient** | **String**| Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs. | 

### Return type

[**[Odd]**](Odd.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="eventsIdOddsGet"></a>
# **eventsIdOddsGet**
> [Odd] eventsIdOddsGet(id, xOddClient)



Get a list of odds available in the system

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.OddsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let xOddClient = "xOddClient_example"; // String | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.

apiInstance.eventsIdOddsGet(id, xOddClient, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **xOddClient** | **String**| Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs. | 

### Return type

[**[Odd]**](Odd.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="eventsIdPregameoddsGet"></a>
# **eventsIdPregameoddsGet**
> [Odd] eventsIdPregameoddsGet(id, xOddClient)



Get available pre-game odds for an Event

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.OddsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let xOddClient = "xOddClient_example"; // String | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.

apiInstance.eventsIdPregameoddsGet(id, xOddClient, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource. | 
 **xOddClient** | **String**| Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs. | 

### Return type

[**[Odd]**](Odd.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="liveoddsGet"></a>
# **liveoddsGet**
> [Odd] liveoddsGet(xOddClient)



Get a list of liveodds available in the system

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.OddsApi();
let xOddClient = "xOddClient_example"; // String | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.

apiInstance.liveoddsGet(xOddClient, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xOddClient** | **String**| Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs. | 

### Return type

[**[Odd]**](Odd.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="oddProvidersGet"></a>
# **oddProvidersGet**
> [OddProvider] oddProvidersGet(xOddClient)



Return a list of OddProviders available in the system. If X-Odd-Client is specified they will be filtered and ordered by the client configuration.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.OddsApi();
let xOddClient = "xOddClient_example"; // String | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.

apiInstance.oddProvidersGet(xOddClient, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xOddClient** | **String**| Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs. | 

### Return type

[**[OddProvider]**](OddProvider.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="oddsGet"></a>
# **oddsGet**
> [Odd] oddsGet(oddClient, sportType, eventType, opts)



Returns a list of Odds

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.OddsApi();
let oddClient = "oddClient_example"; // String | Odd client code
let sportType = "sportType_example"; // String | Sport type filter
let eventType = "eventType_example"; // String | Event type filter
let opts = { 
  'fromEventStartTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Return odds for Events with start_time >= from_event_start_time. RFC 3339 format
  'toEventStartTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Return odds for Events with start_time <= to_event_start_time. RFC 3339 format
  'teamId': 56, // Number | Team ID
  'teamIds': "teamIds_example", // String | List for team IDs separated by commas.
  'eventOrder': "eventOrder_example", // String | Order matching events for a specific client
  'matchIds': "matchIds_example", // String | List for match IDs separated by commas.
  'tournamentIds': "tournamentIds_example", // String | List for tournament IDs separated by commas.
  'seasonIds': "seasonIds_example", // String | List for season IDs separated by commas.
  'oddsType': "oddsType_example" // String | Pregame or live odds selector.
};
apiInstance.oddsGet(oddClient, sportType, eventType, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oddClient** | **String**| Odd client code | 
 **sportType** | **String**| Sport type filter | 
 **eventType** | **String**| Event type filter | 
 **fromEventStartTime** | **Date**| Return odds for Events with start_time &gt;&#x3D; from_event_start_time. RFC 3339 format | [optional] 
 **toEventStartTime** | **Date**| Return odds for Events with start_time &lt;&#x3D; to_event_start_time. RFC 3339 format | [optional] 
 **teamId** | **Number**| Team ID | [optional] 
 **teamIds** | **String**| List for team IDs separated by commas. | [optional] 
 **eventOrder** | **String**| Order matching events for a specific client | [optional] 
 **matchIds** | **String**| List for match IDs separated by commas. | [optional] 
 **tournamentIds** | **String**| List for tournament IDs separated by commas. | [optional] 
 **seasonIds** | **String**| List for season IDs separated by commas. | [optional] 
 **oddsType** | **String**| Pregame or live odds selector. | [optional] 

### Return type

[**[Odd]**](Odd.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="pregameoddsGet"></a>
# **pregameoddsGet**
> [Odd] pregameoddsGet(xOddClient, opts)



Returns a list of Odd Providers which have odds available for a given Event

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.OddsApi();
let xOddClient = "xOddClient_example"; // String | Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a 'coupon' key with the odds fo building URLs.
let opts = { 
  'fromTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Return odds for Events with start_time >= from_time. RFC 3339 format
  'toTime': new Date("2013-10-20T19:20:30+01:00") // Date | Return odds for Events with start_time <= to_time. RFC 3339 format
};
apiInstance.pregameoddsGet(xOddClient, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xOddClient** | **String**| Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs. | 
 **fromTime** | **Date**| Return odds for Events with start_time &gt;&#x3D; from_time. RFC 3339 format | [optional] 
 **toTime** | **Date**| Return odds for Events with start_time &lt;&#x3D; to_time. RFC 3339 format | [optional] 

### Return type

[**[Odd]**](Odd.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

