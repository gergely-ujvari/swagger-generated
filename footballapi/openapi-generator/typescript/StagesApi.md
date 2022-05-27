# .StagesApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stagesGet**](StagesApi.md#stagesGet) | **GET** /stages | 
[**v2GroupsIdDelete**](StagesApi.md#v2GroupsIdDelete) | **DELETE** /v2/groups/{id} | 
[**v2StagesIdGroupsGet**](StagesApi.md#v2StagesIdGroupsGet) | **GET** /v2/stages/{id}/groups | 
[**v2StagesIdGroupsPost**](StagesApi.md#v2StagesIdGroupsPost) | **POST** /v2/stages/{id}/groups | 
[**v2StagesIdTeamsPut**](StagesApi.md#v2StagesIdTeamsPut) | **PUT** /v2/stages/{id}/teams | 


# **stagesGet**
> Array<StageDto> stagesGet()

Listing for Stages resources

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StagesApi(configuration);

let body:.StagesApiStagesGetRequest = {
  // number | Filter stages by a team which is participating in the stage (optional)
  teamId: 1,
  // string | CSV list of tournament.id values to filter stages (optional)
  tournamentIds: "tournament_ids_example",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.stagesGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**number**] | Filter stages by a team which is participating in the stage | (optional) defaults to undefined
 **tournamentIds** | [**string**] | CSV list of tournament.id values to filter stages | (optional) defaults to undefined
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<StageDto>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of StageDTO objects matching criteria |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2GroupsIdDelete**
> void v2GroupsIdDelete()

Permanently delete group

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StagesApi(configuration);

let body:.StagesApiV2GroupsIdDeleteRequest = {
  // string | Unique identifier of the resource.
  id: "1",
};

apiInstance.v2GroupsIdDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Group successfully deleted |  -  |
**400** | Group has enetpulse mapping | Group has match link |  -  |
**404** | Group not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2StagesIdGroupsGet**
> V2StageGroupCollection v2StagesIdGroupsGet()

List all groups for specific stage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StagesApi(configuration);

let body:.StagesApiV2StagesIdGroupsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2StagesIdGroupsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2StageGroupCollection**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Groups successfully retrieved |  -  |
**404** | Stage not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2StagesIdGroupsPost**
> V2StageGroupCollection v2StagesIdGroupsPost(groups)

Create or update multiple groups

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StagesApi(configuration);

let body:.StagesApiV2StagesIdGroupsPostRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // Array<V2StageGroup> | List of groups to be updated or created
  groups: [
    {
      id: "id_example",
      name: "name_example",
      orderInStage: 1,
    },
  ],
};

apiInstance.v2StagesIdGroupsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groups** | **Array<V2StageGroup>**| List of groups to be updated or created |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**V2StageGroupCollection**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Groups successfully created/updated |  -  |
**404** | Stage or group not found |  -  |
**400** | Stage has enetpulse mapping | Duplicate item |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2StagesIdTeamsPut**
> void v2StagesIdTeamsPut(teamId)

Replace teams in stage

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StagesApi(configuration);

let body:.StagesApiV2StagesIdTeamsPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // Array<V2StageTeamInput> | List of team ids
  teamId: [
    {
      teamId: "teamId_example",
    },
  ],
};

apiInstance.v2StagesIdTeamsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **Array<V2StageTeamInput>**| List of team ids |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


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
**204** | Teams in stage successfully replaced |  -  |
**404** | Resource not found |  -  |
**400** | Resource already exists |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


