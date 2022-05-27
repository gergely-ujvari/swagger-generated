# .LineupsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lineupsGet**](LineupsApi.md#lineupsGet) | **GET** /lineups | 
[**v2MatchesIdLineupsGet**](LineupsApi.md#v2MatchesIdLineupsGet) | **GET** /v2/matches/{id}/lineups | 
[**v2MatchesIdLineupsPut**](LineupsApi.md#v2MatchesIdLineupsPut) | **PUT** /v2/matches/{id}/lineups | 


# **lineupsGet**
> Array<Lineup> lineupsGet()

Get lineup information. Includes players, formation and coach

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LineupsApi(configuration);

let body:.LineupsApiLineupsGetRequest = {
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // Date | Filter lineups which have updates only after the specified time (optional)
  lastUpdate: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.lineupsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **lastUpdate** | [**Date**] | Filter lineups which have updates only after the specified time | (optional) defaults to undefined


### Return type

**Array<Lineup>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lineup information for the home and away team |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2MatchesIdLineupsGet**
> V2Lineup v2MatchesIdLineupsGet()

Get lineups by match id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LineupsApi(configuration);

let body:.LineupsApiV2MatchesIdLineupsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2MatchesIdLineupsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2Lineup**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lineups data |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2MatchesIdLineupsPut**
> V2Lineup v2MatchesIdLineupsPut(lineup)

Update Lineup information

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LineupsApi(configuration);

let body:.LineupsApiV2MatchesIdLineupsPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // V2LineupInput | Lineup information to save in persistance
  lineup: {
    status: "CONFIRMED",
    homeTeam: {
      formation: "formation_example",
      coachId: "coachId_example",
      players: [
        {
          typeId: "typeId_example",
          playerId: "playerId_example",
          positionX: 1,
          positionY: 1,
          shirtNumber: 1,
        },
      ],
    },
    awayTeam: {
      formation: "formation_example",
      coachId: "coachId_example",
      players: [
        {
          typeId: "typeId_example",
          playerId: "playerId_example",
          positionX: 1,
          positionY: 1,
          shirtNumber: 1,
        },
      ],
    },
  },
};

apiInstance.v2MatchesIdLineupsPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lineup** | **V2LineupInput**| Lineup information to save in persistance |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**V2Lineup**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Lineup successfuly saved |  -  |
**404** | No Lineup with id found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


