# .TeamSquadApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2TeamsIdSquadGet**](TeamSquadApi.md#v2TeamsIdSquadGet) | **GET** /v2/teams/{id}/squad | 
[**v2TeamsIdSquadPatch**](TeamSquadApi.md#v2TeamsIdSquadPatch) | **PATCH** /v2/teams/{id}/squad | 


# **v2TeamsIdSquadGet**
> V2TeamSquad v2TeamsIdSquadGet()

Get teams squad

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamSquadApi(configuration);

let body:.TeamSquadApiV2TeamsIdSquadGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // 'ALL' | 'ACTIVE' | 'INACTIVE' (optional)
  memberStatus: "ALL",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2TeamsIdSquadGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **memberStatus** | [**&#39;ALL&#39; | &#39;ACTIVE&#39; | &#39;INACTIVE&#39;**]**Array<&#39;ALL&#39; &#124; &#39;ACTIVE&#39; &#124; &#39;INACTIVE&#39;>** |  | (optional) defaults to 'ALL'
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2TeamSquad**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team Squad details |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2TeamsIdSquadPatch**
> V2TeamSquad v2TeamsIdSquadPatch(squadMembers)

Update TeamSquad members

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TeamSquadApi(configuration);

let body:.TeamSquadApiV2TeamsIdSquadPatchRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // V2TeamSquadInput | TeamSquad members to update. Null value for a property means no update
  squadMembers: {
    players: [
      {
        playerId: "playerId_example",
        status: "ACTIVE",
        contractType: "PERMANENT",
        startDate: "startDate_example",
        endDate: "endDate_example",
        shirtNumber: 1,
      },
    ],
  },
};

apiInstance.v2TeamsIdSquadPatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **squadMembers** | **V2TeamSquadInput**| TeamSquad members to update. Null value for a property means no update |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**V2TeamSquad**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Squad successfuly saved |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


