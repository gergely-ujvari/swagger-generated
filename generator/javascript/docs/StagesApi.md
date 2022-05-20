# FootballApi.StagesApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stagesGet**](StagesApi.md#stagesGet) | **GET** /stages | 
[**v2GroupsIdDelete**](StagesApi.md#v2GroupsIdDelete) | **DELETE** /v2/groups/{id} | 
[**v2StagesIdGroupsGet**](StagesApi.md#v2StagesIdGroupsGet) | **GET** /v2/stages/{id}/groups | 
[**v2StagesIdGroupsPost**](StagesApi.md#v2StagesIdGroupsPost) | **POST** /v2/stages/{id}/groups | 
[**v2StagesIdTeamsPut**](StagesApi.md#v2StagesIdTeamsPut) | **PUT** /v2/stages/{id}/teams | 

<a name="stagesGet"></a>
# **stagesGet**
> [StageDto] stagesGet(opts)



Listing for Stages resources

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.StagesApi();
let opts = { 
  'teamId': 56, // Number | Filter stages by a team which is participating in the stage
  'tournamentIds': "tournamentIds_example", // String | CSV list of tournament.id values to filter stages
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.stagesGet(opts, (error, data, response) => {
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
 **teamId** | **Number**| Filter stages by a team which is participating in the stage | [optional] 
 **tournamentIds** | **String**| CSV list of tournament.id values to filter stages | [optional] 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**[StageDto]**](StageDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2GroupsIdDelete"></a>
# **v2GroupsIdDelete**
> v2GroupsIdDelete(id)



Permanently delete group

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.StagesApi();
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2GroupsIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2StagesIdGroupsGet"></a>
# **v2StagesIdGroupsGet**
> V2StageGroupCollection v2StagesIdGroupsGet(id, opts)



List all groups for specific stage

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.StagesApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2StagesIdGroupsGet(id, opts, (error, data, response) => {
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

[**V2StageGroupCollection**](V2StageGroupCollection.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="v2StagesIdGroupsPost"></a>
# **v2StagesIdGroupsPost**
> V2StageGroupCollection v2StagesIdGroupsPost(body, id)



Create or update multiple groups

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.StagesApi();
let body = [new FootballApi.V2StageGroup()]; // [V2StageGroup] | List of groups to be updated or created
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2StagesIdGroupsPost(body, id, (error, data, response) => {
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
 **body** | [**[V2StageGroup]**](V2StageGroup.md)| List of groups to be updated or created | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

[**V2StageGroupCollection**](V2StageGroupCollection.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2StagesIdTeamsPut"></a>
# **v2StagesIdTeamsPut**
> v2StagesIdTeamsPut(body, id)



Replace teams in stage

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.StagesApi();
let body = [new FootballApi.V2StageTeamInput()]; // [V2StageTeamInput] | List of team ids
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2StagesIdTeamsPut(body, id, (error, data, response) => {
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
 **body** | [**[V2StageTeamInput]**](V2StageTeamInput.md)| List of team ids | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

