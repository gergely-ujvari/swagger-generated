# .TournamentGroupsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2TournamentsGroupsCodeGet**](TournamentGroupsApi.md#v2TournamentsGroupsCodeGet) | **GET** /v2/tournaments/groups/{code} | 
[**v2TournamentsGroupsCodePut**](TournamentGroupsApi.md#v2TournamentsGroupsCodePut) | **PUT** /v2/tournaments/groups/{code} | 
[**v2TournamentsGroupsCodeSelectionDatePost**](TournamentGroupsApi.md#v2TournamentsGroupsCodeSelectionDatePost) | **POST** /v2/tournaments/groups/{code}/selection/{date} | 
[**v2TournamentsGroupsGet**](TournamentGroupsApi.md#v2TournamentsGroupsGet) | **GET** /v2/tournaments/groups | 
[**v2TournamentsGroupsPost**](TournamentGroupsApi.md#v2TournamentsGroupsPost) | **POST** /v2/tournaments/groups | 


# **v2TournamentsGroupsCodeGet**
> V2TournamentGroupGetOutput v2TournamentsGroupsCodeGet()

List all tournaments for a given group name and their order

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentGroupsApi(configuration);

let body:.TournamentGroupsApiV2TournamentsGroupsCodeGetRequest = {
  // string | Tournament group code
  code: "code_example",
};

apiInstance.v2TournamentsGroupsCodeGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | [**string**] | Tournament group code | defaults to undefined


### Return type

**V2TournamentGroupGetOutput**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All tournaments for a given group successfully retrieved |  -  |
**404** | Tournament group not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TournamentsGroupsCodePut**
> void v2TournamentsGroupsCodePut(group)

Update an existing tournament group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentGroupsApi(configuration);

let body:.TournamentGroupsApiV2TournamentsGroupsCodePutRequest = {
  // string | Tournament group unique code
  code: "code_example",
  // V2TournamentGroupUpdateInput | Tournament group information
  group: {
    name: "name_example",
    description: "description_example",
    tournaments: [
      {
        tournamentId: "tournamentId_example",
        sortOrder: 1,
      },
    ],
  },
};

apiInstance.v2TournamentsGroupsCodePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **V2TournamentGroupUpdateInput**| Tournament group information |
 **code** | [**string**] | Tournament group unique code | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tournament group successfully updated |  -  |
**404** | Tournament not found | Tournament group not found |  -  |
**400** | Tournament group with name already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TournamentsGroupsCodeSelectionDatePost**
> void v2TournamentsGroupsCodeSelectionDatePost()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentGroupsApi(configuration);

let body:.TournamentGroupsApiV2TournamentsGroupsCodeSelectionDatePostRequest = {
  // string | Client code
  code: "code_example",
  // string | Date in ISO 8601 format (Y-m-d)
  date: new Date('1970-01-01').toISOString().split('T')[0];,
  // Array<V2TournamentGroupSelection> | Array of match ids (optional)
  matchIds: [
    {
      matchId: "matchId_example",
    },
  ],
};

apiInstance.v2TournamentsGroupsCodeSelectionDatePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **matchIds** | **Array<V2TournamentGroupSelection>**| Array of match ids |
 **code** | [**string**] | Client code | defaults to undefined
 **date** | [**string**] | Date in ISO 8601 format (Y-m-d) | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Tournament group selection successfully inserted |  -  |
**400** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TournamentsGroupsGet**
> V2TournamentGroupCollection v2TournamentsGroupsGet()

List all tournament groups

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentGroupsApi(configuration);

let body:any = {};

apiInstance.v2TournamentsGroupsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**V2TournamentGroupCollection**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tournament groups successfully retrieved |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TournamentsGroupsPost**
> void v2TournamentsGroupsPost(group)

Create a new tournament group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TournamentGroupsApi(configuration);

let body:.TournamentGroupsApiV2TournamentsGroupsPostRequest = {
  // V2TournamentGroupInsertInput | Tournament group information
  group: {
    code: "code_example",
    name: "name_example",
    description: "description_example",
    tournaments: [
      {
        tournamentId: "tournamentId_example",
        sortOrder: 1,
      },
    ],
  },
};

apiInstance.v2TournamentsGroupsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | **V2TournamentGroupInsertInput**| Tournament group information |


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tournament group successfully created |  -  |
**404** | Tournament not found |  -  |
**400** | Tournament group with code/name already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


