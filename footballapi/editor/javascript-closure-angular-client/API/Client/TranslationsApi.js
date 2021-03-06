/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.TranslationsApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * API for accessing various kinds of football data, updated in real time.
 * Version: 0.0.1
 * Generated by: io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.TranslationsApi');

goog.require('API.Client.TranslationDto');
goog.require('API.Client.TranslationEntityDto');
goog.require('API.Client.TranslationKeyDto');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.TranslationsApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('TranslationsApiBasePath') ?
                   /** @type {!string} */ ($injector.get('TranslationsApiBasePath')) :
                   'https://false';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('TranslationsApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('TranslationsApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.TranslationsApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * 
 * Get all possible translation entities.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.TranslationEntityDto>>}
 */
API.Client.TranslationsApi.prototype.v2TranslationsEntitiesGet = function(opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/translations/entities';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
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
 * Bulk Upsert translations by primary key
 * @param {!Array<!API.Client.TranslationDto>=} opt_translations Array of translations
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.TranslationDto>}
 */
API.Client.TranslationsApi.prototype.v2TranslationsPost = function(opt_translations, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/translations';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_translations,
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
 * Bulk find in translations table and return matching entries by the unique translation key.
 * @param {!Array<!API.Client.TranslationKeyDto>=} opt_translationKeys Array of translationKeys
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.TranslationDto>>}
 */
API.Client.TranslationsApi.prototype.v2TranslationsSearchPost = function(opt_translationKeys, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/translations/search';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_translationKeys,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}
