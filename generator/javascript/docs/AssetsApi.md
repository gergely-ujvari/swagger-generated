# FootballApi.AssetsApi

All URIs are relative to *https://false/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2AssetsDelete**](AssetsApi.md#v2AssetsDelete) | **DELETE** /v2/assets | 
[**v2AssetsPost**](AssetsApi.md#v2AssetsPost) | **POST** /v2/assets | 

<a name="v2AssetsDelete"></a>
# **v2AssetsDelete**
> v2AssetsDelete(opts)



Bulk delete assets

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.AssetsApi();
let opts = { 
  'body': [new FootballApi.V2AssetInput()] // [V2AssetInput] | Array of assets
};
apiInstance.v2AssetsDelete(opts, (error, data, response) => {
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
 **body** | [**[V2AssetInput]**](V2AssetInput.md)| Array of assets | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="v2AssetsPost"></a>
# **v2AssetsPost**
> V2Asset v2AssetsPost(opts)



Bulk Upsert assets

### Example
```javascript
import {FootballApi} from 'football_api';
let defaultClient = FootballApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new FootballApi.AssetsApi();
let opts = { 
  'body': [new FootballApi.V2AssetInput()] // [V2AssetInput] | Array of assets
};
apiInstance.v2AssetsPost(opts, (error, data, response) => {
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
 **body** | [**[V2AssetInput]**](V2AssetInput.md)| Array of assets | [optional] 

### Return type

[**V2Asset**](V2Asset.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

