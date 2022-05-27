# FootballApi.EventIncidentsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventIncidentsGet**](EventIncidentsApi.md#eventIncidentsGet) | **GET** /event_incidents | 

<a name="eventIncidentsGet"></a>
# **eventIncidentsGet**
> [EventIncident] eventIncidentsGet(opts)



Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.EventIncidentsApi();
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'lastUpdate': new Date("2013-10-20T19:20:30+01:00") // Date | Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours
};
apiInstance.eventIncidentsGet(opts, (error, data, response) => {
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
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **lastUpdate** | **Date**| Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours | [optional] 

### Return type

[**[EventIncident]**](EventIncident.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

