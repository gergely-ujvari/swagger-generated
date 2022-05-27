# .PlayersApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playersGet**](PlayersApi.md#playersGet) | **GET** /players | 
[**playersIdGet**](PlayersApi.md#playersIdGet) | **GET** /players/{id} | 
[**playersIdStatisticsGet**](PlayersApi.md#playersIdStatisticsGet) | **GET** /players/{id}/statistics | 
[**playersIdTeamsGet**](PlayersApi.md#playersIdTeamsGet) | **GET** /players/{id}/teams | 
[**v2PlayersGet**](PlayersApi.md#v2PlayersGet) | **GET** /v2/players | 
[**v2PlayersIdClubsActivePut**](PlayersApi.md#v2PlayersIdClubsActivePut) | **PUT** /v2/players/{id}/clubs/active | 
[**v2PlayersIdGet**](PlayersApi.md#v2PlayersIdGet) | **GET** /v2/players/{id} | 
[**v2PlayersIdPut**](PlayersApi.md#v2PlayersIdPut) | **PUT** /v2/players/{id} | 
[**v2PlayersPost**](PlayersApi.md#v2PlayersPost) | **POST** /v2/players | 


# **playersGet**
> Array<Player> playersGet()

Search player list by parameters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayersApi(configuration);

let body:.PlayersApiPlayersGetRequest = {
  // string | Filter players by names. Length must be >= 4. The filter matches on a per word basis. If you query for 'Ronaldo' it will match both 'Cristiono Ronaldo' and 'Ronaldo'
  name: "name_example",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // number | Limit the number of results returned (optional)
  maxResults: 100,
  // number | Return only players which are currently in the specified team's squad (optional)
  teamId: 1,
};

apiInstance.playersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Filter players by names. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#39;Ronaldo&#39; it will match both &#39;Cristiono Ronaldo&#39; and &#39;Ronaldo&#39; | defaults to undefined
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **maxResults** | [**number**] | Limit the number of results returned | (optional) defaults to 100
 **teamId** | [**number**] | Return only players which are currently in the specified team&#39;s squad | (optional) defaults to undefined


### Return type

**Array<Player>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of matching Players |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **playersIdGet**
> PlayerProfile playersIdGet()

Get information about a specific Player

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayersApi(configuration);

let body:.PlayersApiPlayersIdGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'club' | 'club,current_league' | Specify additional information to include in the response (optional)
  expand: "club",
};

apiInstance.playersIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **expand** | [**&#39;club&#39; | &#39;club,current_league&#39;**]**Array<&#39;club&#39; &#124; &#39;club,current_league&#39;>** | Specify additional information to include in the response | (optional) defaults to undefined


### Return type

**PlayerProfile**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Player information |  -  |
**404** | No Player with id found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **playersIdStatisticsGet**
> Array<PlayerStatistics> playersIdStatisticsGet()

Returns statistics throughout a Player's career

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayersApi(configuration);

let body:.PlayersApiPlayersIdStatisticsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
  // 'club' | 'national' | 'league' | Filter statistics for different types of team and competition (optional)
  type: "club",
  // 'tournament' | 'team' | Group response by a given property (optional)
  groupBy: "tournament",
};

apiInstance.playersIdStatisticsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'
 **type** | [**&#39;club&#39; | &#39;national&#39; | &#39;league&#39;**]**Array<&#39;club&#39; &#124; &#39;national&#39; &#124; &#39;league&#39;>** | Filter statistics for different types of team and competition | (optional) defaults to undefined
 **groupBy** | [**&#39;tournament&#39; | &#39;team&#39;**]**Array<&#39;tournament&#39; &#124; &#39;team&#39;>** | Group response by a given property | (optional) defaults to undefined


### Return type

**Array<PlayerStatistics>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Player statistics information |  -  |
**404** | No Player with specifed id found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **playersIdTeamsGet**
> Array<PlayerTeam> playersIdTeamsGet()

Get the Teams in which a Player has participated during his career

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayersApi(configuration);

let body:.PlayersApiPlayersIdTeamsGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (optional)
  acceptLanguage: "en",
};

apiInstance.playersIdTeamsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **acceptLanguage** | [**string**] | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | (optional) defaults to 'en'


### Return type

**Array<PlayerTeam>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Player information |  -  |
**404** | No Player with specifed id found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2PlayersGet**
> PlayerPageDto v2PlayersGet()

Search player list by parameters

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayersApi(configuration);

let body:.PlayersApiV2PlayersGetRequest = {
  // number | The number of items to skip before starting to collect the result set
  offset: 1,
  // number | Limit the number of results returned
  limit: 1,
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2PlayersGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | [**number**] | The number of items to skip before starting to collect the result set | defaults to undefined
 **limit** | [**number**] | Limit the number of results returned | defaults to undefined
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**PlayerPageDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of matching Players and meta data. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2PlayersIdClubsActivePut**
> Array<V2PlayerActiveClub> v2PlayersIdClubsActivePut()

Update the active clubs of a player

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayersApi(configuration);

let body:.PlayersApiV2PlayersIdClubsActivePutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // V2ActiveClubsInput | Active clubs input (optional)
  clubs: {
    clubs: [
      {
        teamId: "teamId_example",
        contractType: "contractType_example",
        startDate: "startDate_example",
        shirtNumber: 1,
      },
    ],
  },
};

apiInstance.v2PlayersIdClubsActivePut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubs** | **V2ActiveClubsInput**| Active clubs input |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**Array<V2PlayerActiveClub>**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated active clubs |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2PlayersIdGet**
> V2PlayerProfile v2PlayersIdGet()

Get player by id

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayersApi(configuration);

let body:.PlayersApiV2PlayersIdGetRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // string | Returns translated response based on the language code (optional)
  languageCode: "en",
};

apiInstance.v2PlayersIdGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'
 **languageCode** | [**string**] | Returns translated response based on the language code | (optional) defaults to 'en'


### Return type

**V2PlayerProfile**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Player data |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2PlayersIdPut**
> void v2PlayersIdPut(player)

Update Player information

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayersApi(configuration);

let body:.PlayersApiV2PlayersIdPutRequest = {
  // string | Unique identifier of the resource.
  id: "1",
  // PlayerEditDto | Player information to save in persistance
  player: {
    name: "name_example",
    countryId: "countryId_example",
    active: true,
    birthdate: "birthdate_example",
    birthCityId: "birthCityId_example",
    profile: {
      height: "height_example",
      weight: "weight_example",
    },
    social: {
      web: "web_example",
      twitterId: "twitterId_example",
      facebookId: "facebookId_example",
      instagramId: "instagramId_example",
      wikipediaId: "wikipediaId_example",
      youtubeChannelId: "youtubeChannelId_example",
    },
    position: "position_example",
  },
};

apiInstance.v2PlayersIdPut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **PlayerEditDto**| Player information to save in persistance |
 **id** | [**string**] | Unique identifier of the resource. | defaults to '1'


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Player successfuly saved |  -  |
**404** | No Player with id found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **v2PlayersPost**
> PlayerDto v2PlayersPost()

Store a newly created player in storage.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PlayersApi(configuration);

let body:.PlayersApiV2PlayersPostRequest = {
  // PlayerEditDto | PlayerEditDto object (optional)
  player: {
    name: "name_example",
    countryId: "countryId_example",
    active: true,
    birthdate: "birthdate_example",
    birthCityId: "birthCityId_example",
    profile: {
      height: "height_example",
      weight: "weight_example",
    },
    social: {
      web: "web_example",
      twitterId: "twitterId_example",
      facebookId: "facebookId_example",
      instagramId: "instagramId_example",
      wikipediaId: "wikipediaId_example",
      youtubeChannelId: "youtubeChannelId_example",
    },
    position: "position_example",
  },
};

apiInstance.v2PlayersPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **player** | **PlayerEditDto**| PlayerEditDto object |


### Return type

**PlayerDto**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Player successfuly saved, returns Player information |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


