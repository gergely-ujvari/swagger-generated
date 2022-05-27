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
import {NotFoundError} from '../model/NotFoundError';
import {V2Season} from '../model/V2Season';
import {V2SeasonDetails} from '../model/V2SeasonDetails';
import {V2SeasonList} from '../model/V2SeasonList';
import {V2SeasonStage} from '../model/V2SeasonStage';
import {V2SeasonStageCollection} from '../model/V2SeasonStageCollection';
import {V2TournamentSeasonInsertInput} from '../model/V2TournamentSeasonInsertInput';
import {V2TournamentSeasonStatusInput} from '../model/V2TournamentSeasonStatusInput';
import {V2TournamentSeasonUpdateInput} from '../model/V2TournamentSeasonUpdateInput';

/**
* Season service.
* @module api/SeasonApi
* @version 0.0.1
*/
export class SeasonApi {

    /**
    * Constructs a new SeasonApi. 
    * @alias module:api/SeasonApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the v2SeasonsDetailsGet operation.
     * @callback moduleapi/SeasonApi~v2SeasonsDetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2SeasonDetails{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the details of a season by season_id, or by tournament_id and active status
     * @param {Object} opts Optional parameters
     * @param {String} opts.seasonId The ID of the season of interest
     * @param {String} opts.tournamentId The ID of the tournament whose active season is of interest
     * @param {module:model/String} opts.status Required only when the tournament_id parameter is provided
     * @param {String} opts.languageCode Returns translated response based on the language code (default to <.>)
     * @param {module:api/SeasonApi~v2SeasonsDetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2SeasonsDetailsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'season_id': opts['seasonId'],'tournament_id': opts['tournamentId'],'status': opts['status'],'language_code': opts['languageCode']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = V2SeasonDetails;

      return this.apiClient.callApi(
        '/v2/seasons/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2SeasonsGet operation.
     * @callback moduleapi/SeasonApi~v2SeasonsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2SeasonList{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get seasons by tournament_id, team_id and status
     * @param {Object} opts Optional parameters
     * @param {String} opts.tournamentId Required only if no other parameters are provided
     * @param {String} opts.teamId Required only if no other paramenters are provided
     * @param {module:model/String} opts.status Required only if no other parameters are provided
     * @param {String} opts.languageCode Returns translated response based on the language code (default to <.>)
     * @param {module:api/SeasonApi~v2SeasonsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2SeasonsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'tournament_id': opts['tournamentId'],'team_id': opts['teamId'],'status': opts['status'],'language_code': opts['languageCode']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = V2SeasonList;

      return this.apiClient.callApi(
        '/v2/seasons', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2SeasonsIdPut operation.
     * @callback moduleapi/SeasonApi~v2SeasonsIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2Season{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing season
     * @param {module:model/V2TournamentSeasonUpdateInput} body Season name
     * @param {String} id Unique identifier of the resource.
     * @param {module:api/SeasonApi~v2SeasonsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2SeasonsIdPut(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling v2SeasonsIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2SeasonsIdPut");
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
      let accepts = ['application/json; charset=utf-8'];
      let returnType = V2Season;

      return this.apiClient.callApi(
        '/v2/seasons/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2SeasonsIdStagesGet operation.
     * @callback moduleapi/SeasonApi~v2SeasonsIdStagesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2SeasonStageCollection{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all stages for specific season
     * @param {String} id Unique identifier of the resource.
     * @param {Object} opts Optional parameters
     * @param {String} opts.languageCode Returns translated response based on the language code (default to <.>)
     * @param {module:api/SeasonApi~v2SeasonsIdStagesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2SeasonsIdStagesGet(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2SeasonsIdStagesGet");
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
      let accepts = ['application/json'];
      let returnType = V2SeasonStageCollection;

      return this.apiClient.callApi(
        '/v2/seasons/{id}/stages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2SeasonsIdStagesPost operation.
     * @callback moduleapi/SeasonApi~v2SeasonsIdStagesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2SeasonStageCollection{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update multiple stages
     * @param {Array.<module:model/V2SeasonStage>} body List of stages to be updated or created
     * @param {String} id Unique identifier of the resource.
     * @param {module:api/SeasonApi~v2SeasonsIdStagesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2SeasonsIdStagesPost(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling v2SeasonsIdStagesPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2SeasonsIdStagesPost");
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
      let returnType = V2SeasonStageCollection;

      return this.apiClient.callApi(
        '/v2/seasons/{id}/stages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2SeasonsPost operation.
     * @callback moduleapi/SeasonApi~v2SeasonsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2Season{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new season
     * @param {module:model/V2TournamentSeasonInsertInput} body Season information
     * @param {module:api/SeasonApi~v2SeasonsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2SeasonsPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling v2SeasonsPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['basicAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = V2Season;

      return this.apiClient.callApi(
        '/v2/seasons', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2StagesIdDelete operation.
     * @callback moduleapi/SeasonApi~v2StagesIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permanently delete stage
     * @param {String} id Unique identifier of the resource.
     * @param {module:api/SeasonApi~v2StagesIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    v2StagesIdDelete(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2StagesIdDelete");
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
      let contentTypes = [];
      let accepts = ['application/json; charset=utf-8'];
      let returnType = null;

      return this.apiClient.callApi(
        '/v2/stages/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the v2TournamentsIdSeasonsCurrentPatch operation.
     * @callback moduleapi/SeasonApi~v2TournamentsIdSeasonsCurrentPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V2Season{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set the current season as active and change all other seasons in the tournament to inactive
     * @param {module:model/V2TournamentSeasonStatusInput} body Season unique identifier
     * @param {String} id Unique identifier of the resource.
     * @param {module:api/SeasonApi~v2TournamentsIdSeasonsCurrentPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    v2TournamentsIdSeasonsCurrentPatch(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling v2TournamentsIdSeasonsCurrentPatch");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling v2TournamentsIdSeasonsCurrentPatch");
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
      let accepts = ['application/json; charset=utf-8'];
      let returnType = V2Season;

      return this.apiClient.callApi(
        '/v2/tournaments/{id}/seasons/current', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}