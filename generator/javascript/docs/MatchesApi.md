# FootballApi.MatchesApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**matchesIdCommentaryGet**](MatchesApi.md#matchesIdCommentaryGet) | **GET** /matches/{id}/commentary | 
[**v2MatchesGet**](MatchesApi.md#v2MatchesGet) | **GET** /v2/matches | 
[**v2MatchesIdGet**](MatchesApi.md#v2MatchesIdGet) | **GET** /v2/matches/{id} | 
[**v2MatchesIdPut**](MatchesApi.md#v2MatchesIdPut) | **PUT** /v2/matches/{id} | 
[**v2MatchesLivescoreGet**](MatchesApi.md#v2MatchesLivescoreGet) | **GET** /v2/matches/livescore | 
[**v2MatchesPost**](MatchesApi.md#v2MatchesPost) | **POST** /v2/matches | 

<a name="matchesIdCommentaryGet"></a>
# **matchesIdCommentaryGet**
> [LiveCommentaryOutputDto] matchesIdCommentaryGet(id, languageCode)



Get a list of live commentaries with specified match id and language

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.MatchesApi();
let id = "id_example"; // String | Unique identifier of the resource.
let languageCode = "languageCode_example"; // String | Return translations depending on language code

apiInstance.matchesIdCommentaryGet(id, languageCode, (error, data, response) => {
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
 **languageCode** | **String**| Return translations depending on language code | 

### Return type

[**[LiveCommentaryOutputDto]**](LiveCommentaryOutputDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2MatchesGet"></a>
# **v2MatchesGet**
> [V2Match] v2MatchesGet(limit, offset, opts)



Get a list of matches

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.MatchesApi();
let limit = 56; // Number | Select an upper limit for the matches that would be returned
let offset = 56; // Number | Select an offset for the matches that would be returned
let opts = { 
  'tournamentIds': [3.4], // [Number] | Filter matches, which have been played as part of the listed tournaments
  'seasonIds': [3.4], // [Number] | Filter matches, which have been played as part of the listed tournament seasons
  'stageIds': [3.4], // [Number] | Filter matches, which have been played as part of the listed tournament stages
  'groupIds': [3.4], // [Number] | Filter matches, which have been played as part of the listed tournament groups
  'roundIds': ["roundIds_example"], // [String] | Filter matches, which have been played as part of the listed tournament rounds
  'roundFilter': ["roundFilter_example"], // [String] | Filter matches by combinations of stage_id and round_id. Format: {stage_id}:{round_id}
  'fromKickoffTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter matches, which have a start_time after the specified date, format is ISO 8601
  'toKickoffTime': new Date("2013-10-20T19:20:30+01:00"), // Date | Filter matches, which have a start_time before the specified date, format is ISO 8601
  'teamIds': [3.4], // [Number] | Filter matches by teams which have taken part in them
  'statusTypes': ["statusTypes_example"], // [String] | Filter matches by their status types
  'statusCodes': ["statusCodes_example"], // [String] | Filter matches by their status codes
  'refereeId': 56, // Number | Filter matches by the referee who has taken part in them
  'venueId': "venueId_example", // String | Filter matches by the venue that has hosted them
  'sortDirection': "sortDirection_example" // String | Sort matches in asc|desc order by start_time
};
apiInstance.v2MatchesGet(limit, offset, opts, (error, data, response) => {
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
 **limit** | **Number**| Select an upper limit for the matches that would be returned | 
 **offset** | **Number**| Select an offset for the matches that would be returned | 
 **tournamentIds** | [**[Number]**](Number.md)| Filter matches, which have been played as part of the listed tournaments | [optional] 
 **seasonIds** | [**[Number]**](Number.md)| Filter matches, which have been played as part of the listed tournament seasons | [optional] 
 **stageIds** | [**[Number]**](Number.md)| Filter matches, which have been played as part of the listed tournament stages | [optional] 
 **groupIds** | [**[Number]**](Number.md)| Filter matches, which have been played as part of the listed tournament groups | [optional] 
 **roundIds** | [**[String]**](String.md)| Filter matches, which have been played as part of the listed tournament rounds | [optional] 
 **roundFilter** | [**[String]**](String.md)| Filter matches by combinations of stage_id and round_id. Format: {stage_id}:{round_id} | [optional] 
 **fromKickoffTime** | **Date**| Filter matches, which have a start_time after the specified date, format is ISO 8601 | [optional] 
 **toKickoffTime** | **Date**| Filter matches, which have a start_time before the specified date, format is ISO 8601 | [optional] 
 **teamIds** | [**[Number]**](Number.md)| Filter matches by teams which have taken part in them | [optional] 
 **statusTypes** | [**[String]**](String.md)| Filter matches by their status types | [optional] 
 **statusCodes** | [**[String]**](String.md)| Filter matches by their status codes | [optional] 
 **refereeId** | **Number**| Filter matches by the referee who has taken part in them | [optional] 
 **venueId** | **String**| Filter matches by the venue that has hosted them | [optional] 
 **sortDirection** | **String**| Sort matches in asc|desc order by start_time | [optional] 

### Return type

[**[V2Match]**](V2Match.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2MatchesIdGet"></a>
# **v2MatchesIdGet**
> V2Match v2MatchesIdGet(id, opts)



### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.MatchesApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2MatchesIdGet(id, opts, (error, data, response) => {
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
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**V2Match**](V2Match.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2MatchesIdPut"></a>
# **v2MatchesIdPut**
> V2Match v2MatchesIdPut(body, id)



### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.MatchesApi();
let body = new FootballApi.V2MatchInput(); // V2MatchInput | Match information to save
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2MatchesIdPut(body, id, (error, data, response) => {
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
 **body** | [**V2MatchInput**](V2MatchInput.md)| Match information to save | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

[**V2Match**](V2Match.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="v2MatchesLivescoreGet"></a>
# **v2MatchesLivescoreGet**
> [V2Match] v2MatchesLivescoreGet(opts)



Get a list of matches

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.MatchesApi();
let opts = { 
  'matchIds': [3.4], // [Number] | Filter matches by their IDs
  '_date': new Date("2013-10-20"), // Date | Filter matches by the date when they were played, format is ISO 8601
  'utcOffset': 3.4, // Number | Filter matches by date and UTC offset, allowed value range: [-12,14]
  'tournamentGroup': "tournamentGroup_example", // String | Filter matches by a tournament group code
  'statusTypes': ["statusTypes_example"], // [String] | Filter matches by status types
  'selectionFilter': "ENABLED" // String | Fetch selected matches for specific date and tournament_group
};
apiInstance.v2MatchesLivescoreGet(opts, (error, data, response) => {
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
 **matchIds** | [**[Number]**](Number.md)| Filter matches by their IDs | [optional] 
 **_date** | **Date**| Filter matches by the date when they were played, format is ISO 8601 | [optional] 
 **utcOffset** | **Number**| Filter matches by date and UTC offset, allowed value range: [-12,14] | [optional] 
 **tournamentGroup** | **String**| Filter matches by a tournament group code | [optional] 
 **statusTypes** | [**[String]**](String.md)| Filter matches by status types | [optional] 
 **selectionFilter** | **String**| Fetch selected matches for specific date and tournament_group | [optional] [default to ENABLED]

### Return type

[**[V2Match]**](V2Match.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2MatchesPost"></a>
# **v2MatchesPost**
> V2Match v2MatchesPost(body)



### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.MatchesApi();
let body = new FootballApi.V2MatchInput(); // V2MatchInput | Match information to save

apiInstance.v2MatchesPost(body, (error, data, response) => {
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
 **body** | [**V2MatchInput**](V2MatchInput.md)| Match information to save | 

### Return type

[**V2Match**](V2Match.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

