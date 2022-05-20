# FootballApi.EventsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsByTeamsGet**](EventsApi.md#eventsByTeamsGet) | **GET** /events/by_teams | 
[**eventsGet**](EventsApi.md#eventsGet) | **GET** /events | 
[**eventsIdGet**](EventsApi.md#eventsIdGet) | **GET** /events/{id} | 
[**eventsIdIncidentsGet**](EventsApi.md#eventsIdIncidentsGet) | **GET** /events/{id}/incidents | 
[**eventsIdLineupsGet**](EventsApi.md#eventsIdLineupsGet) | **GET** /events/{id}/lineups | 
[**eventsIdPlayersGet**](EventsApi.md#eventsIdPlayersGet) | **GET** /events/{id}/players | 
[**eventsIdPregameoddsGet**](EventsApi.md#eventsIdPregameoddsGet) | **GET** /events/{id}/pregameodds | 
[**eventsLiveGet**](EventsApi.md#eventsLiveGet) | **GET** /events/live | 
[**eventsSinceGet**](EventsApi.md#eventsSinceGet) | **GET** /events/since | 
[**matchesGet**](EventsApi.md#matchesGet) | **GET** /matches | 
[**tournamentsSeasonsStagesIdEventsGet**](EventsApi.md#tournamentsSeasonsStagesIdEventsGet) | **GET** /tournaments/seasons/stages/{id}/events | 

<a name="eventsByTeamsGet"></a>
# **eventsByTeamsGet**
> Event eventsByTeamsGet(homeId, awayId, opts)



Get a list of events by home and away team id

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.EventsApi();
let homeId = 56; // Number | Filter events with home team id
let awayId = 56; // Number | Filter events with away team id
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.eventsByTeamsGet(homeId, awayId, opts, (error, data, response) => {
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
 **homeId** | **Number**| Filter events with home team id | 
 **awayId** | **Number**| Filter events with away team id | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**Event**](Event.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="eventsGet"></a>
# **eventsGet**
> [Event] eventsGet(opts)



Get a list of Events

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.EventsApi();
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'fromTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter events, which have a start_time after the specified date, format is RFC 3339
  'toTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter events, which have a start_time before the specified date, format is RFC 3339
  'groupBy': "groupBy_example", // String | Group events by a specified property. Event models are returned as an 'items' array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
  'clientOrder': "clientOrder_example" // String | Order matching events for a specific client
};
apiInstance.eventsGet(opts, (error, data, response) => {
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
 **fromTime** | **Date**| Filter events, which have a start_time after the specified date, format is RFC 3339 | [optional] 
 **toTime** | **Date**| Filter events, which have a start_time before the specified date, format is RFC 3339 | [optional] 
 **groupBy** | **String**| Group events by a specified property. Event models are returned as an &#x27;items&#x27; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes. | [optional] 
 **clientOrder** | **String**| Order matching events for a specific client | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="eventsIdGet"></a>
# **eventsIdGet**
> Event eventsIdGet(id, opts)



### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.EventsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'expand': "expand_example" // String | Specifies additional information to include with the standing response
};
apiInstance.eventsIdGet(id, opts, (error, data, response) => {
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
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **expand** | **String**| Specifies additional information to include with the standing response | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="eventsIdIncidentsGet"></a>
# **eventsIdIncidentsGet**
> [EventIncident] eventsIdIncidentsGet(id, opts)



Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.EventsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'groupBy': "groupBy_example", // String | Group results by a property. If 'team' is used the json object has 'home_team' and 'away_team', each containing an array of EventIncident objects
  'direction': "direction_example" // String | Whether to sort the results by ascending or descending order
};
apiInstance.eventsIdIncidentsGet(id, opts, (error, data, response) => {
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
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **groupBy** | **String**| Group results by a property. If &#x27;team&#x27; is used the json object has &#x27;home_team&#x27; and &#x27;away_team&#x27;, each containing an array of EventIncident objects | [optional] 
 **direction** | **String**| Whether to sort the results by ascending or descending order | [optional] 

### Return type

[**[EventIncident]**](EventIncident.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="eventsIdLineupsGet"></a>
# **eventsIdLineupsGet**
> Lineup eventsIdLineupsGet(id, opts)



Get lineup information for an event. Includes players, formation and coach

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.EventsApi();
let id = 56; // Number | Event.id for which lineups are requested
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.eventsIdLineupsGet(id, opts, (error, data, response) => {
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
 **id** | **Number**| Event.id for which lineups are requested | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**Lineup**](Lineup.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="eventsIdPlayersGet"></a>
# **eventsIdPlayersGet**
> [EventPlayer] eventsIdPlayersGet(id, opts)



Get a list of players which are involved in an Event. The list can be used to build lineups for the teams

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.EventsApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'groupBy': "groupBy_example" // String | Group results by a property. If 'team' is used the json object has 'home_team' and 'away_team', each containing an array of EventPlayer objects
};
apiInstance.eventsIdPlayersGet(id, opts, (error, data, response) => {
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
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **groupBy** | **String**| Group results by a property. If &#x27;team&#x27; is used the json object has &#x27;home_team&#x27; and &#x27;away_team&#x27;, each containing an array of EventPlayer objects | [optional] 

### Return type

[**[EventPlayer]**](EventPlayer.md)

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

let apiInstance = new FootballApi.EventsApi();
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

<a name="eventsLiveGet"></a>
# **eventsLiveGet**
> [Event] eventsLiveGet(opts)



Get a list of events which are currently live

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.EventsApi();
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'groupBy': "groupBy_example" // String | Group events by a specified property. Event models are returned as an 'items' array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
};
apiInstance.eventsLiveGet(opts, (error, data, response) => {
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
 **groupBy** | **String**| Group events by a specified property. Event models are returned as an &#x27;items&#x27; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes. | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="eventsSinceGet"></a>
# **eventsSinceGet**
> [Event] eventsSinceGet(opts)



Get a list of events which have been updated since the specified timestamp

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.EventsApi();
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'lastUpdate': new Date("2013-10-20T19:20:30+01:00") // Date | Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour
};
apiInstance.eventsSinceGet(opts, (error, data, response) => {
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
 **lastUpdate** | **Date**| Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="matchesGet"></a>
# **matchesGet**
> [Event] matchesGet(opts)



Get a list of matches for team/between teams

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.EventsApi();
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'fromStartTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Return matches with start_time >= from_start_time. RFC 3339 format
  'toStartTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Return matches with start_time <= from_start_time. RFC 3339 format
  'teamIds': "teamIds_example", // String | List for team IDs separated by commas. In case of one ID, it will return all matches for a selected team, in case of multiple - it will return matches between selected teams.
  'matchIds': "matchIds_example", // String | List for match IDs separated by commas.
  'tournamentIds': "tournamentIds_example", // String | List for tournament IDs separated by commas.
  'stageIds': "stageIds_example", // String | List for stage IDs separated by commas.
  'rounds': "rounds_example", // String | List for rounds separated by commas.
  'seasonIds': "seasonIds_example", // String | List for season IDs separated by commas.
  'statusTypes': "statusTypes_example", // String | List of status types.
  'offset': 56, // Number | Results offset
  'limit': 56, // Number | Results limit
  'tournamentOrder': "tournamentOrder_example", // String | Tournament filtering and ordering.
  'refereeId': "refereeId_example", // String | Filter matches by referee
  'venueId': "venueId_example", // String | Filter matches by venue
  'statusCode': "statusCode_example", // String | Filter matches by event_status.code
  'sortDirection': "sortDirection_example" // String | Result ordering - asc/desc
};
apiInstance.matchesGet(opts, (error, data, response) => {
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
 **fromStartTime** | **Date**| Return matches with start_time &gt;&#x3D; from_start_time. RFC 3339 format | [optional] 
 **toStartTime** | **Date**| Return matches with start_time &lt;&#x3D; from_start_time. RFC 3339 format | [optional] 
 **teamIds** | **String**| List for team IDs separated by commas. In case of one ID, it will return all matches for a selected team, in case of multiple - it will return matches between selected teams. | [optional] 
 **matchIds** | **String**| List for match IDs separated by commas. | [optional] 
 **tournamentIds** | **String**| List for tournament IDs separated by commas. | [optional] 
 **stageIds** | **String**| List for stage IDs separated by commas. | [optional] 
 **rounds** | **String**| List for rounds separated by commas. | [optional] 
 **seasonIds** | **String**| List for season IDs separated by commas. | [optional] 
 **statusTypes** | **String**| List of status types. | [optional] 
 **offset** | **Number**| Results offset | [optional] 
 **limit** | **Number**| Results limit | [optional] 
 **tournamentOrder** | **String**| Tournament filtering and ordering. | [optional] 
 **refereeId** | **String**| Filter matches by referee | [optional] 
 **venueId** | **String**| Filter matches by venue | [optional] 
 **statusCode** | **String**| Filter matches by event_status.code | [optional] 
 **sortDirection** | **String**| Result ordering - asc/desc | [optional] 

### Return type

[**[Event]**](Event.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="tournamentsSeasonsStagesIdEventsGet"></a>
# **tournamentsSeasonsStagesIdEventsGet**
> [EventsByDate] tournamentsSeasonsStagesIdEventsGet(id, opts)



Get a list of events which are fixtures in a given TournamentSeasonStage resource

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.EventsApi();
let id = 56; // Number | Unique identifier of the TournamentSeasonStage resource
let opts = { 
  'round': "round_example", // String | Filter the event list by a specific round
  'sortDirection': "asc", // String | Sort results by date in ascending or descending order
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.tournamentsSeasonsStagesIdEventsGet(id, opts, (error, data, response) => {
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
 **id** | **Number**| Unique identifier of the TournamentSeasonStage resource | 
 **round** | **String**| Filter the event list by a specific round | [optional] 
 **sortDirection** | **String**| Sort results by date in ascending or descending order | [optional] [default to asc]
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**[EventsByDate]**](EventsByDate.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

