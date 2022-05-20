# FootballApi.TeamStatsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventTeamstatsGet**](TeamStatsApi.md#eventTeamstatsGet) | **GET** /event_teamstats | 
[**eventsIdTeamstatsGet**](TeamStatsApi.md#eventsIdTeamstatsGet) | **GET** /events/{id}/teamstats | 

<a name="eventTeamstatsGet"></a>
# **eventTeamstatsGet**
> [EventTeamStats] eventTeamstatsGet(opts)



Get statistics for the performance of each team involved in the event

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamStatsApi();
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'lastUpdate': new Date("2013-10-20T19:20:30+01:00") // Date | Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours
};
apiInstance.eventTeamstatsGet(opts, (error, data, response) => {
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

[**[EventTeamStats]**](EventTeamStats.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="eventsIdTeamstatsGet"></a>
# **eventsIdTeamstatsGet**
> [EventTeamStats] eventsIdTeamstatsGet(id, opts)



Get statistics for the performance of each team involved in the event

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamStatsApi();
let id = 56; // Number | Event.id for which team stats are requested
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.eventsIdTeamstatsGet(id, opts, (error, data, response) => {
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
 **id** | **Number**| Event.id for which team stats are requested | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**[EventTeamStats]**](EventTeamStats.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

