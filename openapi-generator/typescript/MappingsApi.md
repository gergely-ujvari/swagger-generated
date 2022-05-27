# .MappingsApi

All URIs are relative to *https://false*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mappingsSportalGet**](MappingsApi.md#mappingsSportalGet) | **GET** /mappings/sportal | 
[**mappingsSportalReverseGet**](MappingsApi.md#mappingsSportalReverseGet) | **GET** /mappings/sportal/reverse | 


# **mappingsSportalGet**
> any mappingsSportalGet()

Get FootballApi ID to Sportal ID maps for various types of objects

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MappingsApi(configuration);

let body:.MappingsApiMappingsSportalGetRequest = {
  // 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage' | Filter ID maps by a specific object type (optional)
  object: "player",
  // number | Return single Sportal ID for the specified FootballAPI 'id' (optional)
  id: 1,
};

apiInstance.mappingsSportalGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **object** | [**&#39;player&#39; | &#39;team&#39; | &#39;tournament&#39; | &#39;tournament_season&#39; | &#39;tournament_season_stage&#39;**]**Array<&#39;player&#39; &#124; &#39;team&#39; &#124; &#39;tournament&#39; &#124; &#39;tournament_season&#39; &#124; &#39;tournament_season_stage&#39;>** | Filter ID maps by a specific object type | (optional) defaults to undefined
 **id** | [**number**] | Return single Sportal ID for the specified FootballAPI &#39;id&#39; | (optional) defaults to undefined


### Return type

**any**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ID mappings for objects where key&#x3D;FotballAPI ID and value&#x3D;Sportal ID |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **mappingsSportalReverseGet**
> any mappingsSportalReverseGet()

Get Sportal to Football API ID maps for various types of objects

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .MappingsApi(configuration);

let body:.MappingsApiMappingsSportalReverseGetRequest = {
  // 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage' | Filter ID maps by a specific object type (optional)
  object: "player",
  // number | Return single FotballApi ID for the specified Sportal 'id' (optional)
  id: 1,
};

apiInstance.mappingsSportalReverseGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **object** | [**&#39;player&#39; | &#39;team&#39; | &#39;tournament&#39; | &#39;tournament_season&#39; | &#39;tournament_season_stage&#39;**]**Array<&#39;player&#39; &#124; &#39;team&#39; &#124; &#39;tournament&#39; &#124; &#39;tournament_season&#39; &#124; &#39;tournament_season_stage&#39;>** | Filter ID maps by a specific object type | (optional) defaults to undefined
 **id** | [**number**] | Return single FotballApi ID for the specified Sportal &#39;id&#39; | (optional) defaults to undefined


### Return type

**any**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ID mappings for objects where key&#x3D;Sportal ID and value&#x3D;FootballAPI ID  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


