# .ActionLogsApi

All URIs are relative to *https://content.api.sportal365.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionLogsAdminGet**](ActionLogsApi.md#actionLogsAdminGet) | **GET** /action/logs/admin | List all action logs for specific admin
[**actionLogsContentGet**](ActionLogsApi.md#actionLogsContentGet) | **GET** /action/logs/content | List all action logs for specific resource


# **actionLogsAdminGet**
> ActionLogsCollection actionLogsAdminGet()

List all action logs for specific admin

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActionLogsApi(configuration);

let body:.ActionLogsApiActionLogsAdminGetRequest = {
  // string | Valid project
  project: "1",
  // number | Admin ID
  adminId: 1,
  // 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption' | Resource type (optional)
  contentType: "Article",
  // 'create' | 'update' | 'delete' | Action (optional)
  action: "create",
};

apiInstance.actionLogsAdminGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] | Valid project | defaults to '1'
 **adminId** | [**number**] | Admin ID | defaults to 1
 **contentType** | [**&#39;Article&#39; | &#39;Category&#39; | &#39;Gallery&#39; | &#39;Image&#39; | &#39;Video&#39; | &#39;Lists&#39; | &#39;Banner&#39; | &#39;Tag&#39; | &#39;Author&#39; | &#39;Poll&#39; | &#39;PollOption&#39;**]**Array<&#39;Article&#39; &#124; &#39;Category&#39; &#124; &#39;Gallery&#39; &#124; &#39;Image&#39; &#124; &#39;Video&#39; &#124; &#39;Lists&#39; &#124; &#39;Banner&#39; &#124; &#39;Tag&#39; &#124; &#39;Author&#39; &#124; &#39;Poll&#39; &#124; &#39;PollOption&#39;>** | Resource type | (optional) defaults to 'Article'
 **action** | [**&#39;create&#39; | &#39;update&#39; | &#39;delete&#39;**]**Array<&#39;create&#39; &#124; &#39;update&#39; &#124; &#39;delete&#39;>** | Action | (optional) defaults to 'create'


### Return type

**ActionLogsCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection of action logs |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **actionLogsContentGet**
> ActionLogsCollection actionLogsContentGet()

List all action logs for specific resource

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ActionLogsApi(configuration);

let body:.ActionLogsApiActionLogsContentGetRequest = {
  // string | Valid project
  project: "1",
  // 'Article' | 'Category' | 'Gallery' | 'Image' | 'Video' | 'Lists' | 'Banner' | 'Tag' | 'Author' | 'Poll' | 'PollOption' | Resource type
  contentType: "Article",
  // number | Resource ID
  contentId: 1,
};

apiInstance.actionLogsContentGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project** | [**string**] | Valid project | defaults to '1'
 **contentType** | [**&#39;Article&#39; | &#39;Category&#39; | &#39;Gallery&#39; | &#39;Image&#39; | &#39;Video&#39; | &#39;Lists&#39; | &#39;Banner&#39; | &#39;Tag&#39; | &#39;Author&#39; | &#39;Poll&#39; | &#39;PollOption&#39;**]**Array<&#39;Article&#39; &#124; &#39;Category&#39; &#124; &#39;Gallery&#39; &#124; &#39;Image&#39; &#124; &#39;Video&#39; &#124; &#39;Lists&#39; &#124; &#39;Banner&#39; &#124; &#39;Tag&#39; &#124; &#39;Author&#39; &#124; &#39;Poll&#39; &#124; &#39;PollOption&#39;>** | Resource type | defaults to 'Article'
 **contentId** | [**number**] | Resource ID | defaults to 1


### Return type

**ActionLogsCollection**

### Authorization

[Project](README.md#Project), [oAuth2](README.md#oAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection of action logs |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


