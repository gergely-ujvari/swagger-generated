# FootballApi.TeamSquadApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2TeamsIdSquadGet**](TeamSquadApi.md#v2TeamsIdSquadGet) | **GET** /v2/teams/{id}/squad | 
[**v2TeamsIdSquadPatch**](TeamSquadApi.md#v2TeamsIdSquadPatch) | **PATCH** /v2/teams/{id}/squad | 

<a name="v2TeamsIdSquadGet"></a>
# **v2TeamsIdSquadGet**
> V2TeamSquad v2TeamsIdSquadGet(id, opts)



Get teams squad

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamSquadApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'memberStatus': "ALL", // String | 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2TeamsIdSquadGet(id, opts, (error, data, response) => {
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
 **memberStatus** | **String**|  | [optional] [default to ALL]
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**V2TeamSquad**](V2TeamSquad.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2TeamsIdSquadPatch"></a>
# **v2TeamsIdSquadPatch**
> V2TeamSquad v2TeamsIdSquadPatch(body, id)



Update TeamSquad members

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.TeamSquadApi();
let body = new FootballApi.V2TeamSquadInput(); // V2TeamSquadInput | TeamSquad members to update. Null value for a property means no update
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2TeamsIdSquadPatch(body, id, (error, data, response) => {
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
 **body** | [**V2TeamSquadInput**](V2TeamSquadInput.md)| TeamSquad members to update. Null value for a property means no update | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

[**V2TeamSquad**](V2TeamSquad.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

