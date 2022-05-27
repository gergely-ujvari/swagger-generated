/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.MatchesApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * API for accessing various kinds of football data, updated in real time.
 * Version: 0.0.1
 * Generated by: io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.MatchesApi');

goog.require('API.Client.LiveCommentaryOutputDto');
goog.require('API.Client.NotFoundError');
goog.require('API.Client.V2MatchInput');
goog.require('API.Client.date');
goog.require('API.Client.v2_Match');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.MatchesApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('MatchesApiBasePath') ?
                   /** @type {!string} */ ($injector.get('MatchesApiBasePath')) :
                   'https://false';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('MatchesApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('MatchesApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.MatchesApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * 
 * Get a list of live commentaries with specified match id and language
 * @param {!string} id Unique identifier of the resource.
 * @param {!string} languageCode Return translations depending on language code
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.LiveCommentaryOutputDto>>}
 */
API.Client.MatchesApi.prototype.matchesIdCommentaryGet = function(id, languageCode, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/matches/{id}/commentary'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling matchesIdCommentaryGet');
  }
  // verify required parameter 'languageCode' is set
  if (!languageCode) {
    throw new Error('Missing required parameter languageCode when calling matchesIdCommentaryGet');
  }
  if (languageCode !== undefined) {
    queryParameters['language_code'] = languageCode;
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
 * Get a list of matches
 * @param {!number} limit Select an upper limit for the matches that would be returned
 * @param {!number} offset Select an offset for the matches that would be returned
 * @param {!Array<!number>=} opt_tournamentIds Filter matches, which have been played as part of the listed tournaments
 * @param {!Array<!number>=} opt_seasonIds Filter matches, which have been played as part of the listed tournament seasons
 * @param {!Array<!number>=} opt_stageIds Filter matches, which have been played as part of the listed tournament stages
 * @param {!Array<!number>=} opt_groupIds Filter matches, which have been played as part of the listed tournament groups
 * @param {!Array<!string>=} opt_roundIds Filter matches, which have been played as part of the listed tournament rounds
 * @param {!Array<!string>=} opt_roundFilter Filter matches by combinations of stage_id and round_id. Format: {stage_id}:{round_id}
 * @param {!Date=} opt_fromKickoffTime Filter matches, which have a start_time after the specified date, format is ISO 8601
 * @param {!Date=} opt_toKickoffTime Filter matches, which have a start_time before the specified date, format is ISO 8601
 * @param {!Array<!number>=} opt_teamIds Filter matches by teams which have taken part in them
 * @param {!Array<!string>=} opt_statusTypes Filter matches by their status types
 * @param {!Array<!string>=} opt_statusCodes Filter matches by their status codes
 * @param {!number=} opt_refereeId Filter matches by the referee who has taken part in them
 * @param {!string=} opt_venueId Filter matches by the venue that has hosted them
 * @param {!string=} opt_sortDirection Sort matches in asc|desc order by start_time
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.v2_Match>>}
 */
