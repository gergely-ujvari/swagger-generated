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
import {EventTeamStats} from '../model/EventTeamStats';

/**
* TeamStats service.
* @module api/TeamStatsApi
* @version 0.0.1
*/
export class TeamStatsApi {

    /**
    * Constructs a new TeamStatsApi. 
    * @alias module:api/TeamStatsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the eventTeamstatsGet operation.
     * @callback moduleapi/TeamStatsApi~eventTeamstatsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EventTeamStats>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statistics for the performance of each team involved in the event
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {Date} opts.lastUpdate Filter events, have been updated after the specified date-time. By default will return updates modified in the last 24 hours
     * @param {module:api/TeamStatsApi~eventTeamstatsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    eventTeamstatsGet(opts, callback) {
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
      let returnType = [EventTeamStats];

      return this.apiClient.callApi(
        '/event_teamstats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the eventsIdTeamstatsGet operation.
     * @callback moduleapi/TeamStatsApi~eventsIdTeamstatsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EventTeamStats>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get statistics for the performance of each team involved in the event
     * @param {Number} id Event.id for which team stats are requested
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {module:api/TeamStatsApi~eventsIdTeamstatsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    eventsIdTeamstatsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsIdTeamstatsGet");
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
      let returnType = [EventTeamStats];

      return this.apiClient.callApi(
        '/events/{id}/teamstats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}