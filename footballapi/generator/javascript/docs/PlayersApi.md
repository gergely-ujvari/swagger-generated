# FootballApi.PlayersApi

All URIs are relative to *https://false/*

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

<a name="playersGet"></a>
# **playersGet**
> [Player] playersGet(name, opts)



Search player list by parameters

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayersApi();
let name = "name_example"; // String | Filter players by names. Length must be >= 4. The filter matches on a per word basis. If you query for 'Ronaldo' it will match both 'Cristiono Ronaldo' and 'Ronaldo'
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'maxResults': 100, // Number | Limit the number of results returned
  'teamId': 56 // Number | Return only players which are currently in the specified team's squad
};
apiInstance.playersGet(name, opts, (error, data, response) => {
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
 **name** | **String**| Filter players by names. Length must be &gt;&#x3D; 4. The filter matches on a per word basis. If you query for &#x27;Ronaldo&#x27; it will match both &#x27;Cristiono Ronaldo&#x27; and &#x27;Ronaldo&#x27; | 
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **maxResults** | **Number**| Limit the number of results returned | [optional] [default to 100]
 **teamId** | **Number**| Return only players which are currently in the specified team&#x27;s squad | [optional] 

### Return type

[**[Player]**](Player.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="playersIdGet"></a>
# **playersIdGet**
> PlayerProfile playersIdGet(id, opts)



Get information about a specific Player

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayersApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'expand': "expand_example" // String | Specify additional information to include in the response
};
apiInstance.playersIdGet(id, opts, (error, data, response) => {
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
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **expand** | **String**| Specify additional information to include in the response | [optional] 

### Return type

[**PlayerProfile**](PlayerProfile.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="playersIdStatisticsGet"></a>
# **playersIdStatisticsGet**
> [PlayerStatistics] playersIdStatisticsGet(id, opts)



Returns statistics throughout a Player&#x27;s career

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayersApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en", // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
  'type': "type_example", // String | Filter statistics for different types of team and competition
  'groupBy': "groupBy_example" // String | Group response by a given property
};
apiInstance.playersIdStatisticsGet(id, opts, (error, data, response) => {
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
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]
 **type** | **String**| Filter statistics for different types of team and competition | [optional] 
 **groupBy** | **String**| Group response by a given property | [optional] 

### Return type

[**[PlayerStatistics]**](PlayerStatistics.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="playersIdTeamsGet"></a>
# **playersIdTeamsGet**
> [PlayerTeam] playersIdTeamsGet(id, opts)



Get the Teams in which a Player has participated during his career

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayersApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'acceptLanguage': "en" // String | List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
};
apiInstance.playersIdTeamsGet(id, opts, (error, data, response) => {
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
 **acceptLanguage** | **String**| List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation | [optional] [default to en]

### Return type

[**[PlayerTeam]**](PlayerTeam.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2PlayersGet"></a>
# **v2PlayersGet**
> PlayerPageDto v2PlayersGet(offset, limit, opts)



Search player list by parameters

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayersApi();
let offset = 56; // Number | The number of items to skip before starting to collect the result set
let limit = 56; // Number | Limit the number of results returned
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2PlayersGet(offset, limit, opts, (error, data, response) => {
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
 **offset** | **Number**| The number of items to skip before starting to collect the result set | 
 **limit** | **Number**| Limit the number of results returned | 
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**PlayerPageDto**](PlayerPageDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2PlayersIdClubsActivePut"></a>
# **v2PlayersIdClubsActivePut**
> [V2PlayerActiveClub] v2PlayersIdClubsActivePut(id, opts)



Update the active clubs of a player

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayersApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'body': new FootballApi.V2ActiveClubsInput() // V2ActiveClubsInput | Active clubs input
};
apiInstance.v2PlayersIdClubsActivePut(id, opts, (error, data, response) => {
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
 **body** | [**V2ActiveClubsInput**](V2ActiveClubsInput.md)| Active clubs input | [optional] 

### Return type

[**[V2PlayerActiveClub]**](V2PlayerActiveClub.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

<a name="v2PlayersIdGet"></a>
# **v2PlayersIdGet**
> V2PlayerProfile v2PlayersIdGet(id, opts)



Get player by id

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayersApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2PlayersIdGet(id, opts, (error, data, response) => {
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

[**V2PlayerProfile**](V2PlayerProfile.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2PlayersIdPut"></a>
# **v2PlayersIdPut**
> v2PlayersIdPut(body, id)



Update Player information

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayersApi();
let body = new FootballApi.PlayerEditDto(); // PlayerEditDto | Player information to save in persistance
let id = "id_example"; // String | Unique identifier of the resource.

apiInstance.v2PlayersIdPut(body, id, (error, data, response) => {
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
 **body** | [**PlayerEditDto**](PlayerEditDto.md)| Player information to save in persistance | 
 **id** | **String**| Unique identifier of the resource. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2PlayersPost"></a>
# **v2PlayersPost**
> PlayerDto v2PlayersPost(opts)



Store a newly created player in storage.

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.PlayersApi();
let opts = { 
  'body': new FootballApi.PlayerEditDto() // PlayerEditDto | PlayerEditDto object
};
apiInstance.v2PlayersPost(opts, (error, data, response) => {
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
 **body** | [**PlayerEditDto**](PlayerEditDto.md)| PlayerEditDto object | [optional] 

### Return type

[**PlayerDto**](PlayerDto.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