API.Client.MatchesApi.prototype.v2MatchesGet = function(limit, offset, opt_tournamentIds, opt_seasonIds, opt_stageIds, opt_groupIds, opt_roundIds, opt_roundFilter, opt_fromKickoffTime, opt_toKickoffTime, opt_teamIds, opt_statusTypes, opt_statusCodes, opt_refereeId, opt_venueId, opt_sortDirection, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/matches';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'limit' is set
  if (!limit) {
    throw new Error('Missing required parameter limit when calling v2MatchesGet');
  }
  // verify required parameter 'offset' is set
  if (!offset) {
    throw new Error('Missing required parameter offset when calling v2MatchesGet');
  }
  if (opt_tournamentIds !== undefined) {
    queryParameters['tournament_ids'] = opt_tournamentIds;
  }

  if (opt_seasonIds !== undefined) {
    queryParameters['season_ids'] = opt_seasonIds;
  }

  if (opt_stageIds !== undefined) {
    queryParameters['stage_ids'] = opt_stageIds;
  }

  if (opt_groupIds !== undefined) {
    queryParameters['group_ids'] = opt_groupIds;
  }

  if (opt_roundIds !== undefined) {
    queryParameters['round_ids'] = opt_roundIds;
  }

  if (opt_roundFilter !== undefined) {
    queryParameters['round_filter'] = opt_roundFilter;
  }

  if (opt_fromKickoffTime !== undefined) {
    queryParameters['from_kickoff_time'] = opt_fromKickoffTime;
  }

  if (opt_toKickoffTime !== undefined) {
    queryParameters['to_kickoff_time'] = opt_toKickoffTime;
  }

  if (opt_teamIds !== undefined) {
    queryParameters['team_ids'] = opt_teamIds;
  }

  if (opt_statusTypes !== undefined) {
    queryParameters['status_types'] = opt_statusTypes;
  }

  if (opt_statusCodes !== undefined) {
    queryParameters['status_codes'] = opt_statusCodes;
  }

  if (opt_refereeId !== undefined) {
    queryParameters['referee_id'] = opt_refereeId;
  }

  if (opt_venueId !== undefined) {
    queryParameters['venue_id'] = opt_venueId;
  }

  if (opt_sortDirection !== undefined) {
    queryParameters['sort_direction'] = opt_sortDirection;
  }

  if (limit !== undefined) {
    queryParameters['limit'] = limit;
  }

  if (offset !== undefined) {
    queryParameters['offset'] = offset;
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
 * 
 * @param {!string} id Unique identifier of the resource.
 * @param {!string=} opt_languageCode Returns translated response based on the language code
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.v2_Match>}
 */
API.Client.MatchesApi.prototype.v2MatchesIdGet = function(id, opt_languageCode, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/matches/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling v2MatchesIdGet');
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
 * 
 * @param {!string} id Unique identifier of the resource.
 * @param {!V2MatchInput} match Match information to save
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.v2_Match>}
 */
API.Client.MatchesApi.prototype.v2MatchesIdPut = function(id, match, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/matches/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling v2MatchesIdPut');
  }
  // verify required parameter 'match' is set
  if (!match) {
    throw new Error('Missing required parameter match when calling v2MatchesIdPut');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: match,
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
 * Get a list of matches
 * @param {!Array<!number>=} opt_matchIds Filter matches by their IDs
 * @param {!API.Client.date=} opt_date Filter matches by the date when they were played, format is ISO 8601
 * @param {!number=} opt_utcOffset Filter matches by date and UTC offset, allowed value range: [-12,14]
 * @param {!string=} opt_tournamentGroup Filter matches by a tournament group code
 * @param {!Array<!string>=} opt_statusTypes Filter matches by status types
 * @param {!string=} opt_selectionFilter Fetch selected matches for specific date and tournament_group
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.v2_Match>>}
 */
API.Client.MatchesApi.prototype.v2MatchesLivescoreGet = function(opt_matchIds, opt_date, opt_utcOffset, opt_tournamentGroup, opt_statusTypes, opt_selectionFilter, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/matches/livescore';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_matchIds !== undefined) {
    queryParameters['match_ids'] = opt_matchIds;
  }

  if (opt_date !== undefined) {
    queryParameters['date'] = opt_date;
  }

  if (opt_utcOffset !== undefined) {
    queryParameters['utc_offset'] = opt_utcOffset;
  }

  if (opt_tournamentGroup !== undefined) {
    queryParameters['tournament_group'] = opt_tournamentGroup;
  }

  if (opt_statusTypes !== undefined) {
    queryParameters['status_types'] = opt_statusTypes;
  }

  if (opt_selectionFilter !== undefined) {
    queryParameters['selection_filter'] = opt_selectionFilter;
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
 * 
 * @param {!V2MatchInput} match Match information to save
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.v2_Match>}
 */
API.Client.MatchesApi.prototype.v2MatchesPost = function(match, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/v2/matches';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'match' is set
  if (!match) {
    throw new Error('Missing required parameter match when calling v2MatchesPost');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: match,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}