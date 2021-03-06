/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.CoachesApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * API for accessing various kinds of football data, updated in real time.
 * Version: 0.0.1
 * Generated by: io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.CoachesApi');

goog.require('API.Client.CoachDto');
goog.require('API.Client.CoachEditDto');
goog.require('API.Client.CoachPageDto');
goog.require('API.Client.NotFoundError');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.CoachesApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('CoachesApiBasePath') ?
                   /** @type {!string} */ ($injector.get('CoachesApiBasePath')) :
                   'https://false';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('CoachesApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('CoachesApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.CoachesApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * 
 * List coaches with offset and limit parameters
 * @param {!number} offset The number of items to skip before starting to collect the result set
 * @param {!number} limit Limit the number of results returned
 * @param {!string=} opt_languageCode Returns translated response based on the language code
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.CoachPageDto>}
 */
API.Client.CoachesApi.prototype.v2CoachesGet = function(offset, limit, opt_languageCode, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/coaches';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'offset' is set
  if (!offset) {
    throw new Error('Missing required parameter offset when calling v2CoachesGet');
  }
  // verify required parameter 'limit' is set
  if (!limit) {
    throw new Error('Missing required parameter limit when calling v2CoachesGet');
  }
  if (opt_languageCode !== undefined) {
    queryParameters['language_code'] = opt_languageCode;
  }

  if (offset !== undefined) {
    queryParameters['offset'] = offset;
  }

  if (limit !== undefined) {
    queryParameters['limit'] = limit;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * Find coach by id
 * @param {!string} id Unique identifier of the resource.
 * @param {!string=} opt_languageCode Returns translated response based on the language code
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.CoachDto>>}
 */
API.Client.CoachesApi.prototype.v2CoachesIdGet = function(id, opt_languageCode, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/coaches/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling v2CoachesIdGet');
  }
  if (opt_languageCode !== undefined) {
    queryParameters['language_code'] = opt_languageCode;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * Update coach information
 * @param {!string} id Unique identifier of the resource.
 * @param {!CoachEditDto=} opt_coach Coach information to save in persistance
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.CoachDto>}
 */
API.Client.CoachesApi.prototype.v2CoachesIdPut = function(id, opt_coach, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/coaches/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling v2CoachesIdPut');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: opt_coach,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * 
 * Store a newly created coach in storage
 * @param {!CoachEditDto=} opt_coach 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.CoachDto>}
 */
API.Client.CoachesApi.prototype.v2CoachesPost = function(opt_coach, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/coaches';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_coach,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}
