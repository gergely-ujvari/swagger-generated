# FootballApi.VenuesApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2VenuesGet**](VenuesApi.md#v2VenuesGet) | **GET** /v2/venues | 
[**v2VenuesIdGet**](VenuesApi.md#v2VenuesIdGet) | **GET** /v2/venues/{id} | 
[**v2VenuesIdPut**](VenuesApi.md#v2VenuesIdPut) | **PUT** /v2/venues/{id} | 
[**v2VenuesPost**](VenuesApi.md#v2VenuesPost) | **POST** /v2/venues | 

<a name="v2VenuesGet"></a>
# **v2VenuesGet**
> V2VenuesList v2VenuesGet(offset, limit, opts)



List venues with offset and limit parameters

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.VenuesApi();
let offset = 56; // Number | The number of items to skip before starting to collect the result set
let limit = 56; // Number | Limit the number of results returned
let opts = { 
  'seasonIds': "seasonIds_example", // String | Filter venues which have hosted matches in the specified CSV season_ids
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2VenuesGet(offset, limit, opts, (error, data, response) => {
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
 **seasonIds** | **String**| Filter venues which have hosted matches in the specified CSV season_ids | [optional] 
 **languageCode** | **String**| Returns translated response based on the language code | [optional] [default to en]

### Return type

[**V2VenuesList**](V2VenuesList.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2VenuesIdGet"></a>
# **v2VenuesIdGet**
> V2VenuesGetId v2VenuesIdGet(id, opts)



Get venue by id

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.VenuesApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'languageCode': "en" // String | Returns translated response based on the language code
};
apiInstance.v2VenuesIdGet(id, opts, (error, data, response) => {
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

[**V2VenuesGetId**](V2VenuesGetId.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

<a name="v2VenuesIdPut"></a>
# **v2VenuesIdPut**
> V2VenuesPut v2VenuesIdPut(id, opts)



Update venue information

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.VenuesApi();
let id = "id_example"; // String | Unique identifier of the resource.
let opts = { 
  'body': new FootballApi.V2PutVenues() // V2PutVenues | Venue information to save in persistance
};
apiInstance.v2VenuesIdPut(id, opts, (error, data, response) => {
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
 **body** | [**V2PutVenues**](V2PutVenues.md)| Venue information to save in persistance | [optional] 

### Return type

[**V2VenuesPut**](V2VenuesPut.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="v2VenuesPost"></a>
# **v2VenuesPost**
> V2Venues v2VenuesPost(opts)



Store a newly created venue in storage

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.VenuesApi();
let opts = { 
  'body': new FootballApi.V2PostVenues() // V2PostVenues | 
};
apiInstance.v2VenuesPost(opts, (error, data, response) => {
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
 **body** | [**V2PostVenues**](V2PostVenues.md)|  | [optional] 

### Return type

[**V2Venues**](V2Venues.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

