/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.RoundsApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * API for accessing various kinds of football data, updated in real time.
 * Version: 0.0.1
 * Generated by: io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.RoundsApi');

goog.require('API.Client.v2_RoundTypes');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.RoundsApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('RoundsApiBasePath') ?
                   /** @type {!string} */ ($injector.get('RoundsApiBasePath')) :
                   'https://false';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('RoundsApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('RoundsApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.RoundsApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * 
 * Get a list of rounds per season
 * @param {!number} seasonId Filter round types per a season ID
 * @param {!string=} opt_languageCode Returns translated response based on the language code
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.v2_RoundTypes>}
 */
API.Client.RoundsApi.prototype.v2RoundsGet = function(seasonId, opt_languageCode, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/rounds';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'seasonId' is set
  if (!seasonId) {
    throw new Error('Missing required parameter seasonId when calling v2RoundsGet');
  }
  if (seasonId !== undefined) {
    queryParameters['season_id'] = seasonId;
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
 * Get a list of rounds per stage
 * @param {!string} id Unique identifier of the resource.
 * @param {!string=} opt_languageCode Returns translated response based on the language code
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.v2_RoundTypes>}
 */
API.Client.RoundsApi.prototype.v2StagesIdRoundsGet = function(id, opt_languageCode, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/stages/{id}/rounds'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling v2StagesIdRoundsGet');
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