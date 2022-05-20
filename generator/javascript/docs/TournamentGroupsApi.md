# FootballApi.TournamentGroupsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2TournamentsGroupsCodeGet**](TournamentGroupsApi.md#v2TournamentsGroupsCodeGet) | **GET** /v2/tournaments/groups/{code} | 
[**v2TournamentsGroupsCodePut**](TournamentGroupsApi.md#v2TournamentsGroupsCodePut) | **PUT** /v2/tournaments/groups/{code} | 
[**v2TournamentsGroupsCodeSelectionDatePost**](TournamentGroupsApi.md#v2TournamentsGroupsCodeSelectionDatePost) | **POST** /v2/tournaments/groups/{code}/selection/{date} | 
[**v2TournamentsGroupsGet**](TournamentGroupsApi.md#v2TournamentsGroupsGet) | **GET** /v2/tournaments/groups | 
[**v2TournamentsGroupsPost**](TournamentGroupsApi.md#v2TournamentsGroupsPost) | **POST** /v2/tournaments/groups | 

<a name="v2TournamentsGroupsCodeGet"></a>
# **v2TournamentsGroupsCodeGet**
> V2TournamentGroupGetOutput v2TournamentsGroupsCodeGet(code)



List all tournaments for a given group name and their order

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentGroupsApi();
let code = "code_example"; // String | Tournament group code

apiInstance.v2TournamentsGroupsCodeGet(code, (error, data, response) => {
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
 **code** | **String**| Tournament group code | 

### Return type

[**V2TournamentGroupGetOutput**](V2TournamentGroupGetOutput.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2TournamentsGroupsCodePut"></a>
# **v2TournamentsGroupsCodePut**
> v2TournamentsGroupsCodePut(body, code)



Update an existing tournament group

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentGroupsApi();
let body = new FootballApi.V2TournamentGroupUpdateInput(); // V2TournamentGroupUpdateInput | Tournament group information
let code = "code_example"; // String | Tournament group unique code

apiInstance.v2TournamentsGroupsCodePut(body, code, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V2TournamentGroupUpdateInput**](V2TournamentGroupUpdateInput.md)| Tournament group information | 
 **code** | **String**| Tournament group unique code | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="v2TournamentsGroupsCodeSelectionDatePost"></a>
# **v2TournamentsGroupsCodeSelectionDatePost**
> v2TournamentsGroupsCodeSelectionDatePost(code, _date, opts)



### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentGroupsApi();
let code = "code_example"; // String | Client code
let _date = new Date("2013-10-20"); // Date | Date in ISO 8601 format (Y-m-d)
let opts = { 
  'body': [new FootballApi.V2TournamentGroupSelection()] // [V2TournamentGroupSelection] | Array of match ids
};
apiInstance.v2TournamentsGroupsCodeSelectionDatePost(code, _date, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Client code | 
 **_date** | **Date**| Date in ISO 8601 format (Y-m-d) | 
 **body** | [**[V2TournamentGroupSelection]**](V2TournamentGroupSelection.md)| Array of match ids | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="v2TournamentsGroupsGet"></a>
# **v2TournamentsGroupsGet**
> V2TournamentGroupCollection v2TournamentsGroupsGet()



List all tournament groups

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentGroupsApi();
apiInstance.v2TournamentsGroupsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V2TournamentGroupCollection**](V2TournamentGroupCollection.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2TournamentsGroupsPost"></a>
# **v2TournamentsGroupsPost**
> v2TournamentsGroupsPost(body)



Create a new tournament group

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TournamentGroupsApi();
let body = new FootballApi.V2TournamentGroupInsertInput(); // V2TournamentGroupInsertInput | Tournament group information

apiInstance.v2TournamentsGroupsPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V2TournamentGroupInsertInput**](V2TournamentGroupInsertInput.md)| Tournament group information | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

