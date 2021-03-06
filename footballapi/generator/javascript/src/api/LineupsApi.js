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
import {Lineup} from '../model/Lineup';
import {NotFoundError} from '../model/NotFoundError';
import {V2Lineup} from '../model/V2Lineup';
import {V2LineupInput} from '../model/V2LineupInput';

/**
* Lineups service.
* @module api/LineupsApi
* @version 0.0.1
*/
export class LineupsApi {

    /**
    * Constructs a new LineupsApi. 
    * @alias module:api/LineupsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the lineupsGet operation.
     * @callback moduleapi/LineupsApi~lineupsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Lineup>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get lineup information. Includes players, formation and coach
     * @param {Object} opts Optional parameters
     * @param {String} opts.acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation (default to <.>)
     * @param {Date} opts.lastUpdate Filter lineups which have updates only after the specified time
     * @param {module:api/LineupsApi~lineupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    lineupsGet(opts, callback) {
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
      let returnType = [Lineup];

      return this.apiClient.callApi(
        '/lineups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2MatchesIdLineupsGet operation.
     * @callback moduleapi/LineupsApi~v2MatchesIdLineupsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2Lineup{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get lineups by match id
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.languageCode Returns translated response based on the language code (default to <.>)
     * @param {module:api/LineupsApi~v2MatchesIdLineupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2MatchesIdLineupsGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2MatchesIdLineupsGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'language_code': opts['languageCode']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = V2Lineup;

      return this.apiClient.callApi(
        '/v2/matches/{id}/lineups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2MatchesIdLineupsPut operation.
     * @callback moduleapi/LineupsApi~v2MatchesIdLineupsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2Lineup{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Lineup information
     * @param {module:model/V2LineupInput} body Lineup information to save in persistance
     * @param {String} id Unique identifier of the resource.
     * @param {module:api/LineupsApi~v2MatchesIdLineupsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2MatchesIdLineupsPut(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling v2MatchesIdLineupsPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2MatchesIdLineupsPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V2Lineup;

      return this.apiClient.callApi(
        '/v2/matches/{id}/lineups', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}