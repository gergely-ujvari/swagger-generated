# .EventsApi

All URIs are relative to *https://false*

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


# **eventsByTeamsGet**
> Event eventsByTeamsGet()

Get a list of events by home and away team id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventsByTeamsGetRequest = {
  // number | Filter events with home team id
  homeId: 1,
  // number | Filter events with away team id
  awayId: 1,
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.eventsByTeamsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **homeId** | [**number**] | Filter events with home team id | defaults to undefined
 **awayId** | [**number**] | Filter events with away team id | defaults to undefined
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Event**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event object |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventsGet**
> Array<Event> eventsGet()

Get a list of Events

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventsGetRequest = {
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // Date | Filter events, which have a start_time after the specified date, format is RFC 3339 (optional)
  fromTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Filter events, which have a start_time before the specified date, format is RFC 3339 (optional)
  toTime: new Date('1970-01-01T00:00:00.00Z'),
  // '' | 'tournament_season_stage' | Group events by a specified property. Event models are returned as an 'items' array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes. (optional)
  groupBy: "",
  // 'sportalios' | Order matching events for a specific client (optional)
  clientOrder: "sportalios",
};

apiInstance.eventsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **fromTime** | [**Date**] | Filter events, which have a start_time after the specified date, format is RFC 3339 | (optional) defaults to undefined
 **toTime** | [**Date**] | Filter events, which have a start_time before the specified date, format is RFC 3339 | (optional) defaults to undefined
 **groupBy** | [**&#39;&#39; | &#39;tournament_season_stage&#39;**]**Array<&#39;&#39; &#124; &#39;tournament_season_stage&#39;>** | Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes. | (optional) defaults to undefined
 **clientOrder** | [**&#39;sportalios&#39;**]**Array<&#39;sportalios&#39;>** | Order matching events for a specific client | (optional) defaults to undefined


### Return type

**Array<Event>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of event objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventsIdGet**
> Event eventsIdGet()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventsIdGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'form' | 'form.events' | Specifies additional information to include with the standing response (optional)
  expand: "form",
};

apiInstance.eventsIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **expand** | [**&#39;form&#39; | &#39;form.events&#39;**]**Array<&#39;form&#39; &#124; &#39;form.events&#39;>** | Specifies additional information to include with the standing response | (optional) defaults to undefined


### Return type

**Event**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event object |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventsIdIncidentsGet**
> Array<EventIncident> eventsIdIncidentsGet()

Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventsIdIncidentsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'team' | Group results by a property. If 'team' is used the json object has 'home_team' and 'away_team', each containing an array of EventIncident objects (optional)
  groupBy: "team",
  // 'asc' | 'desc' | Whether to sort the results by ascending or descending order (optional)
  direction: "asc",
};

apiInstance.eventsIdIncidentsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **groupBy** | [**&#39;team&#39;**]**Array<&#39;team&#39;>** | Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventIncident objects | (optional) defaults to undefined
 **direction** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Whether to sort the results by ascending or descending order | (optional) defaults to undefined


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
**200** | List of EventIncident objects related to the specifed event id. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventsIdLineupsGet**
> Lineup eventsIdLineupsGet()

Get lineup information for an event. Includes players, formation and coach

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventsIdLineupsGetRequest = {
  // number | Event.id for which lineups are requested
  id: 835,
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.eventsIdLineupsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Event.id for which lineups are requested | defaults to 835
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Lineup**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lineup information for the home and away team |  -  |
**404** | No lineup information found for the event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventsIdPlayersGet**
> Array<EventPlayer> eventsIdPlayersGet()

Get a list of players which are involved in an Event. The list can be used to build lineups for the teams

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventsIdPlayersGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'team' | Group results by a property. If 'team' is used the json object has 'home_team' and 'away_team', each containing an array of EventPlayer objects (optional)
  groupBy: "team",
};

apiInstance.eventsIdPlayersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **groupBy** | [**&#39;team&#39;**]**Array<&#39;team&#39;>** | Group results by a property. If &#39;team&#39; is used the json object has &#39;home_team&#39; and &#39;away_team&#39;, each containing an array of EventPlayer objects | (optional) defaults to undefined


### Return type

**Array<EventPlayer>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of EventPlayers which form the lineups of the two teams in the Event |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventsIdPregameoddsGet**
> Array<Odd> eventsIdPregameoddsGet()

Get available pre-game odds for an Event

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventsIdPregameoddsGetRequest = {
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

# **eventsLiveGet**
> Array<Event> eventsLiveGet()

Get a list of events which are currently live

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventsLiveGetRequest = {
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'tournament_season_stage' | Group events by a specified property. Event models are returned as an 'items' array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes. (optional)
  groupBy: "tournament_season_stage",
};

apiInstance.eventsLiveGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **groupBy** | [**&#39;tournament_season_stage&#39;**]**Array<&#39;tournament_season_stage&#39;>** | Group events by a specified property. Event models are returned as an &#39;items&#39; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes. | (optional) defaults to undefined


### Return type

**Array<Event>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of event objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **eventsSinceGet**
> Array<Event> eventsSinceGet()

Get a list of events which have been updated since the specified timestamp

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventsSinceGetRequest = {
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // Date | Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour (optional)
  lastUpdate: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.eventsSinceGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **lastUpdate** | [**Date**] | Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour | (optional) defaults to undefined


### Return type

**Array<Event>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of matching Event objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **matchesGet**
> Array<Event> matchesGet()

Get a list of matches for team/between teams

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiMatchesGetRequest = {
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // Date | Return matches with start_time >= from_start_time. RFC 3339 format (optional)
  fromStartTime: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Return matches with start_time <= from_start_time. RFC 3339 format (optional)
  toStartTime: new Date('1970-01-01T00:00:00.00Z'),
  // string | List for team IDs separated by commas. In case of one ID, it will return all matches for a selected team, in case of multiple - it will return matches between selected teams. (optional)
  teamIds: "team_ids_example",
  // string | List for match IDs separated by commas. (optional)
  matchIds: "match_ids_example",
  // string | List for tournament IDs separated by commas. (optional)
  tournamentIds: "tournament_ids_example",
  // string | List for stage IDs separated by commas. (optional)
  stageIds: "stage_ids_example",
  // string | List for rounds separated by commas. (optional)
  rounds: "rounds_example",
  // string | List for season IDs separated by commas. (optional)
  seasonIds: "season_ids_example",
  // 'finished' | 'notstarted' | 'inprogress' | 'interrupted' | 'cancelled' | List of status types. (optional)
  statusTypes: "finished",
  // number | Results offset (optional)
  offset: 1,
  // number | Results limit (optional)
  limit: 1,
  // string | Tournament filtering and ordering. (optional)
  tournamentOrder: "tournament_order_example",
  // string | Filter matches by referee (optional)
  refereeId: "referee_id_example",
  // string | Filter matches by venue (optional)
  venueId: "venue_id_example",
  // string | Filter matches by event_status.code (optional)
  statusCode: "status_code_example",
  // 'asc' | 'desc' | Result ordering - asc/desc (optional)
  sortDirection: "asc",
};

apiInstance.matchesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **fromStartTime** | [**Date**] | Return matches with start_time &gt;&#x3D; from_start_time. RFC 3339 format | (optional) defaults to undefined
 **toStartTime** | [**Date**] | Return matches with start_time &lt;&#x3D; from_start_time. RFC 3339 format | (optional) defaults to undefined
 **teamIds** | [**string**] | List for team IDs separated by commas. In case of one ID, it will return all matches for a selected team, in case of multiple - it will return matches between selected teams. | (optional) defaults to undefined
 **matchIds** | [**string**] | List for match IDs separated by commas. | (optional) defaults to undefined
 **tournamentIds** | [**string**] | List for tournament IDs separated by commas. | (optional) defaults to undefined
 **stageIds** | [**string**] | List for stage IDs separated by commas. | (optional) defaults to undefined
 **rounds** | [**string**] | List for rounds separated by commas. | (optional) defaults to undefined
 **seasonIds** | [**string**] | List for season IDs separated by commas. | (optional) defaults to undefined
 **statusTypes** | [**&#39;finished&#39; | &#39;notstarted&#39; | &#39;inprogress&#39; | &#39;interrupted&#39; | &#39;cancelled&#39;**]**Array<&#39;finished&#39; &#124; &#39;notstarted&#39; &#124; &#39;inprogress&#39; &#124; &#39;interrupted&#39; &#124; &#39;cancelled&#39;>** | List of status types. | (optional) defaults to undefined
 **offset** | [**number**] | Results offset | (optional) defaults to undefined
 **limit** | [**number**] | Results limit | (optional) defaults to undefined
 **tournamentOrder** | [**string**] | Tournament filtering and ordering. | (optional) defaults to undefined
 **refereeId** | [**string**] | Filter matches by referee | (optional) defaults to undefined
 **venueId** | [**string**] | Filter matches by venue | (optional) defaults to undefined
 **statusCode** | [**string**] | Filter matches by event_status.code | (optional) defaults to undefined
 **sortDirection** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Result ordering - asc/desc | (optional) defaults to undefined


### Return type

**Array<Event>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of event objects |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **tournamentsSeasonsStagesIdEventsGet**
> Array<EventsByDate> tournamentsSeasonsStagesIdEventsGet()

Get a list of events which are fixtures in a given TournamentSeasonStage resource

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiTournamentsSeasonsStagesIdEventsGetRequest = {
  // number | Unique identifier of the TournamentSeasonStage resource
  id: 57,
  // string | Filter the event list by a specific round (optional)
  round: "round_example",
  // 'asc' | 'desc' | Sort results by date in ascending or descending order (optional)
  sortDirection: "asc",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.tournamentsSeasonsStagesIdEventsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | Unique identifier of the TournamentSeasonStage resource | defaults to 57
 **round** | [**string**] | Filter the event list by a specific round | (optional) defaults to undefined
 **sortDirection** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | Sort results by date in ascending or descending order | (optional) defaults to 'asc'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<EventsByDate>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events which are fixtures in a TournamentSeasonStage |  -  |
**404** | A TournamentSeasonStage resource with the specified id is not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


