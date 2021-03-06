/*
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {Event} from '../model/Event';
import {EventIncident} from '../model/EventIncident';
import {EventPlayer} from '../model/EventPlayer';
import {EventsByDate} from '../model/EventsByDate';
import {Lineup} from '../model/Lineup';
import {NotFoundError} from '../model/NotFoundError';
import {Odd} from '../model/Odd';

/**
* Events service.
* @module api/EventsApi
* @version 0.0.1
*/
export class EventsApi {

    /**
    * Constructs a new EventsApi. 
    * @alias module:api/EventsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the eventsByTeamsGet operation.
     * @callback moduleapi/EventsApi~eventsByTeamsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Event{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of events by home and away team id
     * @param {Number} homeId Filter events with home team id
     * @param {Number} awayId Filter events with away team id
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/EventsApi~eventsByTeamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    eventsByTeamsGet(homeId, awayId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'homeId' is set
      if (homeId === undefined || homeId === null) {
        throw new Error("Missing the required parameter 'homeId' when calling eventsByTeamsGet");
      }
      // verify the required parameter 'awayId' is set
      if (awayId === undefined || awayId === null) {
        throw new Error("Missing the required parameter 'awayId' when calling eventsByTeamsGet");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'home_id': homeId,'away_id': awayId
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = Event;

      return this.apiClient.callApi(
        '/events/by_teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the eventsGet operation.
     * @callback moduleapi/EventsApi~eventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of Events
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {Date} opts.fromTime Filter events, which have a start_time after the specified date, format is RFC 3339
     * @param {Date} opts.toTime Filter events, which have a start_time before the specified date, format is RFC 3339
     * @param {module:model/String} opts.groupBy Group events by a specified property. Event models are returned as an &#x27;items&#x27; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     * @param {module:model/String} opts.clientOrder Order matching events for a specific client
     * @param {module:api/EventsApi~eventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    eventsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'from_time': opts['fromTime'],'to_time': opts['toTime'],'group_by': opts['groupBy'],'client_order': opts['clientOrder']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [Event];

      return this.apiClient.callApi(
        '/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the eventsIdGet operation.
     * @callback moduleapi/EventsApi~eventsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Event{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:model/String} opts.expand Specifies additional information to include with the standing response
     * @param {module:api/EventsApi~eventsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    eventsIdGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = Event;

      return this.apiClient.callApi(
        '/events/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the eventsIdIncidentsGet operation.
     * @callback moduleapi/EventsApi~eventsIdIncidentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EventIncident>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of EventIncident for a specified Event (goal, subs, red cards, penalties, etc).
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:model/String} opts.groupBy Group results by a property. If &#x27;team&#x27; is used the json object has &#x27;home_team&#x27; and &#x27;away_team&#x27;, each containing an array of EventIncident objects
     * @param {module:model/String} opts.direction Whether to sort the results by ascending or descending order
     * @param {module:api/EventsApi~eventsIdIncidentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    eventsIdIncidentsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsIdIncidentsGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'group_by': opts['groupBy'],'direction': opts['direction']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [EventIncident];

      return this.apiClient.callApi(
        '/events/{id}/incidents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the eventsIdLineupsGet operation.
     * @callback moduleapi/EventsApi~eventsIdLineupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Lineup{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get lineup information for an event. Includes players, formation and coach
     * @param {Number} id Event.id for which lineups are requested
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/EventsApi~eventsIdLineupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    eventsIdLineupsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsIdLineupsGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = Lineup;

      return this.apiClient.callApi(
        '/events/{id}/lineups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the eventsIdPlayersGet operation.
     * @callback moduleapi/EventsApi~eventsIdPlayersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EventPlayer>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of players which are involved in an Event. The list can be used to build lineups for the teams
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:model/String} opts.groupBy Group results by a property. If &#x27;team&#x27; is used the json object has &#x27;home_team&#x27; and &#x27;away_team&#x27;, each containing an array of EventPlayer objects
     * @param {module:api/EventsApi~eventsIdPlayersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    eventsIdPlayersGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsIdPlayersGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'group_by': opts['groupBy']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [EventPlayer];

      return this.apiClient.callApi(
        '/events/{id}/players', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the eventsIdPregameoddsGet operation.
     * @callback moduleapi/EventsApi~eventsIdPregameoddsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Odd>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get available pre-game odds for an Event
     * @param {String} id Unique identifier of the resource.
     * @param {String} xOddClient Identifies the client for which to return filtered bookmakers with affiliate URLs. Without the parameter can not sort odd_providers or provide affiliate links. Instead it will sometimes give a &#x27;coupon&#x27; key with the odds fo building URLs.
     * @param {module:api/EventsApi~eventsIdPregameoddsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    eventsIdPregameoddsGet(id, xOddClient, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsIdPregameoddsGet");
      }
      // verify the required parameter 'xOddClient' is set
      if (xOddClient === undefined || xOddClient === null) {
        throw new Error("Missing the required parameter 'xOddClient' when calling eventsIdPregameoddsGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        'X-Odd-Client': xOddClient
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [Odd];

      return this.apiClient.callApi(
        '/events/{id}/pregameodds', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the eventsLiveGet operation.
     * @callback moduleapi/EventsApi~eventsLiveGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of events which are currently live
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:model/String} opts.groupBy Group events by a specified property. Event models are returned as an &#x27;items&#x27; array inside the property object. Can be used to return events in a more convenient format for displaying. NOTE: when using this parameter the response schema changes.
     * @param {module:api/EventsApi~eventsLiveGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    eventsLiveGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'group_by': opts['groupBy']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [Event];

      return this.apiClient.callApi(
        '/events/live', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the eventsSinceGet operation.
     * @callback moduleapi/EventsApi~eventsSinceGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of events which have been updated since the specified timestamp
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {Date} opts.lastUpdate Filter events, have been updated after the specified date-time. By default will return updated Events during the last hour
     * @param {module:api/EventsApi~eventsSinceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    eventsSinceGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'last_update': opts['lastUpdate']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [Event];

      return this.apiClient.callApi(
        '/events/since', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the matchesGet operation.
     * @callback moduleapi/EventsApi~matchesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Event>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of matches for team/between teams
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {Date} opts.fromStartTime Return matches with start_time &gt;&#x3D; from_start_time. RFC 3339 format
     * @param {Date} opts.toStartTime Return matches with start_time &lt;&#x3D; from_start_time. RFC 3339 format
     * @param {String} opts.teamIds List for team IDs separated by commas. In case of one ID, it will return all matches for a selected team, in case of multiple - it will return matches between selected teams.
     * @param {String} opts.matchIds List for match IDs separated by commas.
     * @param {String} opts.tournamentIds List for tournament IDs separated by commas.
     * @param {String} opts.stageIds List for stage IDs separated by commas.
     * @param {String} opts.rounds List for rounds separated by commas.
     * @param {String} opts.seasonIds List for season IDs separated by commas.
     * @param {module:model/String} opts.statusTypes List of status types.
     * @param {Number} opts.offset Results offset
     * @param {Number} opts.limit Results limit
     * @param {String} opts.tournamentOrder Tournament filtering and ordering.
     * @param {String} opts.refereeId Filter matches by referee
     * @param {String} opts.venueId Filter matches by venue
     * @param {String} opts.statusCode Filter matches by event_status.code
     * @param {module:model/String} opts.sortDirection Result ordering - asc/desc
     * @param {module:api/EventsApi~matchesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    matchesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'from_start_time': opts['fromStartTime'],'to_start_time': opts['toStartTime'],'team_ids': opts['teamIds'],'match_ids': opts['matchIds'],'tournament_ids': opts['tournamentIds'],'stage_ids': opts['stageIds'],'rounds': opts['rounds'],'season_ids': opts['seasonIds'],'status_types': opts['statusTypes'],'offset': opts['offset'],'limit': opts['limit'],'tournament_order': opts['tournamentOrder'],'referee_id': opts['refereeId'],'venue_id': opts['venueId'],'status_code': opts['statusCode'],'sort_direction': opts['sortDirection']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [Event];

      return this.apiClient.callApi(
        '/matches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the tournamentsSeasonsStagesIdEventsGet operation.
     * @callback moduleapi/EventsApi~tournamentsSeasonsStagesIdEventsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EventsByDate>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of events which are fixtures in a given TournamentSeasonStage resource
     * @param {Number} id Unique identifier of the TournamentSeasonStage resource
     * @param {Object} opts Optional parameters
     * @param {String} opts.round Filter the event list by a specific round
     * @param {module:model/String} opts.sortDirection Sort results by date in ascending or descending order (default to <.>)
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/EventsApi~tournamentsSeasonsStagesIdEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    tournamentsSeasonsStagesIdEventsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tournamentsSeasonsStagesIdEventsGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'round': opts['round'],'sort_direction': opts['sortDirection']
      };
      let headerParams = {
        'Accept-Language': opts['acceptLanguage']
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = [EventsByDate];

      return this.apiClient.callApi(
        '/tournaments/seasons/stages/{id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}